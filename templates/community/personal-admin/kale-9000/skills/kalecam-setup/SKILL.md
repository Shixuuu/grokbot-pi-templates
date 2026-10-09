---
name: kalecam-setup
description: "Use this when you need to install, repair, update, or check the KALE 9000 phone-camera system (kalecam) on this computer, pair or re-pair a spare phone as the plant camera, take photos on demand, or list photos; also when /workspace/kalecam is missing (new or reset computer), when the capture watchdog routine says it's not installed, or to check camera health."
---

# kalecam setup and care

kalecam turns a spare phone into KALE's plant camera: a web page on the phone takes photos on schedule or on request and uploads them here. No accounts. Pinned GitHub release, installed to **`/workspace/kalecam/`**, plus the full plant-skill reference in **`/workspace/kalecam/reference/`** (the plant skills read it). `kalecam` below means `/workspace/kalecam/kalecam`.

**Pinned release** (change all three together when updating):
- VERSION: `1.0.1`
- URL: `https://github.com/darrellgum/kale-9000/releases/download/v1.0.1/kale-9000-1.0.1.tar.gz`
- SHA256: `ab66ce60fe605c107c142384eb3315069721b4481488b7f39771612042a2d524`

## Secrets (read first)
- The **pairing link** (`/workspace/kalecam/secrets/pairing-url.txt`) and `pairing-qr.png` contain the secret. Anyone with it can send photos to this bot.
- Give it to the owner **only in the private chat with the owner**. Never post it, never put it in a routine message, memory, log, file outside `/workspace/kalecam/secrets`, or anything shared. Don't repeat it later unless the owner asks for it again.
- Leaked or phone lost: `kalecam pair --rotate-secret`, then send the new link (the old one stops working at once).

## 1. Check what's there (always first; safe to re-run)
```bash
cat /workspace/kalecam/VERSION 2>/dev/null || echo "not installed"
ls /workspace/kalecam/reference/ 2>/dev/null
```
- `not installed` → §2 Install, then §3 Pair. (After a computer reset, pair the phone again.)
- Same version → `/workspace/kalecam/watchdog.sh --ensure-loop`, `kalecam status` (§5). Re-pair only for a new phone or if no camera ever sent a heartbeat. (Installed with `--no-start`, no camera yet? Leave it stopped.)
- Older version, or `reference/` missing or empty → §6 Update.

