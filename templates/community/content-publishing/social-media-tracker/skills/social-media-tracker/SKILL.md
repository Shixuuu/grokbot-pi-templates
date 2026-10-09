---
name: social-media-tracker
description: "Follower-Zahlen auslesen und als Bild schicken (Routine „Social Media Tracker“); auch für Änderungen: Plattform hinzufügen/entfernen, neuer Link, Uhrzeit, Häufigkeit."
---

# Social Media Tracker – Lauf

Ziel: Follower-Zahlen des Owners auslesen (nur lesen, nie einloggen, 1 Request pro Plattform, nur Popups wegklicken) und EIN Bild schicken. Deutsch, du-Form.

## Dateien (`~/social-media-tracker/`)
- `config.json`: `name`|null, `timezone`, `frequency` (hourly|twice_daily|daily|weekly), `times`, `platforms` {id: {handle, url}}; LinkedIn + `posts` (1–3 URLs eigener öffentlicher Beiträge), unbekannte + `label`, `color`.
- `history.csv` (nur anhängen, nie ändern): `ts,platform,count,status,method` (status live|carried|failed).
- `render_pulse.py`: fehlt es → aus Codeblock unten schreiben.

## Auslesen
`DOM` = `google-chrome --headless=new --no-sandbox --virtual-time-budget=8000 --lang=en-US --dump-dom <url>` (ausgeloggt, frisches temp `--user-data-dir`). `GET` = curl/urllib mit Desktop-Chrome-User-Agent. Nie Zahlen aus `<meta>`/og:description (oft veraltet).
- **x**: X-Connector, falls verbunden (`get_users_by_username` → `public_metrics.followers_count`); sonst `GET https://api.fxtwitter.com/<handle>` → `user.followers`.
- **instagram**: DOM `https://www.instagram.com/<handle>/` → `"follower_count":N` (beim Username des Owners). Alternativ ausgeloggt im Browser: „N followers“ im Header.
- **threads**: DOM `https://www.threads.com/@<handle>` → `"follower_count":N` neben `"username":"<handle>"`.
- **facebook**: DOM der Seiten-/Profil-URL → JSON `"text":"N followers"` (oder sichtbare Header-Zahl im Browser).
- **tiktok**: GET `https://www.tiktok.com/@<handle>` → `"followerCount":N`; fehlt es (Captcha), einmal DOM.
- **youtube**: GET `https://www.youtube.com/@<handle>` mit `Accept-Language: en` → „N subscribers“. Ab 1.000 gerundet (z. B. 12.3K): implizierte volle Zahl speichern, `rounded` in method.
- **twitch**: GET `https://decapi.me/twitch/followcount/<login>` → Zahl.
- **linkedin**: Profil ausgeloggt gesperrt → jeden gespeicherten Beitrag per GET (einfacher Request): JSON-LD `"author"` mit `url` auf `/in/<slug>` des Owners und `FollowAction` → `userInteractionCount`; mit sichtbarem „N followers“ gegenchecken, erster verifizierter zählt.
- **skool**: GET `https://www.skool.com/@<handle>` → `"totalFollowers":N`.
- **bluesky**: GET `https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=<handle>` → `followersCount`.
- Andere: öffentliche Seite mit klarer Zahl, sonst überspringen.

Nicht lesbar/unplausibel (±50 % zum letzten live-Wert, 0 statt >0) → **nie erfinden**: letzter live-Wert als `count`, `delta: null` („—“), status `carried` (ohne Vorwert `count: null`). Carried ist nie Vergleichswert.

## Delta
Vergleichswert = **live**-Wert der Plattform: bei hourly/twice_daily/daily der nächste an jetzt−24 h (Fenster 20–28 h) → `delta_label` „Δ 24h“; bei weekly (oder nichts in 20–28 h) der vorige live-Wert → „Δ seit TT.MM.“. Keiner → `delta: null`.

## Bild und Senden
1. Neue Zeilen an `history.csv` anhängen.
2. `pulse.json` schreiben: `{"label":"So 27.09. · 14:00","name":<name oder null>,"delta_label":…,"platforms":[{"id":"x","count":4292,"delta":10},…]}` (Ortszeit, Wochentag Mo Di Mi Do Fr Sa So; unbekannte id mit `label`/`color`).
3. `cd ~/social-media-tracker && python3 render_pulse.py pulse.json pulse.png` (fehlt Chrome: einmal `chromium` installieren).
4. **Nur** das PNG schicken, kein Text. Ausnahme: Plattform 3× in Folge nicht lesbar → ein kurzer Satz, Bitte um neuen Link.

## Änderungswünsche
Z. B. „Plattform hinzufügen“, „Uhrzeit ändern“, „neuer Link“:
- Fehlendes wie im Skill social-media-tracker-setup abfragen (Widgets, Link normalisieren + testen).
- `config.json` anpassen (Entfernen: nur aus `platforms`, History bleibt). Neuer Zeitplan → Routine „Social Media Tracker“ ändern (Cron-Tabelle im Setup-Skill), nie eine zweite anlegen.
- Kurz bestätigen („✅ Passt, ab jetzt täglich um 20:00.“); neue Plattform → gleich ein Lauf mit Bild.

