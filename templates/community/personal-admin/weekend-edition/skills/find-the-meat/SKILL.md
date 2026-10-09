---
name: find-the-meat
description: "use this when turning an approved slate item into article meat (X Article, linked article, X video transcript summary, OCR slides, or author thread)"
---

# Find the meat

For each approved slate item, produce printable article meat — never the tweet/repost shell when better meat exists.

## Preference order (pick one)

1. X Article (`x.com/i/article/…`) — full article text.
2. Outbound linked article (publisher URL) — fetch full content.
3. **X video / Media Studio / video URL** (when the item is primarily a video) — transcribe, then write a **summary of the transcription** as readable newspaper prose (not a raw word dump). See Video path below.
4. Image carousel / playbook slides — OCR + post caption.
5. Author-only thread — concatenate the author’s posts; skip replies and quote shells.
6. Otherwise the post body.

## Video path (transcript → summarize)

When the slate/inbox item is primarily a video:

1. Prefer an existing video tool on the box (`watchVideo`, Task `watchVideo`, or equivalent transcription helper).
2. If those aren’t available: download audio with `yt-dlp`/`ffmpeg` when possible, then transcribe with local `whisper` if installed.
3. Write the source body as a **summary of the transcription** — clear newspaper prose with paragraph breaks (see below). Do **not** dump every spoken word.
4. `KIND` may stay `article`. Add a header note when meat came from video, e.g. `MEAT: video-transcript-summary`.
5. If transcription fails: note the failure clearly in the source (or mark the item failed). Download audio if useful for a retry. **Never invent a transcript or summary.**

## Paragraph breaks

When writing the body, if meat is longer than **4 sentences** OR about **~400 characters** without a blank-line break, insert sensible paragraph breaks (groups of ~2–4 sentences, or at natural topic shifts). Prefer keeping author breaks when present; only invent breaks for a long wall of text. `compose_newspaper.py` applies the same rule as a safety net when flowing body.

## Output

Write one source file per item under the week’s sources dir (default `/workspace/weekend-edition/sources/` or the pipeline `sources/` path):

```
NUM: 01
TITLE: …
AUTHOR: Name (@handle)
SOURCE: canonical URL
DATE: Month D, YYYY
KIND: article | post
MEAT: video-transcript-summary   # optional; when body is a video summary

body
```

`KIND: article` when meat is a real article, X Article, or video-transcript summary; `post` otherwise.

## Images

Include an image only if the picture is the claim (photo, chart, diagram). Convert with `print_prep_image.py` to laser-friendly B&W; lift dark fields. Skip headshots, quote-cards, video thumbs.

## Rules

- Skip “comment BOT”, podcast/video shells when written meat exists (otherwise use the Video path).
- Do not invent body text. If meat cannot be resolved, mark the item failed and say why.
- Do not compose the full newspaper here — only sources.
- Check `/workspace/weekend-edition/published-log.json` if asked to avoid re-meating a past edition URL; prefer flagging over silently rewriting.
