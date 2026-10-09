---
name: zip-weather-48h
description: "Use this when someone wants the weather, a forecast, or a 48-hour outlook in 4-hour blocks for any location worldwide (a US zip code, a city like \"Paris\" or \"Tokyo\", a city plus country, or a postal code), with an animated radar map."
---

# 48-hour forecast in 4-hour blocks for any location, plus an animated radar

**Data sources are fixed:** in the US, the forecast always comes from the US National Weather Service (api.weather.gov) and the radar from NOAA NEXRAD radar and the HRRR model via the Iowa Environmental Mesonet. Everywhere else, the forecast comes from Open-Meteo (MET Norway steps in automatically if Open-Meteo is busy) and the radar from RainViewer's global radar network. The scripts pick the source by themselves. Never ask the user to pick a weather provider, API, or source, never suggest a weather connector or plugin, and never ask for an API key.

Everything used is free and needs no key or sign-up. Zippopotam.us turns a US zip into a location, and Open-Meteo geocoding handles everything else: city names ("Paris", "Tokyo"), city plus country or state ("London, Ontario", "Paris TX"), and postal codes worldwide ("SW1A 1AA", "75001 France"). Zippopotam is the fallback for postal codes Open-Meteo doesn't know. US places use the National Weather Service hourly forecast, other places the Open-Meteo hourly forecast. Radar tiles come from the Iowa Environmental Mesonet (US lower 48) or RainViewer (everywhere else, for personal use, credited on the map), over an OpenStreetMap basemap.

## Steps
1. Make sure the scripts exist on your computer. If `/workspace/zipweather/wxlocate.py`, `/workspace/zipweather/zipweather.py` or `/workspace/zipweather/zipradar.py` is missing, create it from the scripts below; all three sit in the same folder. If `python3 -c "import PIL, requests"` fails, run `pip install --user --break-system-packages pillow requests`. For the MP4 copy of the radar, `ffmpeg` should be on the PATH. If `which ffmpeg` finds nothing, run `pip install --user --break-system-packages imageio-ffmpeg`. The script picks up either one, and without them it just skips the MP4.
2. Run `python3 /workspace/zipweather/zipweather.py "<LOCATION>"` for the table data and `python3 /workspace/zipweather/zipradar.py "<LOCATION>"` for the radar (usually 5 to 40 seconds). Quote the location if it has spaces. It can be a US zip code, a city, a city with its country or state, or a postal code, preferably with its country. The radar prints the GIF path on the first line and the MP4 path on the second when ffmpeg is available. The file is `/workspace/zipweather/radar_<ZIP>.gif` for a zip. For other places it is the location in lower case with underscores, e.g. `radar_london.gif` or `radar_75001_france.gif`. Progress notes and warnings go to stderr. Both scripts can run at the same time. Map tiles are cached under `/workspace/zipweather/cache` (safe to delete). If no location is given, use the saved home location from memory, or ask for one.
3. Check the first line of the forecast. It names the place that was picked (e.g. "48-hour forecast for London, England, United Kingdom"). If that is clearly not the place meant (e.g. London, Ontario instead of London, UK), run both scripts again with the country or state added. Mention the place you used in the reply whenever the name was ambiguous.
4. Handle problems:
   - "Couldn't find US zip code": ask the person to double-check the zip.
   - "Couldn't find a place called ...": ask for a more specific name, for example with the country added.
   - "Couldn't look up ... right now", or a weather service error: retry once after a few seconds. If it still fails, say it's temporarily unavailable.
   - The radar prints "No radar coverage at ..." (exit code 3): there is no animation. Send the forecast and say plainly that there is no weather radar coverage at that location. This is normal in much of Africa, Russia, Central Asia, parts of the Middle East and South America, and over open ocean.
   - If only the radar fails for any other reason, still send the forecast and say the radar map is unavailable right now.
5. Reply in one message with:
   - One or two plain sentences on the big picture first (for example: "Rain most of Sunday, heaviest in the evening with a chance of thunderstorms. Monday morning clears up.").
   - Then a table with one row per 4-hour block: Time, Conditions, Temp, Rain chance, Humidity, Wind. Use the units the script prints. The US uses °F and mph. Everywhere else uses °C and km/h, and the Rain chance column adds the expected amount in mm when the script shows it (e.g. "74% (11.4 mm)"). If the script says "rain chance n/a" (backup source), show just the amount, or "none expected".
   - Then one practical tip if something stands out (umbrella, strong wind, heat, freezing temps).
   - The radar GIF (1280x720) attached as an image on that same message, so it shows below the table.
     - US lower 48: the first frames are real radar every 5 minutes over the past hour, and the one marked "Now" pauses briefly. The rest are the HRRR forecast every 15 minutes for the next 8 hours. On heavy-rain days the script may drop the forecast to every 30 minutes (or 1024x576) to keep the GIF under about 8 MB; it says so on stderr.
     - Outside the US (and in Alaska, Hawaii and the territories): the past hour of real radar every 10 minutes, ending and holding on "Now". There are no forecast frames there, so don't promise a radar forecast. Grey shading on the map marks areas outside radar coverage, where blank does not mean dry.
     - The strip above the legend shows where each frame falls. Where video works better (for example X posts), send the MP4 instead. It always has every frame and is smaller.
   - Outside the US, end with a short credit line such as "Forecast: Open-Meteo.com · Radar: RainViewer.com". Use the "Forecast data:" line the script prints, since it names the backup source when one was used. The radar image already carries its own credits.
6. Keep the times in the location's local time, as the scripts print them.

