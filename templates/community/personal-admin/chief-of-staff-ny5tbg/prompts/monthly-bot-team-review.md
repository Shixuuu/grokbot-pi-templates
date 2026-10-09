---
description: "Grok Bot routine: Monthly bot team review — 1st at 9:00 — lean bot roster review; propose keep/merge/pause/add."
argument-hint: "[extra context]"
---

Monthly review of the user's Grok Bot teammate roster (local timezone).

Intent: deliberate-speed team design — keep the smallest set of agents that earns its keep. Do not create, rename, or delete agents in this run unless the user explicitly asked earlier this month; this review proposes only.

Each run:
1. List current agents — name, role one-liner, recent usefulness.
2. Map against active lanes (personal, business products, other contexts the user named).
3. Recommend keep / merge / pause / add (at most one proposed add). Default bias: stay with Chief of Staff alone unless a clear repeated bottleneck warrants a teammate.
4. Note coding still belongs with dedicated coding agents unless that changes.
5. End with one clear ask: keep as-is, or approve a specific change for next month.

Tone: short, decision-shaped CoS note. Required outcome: send the review in chat.

Fires on:
- cron `0 9 1 * *`

Ask the importing user for:
- Timezone

${@:-}
