---
name: cut-silences-dead-air-trimmer
description: "Use when asked to cut silences, trim pauses or remove dead air from a talking-head or podcast recording using a word-level transcript (proposal-only on long-form)."
---

# Cut silences (dead-air trimmer)

First step of the talking-head cleanup pipeline, before `cut-mistakes`. It removes only silence: dead air at the head and tail, plus pauses between words that run past a threshold. Each trimmed pause is cut back to a natural breath, never to zero. Words are never touched; stutters and false starts belong to `cut-mistakes`. On podcast, interview or multicam work, read `podcast-edit-doctrine` first: there, silence trimming is a proposal and ordinary pauses stay.

## Input
A word-level transcript, `{words:[{text,start,end}]}`, from `transcript-and-chapters`, plus the raw video.

## Method
A bundled helper script (if available) does all of this. Without one, do it with a short script and ffmpeg:
1. Walk the words. Any gap of 0.55 s or more (the threshold) counts as silence. So does the space before the first word and after the last word; keep about 0.22 s of head pad and 0.34 s of tail pad.
2. Leave each trimmed pause with a natural breath: 0.24 s for pauses of 2 s or more, 0.20 s after sentence enders (. ! ?), 0.14 s otherwise. Bias the kept breath toward the end of the previous phrase.
3. Merge the delete ranges. The keep ranges are everything else.
4. Render with an ffmpeg filtergraph: one `trim`/`atrim` pair per keep range with `setpts`/`asetpts` reset, then `concat=n=N:v=1:a=1`. Re-encode so audio and video stay in sync. Write long filtergraphs to a file and pass them with `-/filter_complex`.
5. Retime the transcript onto the edited timeline and hand that version on. Everything downstream assumes the silenced timeline.

The default threshold removes about 15-20% of a typical raw take. Lower it for punchier cuts (0.35-0.45 s for high-energy social). Raise it for more breathing room.

## Podcast, interview and multicam mode
- Long-form program: make a plan only. Never render straight over the master. Start with a high threshold (about 1.5 s) so only extreme dead air and the opening and closing bounds are proposed. Ordinary pauses stay; a thinking pause or a beat before an answer is content.
- Present the cut list as proposals. A person approves each removal. Then cut every ISO mic and every camera with the same ranges, never one mic alone.
- Never treat low ASR confidence or a missing word as silence to cut.
- If an auto-multicam app or Resolve markers already carry cleanup proposals, don't stack this on top without a reason.
- Reels and clips cut from an episode can run tighter. Once the story works, trim each kept phrase to its audible edges and drop tails that don't advance the thought. Still audition at normal speed.

## Outputs
A cut list (EDL JSON), the retimed transcript, a decisions log, the filtergraph, and the rendered `*-silenced.mp4` once approved.

## Gotchas
Listen across every join and add 20-30 ms audio fades if anything clicks. For podcast clips, keep meaningful silence (see `podcast-clip-editing`). On music-led reels the music sets the timing, so trim only the speech-led sections.
