---
name: mv-studio-setup
description: "Use this before the first song on this user's computer, or when the studio server doesn't answer."
---

When to use: before the first song on this user's computer, or when the studio server doesn't answer.
Supported: Apple Silicon Macs (bf16 model, about 16 GB free disk) and Linux with an NVIDIA GPU (int8 model). On anything else, report "unsupported computer" to Chief Vibe Officer and stop.
1. Check on the user's computer: curl -s -m 3 http://127.0.0.1:8188/system_stats ; cat ~/MusicVideoStudio/model.txt . If both answer, skip to step 5.
2. Write the file install_studio.sh below, exactly, to ~/MusicVideoStudio/install_studio.sh on the user's computer.
3. Run it detached. Grok Bot kills plain background jobs (nohup ... &) when your command ends, so start it in its own session, exactly like this on a Mac:
   cd ~/MusicVideoStudio && perl -MPOSIX -e 'POSIX::setsid()||die;exec(@ARGV)' -- bash install_studio.sh > install.out 2>&1 < /dev/null &
   On Linux use the same line with "setsid" in place of the perl part.
   Tell Chief Vibe Officer it started: it downloads ComfyUI, Python packages and a 4 to 8 GB model, 10 to 30 minutes.
4. Don't end your turn while it runs (nothing wakes you later). Wait with a bounded command that returns when it's finished or after 5 minutes, and repeat it right away until finished:
   for i in $(seq 60); do grep -qE 'READY|UNSUPPORTED|NOT ENOUGH|rror' ~/MusicVideoStudio/install.out && break; sleep 5; done; tail -n 4 ~/MusicVideoStudio/install.out
   Done when a line starts with "[studio] READY" and says "YuE2 nodes: True". "UNSUPPORTED" or "NOT ENOUGH DISK": stop and report. If it stops with an error, re-run step 3 once (it resumes), then report.
   If the server isn't running later (after a reboot), step 3 restarts it in seconds.
5. Write the file run_take.py below, exactly, to ~/MusicVideoStudio/run_take.py on the user's computer.

=== install_studio.sh ===
#!/bin/bash
# Music-video studio: installs a headless ComfyUI server with YuE2 on macOS (Apple Silicon) or Linux (NVIDIA).
# Idempotent: re-running skips finished steps. Usage: bash install_studio.sh   (env: STUDIO_DIR, PORT, SKIP_MODEL=1)
set -euo pipefail
STUDIO="${STUDIO_DIR:-$HOME/MusicVideoStudio}"
CUI="$STUDIO/ComfyUI"
PORT="${PORT:-8188}"
LOG="$STUDIO/install.log"
mkdir -p "$STUDIO"
say() { echo "[studio] $*" | tee -a "$LOG"; }

OS=$(uname -s); ARCH=$(uname -m)
say "platform $OS $ARCH"
if [ "$OS" = "Darwin" ] && [ "$ARCH" = "arm64" ]; then MODEL="yue2_3b_bf16.safetensors"; NEED_GB=16
elif [ "$OS" = "Linux" ] && command -v nvidia-smi >/dev/null 2>&1; then MODEL="yue2_3b_int8_convrot.safetensors"; NEED_GB=12
else say "UNSUPPORTED: needs an Apple Silicon Mac or Linux with an NVIDIA GPU"; exit 2; fi
FREE_GB=$(df -Pk "$STUDIO" | awk 'NR==2{print int($4/1048576)}')
say "free disk ${FREE_GB} GB (need about ${NEED_GB} GB)"
if [ "$FREE_GB" -lt "$NEED_GB" ] && [ ! -f "$CUI/models/checkpoints/$MODEL" ]; then say "NOT ENOUGH DISK"; exit 3; fi

# 1. uv (standalone Python manager, no admin rights needed)
UV=$(command -v uv || true)
if [ -z "$UV" ]; then
  [ -x "$HOME/.local/bin/uv" ] || curl -LsSf https://astral.sh/uv/install.sh | env UV_NO_MODIFY_PATH=1 sh >>"$LOG" 2>&1
  UV="$HOME/.local/bin/uv"
fi
say "uv: $("$UV" --version)"