## 2. Install (download, verify, install, start)
```bash
set -e
V=1.0.1
URL=https://github.com/darrellgum/kale-9000/releases/download/v1.0.1/kale-9000-1.0.1.tar.gz
SHA=ab66ce60fe605c107c142384eb3315069721b4481488b7f39771612042a2d524
T=$(mktemp -d) && cd "$T"
curl -fsSL -o kale.tar.gz "$URL" || python3 -c "import urllib.request,sys; urllib.request.urlretrieve(sys.argv[1], 'kale.tar.gz')" "$URL"
echo "$SHA  kale.tar.gz" | sha256sum -c -        # MUST print "kale.tar.gz: OK"; if not, STOP
tar -xzf kale.tar.gz && cd "kale-9000-$V"
./install.sh --timezone "<owner's IANA zone, e.g. America/Chicago>"   # omit --timezone if unknown
```
- Checksum fails: **stop**, delete the download, don't install, tell the owner (try later; never "fix" it by changing the hash).
- `install.sh` copies code and `reference/` to `/workspace/kalecam`, builds a venv, downloads the pinned `cloudflared` (sha256-checked), starts server, tunnel and watchdog loop, prints `kalecam status` (~1 min). Options: `--no-start` (files only), `--port N` (default 8765), `--photo-root DIR`, `--prefix DIR`.
- Errors: "python3 venv support is missing" → `sudo apt-get install -y python3-venv` if sudo works, else tell the owner. Port in use → `--port 8766`. Tunnel DOWN / no URL yet → the watchdog retries; re-check `kalecam status` later. `status 429` in `/workspace/kalecam/logs/watchdog.log` = Cloudflare rate-limiting new tunnels; usually clears within an hour (tell the owner, don't loop).
- Photo schedule = light hours: `kalecam schedule set --interval 30 --start 06:00 --end 22:00` (bot's zone; `--start` = `--end` = all day).
- Make sure the **capture watchdog routine** exists (every 5 min, see getting-started).

## 3. Pair the phone
```bash
cd /workspace/kalecam && ./kalecam pair --plant <plant-id> --camera phone-1 --quiet
cat /workspace/kalecam/secrets/pairing-url.txt
```
Plant id `new-<YYYYMMDD>-1` if not identified yet; cameras `phone-1`, `phone-2`. Send the link **privately in chat** with the steps below (or `/workspace/kalecam/pairing-qr.png`, same private way). Old link doesn't load → re-read `pairing-url.txt` (auto-refreshed) and resend.

**Phone steps for the owner**:
1. Open the link on the spare phone (Android: Chrome; iPhone: Safari); allow the camera; do the "Phone prep" checklist.
2. Add to Home screen (Chrome ⋮ → *Add to Home screen*; Safari Share → *Add to Home Screen*) and open KALE from that icon.
3. Page in front, screen on (Android *Stay awake while charging*; iPhone Auto-Lock *Never*), charging.
4. Mount facing the plant, same position every time; tap-and-hold to lock focus if offered.
5. **Battery safety**: a phone kept at 100 % in a warm spot can swell. Use its charge limit, or a smart-plug cycle on the charger (on 1 h, off 2 h). Check for a bulging case; retire a swollen phone.

## 4. Verify the first photo
```bash
cd /workspace/kalecam && ./kalecam status            # wait for "camera phone-1: heartbeat Ns ago"
./kalecam capture phone-1 --wait 90                  # {"status":"done","file":"/workspace/grow-photos/..."}
```
Open it; tell the owner what you see (framing, focus, light) and adjust together. No heartbeat → page not open/visible or opened on another device; reopen KALE from the Home screen icon.

## 5. Everyday commands
```bash
kalecam status [--json]          # health, cameras, warnings
kalecam capture [camera|all] [--plant ID] --wait 90   # photo now; prints the path
kalecam photos [--plant ID] [-n 5]                    # newest photos, full paths
kalecam schedule show | set --interval 30 --start 06:00 --end 22:00 [--on|--off]
kalecam config set camera_plants.phone-1 <plant-id>   # retarget camera, no re-pair
kalecam reload [camera]          # phone page reloads
/workspace/kalecam/watchdog.sh --ensure-loop          # heal + keep loop running
```
Photos: `/workspace/grow-photos/<plant-id>/YYYY/MM/DD/HHMMSS-<camera>.jpg` (bot-local), `index.jsonl` per plant. Rotation/milestones: `python3 /workspace/kalecam/rotate.py`. Profile template: `/workspace/kalecam/profiles/PROFILE-TEMPLATE.md`. Reference: `/workspace/kalecam/reference/*.md`.

Warnings: stale heartbeat / `visible: false` → "open KALE on the phone, in front"; battery low → "plug the phone in"; tunnel DOWN → run the watchdog (the phone follows the new address).

## 6. Update to a newer release
1. Check the project's releases page and CHANGELOG. Update the three pinned values above only from that official release page.
2. Run §2 with the new values (add `--no-start` if it was installed that way). Upgrades in place: config, pairing, photos, state and public address kept; `reference/` refreshed.
3. Confirm: `ls /workspace/kalecam/reference/`; with a camera, `kalecam status` and one `kalecam capture`.

## 7. Remove
`cd <unpacked release> && ./install.sh --uninstall --yes` deletes `/workspace/kalecam` (photos kept). Delete the capture watchdog routine too.

## Optional: smart plugs (beta)
The release's `bridge/` (Shelly/Tasmota/older Kasa/Home Assistant, on an always-on home computer such as a Raspberry Pi) switches light, fan, pump. **Beta, not tested on real hardware.** Owner reads `bridge/README.md` (safety first). Bot side: `kalecam bridge pair` writes `/workspace/kalecam/secrets/bridge-pairing.txt` (a secret, same rules as the pairing link); `kalecam bridge status`, `kalecam bridge send fan on --duration 900 --wait 30`.
