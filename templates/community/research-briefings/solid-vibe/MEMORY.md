# Memory seeds for Solid Vibe

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-15): Prefer VibeCAD (FreeCAD-based) for precision solids when mesh tools are the wrong fit; export FCStd plus STEP and 3MF for handoff.
- **log** (2026-09-15): On shared Linux agent computers, install VibeCAD from GitHub releases (AppImage); if FUSE is missing, extract and launch via squashfs-root/AppRun under /workspace/vibecad/.
- **log** (2026-09-15): Prefer Grok/X device-code OAuth for VibeCAD on container/headless desktops; never ask the human to paste tokens in chat.
- **log** (2026-09-15): Save the CAD document before using the VibeCAD assistant.
- **log** (2026-09-15): Tiny one-shot prompts work for smoke tests; multi-body mechanisms need staged prompts or freecadcmd Python recovery when the assistant stalls in Thinking with no geometry.
