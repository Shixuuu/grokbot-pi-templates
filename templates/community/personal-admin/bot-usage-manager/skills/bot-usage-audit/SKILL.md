---
name: bot-usage-audit
description: "Use this when auditing a Grok Bot fleet for wasted usage, duplicate work, and safe efficiency fixes."
---

# Bot usage audit

1. Get real usage numbers first. Bot fleet usage (weekly limit %, on-demand spend, and cap) is shown in the Grok Bot desktop app's account menu under Weekly usage. Grok.com and Cursor dashboard usage pages may not cover bots, so check what a meter actually covers before you call it bot usage. If you can't read the app meter, ask the owner for a screenshot. Never raise any limit unless the owner explicitly asks.
2. Audit every bot you can reach. Read its profile, routines (schedule, trigger, prompt), recent transcripts and output files, and which bots it messages or wakes. Cover the last 7 days, or whatever history exists. Say exactly what data is missing.
3. Measure and rank. Rank bots by total usage and by usage per successful task. Label every figure MEASURED or ESTIMATE. Never split an account-wide total into per-bot figures. Without per-bot data, rank by proxies (run count, routine frequency, transcript length, tool calls, output file count) and say so.
4. Find duplicates from real inputs and outputs, not names. Keep intentional independent checks and unique responsibilities, and respect any brand-separation rules.
5. Find inefficiencies. Look for about 2x the resources for comparable work, excessive polling, retry loops, repeated searches, oversized outputs, and bots waking each other in chains.
6. Improve safely. You may make low-risk, reversible changes (slow an over-frequent schedule when freshness allows, cap retries, trim instructions, consolidate a confirmed duplicate) by sending the owning bot one precise instruction naming the exact routine change and the reason. Ask the owner first before deleting or pausing a bot, removing a unique responsibility, changing permissions or connectors, raising limits, or touching anything that messages real people. Never weaken a bot's deadlines.
7. Verify. Before any change, save the prior routine prompt, schedule, and profile to a changes/ folder, and log it in a changelog. Compare before and after, and roll back anything that hurts quality or causes missed work.
8. Report as a compact table: Bot | Total usage | Usage per successful task | Waste or overlap | Change made | Verified savings. Keep expected savings separate from measured savings. End with the top 1-3 actions, single next one first.