## wxlocate.py
```python
#!/usr/bin/env python3
"""Turn any location text into coordinates for the weather scripts. Free, no keys.
US 5-digit zips are left to the scripts' original Zippopotam + NWS path; everything else (city, "city, country",
non-US postal code) goes through Open-Meteo geocoding, with Zippopotam as a postal-code fallback."""
import json, re, sys, time, unicodedata, urllib.error, urllib.parse, urllib.request

UA = {"User-Agent": "grok-bot-zip-weather (contact: weather-bot)"}
GEO = "https://geocoding-api.open-meteo.com/v1/search"
US_LIKE = {"US", "PR", "VI", "GU", "AS", "MP"}          # NWS forecast territory, °F / mph
STATES = {"Alabama": "AL", "Alaska": "AK", "Arizona": "AZ", "Arkansas": "AR", "California": "CA", "Colorado": "CO",
    "Connecticut": "CT", "Delaware": "DE", "District of Columbia": "DC", "Florida": "FL", "Georgia": "GA", "Hawaii": "HI",
    "Idaho": "ID", "Illinois": "IL", "Indiana": "IN", "Iowa": "IA", "Kansas": "KS", "Kentucky": "KY", "Louisiana": "LA",
    "Maine": "ME", "Maryland": "MD", "Massachusetts": "MA", "Michigan": "MI", "Minnesota": "MN", "Mississippi": "MS",
    "Missouri": "MO", "Montana": "MT", "Nebraska": "NE", "Nevada": "NV", "New Hampshire": "NH", "New Jersey": "NJ",
    "New Mexico": "NM", "New York": "NY", "North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH", "Oklahoma": "OK",
    "Oregon": "OR", "Pennsylvania": "PA", "Rhode Island": "RI", "South Carolina": "SC", "South Dakota": "SD",
    "Tennessee": "TN", "Texas": "TX", "Utah": "UT", "Vermont": "VT", "Virginia": "VA", "Washington": "WA",
    "West Virginia": "WV", "Wisconsin": "WI", "Wyoming": "WY", "Puerto Rico": "PR"}
ALIAS = {"uk": "GB", "u.k.": "GB", "britain": "GB", "great britain": "GB", "united kingdom": "GB", "england": "GB",
    "scotland": "GB", "wales": "GB", "northern ireland": "GB", "us": "US", "u.s.": "US", "usa": "US", "u.s.a.": "US",
    "america": "US", "united states": "US", "uae": "AE", "emirates": "AE", "korea": "KR", "south korea": "KR",
    "holland": "NL", "the netherlands": "NL", "czechia": "CZ", "czech republic": "CZ", "russia": "RU", "vietnam": "VN",
    "turkey": "TR", "türkiye": "TR", "ivory coast": "CI", "hong kong": "HK", "taiwan": "TW",
    # countries Zippopotam knows postal codes for (fallback when Open-Meteo has no match for a postal code)
    "germany": "DE", "deutschland": "DE", "france": "FR", "spain": "ES", "italy": "IT", "netherlands": "NL",
    "belgium": "BE", "switzerland": "CH", "austria": "AT", "japan": "JP", "australia": "AU", "new zealand": "NZ",
    "canada": "CA", "india": "IN", "brazil": "BR", "mexico": "MX", "sweden": "SE", "norway": "NO", "denmark": "DK",
    "finland": "FI", "poland": "PL", "portugal": "PT", "ireland": "IE", "argentina": "AR", "south africa": "ZA",
    "hungary": "HU", "slovakia": "SK", "croatia": "HR", "luxembourg": "LU", "iceland": "IS", "sri lanka": "LK",
    "thailand": "TH", "malaysia": "MY", "philippines": "PH", "pakistan": "PK", "dominican republic": "DO"}
UK_PC = re.compile(r"^([A-Z]{1,2}\d[A-Z\d]?)\s*\d[A-Z]{2}$")
CA_PC = re.compile(r"^([A-Z]\d[A-Z])\s*\d[A-Z]\d$")

def is_us_zip(q): return bool(re.fullmatch(r"\d{5}", q.strip()))

def territory_zip(zipcode):
    """Zippopotam lists Puerto Rico, USVI, Guam, N. Mariana and American Samoa zips under their own codes, not 'us'.
    Returns a place in the 'us' response shape (state abbreviation = territory code), or None."""
    for cc in ("pr", "vi", "gu", "mp", "as"):
        try: places = get(f"https://api.zippopotam.us/{cc}/{zipcode}").get("places")
        except Exception: continue
        if places: return dict(places[0], **{"state abbreviation": cc.upper()})
    return None

def get(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=20) as r:
        return json.load(r)

def norm(s): return "".join(c for c in unicodedata.normalize("NFKD", s or "") if not unicodedata.combining(c)).lower().strip(" .")

class LookupError_(RuntimeError): pass

def search(name, count=20):
    q = urllib.parse.urlencode({"name": name, "count": count, "language": "en", "format": "json"})
    for k in range(3):   # transient errors / 429: wait and retry, then report the service as down (not "not found")
        try: return get(f"{GEO}?{q}").get("results") or []
        except Exception as e:
            if isinstance(e, urllib.error.HTTPError) and e.code == 400: return []
            err = e; time.sleep(2 * (k + 1))
    raise LookupError_(f"location lookup (Open-Meteo geocoding) unavailable: {err}")

def matches(r, qual):
    """Does result r fit a qualifier like 'France', 'FR', 'UK', 'Ontario' or 'TX'?"""
    q = norm(qual)
    cc = (r.get("country_code") or "").upper()
    if ALIAS.get(q) == cc or q.upper() == cc and len(q) == 2 and cc not in US_LIKE: return True
    if q in (norm(r.get("country")), norm(r.get("admin1")), norm(r.get("admin2"))): return True
    if cc in US_LIKE and q.upper() == STATES.get(r.get("admin1"), "-"): return True
    if ALIAS.get(q) == "GB" and q in ("england", "scotland", "wales", "northern ireland"): return norm(r.get("admin1")) == q
    return False

def rank(results, head):
    """Open-Meteo already orders by relevance and population; prefer exact name or postal-code hits and real towns."""
    h, hp = norm(head), head.upper().replace(" ", "")
    def key(ir):
        i, r = ir
        exact = norm(r.get("name")) == h or hp in [p.upper().replace(" ", "") for p in r.get("postcodes") or []]
        return (not exact, not (r.get("feature_code") or "").startswith("PPL"), i)
    return [r for _, r in sorted(enumerate(results), key=key)]

def pack(r, query, postal=""):
    cc = (r.get("country_code") or "").upper()
    name, a1, country = r.get("name") or query, r.get("admin1") or "", r.get("country") or cc
    us = cc in US_LIKE
    if us: short = f"{name}, {STATES.get(a1, a1 or cc)}"; label = short
    else:
        short = f"{name}, {country}" if norm(name) != norm(country) else name
        label = ", ".join(dict.fromkeys(x for x in (name, a1, country) if x))
    slug = re.sub(r"[^a-z0-9]+", "_", norm(query)).strip("_") or "place"
    return {"query": query, "lat": float(r["latitude"]), "lon": float(r["longitude"]), "name": name, "short": short,
            "label": label, "country_code": cc, "us": us, "tz": r.get("timezone"), "postal": postal, "slug": slug}

def zippopotam(code, cc):
    try: d = get(f"https://api.zippopotam.us/{cc.lower()}/{urllib.parse.quote(code)}")
    except Exception: return None
    p = d["places"][0]
    return {"name": p["place name"].split(" (")[0], "latitude": p["latitude"], "longitude": p["longitude"],
            "admin1": p.get("state") or "", "country": d.get("country"), "country_code": cc.upper()}

def resolve(query):
    """Best match for free text, or None if nothing matches. Raises LookupError_ if the lookup service was down."""
    errs = []
    r = _resolve(query, errs)
    if r is None and errs: raise errs[0]
    return r

def _resolve(query, errors_out):
    """Best match for free text, or None. Tries 'place, qualifier' and 'place qualifier' splits, then the whole text,
    then postal-code shortcuts (UK outward code, Canadian FSA, Zippopotam)."""
    q = " ".join(query.strip().split())
    if not q: return None
    words = q.replace(",", " ").split()
    splits = []
    if "," in q:
        head, rest = q.split(",", 1)
        splits.append((head.strip(), [p.strip() for p in rest.split(",") if p.strip()]))
    else:
        for n in (1, 2):
            if len(words) > n: splits.append((" ".join(words[:-n]), [" ".join(words[-n:])]))
    cache, errors = {}, errors_out
    def find(name):
        if name not in cache:
            try: cache[name] = search(name, 100)
            except LookupError_ as e: cache[name] = []; errors.append(e)
        return cache[name]
    postal_of = lambda s: s.upper() if any(ch.isdigit() for ch in s) else ""
    for head, quals in splits:          # e.g. "Paris, France", "75001 France", "London Ontario", "Portland, ME"
        hits = [r for r in find(head) if any(matches(r, x) for x in quals)]
        if hits: return pack(rank(hits, head)[0], q, postal_of(head))
    hits = find(q)
    if any(ch.isdigit() for ch in q) and splits:   # "10115 Germany": never jump to a fuzzy hit in another country
        hits = [r for r in hits if any(matches(r, x) for _, quals in splits for x in quals)]
    if hits: return pack(rank(hits, q)[0], q, postal_of(q))
    up = q.upper()
    cc_hint = next((ALIAS.get(norm(x)) or (x.upper() if len(x) == 2 else None) for _, quals in splits for x in quals), None)
    code = full = up
    for pat, cc in ((UK_PC, "GB"), (CA_PC, "CA")):   # full UK / Canadian postcodes -> outward code / FSA
        m = pat.match(up if not splits else splits[0][0].upper()) or pat.match(up)
        if m: code, full, cc_hint = m.group(1), m.group(0), cc_hint or cc; break
    else:
        if splits and any(ch.isdigit() for ch in splits[0][0]): code = full = splits[0][0].upper()
    if any(ch.isdigit() for ch in code):
        hits = [r for r in find(code) if not cc_hint or (r.get("country_code") or "").upper() == cc_hint]
        if hits: return pack(rank(hits, code)[0], q, full)
        if cc_hint:
            r = zippopotam(code, cc_hint)
            if r:
                r["timezone"] = tz_near(float(r["latitude"]), float(r["longitude"]), cc_hint, (r["name"], r["admin1"]), find)
                return pack(r, q, full)
    return None

def tz_near(lat, lon, cc, names, find):
    """Time zone of the nearest Open-Meteo place in the same country (Zippopotam results carry none)."""
    for n in names:
        rs = [r for r in find(n) if (r.get("country_code") or "").upper() == cc and r.get("timezone")] if n else []
        if rs: return min(rs, key=lambda r: (r["latitude"] - lat) ** 2 + (r["longitude"] - lon) ** 2)["timezone"]
    return None

if __name__ == "__main__":
    print(json.dumps(resolve(" ".join(sys.argv[1:])), ensure_ascii=False, indent=1))
```

