---
name: yue2-mlx-generate
description: "Use when generating, setting up, or troubleshooting songs with yue2-mlx on Apple Silicon (MLX/Metal)."
---

# yue2-mlx generate

Operate [yue2-mlx](https://github.com/monomyth/yue2-mlx): lyrics + style → 48 kHz stereo WAV on Apple Silicon via MLX.

## Licensing (always mention when asked, and on first generate for a new owner)

- **Code**: Apache-2.0
- **Model weights**: **CC BY-NC 4.0 — NON-COMMERCIAL**. Generated audio must **not** be used commercially. The repo ships no weights; they download unmodified from `m-a-p/YuE2-3B` and `m-a-p/YuE2-Vae`.
- Do not modify, requantize, or re-upload checkpoint files. Do not commit weights or generated audio.

## Hard requirements

- Apple Silicon Mac (M1+), macOS 13.5+. **No CUDA path and no useful CPU path.** If `mlx.core.default_device()` is not a GPU device, **stop and report** — do not generate.
- Python 3.10+.
- ~8 GB free disk for weights; ~7.4 GB free memory during synthesis.
- Network only for the first weight download from Hugging Face.

## Setup (repo path is the owner's; ask if unknown)

```bash
git clone https://github.com/monomyth/yue2-mlx.git yue2-mlx
cd yue2-mlx
python3 -m venv .venv
source .venv/bin/activate
pip install -e .
```

## Verify before generating

Run `yue2-mlx doctor` and check:

1. `default device Device(gpu, 0)` — anything else means stop.
2. Checkpoint present/missing. MISSING is normal on a fresh install; first generate downloads (~7.4 GB). Or run `yue2-mlx download` first.

## Generating

Shortest useful (built-in example lyrics):

```bash
yue2-mlx song --duration 10
```

On an M2 Max, ~40s wall clock for 10s audio is normal (acoustic is expensive). Do not treat that as a hang.

With style + lyrics:

```bash
yue2-mlx song --duration 30 \
  --style "synthwave, male vocal, analog bass, 110 BPM" \
  --lyrics "[Verse]
...
[Chorus]
..."
```

Lyrics can come from `--lyrics-file`. Empty `--lyrics` is rejected — for instrumental, use section tags like `[Intro]` / `[Instrumental]` / `[Outro]` and put `instrumental, no vocals` in `--style`.

### How to write inputs

- `--style`: comma-separated descriptors (genre, instrumentation, vocal character, mood, tempo). Not a sentence. Include BPM when useful.
- `--lyrics`: section tags on their own lines (`[Verse]`, `[Chorus]`, `[Bridge]`, `[Outro]`). The model uses tags for arrangement.

### Flags that matter

- `--duration N`: **upper bound**, not a target (25 codec tokens/sec). Model may end earlier after a 200-token minimum. Shorter-than-requested audio is normal — not a failure.
- `--steps N`: acoustic solver steps (default 32). Lower = faster/rougher; first knob for runtime.
- `--mode full|melody|off`: full (default) writes a chord score first; `off` skips score (faster).
- `--seed N`: reproducibility.
- First successful run: keep `--duration` ≤ 10. After that, 30 is fine. For longer asks, set a higher ceiling but expect early end tokens.

## Expected non-failures

- `ignored N unused tensors` naming `encoder.layers...` — VAE encoder unused; ignore.
- `semantic hit its N-token budget; output may be cut short` — normal when duration maps to that budget. If WAV length matches duration, it is not cut short.

## Real failure modes

1. Metal watchdog `Impacting Interactivity` / `kIOGPUCommandBufferCallbackErrorImpactingInteractivity`: macOS killed a GPU command buffer (not OOM). Retry with lower eval_every if exposed; close other GPU apps.
2. `no lyrics file at '...'` — fix path or pass `--lyrics`.
3. `missing N checkpoint file(s)` — run `yue2-mlx download` or drop `--no-download`.

## Report back every successful run

Quote the final two timing lines verbatim, give the absolute WAV path, and confirm valid 48 kHz stereo with real signal. Remind that weights are **non-commercial (CC BY-NC 4.0)** when handing audio over.

## If you change the code

`pytest tests/ -q` then `ruff check yue2_mlx tests scripts` and `ruff format --check yue2_mlx tests scripts`.

## Do not

- Run on non-Apple / CUDA / CPU “anyway.”
- Overwrite downloaded checkpoints.
- Commit weights or WAVs.
- Raise duration above 30 on a true first run.
