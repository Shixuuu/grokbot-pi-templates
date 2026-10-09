---
name: teams-meeting-transcriber
description: "use this when asked to join a Microsoft Teams meeting from the box browser (optionally routed through the user's computer) and produce a transcript plus summary, especially for Luxembourgish or other low-resource-language meetings"
---

# Teams meeting transcriber

Goal: be present in a Teams meeting visibly, capture its audio on the box, and deliver a clean transcript + short summary (decisions, action items) to the user only. Never post in the meeting chat, react, unmute, turn on a camera, or message anyone.

## 0. Before the meeting (start >=45 min early)
1. **Routing (if the user requires traffic via their computer):** the user turns on Egress in Grok Bot settings with their computer online and the app open. Check: marker file `/tmp/sand-egress-tunnel-client` exists, `curl -x http://127.0.0.1:8791 https://api.ipify.org` equals the IP of their computer (`curl https://api.ipify.org` via machine-targeted Shell). Default box traffic does NOT go through it; only the proxy does. Chrome started via `/usr/local/bin/box-chrome` uses the proxy automatically. Don't use incognito. If IPs don't match: stop, don't connect directly, tell the user.
2. **Audio stack BEFORE any Chrome window that will play meeting audio is opened** (Teams enumerates speakers at page load; if the page loaded before the sound server, Speaker shows "None" and nothing is captured):
   - Install `pulseaudio pulseaudio-utils sox`; start a user PulseAudio daemon with a null sink `meeting_sink` as default, socket in Chrome's `XDG_RUNTIME_DIR` (e.g. `/tmp/xdg-runtime-box-<display>/pulse/native`), exit-idle disabled.
   - If Chrome's audio utility process started before PulseAudio, kill only that process (`--utility-sub-type=audio.mojom.AudioService`); Chrome respawns it. Better: open a fresh window/profile after PulseAudio is up.
   - Recorder: `parecord --device=meeting_sink.monitor --file-format=wav --format=s16le --rate=16000 --channels=1 <file>`; stop with SIGINT so the WAV header is finalized.
   - Verify during the meeting: `pactl list short sink-inputs` shows Chrome streams, and a 5-10 s `parec` sample of the monitor has max amplitude > 0.01.
3. **Speech-to-text:** faster-whisper in a venv (pin `av` to 15.1 if the newest breaks it). For common languages follow the Multilingual transcription skill. For **Luxembourgish** use `ZLSCompLing/Whisper-Large-V3-Turbo-Luxembourgish-fp16` (CTranslate2 format), float32 on CPU, forced `language=lb`, VAD-chunked (cut at pauses, chunk length 30 s; 15 s = finer timestamps but ~2x slower), no timestamp tokens (it loops otherwise). Roughly 0.25x real time on 8 CPU cores, ~5.3 GB RAM. Stock Whisper turns Luxembourgish into phonetic German.
4. **Sign-in:** when the user's Teams account is needed, the user completes SSO themselves via screen handoff. Never store or type credentials.

## 1. Joining
- **Preferred: anonymous guest with the agreed display name** so the bot doesn't appear as the user. Open a separate Chrome profile via the terminal: `box-chrome --user-data-dir=<dir> https://api.ipify.org` (check IP), then https://www.microsoft.com/microsoft-teams/join-a-meeting with meeting ID + passcode, "Continue on this browser", enter the name, mic/camera off, Join; the organizer admits from the lobby. Guest Speaker may show "None" in Teams device settings yet audio still reaches PulseAudio; verify with a monitor sample, not the UI.
- If joining on the user's own account while they also attend: choose "Add this device", never "Transfer". The name will be the user's.
- Join ~2 min early; start the recorder before joining. Turn on live captions as a backup if useful.
- Run an end-watcher (foreground background shell so you get notified): stop recording when Chrome sink-inputs are gone for ~2 min or after ~5 min of silence past the planned end, with a generous hard deadline. Meetings overrun. When pkill-ing a watcher, use a pattern like `watch-end[.]sh` so it doesn't match your own shell.

## 2. After the meeting
1. Leave and close the guest window. Check the Teams Recap for an official transcript (may be "No transcript available").
2. Trim leading/trailing silence; keep the offset to give wall-clock times.
3. Transcribe; remove Whisper loops/hallucinations (mark as [inaudible], note it in the header). Never invent words; never translate the transcript.
4. Speaker labels: offline diarization needs a real embedding model (e.g. speechbrain ECAPA or pyannote, installed beforehand; pyannote needs an HF token). Without one, deliver unlabeled and say so. Use Recap speaker names if a Teams transcript exists.
5. Summary in the user's working language: topics, decisions, action items (owner/deadline only if said), and a list of figures/dates to double-check.
6. Deliver files to the user (also as .docx via pandoc, e.g. `pypandoc_binary` in a venv). If chat attachments fail, CopyFromBox to their computer. On Windows use an absolute path such as `C:\Users\<user>\Downloads\...` because `~` is not expanded and creates a literal `~` folder.
7. Offer to delete the raw audio afterwards.

## In-person meetings
The user records on a phone/laptop/USB conference mic placed centrally, then sends the audio file (or drops it in a shared folder); run steps 2-7 of After the meeting. Ask that attendees are told it's recorded and say their names when first speaking.
