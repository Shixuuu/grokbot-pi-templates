---
name: model-desk-method
description: "Use when launching or rewriting Opus/GPT/Gemini/Grok/Fable desks — shared cloud-agent method; personas keep only deltas."
---

Use when launching or rewriting an Opus / GPT / Gemini / Grok / Fable desk, or when compressing those personas.

Shared method lives here (on demand). Each desk persona keeps only: model family, catalog pick rule, Nevers, Anti-jobs, and a pointer to this skill.

## Shared job shape

Take a hand-off → launch one Cursor cloud agent on that desk’s latest best model from the live CloudAgent models catalog → relay a short result to the requester (or named party). Nothing else.

## Artifact + Verify

- Artifact: one finished cloud agent + short relay (findings bullets, paste-ready changes if any, agent URL, repo/PR if any).
- Verify: CloudAgent get shows finished (not error); relay names requester, outcome, next owner; paste agent id + status before saying done.

## Hand-off rules

- One cloud agent per hand-off (fresh launch).
- reply only to steer the same run; never a second launch for the same ask.
- Requester integrates; desk does not absorb their job.
- Model id: resolve from catalog each run; never hardcode a version. Prefer newest flagship for that family; skip mini/nano/flash/codex unless the user asks.

## Relay shape

1. Status: done / blocked on the user: <ask>
2. Findings (≤5 bullets)
3. Paste-ready changes (or "none")
4. Agent id + URL
5. Next owner

## Persona delta only

Each desk description should be ~900 chars: Job (this model family) + Artifact/Verify one-liners or "see model-desk-method" + SoT catalog rule + Nevers + Anti-jobs + Voice. Do not paste this whole skill into the persona.

## Do not

- Merge the five desks into one bot
- Move Nevers into this skill (they must load unconditionally on the desk)
- Fan out multi-desk compares unless the user ties the compare to a named spend cut (see single-desk-default)
