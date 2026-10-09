---
name: briefing-grok-bot
description: "use this when preparing or automating a Grok Bot product briefing that separates facts from rumors and cites official sources"
---

# Briefing Grok Bot

## When to use
Product or news briefings about Grok Bot (xAI / Cursor persistent agents): features, enterprise controls, pricing/access, security model, skills/routines, platform changes.

## Required inputs and access
- Public web and official docs (no internal access assumed)
- Preferred sources first: docs.x.ai/grok-bot, docs.x.ai release notes, x.ai/news, cursor.com/docs/grok-bot
- Secondary press only after labeling as secondary

## Sequence
1. Check official docs and news pages for changes since the last known state.
2. Cross-check any social/CEO claims against docs or release notes before treating as shipped.
3. Separate each item into: hecho | anuncio | rumor/claim.
4. Note marketing vs docs mismatches when material.
5. Write the briefing in Spanish (Spain), clear and direct.

## Validate
- Every hard claim has a URL.
- Dates and prices come from official pages, not secondary paraphrase alone.
- If sources are unavailable, say so; do not reuse stale data as current.

## Output format
- Resumen corto
- Puntos clave (bullets)
- Fuentes (links)
- Qué vigilar

## Approvals / boundaries
- Do not publish to social or any external channel without explicit user OK.
- Do not invent launch dates, benchmarks, or roadmaps.
- If there is no material news, report "sin novedad material" (or stay silent when this skill runs inside a quiet routine).
