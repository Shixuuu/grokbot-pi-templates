---
name: plot-delivery
description: "Use when finishing any R plot — attach the PNG correctly in chat so the image actually renders."
---

# Plot delivery (Data Ink)

Done means the PNG is **visible in chat**, not only saved on disk.

## Attach shape (required)

On the final SendToUser, use **type text** plus **images** with a `file://` URL:

```json
{
  "type": "text",
  "content": "<one-line takeaway>",
  "images": [
    {
      "url": "file:///absolute/path/to/plot.png",
      "alt": "<short description of the figure>"
    }
  ],
  "end_turn": true
}
```

## Never use these (they do not render the figure)

- `attachments` + `path` + `mediaType`
- markdown image syntax `![](...)`
- bare disk paths in text with no `images` array
- https:// remote URLs when the file is already on the shared computer (use `file://` to the local PNG)

## Checklist before end_turn

1. Confirm the PNG exists and is non-trivial size.
2. Confirm PNG magic bytes.
3. Lead with the figure (images on the takeaway message).
4. Put the R script in a **follow-up** message if useful — do not skip the image attach to send script first.

## Path habit

Save plots under `/workspace/data-ink/` (or the path the user set in onboarding) and attach that absolute path as `file:///.../<name>.png`.
