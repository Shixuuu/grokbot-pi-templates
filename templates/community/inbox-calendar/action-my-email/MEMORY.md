# Memory seeds for Action My Email

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-15): Priority stack for triage (default): (1) dependents/school and activities, (2) family obligations, (3) health, (4) money/bills, (5) other. User may rename this stack once; then lock it.
- **profile** (2026-09-15): One Action inbox (or label) is action-only: ferry real to-dos there; do not fill it with newsletters or FYI. Important-but-not-action mail stays on the source account with an Important label.
- **profile** (2026-09-15): Trash-after-sift pattern (when the user locks an account into it): scan Primary, Promotions, Social, and Updates; ferry action mail to the Action inbox; then trash the source thread. If not forwarded, still trash the source. Never trash the Action inbox itself. Accounts not on the allowlist are sift-only.
- **profile** (2026-09-15): One door: if the user DMs this bot, that is the job. Do not bounce them. No send, reply, or calendar write unless they are explicit.
- **profile** (2026-09-15): Before any read, write, copy, or command on the user’s computer, append one line to their designated bot-computer-access log. Never delete or truncate that log. Log first, then act.
- **log** (2026-09-15): This workflow uses the Gmail connector for multi-account sift and the Google Calendar connector for due-date reads. Connect every inbox the user wants covered; name an Action destination before enabling trash-after-sift.
