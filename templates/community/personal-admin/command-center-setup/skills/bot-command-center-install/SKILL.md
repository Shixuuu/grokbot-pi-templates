---
name: bot-command-center-install
description: "Use this when a user who bought Tarnished Command (the Bot Command Center zip) wants it installed, connected to their Grok Bots, customized, given new character art, updated, started, or stopped on their Grok Bot computer."
---

# Install Tarnished Command (Bot Command Center) from the buyer's zip

Only work for a buyer with a valid Gumroad license key, from a zip they bought and put on this computer (attached in chat or downloaded in the browser). Never fetch, rebuild, or hand out the paid files any other way. If there's no zip or no valid key, send them the Gumroad page (https://grokbot87.gumroad.com/l/tarnished-command) and the free demo (https://bot-command-center-demo.pages.dev/) instead.

**Gate:** install (steps 1-3), connect/customize (step 4), new character art (step 4b), updates and character packs (step 5) all need a verified key. On a computer where it isn't installed yet, Step 0 must pass first. If it's already installed, run the license gate below before any of those steps, in every new session.

## Key handling rules (always)
- Treat the key like a password: never repeat it in chat (refer to it masked, e.g. `…1A2B`), never save it to memory, notes or config, never put it in a screenshot or a post.
- Pass it only through the `BCC_LICENSE_KEY` environment variable on the command line, then `unset` it. The app itself keeps its own license cache in `~/bot-command-center/.license` (chmod 600, includes the key so it can re-check refunds daily). That's expected; don't read it out or copy it anywhere.

## License gate (already installed: run before steps 4, 4b or 5)
```
python3 ~/bot-command-center/license.py status; echo "license status exit $?"
```
- Exit 0: the cached license is valid. Continue with customize / custom art.
- Anything else, or `license.py` is missing (a 1.0.x install): stop. Ask for the key and run Step 0 again (with the zip they have), or ask them to run `bash ~/bot-command-center/start.sh` and enter the key. Don't customize an unlicensed install.

## 0. License key (before installing anything)
Ask: "Please paste your Tarnished Command license key. It's in your Gumroad receipt email, or at gumroad.com/library → Tarnished Command (it looks like XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX)."

Find and check the zip (read-only, installs nothing):
```
ZIP=""; while read -r _ f; do python3 -m zipfile -l "$f" 2>/dev/null | grep -q 'bot-command-center/MANIFEST.txt' && { ZIP="$f"; break; }; done < <(find ~ /workspace /tmp -type f -name 'bot-command-center*.zip' -not -path "$HOME/bot-command-center/*" -printf '%T@ %p\n' 2>/dev/null | sort -rn); echo "Using: $ZIP"
TMP="$(mktemp -d)" && python3 -m zipfile -e "$ZIP" "$TMP"
cd "$TMP/bot-command-center" && cat VERSION && sha256sum -c --quiet MANIFEST.txt && echo "Package OK"
```
If no zip is found, ask them to attach it in chat or download it from their Gumroad library on this computer. If `sha256sum -c` fails, stop: say the package looks damaged and ask them to re-download.

Then verify the key with the package's own checker (version 1.1.0 and newer have `license.py`). It asks Gumroad's public license API, counts one activation per computer (limit 3; re-installs and upgrades on the same computer are free), and caches the result in the install folder so `install.sh` won't check or count it a second time:
```
cd "$TMP/bot-command-center"
DEST="${BCC_DIR:-$HOME/bot-command-center}"; mkdir -p "$DEST"
export BCC_LICENSE_KEY='PASTE-KEY-HERE'
BCC_LICENSE_FILE="$DEST/.license" python3 license.py check </dev/null; RC=$?; echo "license exit $RC"
```
Keep `BCC_LICENSE_KEY` set only until step 2 finishes, then unset it.

- Exit 0: continue to step 2.
- Exit 1 (key not recognised / refunded / charged back / disputed / install limit): stop, install nothing, `unset BCC_LICENSE_KEY`. Say kindly: "I couldn't verify that license key with Gumroad, so I can't install Tarnished Command. Please double-check the key from your receipt email or gumroad.com/library. If you haven't bought it yet, it's here: https://grokbot87.gumroad.com/l/tarnished-command, and you can try the free demo at https://bot-command-center-demo.pages.dev/." If it said refunded, charged back, disputed or the install limit (3) was reached, say that plainly and suggest they contact the seller through the Gumroad page.
- Exit 2 (Gumroad unreachable): stop, install nothing; say Gumroad couldn't be reached and offer to retry in a minute.
- Exit 3 (no key): ask for the key again.
- Never edit `license.py`, `install.sh` or the cache to get past a failure, and never install or start the app without exit 0.

