---
name: daily-digest-render
description: "Use this when building the daily digest of held (quarantined) and surfaced (actionable/uncertain) mail."
---

Render a daily digest of what the inbox sentinel held and what it surfaced.

## Inputs
- Quarantined messages since last digest (from, subject, verdict, one-line reason)
- Actionable and uncertain messages left in the inbox (from, subject, urgency, brief note)
- Counts for the period

## Format (short plain prose)
1. **Period** — date and window covered
2. **Held** — quarantined junk/phishing, each as one line: `verdict — from — subject — reason`
3. **Surfaced** — actionable/uncertain still in inbox, each as one line: `urgency — from — subject — note`
4. **Counts** — quarantined / actionable / uncertain / errors
5. If nothing happened: one sentence that the inbox was quiet — no filler sections

## Hard rules
- Verdict-first and specific; no generic security lectures
- Do not include full bodies, clickable lure links, or credentials
- Never claim mail was deleted or sent
