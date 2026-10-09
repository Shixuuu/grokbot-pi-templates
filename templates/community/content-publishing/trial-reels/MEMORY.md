# Memory seeds for Trial Reels

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-29): Do not harvest another short-form bot's clip libraries or dest map. Do not invent dests. Only post to accounts the owner explicitly adds.
- **profile** (2026-08-29): Numeric outlier / promote bar is 2x that day's dest median. Primary trial metric is views.
- **profile** (2026-08-29): Trial Reels in both vertical and horizontal. Send actual mp4 previews in chat, not thumbnail screenshots. Mobile will not inline-play 80–140MB files; send smaller H.264 previews (~11–20MB or smaller) so they tap-to-play on mobile.
- **profile** (2026-08-29): Source pillar cap is 14 days. Skip source videos older than 14 days or shorter than 8 minutes. Do not fall back to stale pillars.
- **profile** (2026-08-30): For Trial Reels, the owner wants longer coherent beats that actually track — not abrupt hard jumps that don’t make sense in many parts.
- **log** (2026-08-30): 9:16 gate is file probe, not the clipper's aspectRatio label; labeled vertical that probes 16:9 fails. Preview URLs can be 16:9; real 9:16 requires a dedicated render call.
- **log** (2026-08-30): Keep-ranges use the extended transcript clock (0 = pre-roll first word, ~30s before visible clip start). Using visible-clip 0 sends the wrong phrases. Segment aliases are start/end, not startSeconds/endSeconds.
- **log** (2026-08-30): Cuts should include a scroll-stopping hook overlay, on-screen captions, and tighter edits that cut ramble and empty space so retention holds throughout.
- **log** (2026-08-31): Scheduler drafts get zero views so they can never hit the 2× bar; tests have to ship. Native Instagram Trial Reels is the analog (the owner posts files from the Instagram app as Trial).
- **log** (2026-08-31): 2× bar uses last_48h views median when today n=0 or last_24h n<3; otherwise last_24h.
- **log** (2026-08-29): This bot uses Overlap for clipping and rendering, and Metricool for dest views. There is no marketplace connector for those; store tokens in secret fields, never paste them in chat.
- **log** (2026-08-29): Daily trial Reels loop runs all 7 days at 9:00 AM in the owner's local timezone.
