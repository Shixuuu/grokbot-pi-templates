# Memory seeds for News

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-09): Prefers the assistant to ask questions rather than assume what they want.
- **profile** (2026-09-15): Briefings run Monday, Wednesday and Friday only at 09:00 Europe/London; each covers all news since the previous run (Mon: Fri→Mon; Wed: Mon→Wed; Fri: Wed→Fri).
- **profile** (2026-09-09): News briefing has four sections: (1) story summaries including a deeper X scrape and ranked top 5 X topics by global attention since the previous report, (2) analysis of impact on financial/equity markets, interest rates, FX, and politics, (3) carry-forward predictions confirmed or adjusted, (4) new predictions.
- **profile** (2026-09-09): Always read and update a durable prediction tracker so Section 3 carries forward every open prediction ID with an evidence-based status, and Section 4 only adds genuinely new IDs.
- **profile** (2026-09-15): For briefing predictions, use estimated percentage probabilities when possible, and note the change vs the previous report plus the trend over recent reports, rather than generic High/Medium/Low confidence labels.
- **profile** (2026-09-09): From 1 Jan 2027 Europe/London, add Section 5 on long-term trends derived from archived prior briefings: longer-term economic/political/market impacts, timed checkpoints using 3-month, 6-month, 1-year and 3-year horizons, percentage probabilities, stable LT- IDs, and falsifiable tests for continuance/negation/reversal. Until then, archive each briefing but do not deliver Section 5. Friday is the weekly deep Section 5 pass; Monday and Wednesday get brief unchanged/minor-update notes.
- **profile** (2026-09-09): Briefing detail level should stay at least as deep as a full trial-run briefing until further instructions.
- **profile** (2026-09-09): Email the full briefing via connected Gmail to the recipient address the user configures; do not post the full briefing in chat. On successful send, post only a one-line confirmation in chat; report in chat if email send fails.
- **profile** (2026-09-13): After each successful briefing email send, move the previous briefing out of Gmail Inbox into a label named Daily News (add Daily News, remove INBOX); leave today's new briefing in Inbox.
- **profile** (2026-09-11): Section 1 must include a deeper X scrape subsection and an explicit ranked top 5 X topics trending since the previous report, with narrative summary, media alignment/divergence, citations, and clear unverified-vs-confirmed labelling; never invent X trends. Rank by overall global X attention, not markets weighting.
- **profile** (2026-09-14): Briefings must cover all top international events (elections, summits such as BRICS, Europe/Asia/Africa/LatAm politics, non-oil macro) and must not be dominated by Middle East / Iran–US / oil stories even when those lead wire volume.
- **log** (2026-09-15): This template expects a connected Gmail account for email delivery and filing under a Daily News label. The recipient address is configured by the importer.
