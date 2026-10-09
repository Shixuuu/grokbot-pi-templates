---
name: plaquemax-engine
description: "Use this when Plaquemax needs to turn a route into historical markers, read a marker's full inscription, or check a plaque photo against hmdb. Installs and runs the bundled plaquemax.py script (Python 3 stdlib, no keys)."
---

# Plaquemax engine

## Install (once per computer)
If `~/plaquemax/plaquemax.py` is missing, write the script below to that path exactly as shown, then run `python3 ~/plaquemax/plaquemax.py --help` to confirm. No pip installs, no API keys.

## Sources
Nominatim geocodes, the public OSRM demo server routes, Overpass labels exits, and hmdb.org (`nearbylist.asp`, plus `m.asp?m=ID` marker pages) supplies markers. Responses cache for 30 days in `~/.cache/plaquemax`. The script waits 1 s between hmdb requests and backs off on 429. Never lower that. hmdb's map pages are off limits by robots.txt.

## Commands
- Default list: `python3 ~/plaquemax/plaquemax.py "<A> to <B> [via road, road]" --detour 5min --max 8 --json`
- Stops still ahead: add `--from "<town>" | "exit N" | "lat,lon"`. Output then reads "N miles ahead (about M min)".
- Detour bands: `roadside` 0.25 mi, `5min` 1.5 mi (default), `15min` 5 mi.
- Stop types: `--topics "civil war,railroads"`.
- Theme scan: `--themes` returns the top 2 or 3 clusters, ranked by spread along the drive, then count. The first run on a new route can take several minutes because it fetches topic pages. Reruns are fast.
- Themed story list: `--theme "civil war"`.
- Full inscription: `--id <hmdb id>`.
- Photo check: `--find "<plaque title or first line>" --near "lat,lon"` returns matching ids or "No matching hmdb marker found."
- `--all` lists every candidate. `--json` gives fields: id, url, title, context, road, exit, town, miles_along, miles_ahead, minutes_ahead, off_route_mi, topics.

## Known limits (say them plainly when they matter)
- The exit label is the nearest numbered exit within 3 mi, which isn't always the one you'd take.
- Mile 0 and final-mile stops are often downtown at the start or end.
- If the OSRM demo is down, there is no route. Say so and offer to retry.
- If Overpass fails, stops say "near <town>".
- A "Heads up" line marks thin coverage or a 40+ mile gap. Pass it on and never fill the gap.

