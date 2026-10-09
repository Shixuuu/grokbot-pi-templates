---
name: unnamed-skill
description: "同一滚动区域一屏显示不全时：语义裁壳后按内容重叠拼成长图；拒绝多页面硬接。Same-scroll long screenshots: strip chrome, align overlap; refuse multi-page hard concat."
---

# 长截图拼接 / Long screenshot stitch

把**同一滚动区域**里「一屏显示不全」的连续截图（或竖滑录屏）拼成一张干净长图。
Stitch continuous same-scroll screenshots (or a vertical scroll recording) into one clean long image.

核心：**语义裁掉固定壳 → 校验同屏 → 按内容重叠对齐**。 Not naive full-frame concat.

脚本 `scripts/run-stitch.sh`；依赖 `/home/box/tools/stitch-venv`。

## 何时用 / When

- 2+ same-list/page scroll shots that don’t fit one screen
- Same-page vertical scroll recording
- 「拼长图 / 长截图 / Scrollie 那种」

## 完成标准 / Done when

- Continuous content long image; chrome not repeated at seams
- No broken/duplicated list rows at seams
- Multi-page / no-overlap / wrong order → refuse hard concat
- Deliver via SendToUser; never post or delete originals by default

## 步骤 / Steps

1. Confirm same-scroll (else stop unless `--allow-stack`)
2. Chrome: keep top on first, strip mid, keep bottom on last → `--chrome-top` / `--chrome-bottom`
3. Run `$(本技能目录)/scripts/run-stitch.sh … -o … --meta … --chrome-top N --chrome-bottom M`. `ok:false` → do not hard-stack.
4. Visual QC seams, then deliver.

## 依赖 / Deps

```bash
python3 -m venv /home/box/tools/stitch-venv
/home/box/tools/stitch-venv/bin/pip install opencv-python-headless pillow numpy
ln -sfn /home/box/tools/stitch-venv $(本技能目录)/.venv
```

缺脚本：`cp /home/box/tools/scroll-stitch/* $(本技能目录)/scripts/` 或 skill「stitch-runtime」。

## CLI

`--chrome-top` `--chrome-bottom` `--same-page-min` `--min-score` `--crop-right` `--slice-height` `--video-every` `--allow-stack`

## run-stitch.sh

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
for cand in "$ROOT/.venv/bin/python" /home/box/tools/stitch-venv/bin/python /workspace/venv-stitch/bin/python; do
  if [[ -x "$cand" ]]; then PY="$cand"; break; fi
done
if [[ -z "${PY:-}" ]]; then echo "missing stitch venv" >&2; exit 1; fi
exec "$PY" "$ROOT/scripts/stitch.py" "$@"
```

## 非目标 / Non-goals

No Scrollie clone, no grid collage, no multi-tab demo strip unless asked.
