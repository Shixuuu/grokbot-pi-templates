---
name: short-form-clip-method
description: "Use whenever the Short-Form Video Editor turns a long video into shorts: local hardware setup, moment selection by psychological charge, hooks, 9:16 speaker framing, captions, platform safe zones, max-quality export, and full-clip QA."
---

# Long video to shorts: core method

Work on the owner's own computer with their hardware. Keep every file local; never upload footage or renders to the cloud unless the owner asks.

## 1. Hardware scan (first run, then when hardware changes)
On the owner's computer, detect OS, CPU and cores, RAM, GPU model and VRAM, free disk space, and whether ffmpeg, Python, and yt-dlp exist. Save the result as `hardware.md` in the workspace and to memory. From it pick:
- Encoder: NVIDIA `h264_nvenc`/`hevc_nvenc` (preset p7), Intel `h264_qsv`, AMD `h264_amf`, Apple `h264_videotoolbox`, else `libx264 -preset slow`.
- Transcription: faster-whisper `large-v3` on GPU with 8 GB+ VRAM, `medium` below that, `small` on CPU only. Word timestamps on (WhisperX align if available).
- Tools to install locally with approval: ffmpeg, faster-whisper, pysubs2, PySceneDetect, auto-editor, OpenCV (YuNet face detection), librosa for music, DeepFilterNet optional.

## 2. Local workspace
One root folder (default `~/ShortFormClips/`, owner can change it). Per project: `source/ transcripts/ candidates/ cuts/ renders/ exports/<platform>/ qa/`. Name files `<project>_<clip##>_<platform>_<fps>.mp4`. Never overwrite a good render; new versions get a suffix (v2, v3).

## 3. Research before cutting
Spend more time understanding than editing. Who is speaking, their story, polemics, and audience. Read the full transcript; don't guess from thumbnails. One account = one niche and one audience; pick moments for that audience. If the owner has a brand or campaign brief, its rules beat every default here.

## 4. Find the moments worth clipping
Score each candidate from the transcript plus scene and energy cues. It must carry one primary charge: polémica, utilidad (a concrete, usable tip), alto valor (insight, numbers, a secret), emoción, épica, drama, tensión, acción única, or humor/trivialidad. For the target viewer, sort angles into positive, negative, and indifferent; drop indifferent ones.
Green flags:
- Feels involuntary and real, not staged for clips. Exaggerable in the title but credible to the end.
- Self-contained: understood in the first second, closed ending. Setup, tension, payoff.
- Tension holds to the last second; the payoff doesn't land at 0:08.
- Debate bait that stays brand-safe (generic "X vs Y", never inventing beef with someone the owner may need).
- Share trigger: "this is you / send this to a friend who…" or an identity statement people repost.
Preserve the idea: one thought from start to finish. Cut filler and silences, but never break a payoff to hit a length. Prefer 30–60 s idea-complete; cut where the idea ends.
Quality over volume: one strong clip beats ten weak ones.

## 5. Hook = three layers in the first second
The hook plants a question only the ending answers. It must work for someone who only sees, only hears, or only reads:
- Visual: open on the strongest frame (face close, action, reveal).
- Audio: start on a strong spoken line or a beat; no dead air.
- Text: a specific on-screen title from frame 0 ("He lost 2M in one week", not "wow, incredible").

## 6. Framing 9:16
Measure crop per source; never reuse numbers from another show. The active speaker's face and torso stay centered (x≈540 on 1080 width) the whole time they talk; hard-cut to whoever answers. Full face, not a profile at the edge. No stretching, no blurred padding, no empty frames. Exceptions: gameplay (the game is the subject) or an action the video announces (center the person doing it).

## 7. Captions
Burned in, word-synced from the transcript, every spoken beat covered. Bold sans (e.g. Anton, Montserrat ExtraBold, Inter Bold), white with 4–5 px black outline and shadow, max 2 lines, phrase blocks or one highlighted key word, ≥100 ms gap between events. Never over mouth or eyes. Default band is lower-middle, roughly y 1000–1350 of 1920, inside the safe zone below.

## 8. Platform safe zones (1080x1920)
Platform buttons, captions, and names cover parts of the frame. Keep titles, captions, and faces inside the shared safe area of about x 90–960, y 250–1400:
- TikTok: keep ~150 px top and ~480 px bottom clear, ~130 px right for the action rail.
- Instagram Reels and Facebook Reels: keep ~220 px top and ~420 px bottom clear, ~130 px right.
- YouTube Shorts: keep ~200 px top and ~400 px bottom clear, ~140 px right.
Re-check against each platform's current template when it changes; if one platform needs a different layout, export a separate version for it.

## 9. Export at maximum quality
- 1080x1920 (2160x3840 only when the source is 4K and the platform is YouTube), yuv420p, BT.709, constant frame rate.
- 30 fps for talking heads and 30 fps sources; 60 fps when the source is 60 fps or motion-heavy (sports, gaming, dance). Never invent frames on talking heads.
- H.264 High (or HEVC if the owner wants smaller files), CQ/CRF 16–18 with a high bitrate ceiling: about 16–20 Mbps at 30 fps, 25–35 Mbps at 60 fps.
- AAC 320 kbps, 48 kHz stereo. Loudness normalized to about -14 LUFS, true peak -1 dB. Optional voice cleanup (DeepFilterNet).
- `-movflags +faststart`, strip source metadata.

## 10. QA every clip before handing it over
Watch the whole clip, not a few frames. Pass only if all are true: spec matches section 9; the speaker is centered through every shot and turn; captions cover every beat and sit in the safe zone; no text over faces or platform UI; no empty or stretched frames; the hook works in second one; the idea closes; audio is clean and level. On a fail, name the defect and re-render as a new version.

## 11. Hand-off
For each clip give: file paths per platform, in/out timecodes in the source, the charge, a title, 3–5 hashtags, and a one-line description. Never invent view counts or analogs. Posting is the owner's call.