## Script
```python
#!/usr/bin/env python3
"""Plaquemax: driving route text -> short, voice-friendly list of historical markers near the route.
Free/keyless: Nominatim (geocode), OSRM demo (route), Overpass (exit numbers), hmdb.org (markers). Python 3 stdlib only.
  plaquemax.py "Charlotte, NC to Asheville, NC [via I-85, US-74]" [--max 8] [--detour roadside|5min|15min] [--radius MI]
               [--from "Shelby, NC" | "exit 17" | "35.29,-81.54"] [--topics "civil war,railroads"] [--themes] [--theme "civil war"] [--json] [--all]
  plaquemax.py --id 97553      (full inscription, topics, series for one hmdb marker)"""
import argparse, hashlib, html, json, math, os, re, sys, time, urllib.parse, urllib.request
UA = "Plaquemax/1.0 (Grok Bot template; historical-marker road trip helper)"
CACHE = os.path.expanduser("~/.cache/plaquemax"); os.makedirs(CACHE, exist_ok=True)
DELAY = {"nominatim.openstreetmap.org": 1.1, "www.hmdb.org": 1.0}  # hmdb robots.txt: Crawl-delay 0.1, but it 429s bursts; we back off
DETOUR = {"roadside": 0.25, "5min": 1.5, "15min": 5.0}  # miles off the path
_last = {}
def log(*a): print(*a, file=sys.stderr)

def fetch(url, data=None, ttl=30 * 86400, enc="utf-8", tries=4):
    key = os.path.join(CACHE, hashlib.sha1((url + (data or "")).encode()).hexdigest())
    if os.path.exists(key) and time.time() - os.path.getmtime(key) < ttl: return open(key, encoding="utf-8").read()
    host = urllib.parse.urlparse(url).netloc
    for attempt in range(tries):
        time.sleep(max(0, DELAY.get(host, 1.0) - (time.time() - _last.get(host, 0))))
        try:
            req = urllib.request.Request(url, data=data.encode() if data else None, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=90) as r: txt = r.read().decode(enc, "replace"); break
        except Exception as e:
            _last[host] = time.time(); log(f"  {host} attempt {attempt+1}: {e}")
            if getattr(e, "code", 0) == 429:  # rate limited: honor Retry-After and slow down for the rest of the run
                DELAY[host] = min(DELAY.get(host, 1.0) * 1.5, 6.0); time.sleep(float(e.headers.get("Retry-After") or 0) or 15 * (attempt + 1))
            elif attempt + 1 < tries: time.sleep(3 * (attempt + 1))
    else: raise RuntimeError(f"failed to fetch {url[:100]}")
    _last[host] = time.time(); open(key, "w", encoding="utf-8").write(txt); return txt

def geocode(q, near=None):
    p = {"q": q, "format": "jsonv2", "limit": 1}
    if near: p.update(viewbox=near, bounded=0)
    r = json.loads(fetch("https://nominatim.openstreetmap.org/search?" + urllib.parse.urlencode(p)))
    if not r: raise SystemExit(f"Could not geocode '{q}'")
    return float(r[0]["lat"]), float(r[0]["lon"])

def town(lat, lon):
    a = json.loads(fetch(f"https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=12&lat={lat:.4f}&lon={lon:.4f}")).get("address", {})
    return next((a[k] for k in ("city", "town", "village", "hamlet", "municipality", "county") if a.get(k)), None)

# ---- geometry (local equirectangular miles; fine for corridor work) ----
def xy(lat, lon): return lon * 69.17 * math.cos(math.radians(lat)), lat * 69.05
def hav(a, b):
    p1, p2 = math.radians(a[0]), math.radians(b[0]); dl = math.radians(b[1] - a[1])
    return 2 * 3958.8 * math.asin(math.sqrt(math.sin((p2 - p1) / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2))

class Line:
    def __init__(self, pts):  # pts: [(lat, lon)]
        self.pts, self.cum, self.grid = pts, [0.0], {}
        for a, b in zip(pts, pts[1:]): self.cum.append(self.cum[-1] + hav(a, b))
        for i, (a, b) in enumerate(zip(pts, pts[1:])):
            for gx in range(int(min(a[1], b[1]) // .1), int(max(a[1], b[1]) // .1) + 1):
                for gy in range(int(min(a[0], b[0]) // .1), int(max(a[0], b[0]) // .1) + 1): self.grid.setdefault((gx, gy), []).append(i)
    def project(self, lat, lon):  # -> (perpendicular distance mi, miles along)
        gx, gy, best, px, py = int(lon // .1), int(lat // .1), (1e9, 0), *xy(lat, lon)
        segs = {i for dx in (-1, 0, 1) for dy in (-1, 0, 1) for i in self.grid.get((gx + dx, gy + dy), [])} or range(len(self.pts) - 1)
        for i in segs:
            (ax, ay), (bx, by) = xy(*self.pts[i]), xy(*self.pts[i + 1]); dx, dy = bx - ax, by - ay; L = dx * dx + dy * dy
            t = 0 if L == 0 else max(0, min(1, ((px - ax) * dx + (py - ay) * dy) / L)); d = math.hypot(px - ax - t * dx, py - ay - t * dy)
            if d < best[0]: best = (d, self.cum[i] + t * (self.cum[i + 1] - self.cum[i]))
        return best
    def at(self, mile):
        i = max(0, min(len(self.cum) - 2, next((k for k, c in enumerate(self.cum) if c >= mile), len(self.cum) - 1) - 1))
        f = 0 if self.cum[i + 1] == self.cum[i] else (mile - self.cum[i]) / (self.cum[i + 1] - self.cum[i]); a, b = self.pts[i], self.pts[i + 1]
        return a[0] + f * (b[0] - a[0]), a[1] + f * (b[1] - a[1])

def frange(a, b, step):
    while a < b: yield a; a += step
    yield b

# ---- routing / OSM ----
def norm_ref(s): return re.sub(r"^(I|US|SR|[A-Z]{2})[\s-]*(\d+\w*)$", r"\1 \2", s.strip().upper())
def pretty(ref): return re.sub(r"^(I|US|SR|[A-Z]{2}) (\d)", r"\1-\2", ref)
def osrm(coords):
    c = ";".join(f"{lon:.5f},{lat:.5f}" for lat, lon in coords)
    d = json.loads(fetch(f"https://router.project-osrm.org/route/v1/driving/{c}?overview=full&geometries=geojson&steps=true", ttl=7 * 86400))
    if d.get("code") != "Ok": raise SystemExit(f"OSRM error: {d.get('code')} {d.get('message')}")
    r, steps, m, t = d["routes"][0], [], 0.0, 0.0
    for s in (s for leg in r["legs"] for s in leg["steps"]):
        steps.append({"start": m, "end": m + s["distance"] / 1609.34, "t0": t, "t1": t + s["duration"] / 60, "refs": [norm_ref(x) for x in (s.get("ref") or "").split(";") if x.strip()], "name": s.get("name") or ""})
        m, t = steps[-1]["end"], steps[-1]["t1"]
    return [(lat, lon) for lon, lat in r["geometry"]["coordinates"]], steps, r["distance"] / 1609.34, r["duration"] / 60

def minute_at(steps, mile):  # OSRM-estimated driving minutes from the start to `mile`
    s = next((s for s in steps if s["start"] <= mile <= s["end"]), steps[-1]); f = (mile - s["start"]) / max(s["end"] - s["start"], 1e-6)
    return s["t0"] + min(1, max(0, f)) * (s["t1"] - s["t0"])

def roads_used(steps):
    tot = {}
    for s in steps:
        for r in s["refs"]: tot[r] = tot.get(r, 0) + s["end"] - s["start"]
    return [r for r in tot if tot[r] >= 3]

def overpass(q):  # some boxes fail the TLS handshake with overpass-api.de; plain http is an OK fallback for public read-only data
    for ep, n in (("https://overpass-api.de", 1), ("http://overpass-api.de", 3), ("https://overpass.private.coffee", 1)):
        try: return json.loads(fetch(ep + "/api/interpreter", data="data=" + urllib.parse.quote(q), tries=n))["elements"]
        except Exception as e: log(f"  overpass {ep} failed: {e}")
    raise RuntimeError("all Overpass endpoints failed")

def via_point(ref, o, d):  # point on the named road most "on the way" between o and d
    s, w, n, e = min(o[0], d[0]) - 1, min(o[1], d[1]) - 1, max(o[0], d[0]) + 1, max(o[1], d[1]) + 1
    q = f'[out:json][timeout:60];way["highway"]["ref"~"(^|;) *{ref.replace(" ", "[ -]?")}( *;|$)"]({s},{w},{n},{e});out center;'
    pts = [(x["center"]["lat"], x["center"]["lon"]) for x in overpass(q) if "center" in x]
    return min(pts, key=lambda p: hav(o, p) + hav(p, d)) if pts else None

def exits_along(line):
    poly = ",".join(f"{a:.5f},{b:.5f}" for a, b in (line.at(m) for m in frange(0, line.cum[-1], 0.7)))
    try: els = overpass(f'[out:json][timeout:90];node(around:100,{poly})["highway"="motorway_junction"]["ref"];out;')
    except Exception as e: log("  exit numbers unavailable:", e); return []
    return sorted((round(line.project(x["lat"], x["lon"])[1], 2), x["tags"]["ref"]) for x in els)

# ---- hmdb ----
def clean(t):
    t = re.sub(r"<small>.*?</small>|<script.*?</script>|<style.*?</style>|Paid Advertisement.*?see this page online", " ", t, flags=re.S); t = re.sub(r"<[^>]+>", " ", t)
    t = re.sub(r"Paid Advertisement.*?see this page online", " ", re.sub(r"\s+", " ", html.unescape(t)))
    return re.sub(r"\s+", " ", t).replace(" ,", ",").replace(" .", ".").strip(" ,")

def hmdb_near(lat, lon):  # nearest <=100 markers, with full inscriptions, around a point (one request)
    h = fetch(f"https://www.hmdb.org/nearbylist.asp?nearby=yes&Latitude={lat:.4f}&Longitude={lon:.4f}", enc="cp1252")
    ins = dict(re.findall(r"<div id=inscription(\d+) style='display:none;'>(.*?)</div>", h, re.S)); out = []
    for mid, title, la, lo, rest in re.findall(r"<li><a href='m\.asp\?m=(\d+)'>(.*?)</a> \(<a href='[^']*destination=([-\d.]+),([-\d.]+)[^']*'.*?</a>(.*?)</li>", h, re.S):
        title, text = clean(title), clean(ins.get(mid, ""))
        if text.lower().startswith(title.lower()): text = text[len(title):].lstrip(" .,")
        elif ", also, " in text[:200]: text = text.split(".", 1)[-1].strip()  # multi-sided markers: "Title A, also, Title B."
        where = re.search(r"<div class=bodysansserifsmaller>(.*?)</div>", rest, re.S)
        out.append({"id": int(mid), "title": title, "lat": float(la), "lon": float(lo), "inscription": text, "location": clean(where.group(1)) if where else "",
                    "missing": "Reported missing" in rest, "url": f"https://www.hmdb.org/m.asp?m={mid}"})
    return out

def corridor(line, radius):  # adaptive sampling: step so each query's nearest-100 disk covers the band ahead
    found, mile, n, thin = {}, 0.0, 0, []
    while True:
        lat, lon = line.at(mile); ms = hmdb_near(lat, lon); n += 1
        for m in ms: found.setdefault(m["id"], m)
        reach = max((hav((lat, lon), (m["lat"], m["lon"])) for m in ms), default=0) if len(ms) >= 100 else 35.0
        if reach < radius: thin.append(round(mile))  # dense area: nearest-100 doesn't reach the band edge
        step = max(0.5, min(8.0, 0.9 * math.sqrt(reach ** 2 - min(radius, 0.8 * reach) ** 2)))
        if mile >= line.cum[-1]: break
        mile = min(mile + step, line.cum[-1])
    log(f"  hmdb: {n} nearby-list queries, {len(found)} unique markers seen")
    return list(found.values()), thin

def details(mid):  # marker page: topics, series, town, erected-by, full inscription
    try: h = fetch(f"https://www.hmdb.org/m.asp?m={int(mid)}", enc="cp1252")
    except RuntimeError as e: log("  ", e); h = ""
    g = lambda pat: (re.search(pat, h, re.S) or [None, ""])[1]
    return {"topics": [clean(t) for t in re.findall(r"CategoryID=\d+'>(.*?)</a>", g(r"Topics(?: and series)?\.</span>(.*?)<span class=sectionhead>"))],
            "series": [clean(t) for t in re.findall(r"SeriesID=\d+>(.*?)</a>", h)], "town": clean(g(r"Marker is (?:in|near) ([^,<]+),")),
            "title": clean(g(r"<h1>(.*?)</h1>")), "erected": clean(g(r"Erected (?:by )?</span>(.*?)<")), "location": clean(g(r"Location\.\s*</span>(.*?)<a ")),
            "inscription": clean(g(r"Inscription\.\s*</span>(.*?)<span class=sectionhead>")), "url": f"https://www.hmdb.org/m.asp?m={mid}"}

ALIAS = {"civil war": "war, us civil", "revolution": "war, us revolutionary", "native": "indigenous", "railroad": "railroads", "trains": "railroads"}
def topic_match(c, wanted):
    tags = " | ".join(c.get("topics", []) + c.get("series", [])).lower()
    return any(all(w in tags for w in ALIAS.get(q, q).replace(",", " ").split()) for q in wanted)

BOILER = re.compile(r"National Register of Historic Places|lost their lives|memory of|in honor of|honor roll|dedicated to the|this plaque|erected by", re.I)
ABBR = re.compile(r"(\b(Gen|Col|Capt|Lt|Maj|Sgt|Gov|Rev|Dr|Mr|Mrs|Ms|St|Mt|Ft|Jr|Sr|Co|No|vs|Hon|Pres|Sen|Rep|Adm|Mi|Yds|ca|c)|\b[A-Z])\.$")
def first_sentence(text, limit=220, title=""):
    out, text = [], re.sub(r"^(\(?(Preface|Front|Back|Side \w+|Obverse|Reverse|Panel \w+)\)?\s*:?\s*,?\s*)+", "", text)
    for piece in re.split(r"(?<=[.!?])\s+(?=[A-Z\"“(])", re.sub(r"\.,\s+(?=[A-Z])", ". ", text)):
        if out and ABBR.search(out[-1]): out[-1] += " " + piece
        else: out.append(piece)
    good = [x.strip() for x in out if len(x) >= 40 and set(re.findall(r"[a-z0-9]+", x.lower().replace("&", "and"))) != set(re.findall(r"[a-z0-9]+", title.lower().replace("&", "and")))]
    s = next((x for x in good if not BOILER.search(x)), good[0] if good else text.strip())
    return s if len(s) <= limit else s[:limit].rsplit(" ", 1)[0].rstrip(",;:") + "..."

def score(m):
    t = m["inscription"]
    return 0.8 * min(len(t), 400) / 400 + min(len(t), 2000) / 10000 + 0.3 * (1 - m["dist"] / max(m["radius"], 0.01)) - 3 * m["missing"] - (0.6 if len(t) < 60 else 0) \
        - (0.5 if BOILER.search(t[:300]) or re.search(r"Memorial|Monument", m["title"]) else 0) - (0.5 if BOILER.search(first_sentence(t)) else 0) + (0.3 if re.search(r"rest area|welcome center|pull[- ]?off|overlook|wayside|U\.S\. \d|Interstate", m["location"], re.I) else 0) \
        + (0.2 if re.search(r"\bCounty\b|\b(on|near) this (site|spot)|\bhere\b" + (f"|{re.escape(m['town'])}" if m.get("town") else ""), t) else 0) \
        + (0.3 if any("Archives and History" in s or "Historical Commission" in s or "Highway" in s for s in m.get("series", [])) else 0)

def rank(cands, lo, hi, k, varied=True):  # one pick per equal stretch of road, varied topics, no clusters
    bins, pick, used = [[] for _ in range(k)], [], set()
    for m in cands: bins[min(k - 1, int((m["mile"] - lo) / max(hi - lo, 1e-6) * k))].append(m)
    for b in bins:
        top = sorted(b, key=score, reverse=True)[:3]
        if varied:
            for m in top: m.update({x: y for x, y in details(m["id"]).items() if x in ("topics", "series", "town")})
        top = [m for m in top if all(abs(m["mile"] - p["mile"]) >= 3 for p in pick)]
        top = [m for m in top if score(m) > 0 and not BOILER.search(first_sentence(m["inscription"]))]
        if top: m = max(top, key=lambda m: score(m) - 0.25 * min(1, len(used & set(m.get("topics", []))))); pick.append(m); used |= set(m.get("topics", []))
    for m in sorted(cands, key=score, reverse=True):
        if len(pick) >= k: break
        if m not in pick and not BOILER.search(first_sentence(m["inscription"])) and all(abs(m["mile"] - p["mile"]) >= 3 for p in pick): pick.append(m)
    return sorted(pick, key=lambda m: m["mile"])

def find(text, near=None):  # match a plaque's title/inscription text against hmdb; returns candidate ids (or [])
    words = lambda x: set(re.findall(r"[a-z0-9]{3,}", x.lower()))
    q = words(text)
    if near:
        lat, lon = map(float, near.split(",")); hits = []
        for m in hmdb_near(lat, lon):
            ti, ins = len(q & words(m["title"])) / max(len(q), 1), len(q & words(m["title"] + " " + m["inscription"])) / max(len(q), 1)
            sc = max(ti, 0.8 * ins if len(q) >= 4 else 0)
            if sc >= 0.6: hits.append({"id": m["id"], "title": m["title"], "score": round(sc, 2), "miles_away": round(hav((lat, lon), (m["lat"], m["lon"])), 2), "url": m["url"]})
        return sorted(hits, key=lambda h: (-h["score"], h["miles_away"]))[:5]
    h = fetch("https://www.hmdb.org/results.asp?" + urllib.parse.urlencode({"SearchFor": text}), enc="cp1252")
    one = re.search(r'og:url" content="https://www\.hmdb\.org/m\.asp\?m=(\d+)', h)  # single hit redirects to the marker page
    if one and "Inscription." in h: return [{"id": int(one.group(1)), "title": clean((re.search(r"<h1>(.*?)</h1>", h, re.S) or [0, ""])[1]), "url": f"https://www.hmdb.org/m.asp?m={one.group(1)}"}]
    return [{"id": int(i), "title": clean(t), "url": f"https://www.hmdb.org/m.asp?m={i}"} for i, t in re.findall(r"<li>.{0,80}?m\.asp\?m=(\d+)'?>([^<]+)</a>", h)][:5]

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("route", nargs="?"); ap.add_argument("--max", type=int, default=8); ap.add_argument("--detour", choices=DETOUR, default="5min")
    ap.add_argument("--radius", type=float, help="override detour band, miles"); ap.add_argument("--from", dest="cur", help="current town, 'exit N', or lat,lon")
    ap.add_argument("--topics"); ap.add_argument("--themes", action="store_true"); ap.add_argument("--theme"); ap.add_argument("--json", action="store_true")
    ap.add_argument("--all", action="store_true", help="list every candidate"); ap.add_argument("--id", help="full inscription for one hmdb marker id")
    ap.add_argument("--find", help="marker title/inscription text to look up"); ap.add_argument("--near", help="lat,lon for --find")
    ap.add_argument("--topic-limit", type=int, default=400, help="max marker pages fetched for topic work")
    a = ap.parse_args()
    if a.id:
        r = details(a.id); print(json.dumps(r, indent=2, ensure_ascii=False) if a.json else f"{r['title']}\n{r['location']}\nTopics: {', '.join(r['topics'])}; Series: {', '.join(r['series']) or '-'}\n\n{r['inscription']}\n{r['url']}"); return
    if a.find:
        r = find(a.find, a.near); print(json.dumps(r, indent=2, ensure_ascii=False) if a.json else "\n".join(f"hmdb {x['id']}: {x['title']} {x['url']}" + (f" ({x['miles_away']} mi away, match {x['score']})" if "score" in x else "") for x in r) or "No matching hmdb marker found."); return
    if not a.route: ap.error("route text required")
    m = re.match(r"\s*(?:from\s+)?(.+?)\s+to\s+(.+?)(?:\s+(?:via|using|on|taking)\s+(.+))?\s*$", a.route, re.I)
    if not m: raise SystemExit("Expected '<origin> to <destination> [via road, road]'")
    o_txt, d_txt, roads_txt = m.groups(); radius = a.radius or DETOUR[a.detour]
    wanted = [norm_ref(r) for r in re.split(r",|;|/|\band\b|\bthen\b", roads_txt or "") if r.strip()]
    o, d = geocode(o_txt), geocode(d_txt); pts, steps, miles, mins = osrm([o, d]); path = "OSRM fastest route"
    missing = [r for r in wanted if not any(r in s["refs"] for s in steps)]
    if missing:
        vias = sorted((p for p in (via_point(r, o, d) for r in missing) if p), key=lambda p: hav(o, p))
        if vias:
            pts, steps, miles, mins = osrm([o] + vias + [d]); still = [r for r in wanted if not any(r in s["refs"] for s in steps)]
            path = f"forced via {', '.join(map(pretty, missing))}" + (f" (could not use {', '.join(map(pretty, still))})" if still else "")
    line, roads = Line(pts), roads_used(steps); exits = exits_along(line)
    log(f"  route: {miles:.0f} mi, {mins:.0f} min, roads {roads} ({path}); band {radius} mi")
    found, thin = corridor(line, radius); cands = []
    for c in found:
        dist, mile = line.project(c["lat"], c["lon"])
        if dist <= radius: cands.append(dict(c, dist=round(dist, 2), mile=round(mile, 1), radius=radius))
    cands.sort(key=lambda c: c["mile"]); cur = 0.0
    if a.cur:
        ex = re.match(r"(?:.*\s)?exit\s+(\w+)", a.cur, re.I); ll = re.match(r"\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*$", a.cur)
        hit = [e for e in exits if ex and e[1].lower() == ex.group(1).lower()]
        if hit: cur = hit[0][0]
        else:
            p = (float(ll.group(1)), float(ll.group(2))) if ll else geocode(a.cur, f"{min(o[1],d[1])},{max(o[0],d[0])},{max(o[1],d[1])},{min(o[0],d[0])}")
            off, cur = line.project(*p)
            if off > 15: log(f"  warning: '{a.cur}' is {off:.0f} mi off the route; snapping anyway")
        cands = [c for c in cands if c["mile"] > cur + 0.5]
    pool, note = cands, ""
    if a.topics or a.theme or a.themes:
        pool = sorted(cands, key=lambda c: c["dist"])[:a.topic_limit]
        if len(cands) > a.topic_limit: note = f"(Topics checked for the {a.topic_limit} markers closest to the road, of {len(cands)}.) "
        log(f"  fetching topics for {len(pool)} markers (cached after first run)")
        for c in pool: c.update({k: v for k, v in details(c["id"]).items() if k in ("topics", "series", "town")})
        pool.sort(key=lambda c: c["mile"])
    if a.themes:
        cnt = {}
        for c in pool:
            for t in c["topics"]: cnt.setdefault(t, []).append(c)
        spread = lambda v: len({int((c["mile"] - cur) / max(miles - cur, 1e-6) * 8) for c in v})  # of 8 equal stretches touched
        top = sorted(cnt.items(), key=lambda kv: (-min(spread(kv[1]), 6), -len(kv[1])))[:3]
        res = [{"topic": t, "count": len(v), "stretches_of_8": spread(v), "from_mile": v[0]["mile"], "to_mile": v[-1]["mile"]} for t, v in top]
        if a.json: print(json.dumps({"themes": res, "total": len(pool)}, indent=2)); return
        print(f"Route: {', '.join(map(pretty, roads))} ({miles:.0f} mi). {len(pool)} markers within {radius:g} mi{' ahead' if a.cur else ''}. {note}")
        for r in res: print(f"{'Strong' if r['count'] >= 10 else 'Some'} {r['topic']} theme: {r['count']} markers, spread over {r['stretches_of_8']} of 8 stretches of the drive. Want to follow it?")
        return
    if a.topics or a.theme: pool = [c for c in pool if topic_match(c, [t.strip().lower() for t in (a.theme or a.topics).split(",") if t.strip()])]
    shown = pool if a.all else rank(pool, cur, miles, a.max, varied=not (a.topics or a.theme)) if pool else []
    def label(c):
        s = next((s for s in steps if s["start"] <= c["mile"] <= s["end"]), steps[-1]); road = pretty(s["refs"][0]) if s["refs"] else (s["name"] or "the route")
        ex = min(exits, key=lambda e: abs(e[0] - c["mile"]), default=None)
        if ex and abs(ex[0] - c["mile"]) <= 3 and s["refs"]: return f"{road} near exit {ex[1]}"
        t = c.get("town") or town(c["lat"], c["lon"]); return f"{road} near {t}" if t else road
    for c in shown:
        c["where"], c["context"] = label(c), first_sentence(c["inscription"], title=c["title"]) if c["inscription"] else ""
        c["minutes_ahead"] = round(minute_at(steps, c["mile"]) - minute_at(steps, cur)); c["miles_ahead"] = round(c["mile"] - cur, 1)
    gaps = [(x, y) for x, y in zip([cur] + [c["mile"] for c in pool], [c["mile"] for c in pool] + [miles]) if y - x > 40]
    if len(pool) < a.max or gaps or thin:
        note += f"Heads up: hmdb lists only {len(pool)} matching markers within {radius:g} mi" + (f"; nothing from mile {gaps[0][0]:.0f} to {gaps[0][1]:.0f}." if gaps else ".") if len(pool) < a.max or gaps else ""
        note += f" Dense stretches near mile {', '.join(map(str, thin[:4]))}: listing may not reach the full {radius:g} mi band." if thin else ""
    intro = ""
    if a.theme and shown:
        yrs = sorted({int(y) for c in shown for y in re.findall(r"\b(1[5-9]\d\d)\b", first_sentence(c["inscription"]))})
        intro = f"The {a.theme} thread, {len(shown)} stops: it opens with {shown[0]['title']} at mile {shown[0]['mile']:.0f} and closes with {shown[-1]['title']} at mile {shown[-1]['mile']:.0f}" + (f"; the dates on these markers run {yrs[0]} to {yrs[-1]}." if len(yrs) > 1 else ".")
    out = {"route": a.route, "roads": list(map(pretty, roads)), "path": path, "miles": round(miles, 1), "minutes": round(mins), "band_miles": radius,
           "current_mile": round(cur, 1) if a.cur else None, "total_in_band": len(cands), "matching": len(pool), "intro": intro, "note": note.strip(), "shown": shown, "candidates": cands}
    if a.json: print(json.dumps(out, indent=2, ensure_ascii=False)); return
    print(f"Route: {', '.join(map(pretty, roads))} ({miles:.0f} mi, {path}). {len(pool)} markers within {radius:g} mi{f' ahead of mile {cur:.0f}' if a.cur else ''}; top {len(shown)}:")
    if intro: print(intro)
    for c in shown:
        pos = f"{c['mile'] - cur:.0f} miles ahead (about {c['minutes_ahead']} min)" if a.cur else f"Mile {c['mile']:.0f} (about {c['minutes_ahead']} min)"
        print(f"{pos}, {c['where']}: {c['title']}. {c['context']}  [hmdb {c['id']}]")
    if note.strip(): print(note.strip())

if __name__ == "__main__": main()
```
