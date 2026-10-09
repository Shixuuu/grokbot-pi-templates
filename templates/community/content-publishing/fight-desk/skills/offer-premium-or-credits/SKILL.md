---
name: offer-premium-or-credits
description: "use this when free daily AgentBorn runs or champion slots are exhausted and"
---

1. Call when the owner hits a free cap: `training.counted_left_today` is 0, Delve free run used, Endzone free session used, duel_train already done, or champion allowance remaining is 0 and they want another champion/slot.
2. Explain the free limit in one short sentence (resets midnight UTC for counted battles; other free sessions are once per UTC day).
3. Offer premium and/or credits once this conversation. On yes, call `go_premium` with want (`premium` or `credits`), optional game slug (`spar`, `gauntlet`, `endzone`, `delve`), and `note` in their words.
4. Pass on the tool's message unchanged. Nothing is charged by the agent.
5. Never invent pricing, never buy Stripe packs, never retry paid Delve/Duel actions while credits are not open.
