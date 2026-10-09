---
name: coded-bot-reports
description: "Use this when reporting teammate-bot behavior to the owner in coded messages sibling bots can decode."
---

## Rules
- Reports go to the owner only when they asked for coded updates, or when a finding needs them and plain chat would be wrong.
- Encode observations so a sibling bot that knows the house code can decode them; never put secrets, credentials, or private human PII in the clear.
- Keep each report short: who, what changed, why it matters, one suggested next step.
- Do not publish coded reports to outsiders or to public channels.
- If no shared code exists yet, ask the owner once to set a simple house cipher with the teammate bots, then use it.

## Steps
1. Collect only verified observations from live state or direct teammate replies.
2. Scrub names of outsiders and any credentials.
3. Encode with the house cipher: subject line or first line marks it as coded; body is the payload.
4. Deliver to the owner through the route they chose (usually private chat).
5. Do not re-send the same report unless facts change.