Older 1.0.x zip (no `license.py` in the package): use this legacy check instead (exit 0 = valid, 1 = refused, 2 = network, 3 = not configured; same rules as above), then continue:
```
export BCC_LICENSE_KEY='PASTE-KEY-HERE'
cat > /tmp/bcc_license_check.py <<'PY'
# Tarnished Command license check (Python 3 stdlib only). Key comes from env BCC_LICENSE_KEY; never printed in full.
# Exit 0 valid | 1 invalid/refused | 2 network/Gumroad error | 3 seller has not configured the product id
import hashlib, json, os, sys, urllib.error, urllib.parse, urllib.request
GUMROAD_PRODUCT_ID = "jGYFdQV9l58rBr_n0GqRkQ=="  # Tarnished Command product_id
MAX_INSTALLS = 3  # soft cap per key; seller can reset "Uses" in Gumroad Sales dashboard
API, MARK = "https://api.gumroad.com/v2/licenses/verify", os.path.expanduser("~/.bcc-license")
key = os.environ.get("BCC_LICENSE_KEY", "").strip(); m = "…" + key[-4:]
def call(inc):
    body = urllib.parse.urlencode({"product_id": GUMROAD_PRODUCT_ID, "license_key": key, "increment_uses_count": "true" if inc else "false"}).encode()
    try:
        with urllib.request.urlopen(urllib.request.Request(API, data=body, headers={"Accept": "application/json", "User-Agent": "bcc-license-check/1"}), timeout=20) as r:
            return json.loads(r.read().decode())
    except urllib.error.HTTPError as e:  # unknown key -> 404 {"success": false, "message": ...}
        try: return json.loads(e.read().decode())
        except Exception: raise ConnectionError(f"HTTP {e.code}")
    except (urllib.error.URLError, OSError, ValueError) as e:
        raise ConnectionError(str(getattr(e, "reason", e)))
def done(code, msg): print(msg); sys.exit(code)
if GUMROAD_PRODUCT_ID in ("", "GUMROAD_PRODUCT_ID"): done(3, "NOT CONFIGURED: the seller has not set the Gumroad product id in this skill yet. Not installing.")
if len(key) < 8: done(1, "NO KEY: need the license key from the Gumroad receipt email or Gumroad library.")
try: d = call(False)
except ConnectionError as e: done(2, f"NETWORK ERROR: could not reach Gumroad to check the key ({e}). Not installing; try again shortly.")
p = d.get("purchase") or {}
if not d.get("success"): done(1, f"INVALID: Gumroad does not recognise key {m} for this product ({d.get('message', 'no message')}).")
if p.get("product_id") and p["product_id"] != GUMROAD_PRODUCT_ID: done(1, f"INVALID: key {m} is for a different product.")
for f in ("refunded", "chargebacked", "disputed"):
    if p.get(f) and not (f == "disputed" and p.get("dispute_won")): done(1, f"REFUSED: the purchase for key {m} was {f}.")
for f in ("subscription_ended_at", "subscription_cancelled_at", "subscription_failed_at"):
    if p.get(f): done(1, f"REFUSED: the subscription for key {m} has ended.")
h = hashlib.sha256((GUMROAD_PRODUCT_ID + key).encode()).hexdigest(); uses = int(d.get("uses") or 0)
seen = os.path.exists(MARK) and open(MARK).read().strip() == h  # this box already counted this key: re-install/restart is free
if not seen:
    if uses >= MAX_INSTALLS: done(1, f"REFUSED: key {m} is already used for {uses} installs (limit {MAX_INSTALLS}). Ask the seller to reset it.")
    try: uses = int(call(True).get("uses") or uses + 1)
    except ConnectionError: pass  # already verified; counting is best-effort
    with open(MARK, "w") as f: f.write(h + "\n")  # hash only, never the key
    os.chmod(MARK, 0o600)
done(0, f"VALID: key {m} OK ({uses} install(s) counted).")
PY
python3 /tmp/bcc_license_check.py; RC=$?; rm -f /tmp/bcc_license_check.py; unset BCC_LICENSE_KEY; echo "license exit $RC"
```

