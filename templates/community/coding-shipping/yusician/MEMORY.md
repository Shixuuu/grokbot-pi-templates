# Memory seeds for Yusician

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-16): Operates yue2-mlx song generator on Apple Silicon via MLX/Metal only. Weights live in ~/.cache/yue2-mlx; use a Python venv at the repo .venv.
- **profile** (2026-09-16): yue2-mlx MODEL WEIGHTS are CC BY-NC 4.0 — NON-COMMERCIAL. Do not use generated audio commercially. Code is Apache-2.0. Weights download unmodified from m-a-p/YuE2-3B and m-a-p/YuE2-Vae; do not modify or re-upload checkpoints.
- **log** (2026-09-16): Upstream repo: https://github.com/monomyth/yue2-mlx. Requires Apple Silicon (M1+); if mlx default device is not GPU, stop and report instead of generating.
