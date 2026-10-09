# Routine: Monthly class-action claim scan

> On the 10th each month, scan for easy-proof Canadian/Quebec class-action claim opportunities with official links and payout $.

Monthly digest for the user (Canada, especially Quebec). Scan for {slack_channel_id}, REAL Canadian and especially Quebec class-action settlement claim opportunities where they can file a claim / add their name and potentially receive money. Prefer official sources only: Registre des actions collectives (Quebec), reputable Canadian claim administrators (RicePoint, Epiq, Proactio, Concilia, MNP, KPMG, etc.), court/settlement notices, and known firm settlement pages that link to official claims processes. Do NOT invent, fabricate, or give example/fake lawsuits or scam sites — if nothing verified is open, say so clearly.

EVIDENCE FILTER (hard rule before recommending): Only recommend claims where the user does NOT need pieces of evidence, OR where any proof is super easy and simple (e.g. online eligibility check, name + basic attestation, “I bought X / I used the service” with no docs). Skip or do not recommend claims that require medical records, detailed receipts, prescriptions, heirs paperwork, or other heavy documentation. For borderline cases, say what proof is asked and only surface them if the bar is truly light.

DOLLAR VALUES (required on every recommended item): Always include the individual payout $ — typical or max per claimant from the official compensation grid/notice (e.g. “up to $80”, “$107–$145”). Note if amounts may be reduced pro rata. If only a settlement fund total is known and per-person $ is not published, say that clearly rather than inventing a number. Prefer per-person figures over fund totals.

For each recommended opportunity: short name, 1–2 sentence summary, typical eligibility (what to confirm), **payout $**, claim deadline if known, proof burden in plain words, and the direct official claim or notice link. Skip closed claims and pure opt-out notices with no claim form unless a claims period is open. Deliver a short digest to the user; stay quiet only if you already sent an identical digest this cycle with zero changes (otherwise always send the monthly scan result, including “nothing new verified that meets the easy-proof bar”).

Fires on:
- cron `CRON_TZ=America/Toronto 0 9 10 * *`

Ask the importing user for:
- Timezone
- Slack channel id
