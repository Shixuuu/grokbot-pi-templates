---
name: lightburn-galvo-udp-automation
description: "Use this when automating LightBurn galvo jobs via UDP, SendUDP, prefs.ini, or F1 framing — load and Frame only; IR Start stays a human go-ahead"
---

Use this when automating a BSL/EZCAD-style galvo in LightBurn 2.x: load a job, Frame, then wait for a human before IR. There is no in-app Python/JS/REST API in 2.1.

## What exists (2.1)

- UDP on port 19840 (reply 19841): LOADFILE, FORCELOAD, IMPORT, LASER, CLOSE, FORCECLOSE, START, STATUS, PING. Returns OK / ! / ?.
- Windows helper: SendUDP.exe next to LightBurn.exe. Can launch/load a .lbrn. Cannot START (the word START is treated as a filename).
- CLI flags: -d debug, -l license, --devname "Device Name", --prefsdir. No --run, no --headless.
- Open a project (graphics + cut settings): SendUDP.exe "C:\path\to\job.lbrn" with LightBurn already running, or LightBurn.exe "file.lbrn" if auto-launch in running copy is on.
- UDP IMPORT / File Import: graphics only, drops cut settings. Clone a golden .lbrn instead of SVG-as-primary.
- Hotkeys: F1 Live Framing (cycles Bounds/Hull/Contour if already framing). Alt+P Preview. Alt+S Start. Ctrl+Break Stop. Esc is Select Mode / closes Live Framing, not stop.
- prefs.ini is JSON in %LOCALAPPDATA%\LightBurn. Quit LightBurn before editing; it overwrites on close.

Official: https://docs.lightburnsoftware.com/2.1/Guides/AutomationWithUDP/

## What does not exist

- In-app Python, JS, REST, plugin API (staff: future, after a big refactor).
- UDP FRAME, STOP, PAUSE, PREVIEW.
- Headless LightBurn. LightBurn Bridge (Ruida only). Console/macros on BSL galvo.
- Save-as-machine-file for galvo.

Treat UDP START as IR fire. Do not use it to “see if Require Framing still applies” on a Class 4 machine.

## Playbook: file → Frame → human GO → Start

1. Keep the vendor marking app closed (one USB owner). One LightBurn instance.
2. Write inbox\<id>.lbrn by cloning CutSetting from a known-good project (do not Import SVG as the job).
3. SendUDP.exe "<that path>". First launch: LightBurn.exe --devname "<device>".
4. Wait until the window title is {stem} - {device} - LightBurn … and the Laser pane says Ready. Fail if still Disconnected after ~10s (USB conflict).
5. If Live Framing is already open, Close/Esc first. Then focus LightBurn and send F1. Do not click Laser Start to begin framing.
6. Confirm Live Framing, Laser pane Framing, Bounds, and a moving red rectangle on the bed. A parked dot means red-dot port is None or Frame Speed is too high. Stop. Do not Start.
7. HARD STOP. Report Framing. IR must not fire in steps 1–7.
8. Only after an explicit human go-ahead for this job: click Start inside Live Framing. Never Preview Start Here. Never UDP START as the bot’s start path.
9. After the mark: Ctrl+Break if needed. Esc kills the red-dot but does not abort IR. Move inbox → outbox.

If the red box is shifted from the IR mark, tweak red-dot offset, not galvo scale and not a new .cor.

## Prefs keys (machine-specific; verify before writing)

Quit first. Known on some BSLFiber setups: RedLightPortBit (0, not -1), FrameSpeed (~1500 if 7000 looks parked), Galvo_1_Sign (1 normal, -1 reverse), Galvo_1_is_X, RedDotOffsetX / RedDotOffsetY. Do not invent a Require-Framing key; diff prefs after a toggle.

## Safety the software will not enforce

- Frame success is not a GO. A standing permission is not a GO.
- UDP has START and no STOP. The bot must not be the thing that starts the beam until a real Stop exists.
- Hardware e-stop is the emergency. Pause is a supervised hold.
- Leave Require Framing Before Start ON.
- Do not USB-yank or FORCECLOSE during a streamed galvo job (board does not store the job).
