---
name: sprite-maker
description: "Turn a photo or a text description of a character into a 2D game sprite: an approved cartoon anchor image, then walk/idle/run/jump/attack animations (one drawn 4x2 pose sheet per animation, sliced into frames) packed as a 1280x512 sprite sheet (5x2 grid of 256px cells, feet bottom-centre) with honest QA, checker-background GIF and MP4 previews and Unity/Godot/GIF exports. Uses only built-in tools (GenerateImage, Shell with python + ffmpeg), so the user's own plan credit pays. No video generation. Use when someone asks for a game sprite, sprite sheet, character animation, or walk cycle."
---

# Sprite maker (self-contained)

Goal: the user gives a photo or a description and this bot delivers the animations itself, correctly, with no outside key, service or tool. Do not take shortcuts or give up when something is hard: diagnose, fix, and re-run. Honest QA still applies (never loosen a limit, never hide a failure).

Everything lives in this bot and these two skills (`sprite-maker`, `sprite-kit-code`). There is NO video-generation step: never generate, request or pay for video. Images come only from the built-in GenerateImage tool (user's own credit); slicing, keying, QA, previews and exports run locally in Python + ffmpeg. Do not use or ask for any API key, token, account or file from another bot, box or person.

Work folder: `$SPRITE_KIT_DIR` (default `/workspace/sprite-kit`). Begin every Shell block with:
`export SPRITE_KIT_DIR="${SPRITE_KIT_DIR:-/workspace/sprite-kit}"; cd "$SPRITE_KIT_DIR"`

## What works (tested, all QA passed)

| Step | Tool | Status |
|---|---|---|
| Cartoon anchor from a photo or text | GenerateImage | Works. User's plan credit. |
| **Animation from ONE pose-sheet image per animation** (8 poses drawn together, then sliced) | GenerateImage + `slice_sheet.py` + `sprite_kit.py frames` | **Primary route.** 1 image per animation. Drawing all poses in one image keeps the character identical across frames. |
| Animation from a clip the user already has | `sprite_kit.py video` | Works, free. Never generate a clip. |
| Frames drawn one image at a time | GenerateImage | DO NOT USE. Tested: poses barely change and the character can drift. |
| Keying, cells, sheet, QA, GIF/MP4 previews, exports | Shell: python + ffmpeg (`sprite-kit-code`) | Works, free. |
| Judging likeness / dropped features | n/a | The bot cannot reliably judge; the user must. |

Default facing is **right** (side view facing right). Use `[FACING]=right` in every prompt unless the user asks for left; `sprite_kit.py --facing` defaults to right and `--mirror auto` fixes wrong-way sheets for free.

GenerateImage rules (tested, do not assume otherwise):
- **References must be paths inside YOUR OWN assets folder, exactly as the tool returned them.** Pass the absolute path GenerateImage returned to you (or the path of a file the user uploaded to you) in `reference_image_paths`. Paths in another bot's assets folder, or arbitrary box paths, are silently ignored (a different character comes back). If a reference is elsewhere, first get it into your own assets folder (e.g. attach/upload it in this chat), then use that path. Never hard-code a path from an example.
- Keep ANCHOR_TOOL_PATH = the path returned for the approved anchor, and SHEET1_TOOL_PATH = the path returned for the first finished pose sheet. If a direct call will not take an array of references, use the CallDynamicTool form of the tool.
- **Aspect ratio:** "1:1" is ignored; results are wide (about 1280x720). For pose sheets ask for 16:9.
- **Output** is .jpg; the slicer reads it directly; convert the anchor to png for the kit.
- **Visibility:** images may not show in the user's chat. After every image ALSO send the file as an attachment.
- Check every generated image is the same character. If not, stop and tell the user.

Never promise a result. Do not post, email or share anything; deliver files in the chat only.

## Rules
1. Keep every distinctive feature visible in the photo (glasses, hair style/colour, facial hair ONLY if the photo has it, hat, jewelry, outfit, accessories). Never add a feature the photo lacks. No feature-specific special cases.
2. Show the anchor and get an explicit OK before ANY further generation. Before generating pose sheets, tell the user how many images (one per animation) and wait for a yes. You cannot see the exact credit cost; say so.
3. The character must be identical across every animation. Always reference ANCHOR_TOOL_PATH; for every sheet AFTER the first, also pass SHEET1_TOOL_PATH. Say "identical ... in every cell", and run the cross-animation check in step 4.
4. Report QA honestly: every check pass/fail with the measured value and limit. Also report what the numbers cannot see (weak poses, dropped features) and ask the user to judge the previews.
5. Keep replies short and plain; send a quick acknowledgement before slow work.
6. Do not mention or name any underlying model or vendor. Do not store, print or request keys or tokens.
7. Stop spending when results show a method is not working; report it and change method rather than finishing the batch.

## Steps

### 0. Setup (once per box; no keys needed)
If `$SPRITE_KIT_DIR/sprite_kit.py` is missing, read the skill `sprite-kit-code` and run its three blocks in order (setup: venv + `pip install numpy pillow scipy` + ffmpeg check; write `sprite_kit.py`; selftest, expect `SELFTEST OK`). Then write the slicer (cuts a 4x2 pose sheet into 8 frames `s01.png`..`s08.png`; with a first and last standing frame given, it shifts row 2 so its feet sit on the same line as row 1):

```bash
export SPRITE_KIT_DIR="${SPRITE_KIT_DIR:-/workspace/sprite-kit}"
mkdir -p "$SPRITE_KIT_DIR"
cat > "$SPRITE_KIT_DIR/slice_sheet.py" <<'PYEOF'
import sys, os, numpy as np
from PIL import Image
# usage: slice_sheet.py sheet.jpg outdir [first_standing_frame last_standing_frame]
src, out = sys.argv[1], sys.argv[2]
sf, sl = (int(sys.argv[3]), int(sys.argv[4])) if len(sys.argv) > 4 else (None, None)
im = Image.open(src).convert('RGB'); W, H = im.size; cw, ch = W // 4, H // 2
a = np.array(im).astype(int)
def bottom(i):
    r, c = divmod(i, 4); cell = a[r*ch:(r+1)*ch, c*cw:(c+1)*cw]
    m = (np.abs(cell - cell[0, 0]).sum(2) > 60); ys = np.where(m.any(1))[0]; return int(ys.max())
dy = 0
if sf:
    dy = bottom(sf - 1) - bottom(sl - 1)
    print('bottoms', bottom(sf - 1), bottom(sl - 1), 'row2 shift', dy)
os.makedirs(out, exist_ok=True)
pad = Image.new('RGB', (W, H + abs(dy) * 2), tuple(a[0, 0])); pad.paste(im, (0, abs(dy)))
for i in range(8):
    r, c = divmod(i, 4); off = abs(dy) - (dy if r == 1 else 0)
    pad.crop((c*cw, r*ch + off, (c+1)*cw, (r+1)*ch + off)).save(f'{out}/s{i+1:02d}.png')
PYEOF
"$SPRITE_KIT_DIR/.venv/bin/python" -c "import ast,sys; ast.parse(open(sys.argv[1]).read()); print('slicer OK')" "$SPRITE_KIT_DIR/slice_sheet.py"
```

### 1. Intake
Get: the photo (it arrives in your own assets/uploads; also copy it into `$SPRITE_KIT_DIR/in/`) or a text description; a name; which animations (walk, idle, run, jump, attack/headbutt/punch); body type (`biped` for people, `compact` for small animals/blobs). Ask for anything missing in one short message.

### 2. Anchor (one image, then STOP for approval)
Call GenerateImage once, `reference_image_paths` = [the photo's path in your own assets folder] when a photo exists. Prompt (fill the brackets with what you actually see, or what the user described):

"Turn the person in the reference photo into a cute stylized 2D game character, full body, standing, side view facing [FACING], bold outline, flat color, plain flat solid white background with no shadow and no gradient, centered, whole body and both feet visible. Keep the face friendly and recognizable but cartoon-stylized. Use the same outfit and hair as the reference. Keep every distinctive feature of the reference visible: [list]. Do not add features the reference does not have."

Text-only: "Create a cute stylized 2D game character, [description], full body, standing, side view facing [FACING], bold outline, flat color, plain flat solid white background with no shadow and no gradient, centered, whole body and both feet visible."

Record ANCHOR_TOOL_PATH, convert it to `$SPRITE_KIT_DIR/in/anchor.png`:
```bash
export SPRITE_KIT_DIR="${SPRITE_KIT_DIR:-/workspace/sprite-kit}"; cd "$SPRITE_KIT_DIR"
.venv/bin/python -c "import sys; from PIL import Image; Image.open(sys.argv[1]).convert('RGB').save('in/anchor.png')" "<ANCHOR_TOOL_PATH>"
```
Attach it, note which way it actually faces (ANCHOR_FACING, normally right), list the features you tried to keep, and ask "Does this look right? Anything missing or wrong?" Regenerate only if asked (say each one spends credit). Do nothing else until approved.

### 3. Pose sheets (primary route)
One sheet per animation. Jump and attack/headbutt/punch always get their OWN sheet with exaggerated poses (a combined 24-cell sheet was tested: poses came out timid, the jump never got airborne). Subtle loops (walk, idle, run) may share one sheet only if the user wants the cheapest option; say poses will be milder. Tell the user: "N images, on your credit. OK?" and wait for yes.

For each sheet call GenerateImage (16:9, `reference_image_paths` = [ANCHOR_TOOL_PATH], plus SHEET1_TOOL_PATH after the first sheet) with:

"A 2D game sprite sheet of the same character as the reference (identical face, outfit, colours, art style, outline and body size in every cell). A grid of 8 cells, 4 columns by 2 rows, equal size, one [ANIMATION] pose per cell, reading left to right then top to bottom. Every cell: side view facing [FACING], full body, eyes open. Plain flat solid white background, no grid lines, no borders, no ground line, no floor line, no shadows, no text, no motion lines. EXAGGERATE THE POSES so each cell is clearly different: [POSES]. The character must look exactly like the reference in every cell."

POSES (8 cells):
- walk: "1 contact, front leg reaching forward and back leg behind; 2 down, weight on front leg, knee bent; 3 passing, legs together under the body, back foot lifted swinging forward; 4 up, body highest, pushing off; 5-8 the same four with legs swapped. Feet at the bottom of every cell."
- run: "1 long contact stride; 2 down; 3 passing, back knee high; 4 flight, both feet off the ground; 5-8 the same, legs swapped."
- jump: "Draw the character SMALL, about 35% of the cell height. Body VERTICAL and upright in every cell, head above the hips, never horizontal, never lying down, never diving. HEIGHT IN THE CELL MATTERS MOST. Cells 1, 2, 7, 8 are on the ground: feet at the very bottom edge of the cell. Cells 3, 4, 5, 6 are ALL IN THE AIR, floating with a big empty white gap under the feet: cell 3 feet at half the cell height, legs straight down; cell 4 at the very top of the cell, legs tucked, huge gap below; cell 5 at the very top of the cell, legs tucked, huge gap below; cell 6 feet at half the cell height, legs straight down. Poses: 1 standing; 2 knees slightly bent; 3 in the air rising, arms up; 4 top, legs tucked; 5 top, legs tucked; 6 in the air coming down, legs straight; 7 landed, knees slightly bent; 8 standing." (Tested: an earlier version that called cell 2 and 7 "crouch" and cell 3 "springing up" got cell 3 drawn on the ground, 2 airborne frames; this wording gave 4 airborne frames, 74 px rise, on a fresh character.)
- attack/punch: "1 fists-up ready stance; 2 crouched low, striking arm pulled far back; 3 deepest wind-up; 4 launching forward, body low and stretched; 5 full punch, arm fully extended far out ahead; 6 follow-through, still forward; 7 pulling back; 8 back to ready stance. Feet at the bottom of every cell." (For a headbutt or other strike, swap in the striking body part.)
- idle: "subtle breathing, small chest and shoulder rise and settle, feet still at the bottom of every cell" (warn that idle is usually subtle).

Attach each sheet. Then slice and build (jump: slicer args `1 8`; all others none; use `--anim attack` for any punch/headbutt/strike; `--anchor-facing` = ANCHOR_FACING from step 2, since auto-detect fails on near-symmetric characters such as people):
```bash
export SPRITE_KIT_DIR="${SPRITE_KIT_DIR:-/workspace/sprite-kit}"; cd "$SPRITE_KIT_DIR"
.venv/bin/python slice_sheet.py "<SHEET_TOOL_PATH>" in/seq_<anim> [1 8 for jump]
.venv/bin/python sprite_kit.py frames --dir in/seq_<anim> --anchor in/anchor.png --name <Name> --anim <anim> --body <biped|compact> --out runs/<name>-<anim> --export all --facing right --mirror auto --anchor-facing <ANCHOR_FACING>
```
If a sheet came back with weak or repeated poses, regenerate that ONE sheet with stronger exaggeration (say it spends 1 more image). If the character differs from the anchor, regenerate that sheet.

### 3a. Lessons from testing (apply these)
- **Never ask for a "ground line" or "floor line"**; the tool draws brown lines under every cell. Always say "no ground line, no floor line".
- **Jump:** must pass `jump_rise` and `airborne_frames` (>=3 frames whose bottom edge is >=12 px above the grounded bottom edge). Words like "deep crouch", "push-off", "falling" produced lying/plank/diving poses, and "higher" alone gave only 2 airborne frames; the small-character + per-cell vertical-position wording above gave 4 airborne frames (68 px rise). If it still fails, retry ONCE (1 image) with the airborne cells drawn even higher, then report the real numbers. Never loosen the limit. The slicer's `1 8` row-2 alignment cannot fix airborne frames drawn on the ground.
- **Walk loop seam** (`loop_seam` ratio > 1.5) means frame 8 does not flow into frame 1. Free fix before regenerating: build again from frames 2-8 (`mkdir in/seq_walk_b && cp in/seq_walk/s0[2-8].png in/seq_walk_b/`), or frames 2-7; use the variant that passes and tell the user it is a 7- (or 6-) frame loop.
- **Punch/attack** with the fists-up / fully-extended wording passed first try.
- **Facing:** sheets that come out facing the wrong way are mirrored for free by `--mirror auto` before QA/export; the kit records it in `-qa.json` / manifest (`mirroring.disclosed_workaround`). Always tell the user when mirroring was used. `--mirror on|off` forces or disables it.
- **Facing QA check:** each shipped frame is compared with the anchor and the mirrored anchor; it passes only if every frame faces the requested direction. Do not loosen it.

### 3V. If the user already has a clip
Save it to `$SPRITE_KIT_DIR/in/clip.mp4` (3-10 s, side view, static camera, flat single-colour background) and run `.venv/bin/python sprite_kit.py video --video in/clip.mp4 --anchor in/anchor.png --name <Name> --anim <anim> --body <...> --out runs/<name>-<anim> --export all --facing right --mirror auto --anchor-facing <ANCHOR_FACING>`. Walk/run need about 2 s of steady motion. Never generate a clip.

### 4. Report and cross-animation check
For each animation attach `<Name>-<anim>-sheet.png`, `-preview-2x-checker.gif` and `-preview-2x-checker.mp4`. List EVERY check from `-qa.json` as pass/fail with value and limit (size_height, size_width, color_drift, key_fringe, loop_seam, jump_rise + airborne_frames for jump, facing, frame_match), and say if mirroring was applied. Then run the cross-animation check:
```bash
export SPRITE_KIT_DIR="${SPRITE_KIT_DIR:-/workspace/sprite-kit}"; cd "$SPRITE_KIT_DIR"
.venv/bin/python - runs/<name>-*/<Name>-*-sheet.png <<'EOF'
import sys, numpy as np
from PIL import Image
for p in sys.argv[1:]:
    a = np.asarray(Image.open(p).convert('RGBA')); hs, cs, bots = [], [], []
    for i in range(10):
        c = a[(i // 5) * 256:(i // 5 + 1) * 256, (i % 5) * 256:(i % 5 + 1) * 256]; m = c[..., 3] > 128
        if m.sum() < 50: continue
        ys = np.where(m.any(1))[0]; hs.append(int(ys.max() - ys.min() + 1)); bots.append(int(ys.max())); cs.append(c[..., :3][c[..., 3] > 250].mean(0).round().astype(int).tolist())
    print(p, 'height', min(hs), '-', max(hs), 'bottom rows', bots, 'mean colour first/last', cs[0], cs[-1])
EOF
```
Character height should match within about +/-15% across walk/run/idle/attack and colours should match; if not, regenerate the odd sheet. Known kit limitation (tested): each animation is scaled to fit its own cells, so a jump with a big rise is packed smaller (one test: jump 176-210 px vs walk/attack 242-247 px). Report that as a FAIL with the numbers and tell the user to scale the jump in-engine to match; regenerating the sheet will not fix it. Ground-standing frames should have their bottom row at 255; report any grounded frame that floats. State what the numbers cannot see (weak poses, dropped features) and ask the user to compare the previews with their photo. `runs/<name>-<anim>/export/` holds `unity/`, `godot/`, `gif/` with READMEs. Do not send anything to anyone else.

### 5. More animations
Reuse the approved anchor (no new anchor credit). Repeat step 3 with the same `--name` and a separate `--out` per animation.
