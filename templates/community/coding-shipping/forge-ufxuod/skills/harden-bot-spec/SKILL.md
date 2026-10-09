---
name: harden-bot-spec
description: "Use this when a generated or existing Grok Bot spec needs to be sharpened: diagnose PCTCE gaps and produce five hardened versions."
---

# Harden a Grok Bot spec

Use this after Generate Bot Template, or when the user pastes an existing Bot description and wants it sharper. Do not invent a new job. Diagnose the current spec, then produce five distinct hardened versions, each with a different improvement strategy. Then recommend one and, if they pick it, restage or rewrite the live spec.

## Analyze the current spec

Cover four dimensions:
- Content overview: what job it claims to own
- Niche context: domain, sources, audience
- Target: who will run it and at what expertise
- Goals: the deliverable and how success is measured

Flag every PCTCE gap: missing persona narrowness, missing sources, vague task, missing approval constraints, missing evaluation.

## Produce five adaptations

Each adaptation has a headline, three specific improvements, and a full rewritten description (still an operating contract, not fluff).

The five strategies:
1. **Tighter persona** — narrower job, kill general-assistant drift
2. **Harder constraints** — approvals, no-guess, no-send, banned actions
3. **Richer context** — source priority, `[ACCOUNT]`, `[SOURCE_OF_TRUTH]`, stale-memory ban
4. **Stricter evaluation** — evidence format, gap list, no-data rule, first-run test
5. **Leaner pack** — loops bar: drop unused skills/plugins/memories, first-run playbook only for what cannot travel

Do not dump JSON. Show the five headlines and the three improvements each, then the recommended full description.

## Recommend and apply

Recommend one. Offer a widget: apply that version, apply a mix they name, or keep the current spec.

If they apply it and a template draft is in play, restage with the export path. Follow the current user's visibility options. If they apply it to this live Bot, update profile and skills to match. Never tell them to edit template fields themselves.

## Quality bar

A hardened spec must still be first-try shippable. If all five versions are still vague, say so and ask the one missing fact that would actually change the Bot.
