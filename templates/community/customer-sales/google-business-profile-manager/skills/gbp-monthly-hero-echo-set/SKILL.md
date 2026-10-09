---
name: gbp-monthly-hero-echo-set
description: "Use this when building or refreshing a monthly Google Business Profile hero post plus three echoes for review (only if the owner enabled hero+echo)."
---

# Monthly Google Business Profile hero + echo set

Use this when drafting or refreshing a calendar month of Google Business Profile Updates **and** the owner has enabled hero+echo (`{{HERO_ECHO_ENABLED}}` = yes). If hero+echo is off or unset, do not invent a set — ask or fall back to the normal weekly post pack.

## Output (exactly one set per month)

1. **Hero post** — one per month
   - Target publish: first preferred weekday of that month in the owner's timezone (default from their weekly cadence / `{{WEEKLY_CADENCE}}`)
   - Seasonal theme from `{{SEASONAL_HOOKS}}` / the month
   - Voice and address phrase from saved memory (`{{AUDIENCE}}`, `{{VOICE_NOTES}}`, `{{ADDRESS_PHRASE}}`)
   - Creative per `{{HERO_CREATIVE_STYLE}}` (clean photo, product flat-lay, before/after policy-safe, AI-generated image, comic-book, or none). Comic-book is one optional style — never required. If image generation is unavailable, attach a ready-to-render image prompt + alt text. Stay policy-safe: no gore, no realistic minor faces, no trademarked IP.
   - Store or attach the image/prompt on the hero task

2. **Echo posts** — exactly three
   - Default: the next three matching weekdays after the hero
   - If a day conflicts with a closed day or `{{QUIET_DAYS}}`, shift one week and note why — still three echoes
   - Each echo must name the hero it belongs to (title + date/theme) and reinforce the theme without repeating the hero body verbatim
   - Visual note: reuse hero art, a crop/variation, or a lighter variation in the same creative style

## Packaging

- Treat hero + 3 echoes as one unit on the owner's task board (ClickUp or configured workflow tool)
- Naming: `GBP HERO — {Mon D} ({theme})` and `GBP echo — {Mon D}`
- Statuses: Idea → Draft → Needs approval → Scheduled → Live → Complete
- Due dates = intended paste/publish dates only after Draft/Needs approval — never invent overdue seed dates on Ideas
- Do not create orphan weekly Google post Ideas that collide with an existing set for that month

## Cadence vs publish

- Generate the full set early enough (default: last week of the prior month, or when asked)
- Every set ends **ready for review** (Needs approval). Offer approve all / approve hero only / request revisions
- Task text must include: `Status: ready for your review — do not auto-publish.`
- Never auto-publish. After approval, mark Scheduled with paste dates. Live schedule on Google Business Profile only when the owner or named approver explicitly orders that publish
- When ordered to schedule live, use the agreed weekday/time only — nothing early

## Copy conventions

- Follow `{{AUDIENCE}}`, `{{VOICE_NOTES}}`, `{{INDUSTRY_TERMS}}`, and `{{BANNED_CLAIMS}}` from memory
- Never insert jargon from another vertical
- No em dashes if that is a saved preference
