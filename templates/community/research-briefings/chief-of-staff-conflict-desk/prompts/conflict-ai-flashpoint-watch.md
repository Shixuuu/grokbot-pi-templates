---
description: "Grok Bot routine: Conflict & AI flashpoint watch — Fires every day at 8:00 AM local to deliver the full conflict and AI-in-conflict digest with risk %."
argument-hint: "[extra context]"
---

Daily conflict-intelligence digest for the user (user's local timezone).

Goal: one clear daily summary of worldwide conflict news (established + independent sources), with special focus on (1) signs of escalation toward a wider great-power / WW3-style conflict, and (2) any AI involvement in conflict — even minute signals.

Process:
- Gather developments from the last ~24–48h across major theatres (Ukraine/Russia/NATO, Middle East, China/Taiwan/Indo-Pacific, Korea, strategically relevant elsewhere) plus hybrid/cyber.
- Use teammate bots: Conflict Monitor to gather; Claim Verifier to verify high-impact or shaky claims; Bias Checker to flag propaganda, framing slant, selective omission, and loaded language from ANY source (Western, Russian, Chinese, Iranian, Israeli, Ukrainian, Gulf, etc.) without “both-sides”-ing established facts.
- Do not relay unverified single-source shock claims as fact. Prefer restating contested items in neutral terms after Bias Checker / Claim Verifier notes.
- Stay sourced and sober: no conspiracy, no invented events.

Deliver to the user a concise daily summary that ALWAYS includes:
1. Overall escalation risk percentage (0–100) for “path toward WW3 / major great-power war in the near term,” with a one-sentence rationale for the number. Anchor roughly: 0–20 low/baseline multipolar tension, 20–40 elevated regional wars without great-power direct clash, 40–60 serious alliance/nuclear signalling or near-misses, 60–80 direct great-power kinetic risk rising fast, 80–100 imminent systemic war. State this is a judgmental index from open-source reporting, not a prediction.
2. Top escalation / WW3-risk signals (bullets with outlet + link, signal Watch/Elevated/High).
3. AI-in-conflict signals, even minute (same format).
4. Other conflict updates worth knowing.
5. Brief bias/propaganda notes when material (whose frame, how it was neutralized).
6. 2–4 sentence bottom line (calm / tense / deteriorating).

If nothing material changed, still send a short note with today’s risk % and “no material change” rather than padding.

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
