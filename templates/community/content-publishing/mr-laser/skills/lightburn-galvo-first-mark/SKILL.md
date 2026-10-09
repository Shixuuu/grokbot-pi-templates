---
name: lightburn-galvo-first-mark
description: "Use this when a LightBurn galvo job needs Frame vs Preview explained, a first-mark recipe, a mirrored/backward axis fix, or Image-layer polarity (which pixels actually mark)"
---

Use this when setting up or troubleshooting a galvo fiber laser in LightBurn (BSL/EZCAD-style), especially Frame vs Preview confusion or a mirrored first mark.

## Frame vs Preview vs Start
These are three different controls. Official LightBurn 2.1:

- Preview is an on-screen simulation (black cut moves, red travel). Open it with Window → Preview, the Main Toolbar icon, Alt+P, or workspace right-click. Play does not fire the laser. Start Here inside Preview does fire — treat it like Start, not like playback.
- Frame (Laser window or F1) opens Live Framing. A separate red-dot laser traces Bounds / Hull / Contour on the physical bed. No IR. F1 while already framing cycles those three styles (Mac may need Fn+F1).
- Start fires 1064 nm. If Device Settings has Require framing before start enabled, the Laser-window Start button opens Live Framing instead of firing. Fire from Start inside Live Framing after the red box sits on the part.

Use Bounds framing for a first square/text test. If Contour framing is dead, disable Enable Blanking on the Ports tab. Frame is not focus. If the red box is shifted but the IR mark is correct, tweak red-dot offset, not galvo scale and not a new .cor file. Galvo jobs are Absolute Coordinates.

Official: https://docs.lightburnsoftware.com/2.1/Reference/GalvoFraming/
Official: https://docs.lightburnsoftware.com/2.1/Reference/Preview/

## Image polarity (do this before any Image IR)
LightBurn Image mode marks dark pixels by default. Preview black = cut = mark.

If the workspace art is white-on-black (white robot, black field), a Start will burn the field off and leave the art. That is inverted. Invert / Negative, or swap in a black-on-white PNG, then Preview again. The subject must be the black. The field must not be.

Do not skip this check because Frame Bounds looked correct. Bounds only traces the rectangle. It does not show polarity.

Never Start an Image job until Preview shows the intended pixels as black.

## Mirrored or backward output
Compare the mark as the workpiece sat under the lens, not after picking it up.

- Left-right (stamp/mirror): toggle Galvo 1 Reverse Direction only (when Galvo 1 is X).
- Upside-down: toggle Galvo 2 Reverse Direction only.
- Rotated 90°: swap which galvo is X axis. Some BSL configs store this as LEN_XYFLIP=1.
- Change one checkbox per test. Do not alter nameplate scale / bulge / skew / trapezoid to fix orientation.

A silver/white mark on anodized aluminum is expected dye ablation, not a reverse-axis problem.

Official: https://docs.lightburnsoftware.com/2.1/Troubleshooting/JobQuality/MirroredOrBackwards/

## Conservative first Line test (unknown watts, scrap metal)
Line mode, ~20% power, ~1500 mm/s, ~30 kHz, ~200 ns Q-pulse if MOPA, 1 pass. Factory pens are often hotter (e.g. 50% / 50 kHz / 1000 mm/s). If faint: change power or speed, not both. Then run a Material Test.

Keep the vendor marking app closed; one process owns the USB galvo board.
