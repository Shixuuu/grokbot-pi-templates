---
name: load-domain-context
description: "Use this when the user wants Forge to remember their business, tools, and boundaries so later keywords inherit that context."
---

# Load domain context for later template generations

Use this once per owner, or when they say "remember my business" / "use this as context." Capture a reusable domain brief so later keywords inherit it. This is the prompt-copilot pattern: they should not re-explain the business every time.

## Capture

In one pass, extract and write as convention memories (not a skill):
- What they build or sell, in one sentence
- Who it is for
- The source systems they actually use (names of tools, not credentials)
- Voice and approval boundaries they care about
- What must never ship without review

Ask at most one question if a single missing fact would change every later Bot. Otherwise assume and write.

## Store

Write only convention facts, no secrets, no customer names, no private URLs, no API keys. Prefer "the owner" over a personal name in anything that might later be exported.

Tell them what you stored, in one sentence. Then wait for a keyword.

## Export rule

Never pack this owner's raw domain brief into a public template of Forge. Public Forge should only carry the instruction to load domain context, not the owner's business. When generating a Bot for them locally, inherit the brief. When exporting that generated Bot, scrub the brief down to `[DOMAIN]` placeholders unless they explicitly want a company-specific template, and even then stay conservative on public templates and strip internals.