## zipweather.py
```python
#!/usr/bin/env python3
"""48-hour forecast in 4-hour blocks for any location, all free and keyless.
US zip codes: Zippopotam + US National Weather Service (unchanged). Other text (city, "city, country", non-US
postal code): Open-Meteo geocoding; US places still use NWS, everywhere else the Open-Meteo forecast
(°C, km/h, mm), with MET Norway as an automatic backup if Open-Meteo is down or rate-limited."""
import json, os, sys, urllib.error, urllib.parse, urllib.request
from collections import Counter
from datetime import datetime, timedelta, timezone
from zoneinfo import ZoneInfo
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from wxlocate import is_us_zip, resolve, territory_zip, LookupError_

UA = {"User-Agent": "grok-bot-zip-weather (contact: weather-bot)", "Accept": "application/geo+json"}

def get(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=20) as r:
        return json.load(r)

def print_nws(hourly):
    for i in range(0, len(hourly), 4):
        blk = hourly[i:i+4]
        start = datetime.fromisoformat(blk[0]["startTime"]); end = datetime.fromisoformat(blk[-1]["endTime"])
        temps = [p["temperature"] for p in blk]
        pop = max((p.get("probabilityOfPrecipitation") or {}).get("value") or 0 for p in blk)
        rh = [(p.get("relativeHumidity") or {}).get("value") for p in blk]; rh = [x for x in rh if x is not None]
        winds = [int(s) for p in blk for s in p["windSpeed"].replace("mph","").split(" to ") if s.strip().isdigit()]
        wdir = Counter(p["windDirection"] for p in blk).most_common(1)[0][0]
        sky = Counter(p["shortForecast"] for p in blk).most_common(1)[0][0]
        unit = blk[0]["temperatureUnit"]
        label = f"{start:%a %-I %p} to {end:%-I %p}"
        wind = f"{min(winds)}-{max(winds)} mph {wdir}" if winds and min(winds)!=max(winds) else f"{winds[0] if winds else '?'} mph {wdir}"
        if not winds or max(winds) == 0: wind = "calm"
        t = f"{min(temps)}-{max(temps)}" if min(temps) != max(temps) else f"{min(temps)}"
        print(f"{label}: {sky}. {t}°{unit}, rain chance up to {pop}%, "
              f"humidity ~{round(sum(rh)/len(rh)) if rh else '?'}%, wind {wind}.")

def main_zip(zipcode):
    try:
        z = get(f"https://api.zippopotam.us/us/{zipcode}")["places"][0]
    except Exception:
        z = territory_zip(zipcode)   # Puerto Rico, USVI, Guam, ... (NWS covers them too)
        if not z: sys.exit(f"Couldn't find US zip code {zipcode}. Check it and try again.")
    lat, lon = float(z["latitude"]), float(z["longitude"])
    pts = get(f"https://api.weather.gov/points/{lat:.4f},{lon:.4f}")["properties"]
    hourly = get(pts["forecastHourly"])["properties"]["periods"][:48]
    print(f"48-hour forecast for {zipcode} ({z['place name']}, {z['state abbreviation']})\n")
    print_nws(hourly)

# ---- worldwide ---------------------------------------------------------------------------------------------
COMPASS = "N NNE NE ENE E ESE SE SSE S SSW SW WSW W WNW NW NNW".split()
WMO = {0: "Clear", 1: "Mostly Clear", 2: "Partly Cloudy", 3: "Cloudy", 45: "Fog", 48: "Freezing Fog",
       51: "Light Drizzle", 53: "Drizzle", 55: "Heavy Drizzle", 56: "Light Freezing Drizzle", 57: "Freezing Drizzle",
       61: "Light Rain", 63: "Rain", 65: "Heavy Rain", 66: "Light Freezing Rain", 67: "Freezing Rain",
       71: "Light Snow", 73: "Snow", 75: "Heavy Snow", 77: "Snow Grains", 80: "Light Rain Showers", 81: "Rain Showers",
       82: "Heavy Rain Showers", 85: "Snow Showers", 86: "Heavy Snow Showers", 95: "Thunderstorms",
       96: "Thunderstorms With Hail", 99: "Thunderstorms With Hail"}
DAYSKY = {"Clear": "Sunny", "Mostly Clear": "Mostly Sunny"}
MET = {"clearsky": "Clear", "fair": "Mostly Clear", "partlycloudy": "Partly Cloudy", "cloudy": "Cloudy", "fog": "Fog",
       "lightrain": "Light Rain", "rain": "Rain", "heavyrain": "Heavy Rain", "lightrainshowers": "Light Rain Showers",
       "rainshowers": "Rain Showers", "heavyrainshowers": "Heavy Rain Showers", "lightsleet": "Light Sleet",
       "sleet": "Sleet", "heavysleet": "Heavy Sleet", "lightsleetshowers": "Light Sleet Showers",
       "sleetshowers": "Sleet Showers", "heavysleetshowers": "Heavy Sleet Showers", "lightsnow": "Light Snow",
       "snow": "Snow", "heavysnow": "Heavy Snow", "lightsnowshowers": "Light Snow Showers", "snowshowers": "Snow Showers",
       "heavysnowshowers": "Heavy Snow Showers"}

WET = ("Rain", "Drizzle", "Snow", "Sleet", "Shower", "Thunder", "Freezing", "Grains")

def compass(deg): return COMPASS[round(deg / 22.5) % 16] if deg is not None else "?"

def met_sky(code):
    base, _, part = (code or "").partition("_")
    thunder = base.endswith("andthunder"); base = base.replace("andthunder", "")
    s = MET.get(base, base.title() or "?")
    if part == "day": s = DAYSKY.get(s, s)
    return s + " And Thunder" if thunder else s

def print_blocks(hours, metric):
    """hours: list of dicts with local datetime t, temp, rh, pop (None = n/a), mm, wind, wdir (compass), sky."""
    tu, wu = ("C", "km/h") if metric else ("F", "mph")
    for i in range(0, len(hours), 4):
        blk = hours[i:i+4]
        start, end = blk[0]["t"], blk[-1]["t"] + timedelta(hours=1)
        temps = [round(h["temp"]) for h in blk if h["temp"] is not None]
        pops = [h["pop"] for h in blk if h["pop"] is not None]
        rh = [h["rh"] for h in blk if h["rh"] is not None]
        winds = [round(h["wind"]) for h in blk if h["wind"] is not None]
        wdir = Counter(h["wdir"] for h in blk).most_common(1)[0][0]
        mm = sum(h["mm"] or 0 for h in blk)
        wet = [h for h in blk if any(w in h["sky"] for w in WET)]
        sky = Counter(h["sky"] for h in blk).most_common(1)[0][0]
        if wet and (len(wet) >= 2 or mm >= (1.0 if metric else 0.04)):
            # a block with real precipitation is named after its wettest condition, not "Cloudy"
            score = Counter()
            for h in wet: score[h["sky"]] += (h["mm"] or 0) + 0.01
            sky = score.most_common(1)[0][0]
        label = f"{start:%a %-I %p} to {end:%-I %p}"
        wind = f"{min(winds)}-{max(winds)} {wu} {wdir}" if winds and min(winds) != max(winds) else f"{winds[0] if winds else '?'} {wu} {wdir}"
        if not winds or max(winds) == 0: wind = "calm"
        t = (f"{min(temps)}-{max(temps)}" if min(temps) != max(temps) else f"{min(temps)}") if temps else "?"
        rain = f"rain chance up to {max(pops)}%" if pops else "rain chance n/a"
        if metric and mm >= 0.1: rain += f" ({mm:.1f} mm)"
        elif not metric and mm >= 0.01: rain += f" ({mm:.2f} in)"
        print(f"{label}: {sky}. {t}°{tu}, {rain}, humidity ~{round(sum(rh)/len(rh)) if rh else '?'}%, wind {wind}.")

def open_meteo(lat, lon, metric=True):
    q = {"latitude": f"{lat:.4f}", "longitude": f"{lon:.4f}", "timezone": "auto", "forecast_hours": 48,
         "hourly": "temperature_2m,relative_humidity_2m,precipitation_probability,precipitation,weather_code,"
                   "wind_speed_10m,wind_direction_10m,is_day"}
    if not metric: q.update(temperature_unit="fahrenheit", wind_speed_unit="mph", precipitation_unit="inch")
    return get("https://api.open-meteo.com/v1/forecast?" + urllib.parse.urlencode(q))

def om_hours(d):
    h = d["hourly"]; out = []
    for i, ts in enumerate(h["time"][:48]):
        sky = WMO.get(h["weather_code"][i], "?")
        if h["is_day"][i]: sky = DAYSKY.get(sky, sky)
        out.append({"t": datetime.fromisoformat(ts), "temp": h["temperature_2m"][i], "rh": h["relative_humidity_2m"][i],
                    "pop": h["precipitation_probability"][i], "mm": h["precipitation"][i], "wind": h["wind_speed_10m"][i],
                    "wdir": compass(h["wind_direction_10m"][i]), "sky": sky})
    return out

def met_norway(lat, lon, tz, metric=True):
    """Backup: MET Norway Locationforecast (free, keyless, CC BY 4.0; needs an identifying User-Agent)."""
    d = get(f"https://api.met.no/weatherapi/locationforecast/2.0/complete?lat={lat:.4f}&lon={lon:.4f}")
    now = datetime.now(timezone.utc).replace(minute=0, second=0, microsecond=0); out = []
    for e in d["properties"]["timeseries"]:
        t = datetime.fromisoformat(e["time"].replace("Z", "+00:00"))
        n1 = e["data"].get("next_1_hours")
        if t < now or not n1: continue
        x = e["data"]["instant"]["details"]
        ws = x.get("wind_speed"); temp = x.get("air_temperature"); mm = n1["details"].get("precipitation_amount")
        if ws is not None: ws = ws * 3.6 if metric else ws * 2.23694
        if temp is not None and not metric: temp = temp * 9 / 5 + 32
        if mm is not None and not metric: mm /= 25.4
        pop = n1["details"].get("probability_of_precipitation")
        out.append({"t": t.astimezone(tz).replace(tzinfo=None), "temp": temp, "rh": x.get("relative_humidity"),
                    "pop": round(pop) if pop is not None else None, "mm": mm, "wind": ws,
                    "wdir": compass(x.get("wind_from_direction")), "sky": met_sky(n1["summary"]["symbol_code"])})
        if len(out) == 48: break
    return out

def forecast_world(loc, metric):
    """Open-Meteo, falling back to MET Norway. Returns (hours, source line)."""
    try: return om_hours(open_meteo(loc["lat"], loc["lon"], metric)), "Forecast data: Open-Meteo.com (CC BY 4.0)"
    except Exception as e:
        why = "daily request limit reached" if isinstance(e, urllib.error.HTTPError) and e.code == 429 else f"{e}"
        print(f"note: Open-Meteo unavailable ({why}); using MET Norway instead", file=sys.stderr)
    tz = ZoneInfo(loc["tz"]) if loc.get("tz") else timezone(timedelta(hours=round(loc["lon"] / 15)))
    return met_norway(loc["lat"], loc["lon"], tz, metric), "Forecast data: MET Norway (api.met.no, CC BY 4.0)"

def main(query):
    query = " ".join(query.split())
    if is_us_zip(query): return main_zip(query)
    try: loc = resolve(query)
    except LookupError_ as e: sys.exit(f"Couldn't look up \"{query}\" right now ({e}). Try again in a minute.")
    if not loc: sys.exit(f"Couldn't find a place called \"{query}\". Try a city name, \"city, country\", or a postal code with its country.")
    where = f"{loc['postal']} ({loc['label']})" if loc["postal"] else f"{loc['label']}"
    head = f"48-hour forecast for {where}"
    if loc["us"]:   # US place by name: same NWS forecast as the zip path, by coordinates
        try:
            pts = get(f"https://api.weather.gov/points/{loc['lat']:.4f},{loc['lon']:.4f}")["properties"]
            hourly = get(pts["forecastHourly"])["properties"]["periods"][:48]
            print(f"{head}\n"); print_nws(hourly); print("\nForecast data: US National Weather Service"); return
        except Exception as e: print(f"note: NWS unavailable here ({e}); using Open-Meteo", file=sys.stderr)
    try: hours, src = forecast_world(loc, metric=not loc["us"])
    except Exception as e: sys.exit(f"The forecast service is temporarily unavailable ({e}). Try again in a few minutes.")
    print(f"{head}\n"); print_blocks(hours, metric=not loc["us"]); print(f"\n{src}")

if __name__ == "__main__":
    main(" ".join(sys.argv[1:]) if len(sys.argv) > 1 else input("Zip code, city, or postal code: ").strip())
```

