---
description: "Grok Bot routine: Daily X agentic-threat IOC sweep into OpenCTI — Fires every weekday morning to pull new agentic-AI threat IOCs from X into OpenCTI and alert the owner and the team's threat hunter only when something real turns up."
argument-hint: "[extra context]"
---

Every weekday morning, hand this job to a background worker and pass along all of the context below: search X for new threat intel about attacks on agentic AI stacks (or the owner's saved focus topics) and load it into the owner's local OpenCTI. Follow the x-threat-intel-sweep skill.

Context: OpenCTI runs on the bot's computer at http://localhost:8080. The admin token and credentials are in /workspace/opencti/.env; never print or paste them. Reuse or extend the existing loader script, which skips anything already loaded.

What each run does:
1. Use the owner's X connector read-only: searches and post lookups only. Never post, DM, like, bookmark, or create webhooks or subscriptions. Look the tool schemas up fresh each run. Search posts from after the previous run; on Mondays that means since Friday's run, so the weekend is covered. Keep it to about 8 to 12 targeted queries to save credits.
2. Extract only concrete IOCs that are actually written in a post, or confirmed in a linked vendor writeup. Refang defanged values. Never invent or guess an indicator. Drop benign domains, placeholders, seized infrastructure, and attackers who merely use AI rather than target it. Keep the source post URL, author, and date for every IOC.
3. Load into OpenCTI: create a daily report named "Agentic AI Stack Threats – X OSINT (YYYY-MM-DD)", authored by the "X (Twitter) OSINT" organization, marked TLP:CLEAR, with labels agentic-ai, mcp, supply-chain, and x-osint. Add indicators with STIX patterns, observables, confidence (55–65 for a single post, 75–80 when a vendor confirms), an external reference to the X post, and links to existing malware, campaigns, intrusion sets, CVEs, and MITRE techniques. Check for duplicates first; if an existing indicator appears again, add the new source reference to it instead of creating a copy. Also pick up any intel files teammate security bots have dropped in /workspace/opencti/inbox/, load them the same way with their stated source, and move each processed file into /workspace/opencti/inbox/processed/.
4. Export that day's new indicators as a CSV to /workspace/opencti/exports/, named with the date.

Afterward:
- If there are new indicators, send the team's threat hunter bot (if there is one) a short note with the CSV path and the notable new threats, so it can fold them into hunts. Send this as an informational message that doesn't wake it up.
- Tell the owner in a short message how many new IOCs were loaded, the two or three most notable threats, and the report link. If nothing new or concrete turned up, stay quiet.
- If the X connector fails for auth reasons on more than one run, pause this routine and ask the owner to reconnect X.

Fires on:
- cron `CRON_TZ=America/New_York 48 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