# 2. ComfyUI source, latest release (no git needed)
if [ ! -f "$CUI/main.py" ]; then
  TAG=$(curl -sI https://github.com/Comfy-Org/ComfyUI/releases/latest | awk 'tolower($1)=="location:"{print $2}' | tr -d '\r' | awk -F/ '{print $NF}')
  say "downloading ComfyUI $TAG"
  TMP="$STUDIO/.src"; rm -rf "$TMP"; mkdir -p "$TMP"
  curl -fsSL "https://github.com/Comfy-Org/ComfyUI/archive/refs/tags/$TAG.tar.gz" | tar xz -C "$TMP"
  mv "$TMP"/ComfyUI-* "$CUI"; rm -rf "$TMP"
fi

# 3. Python 3.12 venv + PyTorch + ComfyUI requirements
if [ ! -x "$CUI/.venv/bin/python" ]; then "$UV" venv --python 3.12 "$CUI/.venv" >>"$LOG" 2>&1; fi
PY="$CUI/.venv/bin/python"
if ! "$PY" -c "import torch, comfy_extras" >/dev/null 2>&1 || [ ! -f "$STUDIO/.deps-ok" ]; then
  say "installing PyTorch and ComfyUI requirements (a few minutes)"
  "$UV" pip install --python "$PY" torch torchvision torchaudio >>"$LOG" 2>&1
  "$UV" pip install --python "$PY" -r "$CUI/requirements.txt" >>"$LOG" 2>&1
  touch "$STUDIO/.deps-ok"
fi
say "torch $("$PY" -c 'import torch;print(torch.__version__, "mps" if torch.backends.mps.is_available() else ("cuda" if torch.cuda.is_available() else "cpu"))')"

# 4. YuE2 model (resumable download)
mkdir -p "$CUI/models/checkpoints"
if [ "${SKIP_MODEL:-0}" != "1" ]; then
  URL="https://huggingface.co/Comfy-Org/YuE2/resolve/main/checkpoints/$MODEL"
  WANT=$(curl -sIL "$URL" | awk 'tolower($1)=="content-length:"{v=$2} END{print v}' | tr -d '\r')
  HAVE=$(stat -f %z "$CUI/models/checkpoints/$MODEL" 2>/dev/null || stat -c %s "$CUI/models/checkpoints/$MODEL" 2>/dev/null || echo 0)
  if [ "$HAVE" != "$WANT" ]; then
    say "downloading $MODEL ($((WANT/1000000)) MB)"
    curl -fL -C - --retry 5 -o "$CUI/models/checkpoints/$MODEL" "$URL" >>"$LOG" 2>&1
  fi
  say "model ok: $MODEL"
fi
echo "$MODEL" > "$STUDIO/model.txt"

# 5. Start the server in the background if it isn't running
if ! curl -s -m 3 "http://127.0.0.1:$PORT/system_stats" >/dev/null; then
  say "starting ComfyUI on 127.0.0.1:$PORT"
  # own session, so the server outlives the command that started it
  if command -v setsid >/dev/null 2>&1; then DETACH="setsid"; else DETACH="perl -MPOSIX -e POSIX::setsid()||die;exec(@ARGV) --"; fi
  $DETACH "$PY" "$CUI/main.py" --listen 127.0.0.1 --port "$PORT" --output-directory "$STUDIO/output" > "$STUDIO/comfyui.log" 2>&1 < /dev/null &
  echo $! > "$STUDIO/comfyui.pid"
  for i in $(seq 1 90); do curl -s -m 2 "http://127.0.0.1:$PORT/system_stats" >/dev/null && break; sleep 2; done
fi
VER=$(curl -s -m 5 "http://127.0.0.1:$PORT/system_stats" | "$PY" -c 'import sys,json;print(json.load(sys.stdin)["system"]["comfyui_version"])')
NODES=$(curl -s -m 30 "http://127.0.0.1:$PORT/object_info" | "$PY" -c 'import sys,json;d=json.load(sys.stdin);print(all(k in d for k in ["YuE2GenerateABC","YuE2GenerateMusic","EmptyYuE2LatentAudio","SaveAudioAdvanced"]))')
say "READY ComfyUI $VER on port $PORT, YuE2 nodes: $NODES, model: $MODEL, folder: $STUDIO"

=== run_take.py ===
"""Music-video studio: generate one YuE2 song take through the local ComfyUI server.
Run with the studio's own Python, in the background:
  nohup ~/MusicVideoStudio/ComfyUI/.venv/bin/python ~/MusicVideoStudio/run_take.py \
    --lyrics L.txt --style S.txt --seconds 60 --seed 1 --out DIR > DIR/take-1.log 2>&1 &
Writes DIR/take-<seed>.flac, DIR/take-<seed>.abc and DIR/take-<seed>.json (result), then exits."""
import argparse, json, shutil, time, urllib.request, urllib.error
from pathlib import Path

ap = argparse.ArgumentParser()
ap.add_argument("--lyrics", required=True); ap.add_argument("--style", required=True)
ap.add_argument("--seconds", type=float, required=True); ap.add_argument("--seed", type=int, default=1)
ap.add_argument("--out", required=True); ap.add_argument("--port", type=int, default=8188)
ap.add_argument("--studio", default=str(Path.home() / "MusicVideoStudio"))
a = ap.parse_args()
studio, out = Path(a.studio), Path(a.out); out.mkdir(parents=True, exist_ok=True)
base = f"http://127.0.0.1:{a.port}"
model = (studio / "model.txt").read_text().strip()
lyrics = Path(a.lyrics).read_text(encoding="utf-8").strip()
style = Path(a.style).read_text(encoding="utf-8").strip()
tag = f"mv_{a.seed}_{int(time.time())}"

wf = {
 "15": {"class_type": "CheckpointLoaderSimple", "inputs": {"ckpt_name": model}},
 "24": {"class_type": "YuE2GenerateABC", "inputs": {"clip": ["15", 1], "style": style, "lyrics": lyrics, "seed": a.seed,
        "mode": "full", "max_abc_tokens": 8192, "temperature": 0.7, "top_p": 0.9, "top_k": 30,
        "repetition_penalty": 1.005, "penalty_window": 100}},
 "21": {"class_type": "SaveText", "inputs": {"text": ["24", 0], "filename_prefix": f"audio/{tag}_abc", "format": "txt"}},
 "25": {"class_type": "YuE2GenerateMusic", "inputs": {"clip": ["15", 1], "style": style, "lyrics": lyrics, "abc": ["24", 0],
        "seed": a.seed, "mode": "full", "max_duration": a.seconds, "temperature": 1.0, "top_p": 0.95, "top_k": 100,
        "repetition_penalty": 1.2, "cfg_scale": 1.0}},
 "18": {"class_type": "ConditioningZeroOut", "inputs": {"conditioning": ["25", 0]}},
 "5":  {"class_type": "EmptyYuE2LatentAudio", "inputs": {"seconds": ["25", 1], "batch_size": 1}},
 "8":  {"class_type": "KSampler", "inputs": {"model": ["15", 0], "seed": a.seed, "steps": 32, "cfg": 1.0, "sampler_name": "dpm_2",
        "scheduler": "sgm_uniform", "positive": ["25", 0], "negative": ["18", 0], "latent_image": ["5", 0], "denoise": 1.0}},
 "9":  {"class_type": "VAEDecodeAudio", "inputs": {"samples": ["8", 0], "vae": ["15", 2]}},
 "10": {"class_type": "SaveAudioAdvanced", "inputs": {"audio": ["9", 0], "filename_prefix": f"audio/{tag}", "format": "flac"}},
}

def call(path, body=None, timeout=60):
    req = urllib.request.Request(base + path, data=json.dumps(body).encode() if body else None,
                                 headers={"Content-Type": "application/json"}, method="POST" if body else "GET")
    with urllib.request.urlopen(req, timeout=timeout) as r:
        raw = r.read(); return json.loads(raw) if raw else None

t0 = time.time()
try:
    pid = call("/prompt", {"prompt": wf})["prompt_id"]
except urllib.error.HTTPError as e:
    raise SystemExit("ComfyUI rejected the job: " + e.read().decode(errors="replace"))
print(f"queued {pid} seconds={a.seconds} seed={a.seed} model={model}", flush=True)
while True:
    time.sleep(10)
    try:
        h = call(f"/history/{pid}", timeout=30) or {}
    except Exception as e:
        print("poll:", e, flush=True); continue
    st = (h.get(pid) or {}).get("status") or {}
    if st.get("status_str") == "error":
        raise SystemExit("ComfyUI error: " + json.dumps(st)[:3000])
    if st.get("completed"):
        break
    print(f"running {int(time.time()-t0)} s", flush=True)

outs = h[pid]["outputs"]; outdir = studio / "output"
audio = [x for o in outs.values() for x in o.get("audio", [])][0]
flac = out / f"take-{a.seed}.flac"
shutil.copy2(outdir / audio.get("subfolder", "") / audio["filename"], flac)
abc = sorted((outdir / "audio").glob(f"{tag}_abc*.txt"))
if abc: shutil.copy2(abc[-1], out / f"take-{a.seed}.abc")
res = {"take": str(flac), "abc": str(out / f"take-{a.seed}.abc") if abc else None, "seed": a.seed,
       "requested_seconds": a.seconds, "render_seconds": round(time.time() - t0), "model": model}
(out / f"take-{a.seed}.json").write_text(json.dumps(res, indent=2))
print("DONE " + json.dumps(res), flush=True)
