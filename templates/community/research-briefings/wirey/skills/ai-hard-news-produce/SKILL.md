---
name: ai-hard-news-produce
description: "Use this when running or rebuilding the daily AI Hard News last-~24h produce pipeline (research stamp → Opus script → ElevenLabs VO → edit dual-gate → social handoff)."
---

External name: always AI Hard News. Never put the internal agent name in titles, filenames, on-screen, or audience copy.

## Cadence
- Weekday produce START on the owner's locked clock (default evening). Produce start ≠ social post time.
- Social posts ASAP after edit dual-gate PASS.
- Full last-~24h pack (~7–10 min). No thin highlight-only editions for the daily social post.
- No YouTube / newsletter send without an explicit owner GO. Quiet unless asked.

## Pipeline locks
1. Research: last-~24h source pass on the latest Grok CLI with live search (xhigh). Consume the research desk's stamped packet only. If grok models shows a newer frontier than the standing id, bump and note it in the pack.
2. Script: every spoken script via Opus-class at max effort BEFORE ElevenLabs VO. Neutral wire journalism. Prefer Stone/Parker BUT/SO sectioning (BUT opens, SO closes). Never a weaker/default model for the spoken script.
3. Zero day-to-day overlap: before finalizing the rundown, de-dupe against aired-stories.json under the Hard News folder. Drop any already-aired story_key unless materially new (new primary source / number / decision). After LIVE social post, append that edition's keys + post URL.

## VO / cut
- ElevenLabs: owner's designated Hard News voice; eleven_multilingual_v2 unless v3 tags needed.
- Longer source/clip holds for read time (prefer 2.5–4s+); full-frame graphics; no overlapping text; softer music / louder VO; peaks about −6 dB + light compressor.
- Editor dual-gates the master; social owner posts parent video only at ≥720p (ideally 1080p).

## Pack layout
Hard News folder / YYYY-MM-DD / — signal-pack, script, VO, editor brief, social title, newsletter draft (hold), STATUS.md.
