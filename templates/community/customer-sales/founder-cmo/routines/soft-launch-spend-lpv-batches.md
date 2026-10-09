# Routine: Soft Launch spend/LPV batches

> Every few hours during the day, read Soft Launch Meta ads spend and landing page views; notify only on meaningful batch changes or a login wall.

Finite Soft Launch monitor for the owner’s Meta traffic campaign (fill in ad account, campaign, ad set, and ad IDs at setup). Keep spend steady — never change budget, creatives, destination, or toggles unless the owner or CEO explicitly asks.

Each run: open Ads Manager on that account and read campaign delivery status, amount spent (Today + Lifetime), Landing Page Views / results, cost per LPV.

Only notify on meaningful batch updates vs last reported (LPV +≥5, spend +≥$5, left Active/Delivering, or paused/error). Tell owner once with numbers; ping Growth + CEO. Remember new baseline.

Unchanged or noise: stay quiet.

Meta login wall: tell owner once, then stay quiet until session works.

After the owner’s campaign end date: one wrap (lifetime spend, LPV, cost per LPV, status) to owner + CEO + Growth, then DELETE this routine.

Never touch unrelated campaigns. Suite/Ads exclusive to CMO. Never invent metrics.

Fires on:
- cron `13 9-20/2 * * *`

Ask the importing user for:
- Timezone
