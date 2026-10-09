---
name: grottle-gauge
description: "grottle-gauge"
---

# Grottle™ gauge install + paint — v0.14.1
Use when Grottle™ needs to install, upgrade or repaint the dashboard.
**Rule:** only code whose exact sha256 ships inside this released bot may run. Everything else downloaded is data or text, checked before use. On any mismatch: refuse, say why, fall back to neon / text mode.
The app (engine, learning, checker, skins) is hosted at `https://grottle.app/v0.14.1/app/`, every file's sha256 pinned below. `run` re-verifies the cache at every start, re-downloads changed files, then runs the app in a **no-network sandbox** (audit hook; child with cleared env, limits, timeout; `unshare -rn` if available). Only `start.py` fetches, before code runs. Install folder `/tmp/grottle-$CURSOR_CONVERSATION_ID/` (never a skill folder). Needs python3 + `rsvg-convert` or `cairosvg`; Pillow optional.
**TEXT MODE** (offline, download failed, checksum mismatch): `run` prints `TEXT MODE: …` and runs nothing. Say why in one line, answer readings in text (pace rules in grottle-reading); retry on the next reading, never in a loop.
**Skin studio:** `run studio guide` prints the hosted guide (text, sha-checked); follow it. `run studio new|apply|preview|check|fix|package …` runs pinned `skin_tools.py` in the same sandbox. Chat tools change only colours, text size, corners, bars, spacing, sign; output is a pure-SVG skin that must pass the checker; share ID `g1-`+12 hex; per-skin goldens. After `run studio package`, send the `CHAT SUBMIT:` lines as printed; never upload or submit for the user.
First-run approval card: unknown until a fresh-install test; if one appears, say once what is fetched and why.

## Install (first run / upgrade / if files missing)
```bash
python3 - <<'PY'
import os,re,sys,json,hashlib,subprocess
from pathlib import Path
out=Path("/tmp/grottle-"+os.environ.get("CURSOR_CONVERSATION_ID","default"));out.mkdir(parents=True,exist_ok=True)
root=Path(os.environ.get("GROTTLE_SKILLS_DIR","/home/box/agent-data/workflows"))
core=(root/"grottle-core"/"SKILL.md").read_text();me=(root/"grottle-gauge"/"SKILL.md").read_text()
for n,h in {"start.py":"02c8b115922f52ab6685f159ad1436585c1b2bd17eb9520b60e0d0e2def289ec","sandbox_guard.py":"17b9483966edb132f0f20ff00bfdbf026f3a26e31ad29bafe56e696ddbb7eca4","guarded_run.py":"80642e160f92d97bc4ae19a6310ead5961559139102f86ee6de8bff80ea76a3a"}.items():
    b=re.search(r"<!-- "+re.escape(n)+r" -->\n```python\n(.*?)```",core,re.S).group(1).encode()
    assert hashlib.sha256(b).hexdigest()==h,n+" differs from this release: refusing"
    (out/n).write_bytes(b)
(out/"pins.json").write_text(re.search(r"<!-- pins -->\n```json\n(.*?)```",me,re.S).group(1))
r=out/"run";r.write_text(f'#!/bin/sh\nexec "{sys.executable}" "$(dirname "$0")/start.py" "$@"\n');r.chmod(0o755)
for d in("skins/user","skins/out","tmp"):(out/d).mkdir(parents=True,exist_ok=True)
v=subprocess.run([str(r),"--verify-only"]).returncode
sys.exit(v or subprocess.run([str(r),"golden","all"]).returncode)
PY
```
`VERIFIED` = ready; the installer then runs `run golden all` (also auto-run after `skin install`/`skin use` and before a compare), so the first paint never says "no golden yet".
Upgrade from v0.12.x in the same folder: the first `run` migrates readings, resets, day baselines, reserve, prefs and first-open progress to schema 2 once, with a backup (`backup_pre_v013/`); prints `MIGRATED …`.
`run golden NAME|all` must reproduce Skin2's locked golden byte for byte: dual `d93c6993504edc1d5b010a34ff1a89a9873eed82088a80ac995ece36589b33cf`, dual_reserve `8073e1c35984464be2c5301c818ec7f5a875c5cec8506bbb41c247ae34579c06`, sand `9a02c0bd15a9ee5c11608d99b2ad5b1fe8f0a88e0834ad9e7ed8b93c85d17bca`, sg `c0bf2a5ba1d96caaa2170700306e26b457b442ee8a1739b86075086f1a9eae9c`. Another sha (other librsvg/font build) is OK: that file becomes this bot's golden; say so once.

