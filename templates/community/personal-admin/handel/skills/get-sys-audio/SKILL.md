---
name: get-sys-audio
description: "Use when hearing/capturing live system playback on Mac, Windows, or Linux — never change default audio without approval; parent Shell+machineId; WAVs under Documents/Downloads/Music."
---

# get_sys_audio (cross-platform)

**FAIL CLOSED:** System capture must run on the **parent agent** with `Shell` + `machineId` on the owner’s registered computer. Never dispatch capture to an `executor` or any box-only worker.

**NEVER change the audio route without explicit user approval in that turn.** Do not switch the default output device, create/set aggregates/virtual cables as default, flip headphones↔speakers/interface, or “temporarily” point output elsewhere. If capture needs a route change, **ask first** and wait — or skip capture and accept an attached clip.

Capture live **system playback** (what they hear) and listen to a short clip. Do **not** download audio from Suno, YouTube, Spotify, or other sites unless they explicitly ask for a download.

## Platform detection

1. Use the machine they messaged from (`[Sent from machine …]`), or the one they named.
2. Detect OS (`uname`, `sw_vers`, or Windows `ver` / `$env:OS`).
3. Follow the matching section below. Prefer a **loopback path that does not change the default output**. If that is impossible without setup, explain the one-time setup (embedded below) and wait — or offer “attach a clip instead.”

---

## macOS (default tooling: BlackHole)

### Prefer when already set up
Current default is already a Multi-Output/Aggregate that includes their real output **and** BlackHole → record from BlackHole; leave default alone.

### One-time setup (walk them through if missing)
1. Install **BlackHole 2ch**: https://existential.audio/blackhole/ (or `brew install blackhole-2ch`).
2. Install **ffmpeg** if needed: `brew install ffmpeg`.
3. Open **Audio MIDI Setup** → create a **Multi-Output Device** that checks both their normal output (speakers / headphones / interface) **and** BlackHole 2ch. Optionally set that Multi-Output as default output (**only with their OK**).
4. Confirm they still hear sound through the real device.

### Capture steps
1. Note current default output name. Do not change it yet.
2. `ffmpeg -f avfoundation -list_devices true -i ""` — note BlackHole input index/name.
3. If BlackHole is already in the listening path: record 6–15s from BlackHole into `~/Documents/` or `~/Downloads/` (never rely on `/tmp` alone for CopyToBox).
4. If not: stop; offer setup above or attached-clip fallback. Do not switch devices without approval.
5. If they approved a named route change: apply → capture → restore **exact** prior default → verify name.
6. `volumedetect` — reject silence → CopyToBox → short MP4 wrap → watchVideo listen report → confirm default output unchanged/restored.

---

## Windows

### Prefer: WASAPI loopback (no default-output change)
Does **not** require a virtual cable when it works.

1. Ensure **Python 3** + `pip install soundcard numpy` on that machine (or use an existing venv). `soundcard` uses WASAPI loopback on the default render device.
2. Record ~6–15s from the **default speaker’s loopback** into `%USERPROFILE%\Documents\` or `Downloads\` as WAV. Do **not** change the Windows default playback device.
3. If `soundcard` / loopback fails: fall back to virtual-cable path below, or ask them to attach a clip.

**Shape:** record from `soundcard.get_microphone(id=default_speaker.name, include_loopback=True)` for N seconds, write WAV under Documents.

### Alternate tooling: VB-CABLE (when loopback APIs fail)
One-time setup:
1. Install **VB-Audio Virtual Cable**: https://vb-audio.com/Cable/
2. Install **ffmpeg** (e.g. `winget install ffmpeg` or https://ffmpeg.org/download.html).
3. With their approval only: arrange playback so they still hear audio **and** Cable receives it (VoiceMeeter, or a listen path they already use). Prefer explaining options over flipping default blindly.
4. List devices: `ffmpeg -list_devices true -f dshow -i dummy` — capture from **CABLE Output** (or the named listen device) into Documents/Downloads.

### Also try if present
- **Stereo Mix** / “What U Hear” enabled in Recording devices → capture that input with ffmpeg dshow. Do not enable hidden devices without asking.

### Hard rules (Windows)
Same as global: no unapproved default-device changes; restore exact prior device after any approved change; reject silence; parent + machineId only.

---

## Linux

### Prefer: PulseAudio / PipeWire monitor (no default-sink change)
Monitor sources capture what is playing **without** switching the sink.

1. Install **ffmpeg** if needed (`sudo apt install ffmpeg` / distro equivalent).
2. List sources: `pactl list short sources` or `pw-cli list-objects` — look for a `*.monitor` (Pulse) or sink monitor (PipeWire).
3. Record 6–15s, e.g. `ffmpeg -f pulse -i <monitor_source_name> …` into `~/Documents/` or `~/Music/` (not `/tmp` alone).
4. PipeWire alternate: `pw-record` / `parecord` targeting the sink monitor, then convert if needed.
5. `volumedetect` → CopyToBox → MP4 wrap → listen → report. Default sink stays untouched.

### One-time setup if no monitor / no ffmpeg
1. Ensure PulseAudio or PipeWire is the session audio server (default on most desktops).
2. Install ffmpeg + `pulseaudio-utils` or PipeWire tools (`pipewire-pulse`, `pw-cli`).
3. If sandboxing blocks device access for the agent Shell, say so as one blocker — ask them to attach a clip or use a path the agent can read.

### Do not
Create loopback modules or rewrite default sink/source without approval that turn.

---

## Shared hard rules (all platforms)

- **No unapproved default-output / aggregate / virtual-cable-as-default changes. Ever.**
- Always restore the prior default after an approved change; verify the name/id.
- Do not scrape or download the stream from a website as a substitute for loopback capture.
- Keep clips short unless they ask for longer.
- Never dispatch loopback steps to a box-only executor.
- Never rely on `/tmp` (or `%TEMP%`) as the sole CopyToBox source — use Documents/Downloads/Music.
- Prefer `grep` over `rg` on machines that lack ripgrep.
- If capture cannot work after honest setup attempt: one blocker + **attached clip fallback** (audio/video file they drop in chat or a path on their computer).

## Done

Capture worked/failed, **confirm default output unchanged or restored**, short listening summary — or one setup/blocker question, or proceed with an attached clip.
