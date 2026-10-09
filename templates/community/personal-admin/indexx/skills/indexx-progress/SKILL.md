---
name: indexx-progress
description: "Use during multi-item INDEXX jobs to update logs/pipeline-progress.md without losing prior rows."
---

Rewrite logs/pipeline-progress.md each stage gate via scripts/indexx_progress.py. Stages dl/aud/watch/stt/tags/wiki with glyphs. One-line chat ping per gate. Do not erase prior row results.