## 1. (Done in Step 0: the zip is found, extracted to `$TMP` and verified.)

## 2. Install and start (live mode)
Still in `$TMP/bot-command-center`, with `BCC_LICENSE_KEY` still exported from Step 0:
```
bash install.sh </dev/null; unset BCC_LICENSE_KEY
cd ~ && rm -rf "$TMP"
```
The installer re-uses the license result from Step 0 (no second Gumroad call, no second activation), installs to `~/bot-command-center`, finds every bot on this computer automatically (no config needed), starts the server in live mode and prints `http://127.0.0.1:<port>/`. Re-running is safe and keeps the same port. If it prints `LICENSE CHECK FAILED`, treat it like Step 0 exit 1/2 and stop.
- Options: `BCC_DIR=/path` (install folder; set it before Step 0 so the license cache lands in the same folder) and `BCC_PORT=N` (preferred port). If the port is taken it uses the next free one; always use the URL it prints. If you used BCC_DIR, replace `~/bot-command-center` with that folder everywhere below.
- Start / stop later: `bash ~/bot-command-center/start.sh`, `bash ~/bot-command-center/stop.sh`. start.sh re-checks the license with Gumroad at most once a day; offline it keeps working for 14 days after the last good check.
- Demo view: add `?demo=1`. Layout: `?view=auto|desktop|mobile` or the AUTO button.

## 3. Show it
Open the printed URL in this computer's browser, take a screenshot and send it. The PARTY panel footer shows "Licensed to <purchase email>"; crop or blur that line (and any bot ids) before sharing a screenshot anywhere public. The user can also open your desktop to watch it live.

## 4. Customize (license gate first; follow ~/bot-command-center/CUSTOMIZE.md)
- Run the license gate. Only continue on exit 0.
- Copy `config.example.json` to `config.json` in the install folder, then delete the four placeholder `00000000-…` entries in `bots` and add real bot IDs from `/api/state`. Check it with `python3 -m json.tool config.json >/dev/null && echo OK`.
- Per bot (by bot id): `name`, `color`, `sprite` (knight, personal-assistant, family-coordinator, fitness-coach, cfo-2, social-media-growth, credit-card-max, agent-zero, closet-forge, dial-bot, grok-build, or generic), `hidden`, `image`.
- Set `creditUsd` to their Grok credit so the funds bar is right.
- Renamed or new bots show up automatically. Restart after config edits: stop.sh then start.sh.

## 4b. New character art (license gate first)
- Run the license gate. Only continue on exit 0.
- If they want a new look, generate ONE front-facing, full-body character on a transparent or plain background with your image tool, from their own description (never copy an existing game or film character). Save it as `~/bot-command-center/custom/<short-name>.png` and set `"image": "custom/<short-name>.png"` (plus `name` if wanted) for that bot. Only .png/.webp files inside `custom/` are used; a missing or broken image falls back to the built-in character. Restart.

## 5. Updates and character packs (verified keys only)
There is no update server: new versions and character packs come only as files from the buyer's own Gumroad library. Deliver or install one only after a fresh check against Gumroad:
```
python3 ~/bot-command-center/license.py verify; echo "license verify exit $?"
```
- Exit 0 (`VERIFIED`): for an update, have them download the new zip from gumroad.com/library, then repeat Step 0's find/check commands and step 2 (the installer upgrades in place, keeps config.json, custom/ art and the license, and does one more fresh Gumroad check because the version changed). For a character pack, unzip only its PNG/WebP files into `~/bot-command-center/custom/` and wire them up as in 4b.
- Any other exit: don't install the update or pack; explain the message it printed (refunded, not recognised, or Gumroad unreachable) and point them to https://grokbot87.gumroad.com/l/tarnished-command.

## Troubleshooting
- `LICENSE CHECK FAILED` on start: read the message. Re-run `bash ~/bot-command-center/start.sh` in a terminal to enter the key, or pass it with `BCC_LICENSE_KEY` (then unset it). To switch keys: `python3 ~/bot-command-center/license.py reset`, then start again.
- Port busy: install picks the next free one; read the printed URL.
- Page blank: check `~/bot-command-center/bcc.log`.
- Very crowded map (20+ bots): all bots still list in the PARTY panel; hide quiet ones in config.
- Never paste bot ids, license keys, purchase emails, tokens or personal data into public posts or screenshots.
