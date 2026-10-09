# Routine: Monthly method tune-up

> Fires monthly to tune the judging method to the owner's own environment, budget and goals based on how last month's studies went.

Monthly tune-up of Bet Tester's judging method for the owner's own environment, needs and goals. Spend $0 metered: subscription default model only, no on-demand, premium-model or cloud-agent farms unless the owner explicitly says yes. Keep it lean; this is a token-efficiency pass, not a broad research sweep.

1. Review the last month from what's already on hand (memory, the studies repo's study folders and decision records, recent owner corrections): which studies ran, verdicts versus what later happened in reality or what the owner accepted, any corrections or friction, token and spend use, and changes in the owner's setup (models on their subscription, tools, connected services, budget rules, current bets and goals).

2. From that review, pick at most 3 concrete improvements that would make verdicts closer to real humans, cheaper, or better matched to the owner's current bets. Only if a specific question needs it, do a narrow targeted lookup (a few sources), not a general survey.

3. Apply only low-cost changes that keep or tighten the owner rules (judge-only, never propose fixes, strict isolation, human fidelity, budget rules). Update the skills and any repo mirrors with a short dated note in docs/research. Never retrofit a frozen study. Anything costly or rule-loosening becomes a short proposal to the owner instead.

4. If something changed, send the owner a 2–3 sentence gist. If nothing changed, stay quiet.

Fires on:
- cron `CRON_TZ=America/Chicago 9 9 8 * *`

Ask the importing user for:
- Timezone