## Paint (Δ>0 / baseline / import / `dash`)
`run dash [both|sand|sg]` = paint + compare (same flags). Full form:
`run [--sand N] [--sg N] [--sand-reset ISO] [--sg-reset ISO] [--screenshot [--confirmed]] [--reserve LEFT/CAP|none] [--reserve-rate MIN_PER_$] [--lane dual|sand|sg] --compare`
- Real clock (`--now`/`--days-left` = tests only).
- Stdout: `OUT`, `SKIN`, `NOTE`, `COMPARE`, `CHAT`, `CHAT NOTE:`, `CHAT OFFER:`, `RATE`, `SKIN FALLBACK` (Skin2 kept; say why), `CONFIRM` (nothing saved).
- `run help`: full command, output and skin-download reference (hosted text, sha-checked). Skins change only via `run skin install NAME_OR_SHARE_ID` (verified; any failure keeps Skin2).

## Pinned files (sha256)
<!-- pins -->
```json
{"":{"HELP.md":"19eeff05e51159532ec40a8437c88bb58cc8628ed074bf2e6896fdd1451570a6","plans.json":"707dc8df74494421e848d8649d07889143d6461756e1925544b12fccfeb8449d"},"core/checker":{"check_skin.py":"68d515e52cb4f284e69828e1e6f897992eca0513b83f18b384a0d4b29862697a"},"core/engine":{"allowlist.json":"6c5bf4b16bee20364517520489291673b6a34e69a2ff416fcd44c479941d9ed9","grottle.py":"a2cc0f35e13058ee11043bf614280334e456bb8c9f554deb56f174fbc8a93d68","grottle_engine.py":"2d30fef48e4070abe82cbdfebf362b73085bc4f53bf28894a751ce3feadd4547","learning.py":"9031b6d651d62c963f44ba9f9863d1a6d6a82ef3b6037d1bac0c198ca90b56a3","skin_dl.py":"5c5005da1f98319261f48076bde66045370ba44ca843c8b59ba76f7464cfce4d","skin_tools.py":"f2cc7eba3f49d4c3caa1655ff854666979cfee605a0f1b8b6d01f1bbbfdc752a","skins_v014.py":"7af7cbe0148a2c90c852cbd2ca8fadccf4cda5e94499c3add119d3e48a08a608","state_v2.py":"584b58a93dd21f62d2f0afb409431569ddbb1e99779e841d8c2b2c85ba4b7218","wams.py":"5c110bf402d29ac5ad2a23e8eb035b4550ff210548fb847eac0138a3edbc43e1"},"core/skins/skin2/art":{"defs.svg":"5af7b46d3e9138ec906c78934680d14b79496221edc67d372d21cc00d8f266f5","roboto_widths.json":"28383caf28655979674acc3f47ee7ab02795bd99caa25a9a5c5340086b62ccb9","sign_paths.json":"7d281585e014984a3eabf770a4ac403c431eebc8eba6f6ceeeb062ca64e66bc0"},"core/skins/skin2":{"bindings.py":"a4aa4891cdb0b5320392c76aaae3466a8d2dd7bdfd866b305500dd58a9cfef21","skin.json":"7666e7698ebb3fbcf828de48e918f3e0c1521c49297fd62353d65934146964c6"},"core/skins/skin2/golden":{"GOLDEN.json":"55831bd66a01c4559ec2d708001a0e495ad7dcea7ad7811d6ba2f6cdb71549b4","GOLDEN.sha256":"500c2f1a34461131eb7a78a6394a257e268db5a788ca23d7bf5e283000120a4b"},"skin_api":{"slots.json":"37dc0e3f519a2dacc8f9beec0819b58773344ad21f0a72ffac41a2b5b2ddd245"},"studio":{"GUIDE.md":"f0258cd7df22528dacc08335952fbe9f5d79fa4a71540ac488f750ce186093ff"}}
```

## Show
Attach **only** the live dashboard PNG.
**Dash delivery (HARD):** exactly as in grottle-reading: PNG alone first and wait for its result, then the `CHAT` text, then the `CHAT OFFER:` last in its own call; never in parallel.
 `COMPARE` lines are internal: `live: …` = expected changes; `UNEXPECTED (chrome)` → describe in words (never show the golden or a side-by-side). Chat = the `CHAT` lines as printed.
