---
name: trellis-2-image-to-3d
description: "Use this when generating a GLB from a single photo/sheet with Microsoft TRELLIS.2 (HF Space free or fal.ai paid)."
---

# TRELLIS.2 (microsoft/TRELLIS.2-4B)

Image → PBR GLB. MIT weights on Hugging Face. Prefer for high-fidelity single-image heroes/props. Always do mesh cleanup after; no built-in auto-rig.

## Paths (cheapest first)

1. **HF Space (free):** https://huggingface.co/spaces/microsoft/TRELLIS.2 — upload PNG (transparent bg best) → Generate → download GLB. Prefer `gradio_client.submit` over `predict` (preprocess is flaky with predict when the Space’s BRIA rembg hop fails).
2. **fal.ai API (paid):** endpoint `fal-ai/trellis-2` — needs a FAL key. Ask before spend.
3. **Self-host:** Linux + NVIDIA ≥24GB; not the default on a shared agent box.

## fal pricing (per generation)

| Resolution | USD |
|------------|-----|
| 512 | $0.25 |
| 1024 | $0.30 |
| 1536 | $0.35 |

Estimate first; pause above a small budget (e.g. $0.50) unless the user pre-approves. One fal call is usually under that; batches are not.

## Notes

- Always export **GLB**.
- Hub/Space token ops belong with the Hugging Face specialist pattern (load token from secrets, never print).
