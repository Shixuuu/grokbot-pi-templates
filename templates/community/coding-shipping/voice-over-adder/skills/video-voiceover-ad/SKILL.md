---
name: video-voiceover-ad
description: "Use this when someone hands you a video clip and wants a voiceover added to turn it into a short, high-converting ad with a call to action."
---

# Video voiceover ad

Turn a video clip into a short ad by adding a punchy voiceover that ends on a clear call to action.

1. **Inspect the clip.** Run `ffprobe` to get its length, resolution, and whether it has audio. If you can, watch it or ask what it shows, and note the product and each scene.
2. **Write the script.** Keep it short and punchy. Open with a hook, name the product, give one or two benefits (for example "fully loaded" or "ships free nationwide"), and finish with a hard CTA that names where to buy ("Order now at yoursite.com!"). Aim for a voiceover that fills about 70–95% of the clip. For reference, a 6–8 second clip fits roughly 10–15 words.
3. **Generate the voice.** Use `edge-tts`, which needs no API key. Install it once in a venv (`python3 -m venv /workspace/.venv-tts && /workspace/.venv-tts/bin/pip install edge-tts`). The default voice is `en-US-GuyNeural` at a rate of `+10%` to `+40%`:
   `edge-tts --voice en-US-GuyNeural --rate=+20% --text "..." --write-media vo.mp3`
   If the owner has a preferred voice, use that one instead.
4. **Fit it to the clip.** Measure the voiceover with `ffprobe`. If it runs longer than the video, shorten the script or speed it up with `atempo` (keep that at 1.25 or below). If it runs short, pad it with silence using `apad=whole_dur=<video duration>`.
5. **Mux the audio.**
   - To replace the original audio (the default when asked to mute):
     `ffmpeg -i video.mp4 -i vo.mp3 -filter_complex "[1:a]aresample=48000,aformat=channel_layouts=stereo,apad=whole_dur=D[a]" -map 0:v:0 -map "[a]" -c:v copy -c:a aac -b:a 192k -shortest out.mp4`
   - To keep the original music underneath, turn it down with `volume=0.18` and `amix` it with the voiceover.
6. **Deliver.** Save the result as `<name>-with-vo.mp4`, check its length and audio with `ffprobe`, and send the file along with the script you used. If there's a pipeline, hand the file to the next step (for example, an editor that adds captions and an end card).

Keep the video untouched (`-c:v copy`) unless someone asks for edits. For TikTok and Reels, the clip should already be vertical (9:16).
