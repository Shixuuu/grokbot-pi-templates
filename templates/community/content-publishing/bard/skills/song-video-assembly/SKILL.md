---
name: song-video-assembly
description: "Use this when turning a finished song track into a music video made of generated clips: mapping the song's beats and sections, planning chained segments to them, and assembling the final video with the song laid over it cleanly."
---

# Song video assembly

## Goal

A finished music video file where the generated picture and the song feel made for each other: segments change on musical boundaries, nothing jumps or flashes at the joins, and the audio is clean, full length, and in sync from first frame to last.

This skill covers the audio-driven planning and the final assembly. For the song itself use work-chronicle-song, which also covers locking character and location references and writing each segment's prompt.

## Setup

Work in a fresh project folder, e.g. `/workspace/songvideo/<song-slug>-<date>/`, with `sources/`, `segments/`, `frames/`, and `out/` inside it. Use `ffmpeg` and `ffprobe`. For beat analysis, make a private Python virtual environment in the project folder and install `librosa` and `soundfile` there; never pip-install globally or edit shell profiles. If the install fails, fall back to ffmpeg-only checks and say so.

## 1. Inspect the track

1. Keep the user's picked take as the master. Don't re-encode it until the final mux.
2. Get exact duration, sample rate, and channels with `ffprobe`.
3. Measure loudness with ffmpeg's `ebur128` or `loudnorm` analysis pass, and find leading and trailing silence with `silencedetect`.
4. Spot-sample the start, a chorus, and the ending. If the take has a glitch, a cut-off ending, or garbled words, tell the user and offer the other take before spending on video.

## 2. Map the song

1. Run beat tracking (tempo, beat times, downbeats if you can get them) and an energy curve over 2-second windows.
2. Mark sections using the lyric section tags as a guide, then correct each boundary to the nearest strong downbeat where energy changes. Trust the measured audio over the tags.
3. If you can line up words to time, note when each key lyric line lands. Otherwise keep section-level timing.
4. Write a table of time range, section, lyric gist, energy (low, building, high), and the visual idea it deserves, before planning any shots.

## 3. Plan the segments

1. Note the chosen model's maximum clip length and output frame rate.
2. Cut the song into segments no longer than that cap, placing every boundary on a downbeat, ideally at a section change or the end of a 4- or 8-bar phrase. Never let a boundary fall mid-word on a key line.
3. Give each segment one clear action and a camera move that carries into the next one, so the whole thing reads as one continuous take. Save the strongest image for the last chorus, and let the outro return to the opening place or idea, changed by the journey.
4. Match energy: slow and wide for intros and quiet verses; closer, faster motion and brighter light for choruses; a visual turn for the bridge.
5. Decide the vocal plan once: either nobody sings on screen (the track carries the voice), or the performer is clearly performing, with faces mid-shot or wider. Never mix the two in one video.
6. Show the user the segment plan with times and the total generation cost before generating.

## 4. Generate and chain

Follow the extend-don't-splice rules in work-chronicle-song: segment 1 from the reference images, every later segment started from the exact last frame of the one before, the same written character description every time, and a drift check on each last frame before going on. Save each segment as `segments/NN.mp4` and its last frame as `frames/NN-last.png`. Ask for about half a second of extra length when the model allows, so there's room to trim to the beat.

## 5. Assemble

1. Normalize every segment to the same resolution, frame rate, pixel format, and timebase before joining.
2. Trim each segment to its planned beat-aligned length. For segments 2 onward, drop the first frame, which repeats the previous segment's last frame.
3. Join end to end with hard joins only: no crossfades, dissolves, or wipes.
4. Drop the clips' own audio. Lay the master track over the whole picture starting at 0.
5. Make picture and sound end together: if the picture is short, extend the final shot's hold rather than cutting the song; if it's long, trim the picture.
6. Normalize loudness for sharing (around -14 LUFS integrated, true peak at or below -1 dBTP) with a two-pass `loudnorm`, and encode the audio as AAC at 192k or better.
7. Export H.264 MP4 with `yuv420p` and `+faststart`. Keep the native aspect ratio unless the user asked for vertical or square; then crop, never stretch.

## 6. Check before delivering

1. Confirm with `ffprobe` that video and audio durations match within a frame and there's exactly one audio stream.
2. Pull a frame from just before and just after every join and compare them. Redo any join that flashes, jumps, or shows the character changing.
3. Make a contact sheet and look for drift, stray on-screen text, and warped hands or faces.
4. Spot-check sync at the first vocal entry, a chorus downbeat, and the ending.
5. Re-measure loudness on the final file.
6. If a video-review tool is available, use it for a final watch-through and fix anything it flags.

## Deliver

Name the file after the song, like `Song-Title_music-video.mp4`. Send the file itself, plus one line on length, model used, and total spend. Keep the project folder so a single segment can be regenerated and the video reassembled.

## Don't

- Don't use text-to-speech in place of singing, and don't put lyrics or captions on screen unless the user asks.
- Don't stretch, speed up, or pitch-shift the song to fit the picture; fit the picture to the song.
- Don't spend beyond the cost the user approved; ask before any regeneration that would go over it.