```python
#!/usr/bin/env python3
"""Social Media Tracker: render_pulse.py daten.json out.png -> 1080x1080 PNG (stdlib + headless Chrome). JSON: {"label","name"?,
"delta_label"?,"platforms":[{"id":"x","count":4292,"delta":10}]}; null = "—"; unbekannte id: Buchstaben-Badge ("label","color")."""
import sys, json, html, os, shutil, subprocess, tempfile, signal
E = html.escape
def P(d, f='#fff'): return f'<path fill="{f}" d="{d}"/>'
TT = 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.350 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.440-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z'
L = {  # id: (Name, Hintergrund, 24x24 SVG); Pfade: Simple Icons (CC0)
 'x': ('X', '#000', P('M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z')),
 'instagram': ('Instagram', 'radial-gradient(circle at 30% 107%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285AEB 90%)',
  '<g fill="none" stroke="#fff" stroke-width="2.1"><rect x="3" y="3" width="18" height="18" rx="5.2"/><circle cx="12" cy="12" r="4.1"/></g><circle cx="17.3" cy="6.7" r="1.3" fill="#fff"/>'),
 'threads': ('Threads', '#000', P('M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.990c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.690 1.671 6.970 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z')),
 'facebook': ('Facebook', '#1877F2', P('M13.5 24v-9.6h3.2l.5-3.8h-3.7V8.3c0-1.1.3-1.8 1.9-1.8h2V3.1a26 26 0 0 0-2.9-.15c-2.9 0-4.8 1.75-4.8 5V10.6H6.5v3.8h3.2V24z')),
 'tiktok': ('TikTok', '#000', f'<g transform="translate(-.7 -.7)">{P(TT, "#25F4EE")}</g><g transform="translate(.7 .7)">{P(TT, "#FE2C55")}</g>{P(TT)}'),
 'youtube': ('YouTube', '#fff', '<rect x="1" y="5" width="22" height="14.5" rx="4.2" fill="red"/>' + P('M9.6 8.6v7.3l6.3-3.65z')),
 'twitch': ('Twitch', '#9146FF', P('M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z')),
 'linkedin': ('LinkedIn', '#0A66C2', P('M4 9h3.4v11H4zM5.7 3.6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM9.6 9h3.3v1.5c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.1 2.3 4.1 5.2V20h-3.4v-5.4c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V20H9.6z')),
 'skool': ('Skool', '#f7f5f8', '<text x="12" y="18.2" text-anchor="middle" font-size="17.5" font-weight="800" font-family="Arial,sans-serif" letter-spacing="-.6"><tspan fill="#263397">s</tspan><tspan fill="#D3513E">k</tspan></text>'),
}
AL = {'twitter': 'x', 'ig': 'instagram', 'fb': 'facebook', 'tt': 'tiktok', 'yt': 'youtube', 'li': 'linkedin'}
def fmt(n): return f'{abs(n):,}'.replace(',', '.')
def pill(d):
    if not d: return f'<span class="pl z">{"—" if d is None else "±0"}</span>'
    u = d > 0
    return f'<span class="pl {"p" if u else "n"}"><svg viewBox="0 0 10 10"><path d="{"M5 1.5 9 7H1z" if u else "M5 8.5 1 3h8z"}"/></svg>{"+" if u else "−"}{fmt(d)}</span>'
out = sys.argv[2]
data = json.load(open(sys.argv[1], encoding='utf-8'))
ps = [dict(p, id=AL.get(str(p.get('id')).lower(), str(p.get('id')).lower())) for p in data.get('platforms', [])]
ps.sort(key=lambda p: (p.get('count') is None, -(p.get('count') or 0)))
ok = [p for p in ps if p.get('count') is not None]
rh = 404 / max(1, len(ps))  # CSS-px, Canvas 540 @2x
ln = max([len(fmt(p['count'])) for p in ok] + [1])
fs = min(52, rh * .52, 430 / ln); bs = min(58, rh * .66)
rows = ''
for p in ps:
    lab, bg, svg = L.get(p['id'], (p.get('label') or p['id'], p.get('color', '#2a2f3d'), None))
    svg = svg or f'<text x="12" y="16.5" text-anchor="middle" font-size="13" font-weight="800" fill="#fff" font-family="Arial">{E(lab[:2].title())}</text>'
    c = p.get('count')
    rows += (f'<div class="r"><span class="b b-{p["id"]}" style="background:{bg}"><svg viewBox="0 0 24 24">{svg}</svg></span>'
             f'<span class="v{" e" if c is None else ""}">{"—" if c is None else fmt(c)}</span>{"" if c is None else pill(p.get("delta"))}</div>')
ds = [p['delta'] for p in ok if p.get('delta') is not None]
I = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">'
PPL = I + '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/><circle cx="9" cy="7" r="4"/></svg>'
CLK = I + '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
CAL = I + '<rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>'
G = 'rgba(255,255,255,'
T = E(data['name']) + ' <i>· Follower</i>' if data.get('name') else 'Social Media Tracker'
CSS = f"""*{{box-sizing:border-box}}html,body{{margin:0;width:540px;height:540px;overflow:hidden;background:#0b0c12}}
body{{font-family:Inter,'Segoe UI',Roboto,Arial,sans-serif;color:#eef0f6;-webkit-font-smoothing:antialiased;font-feature-settings:'tnum'}}
.w{{height:540px;padding:18px;display:flex;flex-direction:column;gap:12px;background:radial-gradient(380px 240px at 0 0,rgba(124,92,255,.28),transparent 70%),
radial-gradient(340px 220px at 100% 0,rgba(34,211,238,.1),transparent 70%),radial-gradient(460px 260px at 50% 112%,rgba(74,222,128,.1),transparent 70%),#0b0c13}}
.h{{display:flex;justify-content:space-between;align-items:center;gap:10px;height:38px}}
.t{{font-size:19px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}.t i{{font-style:normal;color:#8b93a7;font-weight:600}}
.ch{{display:inline-flex;align-items:center;gap:6px;white-space:nowrap;font-weight:700;color:#d7dbe6;border-radius:99px;background:{G}.06);border:1px solid {G}.1)}}
.ch svg{{width:1.05em;height:1.05em;color:#9aa3b8}}.dt{{font-size:13px;padding:8px 13px}}.dl{{font-size:11px;padding:4px 9px;color:#9aa3b8}}
.c{{flex:1;display:flex;flex-direction:column;padding:10px 18px 6px;border-radius:20px;background:linear-gradient({G}.06),{G}.022));border:1px solid {G}.085);box-shadow:inset 0 1px 0 {G}.07)}}
.k{{display:flex;justify-content:space-between;align-items:center;padding-bottom:9px;color:#6b7387}}
.k>span{{display:flex;align-items:center;gap:7px}}.k>span>svg{{width:16px}}.k b{{color:#c9d0de;font-size:15px}}.k .pl{{font-size:11px;min-width:0;padding:2px 7px}}
.r{{flex:1;display:flex;align-items:center;gap:{bs*.36:.0f}px;border-top:1px solid {G}.055)}}
.b{{width:{bs:.1f}px;height:{bs:.1f}px;border-radius:{bs*.28:.1f}px;flex:none;display:flex;align-items:center;justify-content:center;overflow:hidden;box-shadow:inset 0 0 0 1px {G}.1)}}
.b svg{{width:62%;height:62%}}.b-facebook svg{{width:86%;height:86%;margin-top:14%}}.b-skool svg{{width:80%;height:80%}}
.v{{flex:1;min-width:0;font-size:{fs:.1f}px;font-weight:800;letter-spacing:-.02em;white-space:nowrap}}.e{{color:#4b5263}}
.pl{{flex:none;display:inline-flex;align-items:center;justify-content:center;gap:.25em;min-width:{fs*2.1:.0f}px;font-size:{max(12, fs*.5):.1f}px;font-weight:700;padding:.3em .65em;border-radius:99px}}
.pl svg{{width:.55em;fill:currentColor}}.p{{color:#4ade80;background:rgba(74,222,128,.13);border:1px solid rgba(74,222,128,.28)}}
.n{{color:#f87171;background:rgba(248,113,113,.13);border:1px solid rgba(248,113,113,.28)}}.z{{color:#8b93a7;background:rgba(139,147,167,.1);border:1px solid rgba(139,147,167,.18)}}"""
page = (f'<!doctype html><meta charset="utf-8"><style>{CSS}</style><div class="w"><div class="h"><span class="t">{T}</span>'
        f'<span class="ch dt">{CAL}{E(data.get("label", ""))}</span></div><div class="c"><div class="k"><span>{PPL}<b>{fmt(sum(p["count"] for p in ok))}</b>'
        f'{pill(sum(ds)) if ds else ""}</span><span class="ch dl">{CLK}{E(data.get("delta_label", "Δ 24h"))}</span></div>{rows}</div></div>')
d = tempfile.mkdtemp(); hp = d + '/p.html'; open(hp, 'w', encoding='utf-8').write(page)
ch = os.environ.get('CHROME') or next(filter(None, map(shutil.which, ('google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser', 'chrome'))), None)
if not ch:
    shutil.copy(hp, out + '.html')
    sys.exit(f'Kein Chrome/Chromium: z. B. sudo apt-get install -y chromium oder CHROME=/pfad setzen. HTML: {out}.html')
pr = subprocess.Popen([ch, '--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=2', '--window-size=540,540',
    '--no-first-run', '--disable-dev-shm-usage', f'--user-data-dir={d}/u', f'--screenshot={d}/o.png', 'file://' + hp],
    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, start_new_session=True)
try: pr.wait(timeout=int(os.environ.get('PULSE_TIMEOUT', '180')))
except subprocess.TimeoutExpired: os.killpg(pr.pid, signal.SIGKILL); sys.exit('Chrome-Timeout (PULSE_TIMEOUT erhöhen)')
if not os.path.exists(d + '/o.png'): sys.exit(f'Chrome fehlgeschlagen (Exit {pr.returncode})')
shutil.move(d + '/o.png', out); shutil.rmtree(d, True); print(out)
```