## zipradar.py
```python
#!/usr/bin/env python3
"""Animated precipitation GIF (+ MP4) for any location, 1280x720, zoom 9, centered on it.
US zip codes (and US places inside the NEXRAD composite): NEXRAD radar every 5 min for the past hour, then NOAA HRRR
forecast every 15 min out to +8 h. Everywhere else: RainViewer past radar every 10 min for the past hour, ending on
"Now" (RainViewer has no free forecast frames); skipped with a message where there is no radar coverage.
Free, no keys: Zippopotam / Open-Meteo geocoding, NWS (time zone), IEM tiles (radar/HRRR), RainViewer tiles
(personal use, credit RainViewer), OpenStreetMap basemap."""
import argparse, io, math, os, shutil, subprocess, sys, threading, time, requests
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timedelta, timezone
from zoneinfo import ZoneInfo
from PIL import Image, ImageDraw, ImageChops, ImageEnhance, ImageFilter, ImageFont
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from wxlocate import is_us_zip, resolve, territory_zip, LookupError_

Z = 9                           # zoom 9: ~295 km across a 1280 px frame at 41N (native tiles, no resampling)
IEM = "https://mesonet.agron.iastate.edu"
TILE = IEM + "/cache/tile.py/1.0.0/{layer}/{{z}}/{{x}}/{{y}}.png"
OSM = "https://tile.openstreetmap.org/{z}/{x}/{y}.png"  # policy: identifying UA, light use, caching, attribution
CACHE = "/workspace/zipweather/cache"
S = requests.Session()
S.headers["User-Agent"] = "zipradar/3.0 (personal weather GIF script; tiles cached locally)"
S.mount("https://", requests.adapters.HTTPAdapter(pool_connections=4, pool_maxsize=16))
POOL = ThreadPoolExecutor(8)    # all tile fetches share this: at most 8 requests in flight (IEM), OSM limited to 2
OSM_SEM = threading.Semaphore(2)
LEGEND = [(94,173,207),(75,214,144),(15,183,20),(11,136,15),(9,94,9),(234,210,4),(255,177,0),(255,0,0),(177,0,0),(252,107,253)]
UTC = timezone.utc
HDR, FC, NOW, DOT = (20, 30, 50), (255, 225, 90), (130, 215, 255), (220, 20, 60)
TL_OBS, TL_FC, TL_BG = (40, 120, 200), (225, 150, 0), (215, 215, 215)   # timeline ticks on the white strip
FIXED = LEGEND + [HDR, FC, NOW, DOT, TL_OBS, TL_FC, TL_BG, (255, 255, 255), (0, 0, 0), (20, 20, 20), (60, 60, 60)]
MIN_IDX = 88                    # N0Q palette index for 12 dBZ (dBZ = idx/2 - 32); weaker echoes hidden

ALPHA_LUT = [0] * MIN_IDX + [204] * (256 - MIN_IDX)   # 80 % opacity for >= 12 dBZ
BAND_LUT = None  # filled from the N0Q palette: every 0.5-dBZ shade snapped to its 5-dBZ band colour (matches legend)
BANDS = [12] + list(range(15, 80, 5))                 # band lower edges, dBZ
BAND_FIXED = []
UNDER = (110, 190, 235)                              # basemap grey levels under precipitation
IEM_ATTR = "© OpenStreetMap contributors | Radar: NOAA NEXRAD/HRRR via IEM"

# ---- RainViewer (outside the NEXRAD composite): free public Weather Maps API, personal/educational use, credit
# RainViewer with a link. Since 2026: past 2 h every 10 min, max zoom 7, one colour scheme (Universal Blue),
# ~100 requests/IP/minute. 512-px zoom-7 tiles carry zoom-8 detail; frames are upscaled 2x to zoom 9.
RV_API = "https://api.rainviewer.com/public/weather-maps.json"
RV_ATTR = "© OpenStreetMap contributors | Radar: RainViewer (rainviewer.com)"
RV_Z = 7
RV_SEM = threading.Semaphore(3)
# Universal Blue rain colours (scheme 2, options 0_0) for dBZ 5..74 (below that is hidden anyway, 75+ is green)
RV_UB = ("928871 9e9375 aa9e79 b6a97e c2b482 cec087 d2c48b d6c88f dacc93 ded097 88ddee 6cd1eb 51c5e8 36bae5 1baee2 "
         "00a3e0 009ad5 0091ca 0088bf 007fb4 0077aa 0070a3 00699c 006295 005b8e 005588 005180 004e78 004a70 004768 "
         "ffee00 ffe000 ffd200 ffc500 ffb700 ffaa00 ff9f00 ff9500 ff8b00 ff8100 ff4400 f23600 e62800 d91b00 cd0d00 "
         "c10000 a80000 8f0000 760000 5d0000 ffaaff ff9fff ff95ff ff8bff ff81ff ff77ff ff6cff ff62ff ff58ff ff4eff "
         + "ffffff " * 10).split()
# NEXRAD N0Q colour at each band's lower edge (same as the US frames and legend)
N0Q_BAND = {12: (77, 125, 178), 15: (94, 173, 207), 20: (75, 214, 144), 25: (15, 183, 20), 30: (11, 136, 15),
            35: (9, 94, 9), 40: (234, 210, 4), 45: (255, 177, 0), 50: (255, 0, 0), 55: (177, 0, 0),
            60: (255, 245, 255), 65: (252, 107, 253), 70: (172, 0, 252), 75: (5, 235, 240)}

def set_bands(palbytes):
    global BAND_LUT
    cols = [tuple(palbytes[i * 3:i * 3 + 3]) for i in range(256)]
    lut = []
    for i in range(256):
        dbz = i / 2 - 32
        edge = max([b for b in BANDS if b <= dbz], default=None)
        lut.append(cols[int((edge + 32) * 2)] if edge is not None else cols[i])
    BAND_LUT = [[c[k] for c in lut] for k in range(3)]
    # palette anchors: each band as it looks over the faded basemap, so no band merges into a neighbour in the GIF
    for b in BANDS:
        c = cols[int((b + 32) * 2)]
        for g in UNDER: BAND_FIXED.append(tuple(round((v * 204 + g * 51) / 255) for v in c))

def get(url, **kw):
    for i in range(3):  # retry network hiccups; HTTP errors (e.g. 503 = not processed yet) raise at once
        try: r = S.get(url, timeout=20, **kw); break
        except (requests.ConnectionError, requests.Timeout):
            if i == 2: raise
            time.sleep(2)
    r.raise_for_status(); return r

def font(sz, bold=False):
    try: return ImageFont.truetype(f"/usr/share/fonts/truetype/dejavu/DejaVuSans{'-Bold' if bold else ''}.ttf", sz)
    except OSError: return ImageFont.load_default(sz)

MEM = {}  # in-memory tile cache: every tile is fetched at most once per run
def tile_bytes(url, cache_path=None, max_age=None):
    if url in MEM: return MEM[url]
    if cache_path and os.path.exists(cache_path) and (max_age is None or time.time() - os.path.getmtime(cache_path) < max_age):
        with open(cache_path, "rb") as f: MEM[url] = f.read(); return MEM[url]
    if "openstreetmap" in url:
        with OSM_SEM: data = get(url).content
    else: data = get(url).content
    if cache_path:
        os.makedirs(os.path.dirname(cache_path), exist_ok=True)
        tmp = f"{cache_path}.{threading.get_ident()}.tmp"
        with open(tmp, "wb") as f: f.write(data)
        os.replace(tmp, cache_path)
    MEM[url] = data; return data

def purge_cache():
    """Drop IEM radar/HRRR tiles older than a day and OSM tiles older than 30 days."""
    for sub, age in (("iem", 86400), ("osm", 30 * 86400), ("rainviewer", 86400), ("rvcov", 30 * 86400)):
        root = os.path.join(CACHE, sub)
        for dp, _, fs in os.walk(root, topdown=False):
            for fn in fs:
                p = os.path.join(dp, fn)
                try:
                    if time.time() - os.path.getmtime(p) > age: os.remove(p)
                except OSError: pass
            if dp != root:
                try: os.rmdir(dp)
                except OSError: pass

class Grid:
    def __init__(self, cx, cy, w, h):
        self.x0, self.y0, self.w, self.h = int(cx - w / 2), int(cy - h / 2), w, h
        self.tiles = [(tx, ty) for tx in range(self.x0 // 256, (self.x0 + w - 1) // 256 + 1)
                      for ty in range(self.y0 // 256, (self.y0 + h - 1) // 256 + 1)]

def mosaic(grid, fmt, cache_dir=None, max_age=None, pal=None):
    """Stitch the grid's XYZ tiles in parallel (shared bounded pool). pal: hide echoes below 12 dBZ."""
    def fetch(t):
        url = fmt.format(z=Z, x=t[0] % 2 ** Z, y=t[1])   # x wraps at the antimeridian
        cp = os.path.join(cache_dir, str(Z), str(t[0] % 2 ** Z), f"{t[1]}.png") if cache_dir else None
        im = Image.open(io.BytesIO(tile_bytes(url, cp, max_age))).convert("RGBA")
        if pal is not None:  # per tile, in the worker thread: dBZ index -> 5-dBZ band colour, 80 % alpha, < 12 dBZ hidden
            a = im.getchannel("A")
            if a.getbbox():
                idx = Image.frombytes("L", im.size, im.convert("RGB").quantize(palette=pal, dither=Image.Dither.NONE).tobytes())
                a = ImageChops.multiply(a, idx.point(ALPHA_LUT))
                if BAND_LUT: im = Image.merge("RGBA", [idx.point(BAND_LUT[c]) for c in range(3)] + [a])
                else: im.putalpha(a)
        return im
    img = Image.new("RGBA", (grid.w, grid.h), (0, 0, 0, 0))
    for (tx, ty), im in zip(grid.tiles, POOL.map(fetch, grid.tiles)):
        img.paste(im, (tx * 256 - grid.x0, ty * 256 - grid.y0))
    return img

def ok(url):
    try: return S.get(url, timeout=20).status_code == 200
    except requests.RequestException: return False

def layer_dir(layer): return os.path.join(CACHE, "iem", layer.replace(":", "_"))

def render(m, lab, kind, i, kinds, name, place, zipcode, attr=IEM_ATTR, note=None):
    """Draw header, marker, legend, timeline and attribution on a copy of map frame m, scaled to its size."""
    W, H = m.size; s = W / 640
    im = m.copy(); d = ImageDraw.Draw(im)
    f1, f2, f3, fm = font(round(17 * s), True), font(round(13 * s), True), font(round(10 * s)), font(round(14 * s), True)
    hh, fh = round(28 * s), round(22 * s)
    d.rectangle((0, 0, W, hh), fill=HDR)
    d.text((round(8 * s), hh // 2), f"Precipitation · {name} {zipcode}".rstrip(), font=f2, fill="white", anchor="lm")
    if note:  # e.g. "Grey: no radar coverage", small tag under the header
        nb = d.textbbox((round(8 * s), hh + round(5 * s)), note, font=f3)
        d.rectangle((nb[0] - round(3 * s), nb[1] - round(2 * s), nb[2] + round(3 * s), nb[3] + round(2 * s)), fill="white")
        d.text((round(8 * s), hh + round(5 * s)), note, font=f3, fill=(60, 60, 60))
    d.text((W - round(8 * s), hh // 2), lab, font=f1, fill=FC if kind == "fc" else NOW, anchor="rm")
    ix, iy, r = W // 2, H // 2, round(6 * s)
    d.ellipse((ix - r, iy - r, ix + r, iy + r), fill=DOT, outline="white", width=max(2, round(2 * s)))
    d.text((ix + r + round(4 * s), iy), place, font=fm, fill=(20, 20, 20), stroke_width=max(3, round(3 * s)), stroke_fill="white", anchor="lm")
    d.rectangle((0, H - fh, W, H), fill="white")
    ty = H - fh // 2; sw, sh = round(14 * s), round(10 * s)
    x = round(6 * s); d.text((x, ty), "Light", font=f3, fill="black", anchor="lm")
    x += round(d.textlength("Light", font=f3)) + round(5 * s)
    for c in LEGEND: d.rectangle((x, ty - sh // 2, x + sw - 1, ty + sh // 2), fill=c); x += sw
    x += round(5 * s); d.text((x, ty), "Heavy", font=f3, fill="black", anchor="lm")
    x += round(d.textlength("Heavy", font=f3))
    d.text((W - round(6 * s), ty), attr, font=f3, fill=(60, 60, 60), anchor="rm")
    # timeline: full-width strip above the legend, one segment per frame (radar blue, forecast orange, current black)
    th, gap, step = round(4 * s), max(1, round(s)), W / len(kinds)
    for k, kd in enumerate(kinds):
        a, b = round(k * step), round((k + 1) * step) - gap - 1
        col = "black" if k == i else (TL_OBS if kd == "obs" else TL_FC) if k < i else TL_BG
        d.rectangle((a, H - fh - th - (th // 2 if k == i else 0), max(a, b), H - fh - 1), fill=col)
    return im.convert("RGB")

def save_gif(frames, durations, out, ncol=255):
    """Shared 255-colour palette (index 255 left free for Pillow's transparent frame deltas)."""
    W, H = frames[0].size
    sample = frames[::max(1, len(frames) // 12)]
    sheet = Image.new("RGB", (W // 2, H // 2 * len(sample)))
    for i, im in enumerate(sample): sheet.paste(im.resize((W // 2, H // 2), Image.Resampling.NEAREST), (0, H // 2 * i))
    fixed = FIXED + [c for c in BAND_FIXED if c not in FIXED]
    n = min(ncol, 255) - len(fixed)
    q = sheet.quantize(n, method=Image.Quantize.MEDIANCUT)
    gpal = Image.new("P", (1, 1)); gpal.putpalette(q.getpalette()[:3 * n] + [v for c in fixed for v in c])
    pf = list(POOL.map(lambda im: im.quantize(palette=gpal, dither=Image.Dither.NONE), frames))
    pf[0].save(out, save_all=True, append_images=pf[1:], duration=durations, loop=0, optimize=True, disposal=1)
    return os.path.getsize(out)

def find_ffmpeg():
    exe = shutil.which("ffmpeg")
    if exe: return exe
    try:
        import imageio_ffmpeg; return imageio_ffmpeg.get_ffmpeg_exe()
    except Exception: return None

def save_mp4(frames, durations, out, fps=20):
    exe = find_ffmpeg()
    if not exe: print("note: ffmpeg not found; skipped MP4 (pip install imageio-ffmpeg to enable)", file=sys.stderr); return None
    W, H = frames[0].size
    cmd = [exe, "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(fps), "-i", "-",
           "-c:v", "libx264", "-preset", "slow", "-crf", "23", "-tune", "animation", "-pix_fmt", "yuv420p",
           "-profile:v", "high", "-movflags", "+faststart", out]
    p = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    try:
        for im, ms in zip(frames, durations):
            b = im.tobytes()
            for _ in range(max(1, round(ms * fps / 1000))): p.stdin.write(b)
        p.stdin.close()
    except BrokenPipeError: pass
    if p.wait() != 0: print("warning: ffmpeg failed; no MP4", file=sys.stderr); return None
    return out

# ---- RainViewer helpers ------------------------------------------------------------------------------------
def rv_get(url):
    """RainViewer fetch: few requests in flight, waits and retries on 429 (limit ~100 requests/IP/minute)."""
    for k in range(4):
        with RV_SEM:
            try: r = S.get(url, timeout=20)
            except (requests.ConnectionError, requests.Timeout):
                if k == 3: raise
                time.sleep(2); continue
        if r.status_code == 429 and k < 3:
            time.sleep(min(30, int(r.headers.get("Retry-After") or 10))); continue
        r.raise_for_status(); return r.content

def rv_bytes(url, cache_path=None):
    if url in MEM: return MEM[url]
    if cache_path and os.path.exists(cache_path):
        with open(cache_path, "rb") as f: MEM[url] = f.read(); return MEM[url]
    data = rv_get(url)
    if cache_path:
        os.makedirs(os.path.dirname(cache_path), exist_ok=True)
        tmp = f"{cache_path}.{threading.get_ident()}.tmp"
        with open(tmp, "wb") as f: f.write(data)
        os.replace(tmp, cache_path)
    MEM[url] = data; return data

def rv_mosaic(grid, fmt, cache_dir=None):
    """Zoom-7 512-px tiles (= zoom-8 pixels) covering the zoom-9 grid, upscaled 2x (nearest) and cropped to it."""
    x8, y8 = grid.x0 // 2, grid.y0 // 2
    w8, h8 = (grid.x0 + grid.w + 1) // 2 - x8 + 1, (grid.y0 + grid.h + 1) // 2 - y8 + 1
    n = 2 ** RV_Z
    tiles = [(tx, ty) for tx in range(x8 // 512, (x8 + w8 - 1) // 512 + 1) for ty in range(y8 // 512, (y8 + h8 - 1) // 512 + 1)]
    def fetch(t):
        tx, ty = t[0] % n, t[1]
        if not 0 <= ty < n: return Image.new("RGBA", (512, 512), (0, 0, 0, 0))
        cp = os.path.join(cache_dir, str(RV_Z), str(tx), f"{ty}.png") if cache_dir else None
        return Image.open(io.BytesIO(rv_bytes(fmt.format(z=RV_Z, x=tx, y=ty), cp))).convert("RGBA")
    img = Image.new("RGBA", (w8, h8), (0, 0, 0, 0))
    for (tx, ty), im in zip(tiles, POOL.map(fetch, tiles)): img.paste(im, (tx * 512 - x8, ty * 512 - y8))
    return img, (grid.x0 - 2 * x8, grid.y0 - 2 * y8)

def rv_to_z9(img, off, grid):
    return img.resize((img.width * 2, img.height * 2), Image.Resampling.NEAREST).crop((off[0], off[1], off[0] + grid.w, off[1] + grid.h))

def rv_setup():
    """Palette in N0Q index space (idx = (dBZ + 32) * 2) holding the Universal Blue colours, and band LUTs that
    repaint every echo in the NEXRAD 5-dBZ band colours, so non-US frames match the US look and legend."""
    cols = [tuple(int(h[k:k + 2], 16) for k in (0, 2, 4)) for h in RV_UB]
    pb = []
    for i in range(256):
        dbz = math.floor(i / 2 - 32)
        pb += cols[dbz - 5] if 5 <= dbz <= 74 else cols[0] if dbz < 5 else (0, 255, 0)
    pal = Image.new("P", (1, 1)); pal.putpalette(pb)
    edges = sorted(N0Q_BAND)
    lut = []
    for i in range(256):
        e = max([b for b in edges if b <= i / 2 - 32], default=None)
        lut.append(N0Q_BAND[e] if e is not None else (0, 0, 0))
    for b in BANDS:
        for g in UNDER: BAND_FIXED.append(tuple(round((v * 204 + g * 51) / 255) for v in N0Q_BAND[b]))
    return pal, [[c[k] for c in lut] for k in range(3)]

def rv_colorize(im, pal, blut):
    """RainViewer RGBA -> dBZ index -> NEXRAD band colour, 80 % opacity, echoes < 12 dBZ hidden (as in the US)."""
    a = im.getchannel("A")
    if not a.getbbox(): return im
    idx = Image.frombytes("L", im.size, im.convert("RGB").quantize(palette=pal, dither=Image.Dither.NONE).tobytes())
    a = ImageChops.multiply(a.point(lambda v: 255 if v else 0), idx.point(ALPHA_LUT))
    return Image.merge("RGBA", [idx.point(blut[c]) for c in range(3)] + [a])

def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("location", help="US zip, city, 'city, country', or postal code (quote it if it has spaces)")
    ap.add_argument("out", nargs="?")
    ap.add_argument("--size", default="1280x720", help="output WxH (default 1280x720)")
    ap.add_argument("--step", type=int, default=15, choices=(15, 30, 60), help="forecast frame interval, minutes (US)")
    ap.add_argument("--target-mb", type=float, default=8.0); ap.add_argument("--max-mb", type=float, default=15.0)
    ap.add_argument("--no-mp4", action="store_true")
    ap.add_argument("--smooth-colors", action="store_true", help="keep IEM's 0.5-dBZ colour gradient (bigger GIF, US only)")
    ap.add_argument("--colors", type=int, default=255, help="GIF palette size (<=255)")
    ap.add_argument("--save-frames", metavar="DIR", help="also save every frame as PNG in DIR")
    a = ap.parse_args()
    if a.out and not a.out.lower().endswith(".gif"):   # unquoted "75001 France": second word is not a file name
        a.location, a.out = f"{a.location} {a.out}", None
    t_start = time.time(); query = " ".join(a.location.split())
    W, H = map(int, a.size.lower().split("x"))
    log = lambda *m: print(*m, file=sys.stderr)
    if is_us_zip(query):   # original path, unchanged
        zipcode = query
        try: p = get(f"https://api.zippopotam.us/us/{zipcode}").json()["places"][0]
        except Exception:
            p = territory_zip(zipcode)   # Puerto Rico, USVI, Guam, ...
            if not p: sys.exit(f"Couldn't find US zip code {zipcode}.")
        lat, lon, name, place = float(p["latitude"]), float(p["longitude"]), f"{p['place name']}, {p['state abbreviation']}", p["place name"]
        slug, tzname = zipcode, None
        # IEM's composite/HRRR cover the lower 48 only: Alaska, Hawaii and territory zips get the RainViewer past hour
        mode = "iem" if 23 <= lat <= 50 and -126 <= lon <= -65 else "rv"
        if mode == "rv": log(f"location: {name} ({lat:.4f}, {lon:.4f}) is outside the lower-48 NOAA composite -> RainViewer past radar")
    else:
        try: loc = resolve(query)
        except LookupError_ as e: sys.exit(f"Couldn't look up \"{query}\" right now ({e}). Try again in a minute.")
        if not loc: sys.exit(f"Couldn't find a place called \"{query}\". Try a city name, \"city, country\", or a postal code with its country.")
        lat, lon, place, zipcode, slug, tzname = loc["lat"], loc["lon"], loc["name"], loc["postal"], loc["slug"], loc["tz"]
        name = loc["short"]
        # same rule for places typed by name; abroad always uses RainViewer
        mode = "iem" if loc["us"] and 23 <= lat <= 50 and -126 <= lon <= -65 else "rv"
        log(f"location: {loc['label']} ({lat:.4f}, {lon:.4f}) -> {'NOAA radar + HRRR via IEM' if mode == 'iem' else 'RainViewer past radar'}")
    out = a.out or f"/workspace/zipweather/radar_{slug}.gif"
    if mode == "iem":
        try: tz = ZoneInfo(get(f"https://api.weather.gov/points/{lat:.4f},{lon:.4f}").json()["properties"]["timeZone"])
        except Exception: tz = timezone(timedelta(hours=round(lon / 15)))
    else:
        try: tz = ZoneInfo(tzname or get(f"https://api.weather.gov/points/{lat:.4f},{lon:.4f}").json()["properties"]["timeZone"])
        except Exception: tz = timezone(timedelta(hours=round(lon / 15)))
    purge_cache()
    n = 256 * 2 ** Z
    cx, cy = (lon + 180) / 360 * n, (1 - math.asinh(math.tan(math.radians(lat))) / math.pi) / 2 * n
    grid = Grid(cx, cy, W, H)
    base_job = POOL.submit(mosaic, grid, OSM, os.path.join(CACHE, "osm"), 7 * 86400)  # disk cache 7 days
    now = datetime.now(UTC)
    jobs = []  # (label, kind, valid time, source)
    v = None; step = a.step; b = None; nocov = None; note = None
    attr = IEM_ATTR if mode == "iem" else RV_ATTR
    if mode == "iem":
        try:  # N0Q/REFD palette (index -> dBZ = idx/2 - 32) from the raw composite's PNG header, to hide echoes < 12 dBZ
            d = get(IEM + "/data/gis/images/4326/USCOMP/n0q_0.png", headers={"Range": "bytes=0-4095"}).content
            pb = d[d.find(b"PLTE") + 4:][:768]; pal = Image.new("P", (1, 1)); pal.putpalette(pb)
            if not a.smooth_colors: set_bands(pb)
        except Exception: pal = None
        try:  # observed radar: latest national composite, then back in 5-minute steps for 60 minutes
            v = datetime.fromisoformat(get(IEM + "/data/gis/images/4326/USCOMP/n0q_0.json").json()["meta"]["valid"].replace("Z", "+00:00"))
            steps = [v - timedelta(minutes=m) for m in range(60, -1, -5)]
            try:  # IEM archive listing; missing scans are skipped (the tile server would silently snap to a neighbour)
                fmt = "%Y-%m-%dT%H:%MZ"
                sc = get(f"{IEM}/json/radar.py?operation=list&product=N0Q&radar=USCOMP&start={steps[0]:{fmt}}&end={v:{fmt}}").json()["scans"]
                have = {datetime.strptime(x["ts"], fmt).replace(tzinfo=UTC) for x in sc}
                miss = [t for t in steps if t not in have and t != v]
                if miss: log(f"note: radar scans missing, skipped: {', '.join(f'{t:%H:%M}Z' for t in miss)}")
                steps = [t for t in steps if t in have or t == v]
            except Exception: pass
            for t in steps:
                lab = t.astimezone(tz).strftime("%-I:%M %p")   # "(radar)" / "Now" added in frames_for
                layer = f"ridge::USCOMP-N0Q-{t:%Y%m%d%H%M}"
                jobs.append((lab, "obs", t, (layer, v - t >= timedelta(minutes=10))))  # newest 2 scans not disk-cached
        except Exception as e: log(f"warning: current radar unavailable ({e})")
        # HRRR: forecast valid times on a 15-min grid after the radar time, out to +8 h
        b = (v or now).replace(second=0, microsecond=0); b -= timedelta(minutes=b.minute % 15)
        hrrr_layer = lambda init, valid: f"hrrr::REFD-F{int((valid - init).total_seconds() // 60):04d}-{init:%Y%m%d%H%M}"
        probe = lambda init, valid: ok(TILE.format(layer=hrrr_layer(init, valid)).format(z=Z, x=int(cx // 256), y=int(cy // 256)))
        last = b + timedelta(hours=8)
        hr = now.replace(minute=0, second=0, microsecond=0)
        # newest run whose +8h frame is processed (partial runs fall back to older runs, offsets shift)
        init = next((hr - timedelta(hours=k) for k in range(11) if probe(hr - timedelta(hours=k), last)), None)
        if init is None: sys.exit("HRRR forecast data unavailable from IEM right now; try again later.")
        if step < 60 and not probe(init, next(b + timedelta(minutes=m) for m in (15, 30, 45) if (b.minute + m) % 60)):
            log(f"note: IEM has no sub-hourly HRRR REFD minutes for the {init:%H}Z run; using hourly forecast frames"); step = 60
        if step == 60:
            b = b.replace(minute=0); valids = [b + timedelta(hours=h) for h in range(1, 9)]
        else:
            valids = [b + timedelta(minutes=m) for m in range(step, 8 * 60 + 1, step)]
        log(f"HRRR run {init:%Y-%m-%d %H}Z, forecast minutes {int((valids[0] - init).total_seconds() // 60)}-"
            f"{int((valids[-1] - init).total_seconds() // 60)} every {step} min (sub-hourly: {'yes' if step < 60 else 'no'})")
        for t in valids:
            jobs.append((t.astimezone(tz).strftime("%a %-I:%M %p") + " (forecast)", "fc", t, (init, t)))
    else:  # RainViewer: newest frame and the ones before it, back 60 minutes (10-minute steps)
        try: meta = S.get(RV_API, timeout=20); meta.raise_for_status(); meta = meta.json()
        except Exception as e: sys.exit(f"Radar unavailable right now (RainViewer: {e}).")
        host, past = meta["host"], meta["radar"]["past"]
        if not past: sys.exit("Radar unavailable right now (RainViewer returned no frames).")
        newest = past[-1]["time"]
        rvpal, blut = rv_setup()
        # coverage mask: black where RainViewer has no radar
        try:
            cov, off = rv_mosaic(grid, host + "/v2/coverage/0/512/{z}/{x}/{y}/0/0_0.png", os.path.join(CACHE, "rvcov"))
            nocov = rv_to_z9(cov, off, grid).getchannel("A").point(lambda x: 255 if x > 127 else 0)
            # the mask carries thin dashed range-ring lines; keep only real areas (morphological opening)
            nocov = nocov.filter(ImageFilter.MinFilter(9)).filter(ImageFilter.MaxFilter(9))
        except Exception as e: log(f"note: RainViewer coverage mask unavailable ({e})")
        for f in past:
            if newest - f["time"] > 3600: continue
            t = datetime.fromtimestamp(f["time"], UTC)
            jobs.append((t.astimezone(tz).strftime("%-I:%M %p"), "obs", t, (f["path"], f["time"] != newest)))
    try: base = base_job.result()
    except Exception as e: sys.exit(f"Basemap tiles unavailable ({e}).")
    base = ImageEnhance.Color(base).enhance(0.3)  # muted so precip stands out
    base = Image.blend(base, Image.new("RGBA", (W, H), "white"), 0.35)
    # under precipitation only the basemap's strong features (labels, roads, coasts) show through, as 3 grey
    # levels: keeps map context while the radar areas stay flat, which roughly halves the GIF size
    under = base.convert("L").point(lambda v: UNDER[0] if v < 150 else UNDER[1] if v < 205 else UNDER[2]).convert("RGBA")

    def build(job):
        lab, kind, t, src = job
        try:
            if mode == "rv":
                path, cacheable = src
                img, off = rv_mosaic(grid, host + path + "/512/{z}/{x}/{y}/2/0_0.png",
                                     os.path.join(CACHE, "rainviewer", path.strip("/").replace("/", "_")) if cacheable else None)
                return rv_to_z9(rv_colorize(img, rvpal, blut), off, grid)
            if kind == "fc":  # per-frame fallback to previous run if this minute isn't there
                try: layer = hrrr_layer(*src); wx = mosaic(grid, TILE.format(layer=layer), layer_dir(layer), pal=pal)
                except requests.RequestException:
                    layer = hrrr_layer(src[0] - timedelta(hours=1), src[1]); wx = mosaic(grid, TILE.format(layer=layer), layer_dir(layer), pal=pal)
            else:
                layer, cacheable = src
                wx = mosaic(grid, TILE.format(layer=layer), layer_dir(layer) if cacheable else None, pal=pal)
        except Exception as e:
            log(f"warning: skipped frame '{lab}' ({e})"); return None
        if pal is None: wx.putalpha(wx.getchannel("A").point(lambda v: int(v * 0.8)))  # no palette: just 80 % opacity
        return wx
    with ThreadPoolExecutor(6) as fx: maps = list(fx.map(build, jobs))  # frame workers wait on the shared tile pool
    keep = [(j, m) for j, m in zip(jobs, maps) if m is not None]
    if mode == "iem" and not any(j[1] == "fc" for j, _ in keep): sys.exit("No forecast frames could be built; data unavailable.")
    if mode == "rv":
        if not keep: sys.exit("Radar unavailable right now (no RainViewer frames could be loaded).")
        # no coverage: the mask is black at the location AND every frame is empty -> no animation, just say so
        r = max(2, W // 160)
        at = nocov.crop((W // 2 - r, H // 2 - r, W // 2 + r, H // 2 + r)).getextrema()[0] > 0 if nocov is not None else None
        empty = all(not m.getchannel("A").getbbox() for _, m in keep)
        if empty and at is not False:
            why = "" if at else " (coverage map unavailable and no echoes anywhere in view)"
            print(f"No radar coverage at {name}{why}: radar skipped. The global radar network (RainViewer) has no "
                  f"weather radar there, so an animation would just be a blank map.")
            sys.exit(3)
        if nocov is not None and nocov.histogram()[255] >= W * H / 100:  # partly outside coverage: grey out where blank means "no radar", not "dry"
            grey = Image.new("RGBA", (W, H), (150, 150, 150, 255))
            base = Image.composite(Image.blend(base, grey, 0.45), base, nocov)
            note = "Grey: outside radar coverage"
        if at: log("note: the location itself is outside radar coverage; echoes nearby are shown, the grey area has no radar")
        log(f"RainViewer: {len(keep)} frames every 10 min, newest {keep[-1][0][2]:%H:%M}Z"
            f"{'; no precipitation in view' if empty else ''}")
    t_fetch = time.time() - t_start

    layers = {}
    def compose(wx, size):
        """Radar over basemap. Smaller sizes: basemap resampled smoothly, radar nearest-neighbour (stays flat)."""
        if size not in layers:
            bs = base if size == (W, H) else base.resize(size, Image.Resampling.LANCZOS)
            layers[size] = bs, under if size == (W, H) else under.resize(size, Image.Resampling.NEAREST)
        bs, us = layers[size]
        if wx.size != size: wx = wx.resize(size, Image.Resampling.NEAREST)
        m = bs.copy(); m.paste(Image.alpha_composite(us, wx), mask=wx.getchannel("A").point(lambda v: 255 if v else 0))
        return m.convert("RGB")

    def frames_for(sel, size):
        kinds = [j[1] for j, _ in sel]
        now_i = max((i for i, k in enumerate(kinds) if k == "obs"), default=None)  # newest radar frame that loaded
        labs = [j[0] if j[1] == "fc" else f"Now (radar) {j[0]}" if i == now_i else f"{j[0]} (radar)" for i, (j, _) in enumerate(sel)]
        ims = list(POOL.map(lambda i: render(compose(sel[i][1], size), labs[i], kinds[i], i, kinds,
                                             name, place, zipcode, attr, note), range(len(sel))))
        dur = [200 if mode == "iem" else 400] * len(ims)   # 10-minute RainViewer frames: same pace per real minute
        if now_i is not None: dur[now_i] = 1500   # hold on "Now"
        dur[-1] = 2500                            # hold on the last frame (the last forecast; "Now" outside the US)
        return ims, dur

    full, full_dur = frames_for(keep, (W, H))
    # GIF size tuning: all frames -> forecast every 30 min -> 30 min at 1024x576; keeps the first under target,
    # else the smallest (warns if over the hard cap)
    attempts = [("all frames", keep, (W, H))]
    thin = keep
    if step == 15 and mode == "iem":
        thin = [(j, m) for j, m in keep if j[1] == "obs" or (j[2] - b).total_seconds() % 1800 == 0 or j is keep[-1][0]]
        attempts.append(("forecast every 30 min", thin, (W, H)))
    if W > 1024: attempts.append(("forecast every 30 min at 1024x576" if thin is not keep else "1024x576", thin, (1024, round(1024 * H / W))))
    best = None
    for k, (what, sel, size) in enumerate(attempts):
        ims, dur = (full, full_dur) if k == 0 else frames_for(sel, size)
        mb = save_gif(ims, dur, out, a.colors) / 1e6
        log(f"GIF {what}: {len(ims)} frames, {size[0]}x{size[1]}, {mb:.1f} MB")
        if best is None or mb < best[0]: best = (mb, what, sel, ims, dur)
        if mb <= a.target_mb: break
    else:
        mb, what, sel, ims, dur = best
        if what != attempts[-1][0]: save_gif(ims, dur, out, a.colors); log(f"GIF kept smallest: {what}")
        if mb > a.max_mb: log(f"warning: GIF is {mb:.1f} MB, over the {a.max_mb:.0f} MB cap")
    if a.save_frames:
        os.makedirs(a.save_frames, exist_ok=True)
        for i, im in enumerate(ims): im.save(os.path.join(a.save_frames, f"frame_{i:02d}.png"))
    nobs = sum(1 for j, _ in sel if j[1] == "obs")
    fstep = step if sel is keep or step != 15 else 30
    log(f"frames: {nobs} radar ({5 if mode == 'iem' else 10} min) + {len(ims) - nobs} forecast"
        f"{f' ({fstep} min)' if mode == 'iem' else ' (none outside the NEXRAD/HRRR area)'}; fetch {t_fetch:.1f}s")
    print(out)
    if not a.no_mp4:  # MP4 always uses every frame at full size (small and smooth, good for X posts)
        mp4 = save_mp4(full, full_dur, os.path.splitext(out)[0] + ".mp4")
        if mp4: log(f"MP4: {len(full)} frames, {os.path.getsize(mp4) / 1e6:.1f} MB"); print(mp4)
    log(f"total runtime {time.time() - t_start:.1f}s")

if __name__ == "__main__":
    if len(sys.argv) < 2: sys.exit("usage: python3 zipradar.py <ZIP | city | 'city, country' | postal code> [out.gif] [--size 1280x720] [--step 15|30|60] [--no-mp4]")
    main()
```
