---
name: fal-background-cutout
description: "Use when cutting the background off an image or video on FAL after Grok Imagine generation. Defaults to open-source BiRefNet v2."
---

# FAL background cutout

After Imagine (or any other gen) produces a still or clip, send it to FAL for background removal. Prefer open-source models.

## Auth

Read the FAL key from this agent's connector secret (`fal` / `api_key`). Never print it.

Header: `Authorization: Key $FAL_KEY`

- Sync: `POST https://fal.run/<model-id>`
- Queue (better for video): `POST https://queue.fal.run/<model-id>`, then poll status / result
- Input files can be a public URL, a data URI, or an upload via FAL storage

## Image (default)

Model: `fal-ai/birefnet/v2`

```json
{
  "image_url": "<url or data uri>",
  "model": "General Use (Light)",
  "operating_resolution": "1024x1024",
  "refine_foreground": true,
  "output_format": "png"
}
```

Variants worth switching: `Matting` for soft edges, `Portrait` for faces, `General Use (Heavy)` if Light misses detail.

Cheap fallback: `fal-ai/imageutils/rembg` with `{ "image_url": "...", "crop_to_bbox": true }`.

Download the returned `image.url` immediately (FAL media URLs expire).

## Video

Default: `fal-ai/birefnet/v2/video`

```json
{
  "video_url": "<url>",
  "model": "General Use (Light)",
  "operating_resolution": "1024x1024",
  "refine_foreground": true,
  "video_output_type": "VP9 (.webm)",
  "video_quality": "high"
}
```

Use `PRORES4444 (.mov)` or `VP9 (.webm)` when you need alpha. `X264 (.mp4)` will not keep a real transparent background.

True-alpha alternative: `fal-ai/ben/v2/video` with `{ "video_url": "...", "output_format": "webm" }`. MP4 on BEN renders transparent areas as black.

## After the cut

Save the file locally, attach it in chat, and only then apply it as an avatar or feed the next style pass. Do not leave the only copy on a FAL URL.
