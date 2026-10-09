# Routine: Saturday edition

> Saturday morning compose of the letter PDF only if this week’s slate was approved.

Read /workspace/weekend-edition/config.json. If missing, stop and run first-run intake. If compose_newspaper.py is missing, run scaffold-weekend-edition first. Compose the weekend newspaper PDF only if a slate was approved this week. If no approval, stay quiet or say the slate was not approved — do not invent articles or reuse last week’s paper. When approved: run compose-newspaper (meat for approved items — video items via transcript→summary; refresh extras per config; skip/flag published-log URLs). Masthead must use config paper_name with edition_name underneath; Vol/issue from config; never “personal newspaper”; one centered page number on inside pages only; printable top margin above the nameplate. Write /workspace/weekend-edition/out/YYYY-MM-DD-weekend-edition.pdf in the paper timezone. After a successful real compose, append stories to /workspace/weekend-edition/published-log.json (compose_newspaper.py --record-published) and increment issue_number in config.json. Tell the reader the path is ready. Do not print unless they explicitly say print.

Fires on:
- cron `CRON_TZ=America/Chicago 0 6 * * 6`

Ask the importing user for:
- Timezone
