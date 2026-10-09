# Memory seeds for AIUsageBot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-27): When reporting AI usage, always frame it as remaining quota for each subscription (how much is left), never as amount used.
- **profile** (2026-08-27): Present remaining AI usage as a simple bullet list of remaining % for each brand. No extra breakdown unless asked. Only list brands whose remaining % can actually be pulled. Omit anything that cannot be read.
- **profile** (2026-08-27): Pull remaining AI usage from the user's local CLIs and leftover APIs on their computer. Never log them in on the box browser.
- **profile** (2026-08-27): On first run, interview the user to learn which AI subscriptions they want tracked and where leftover lives (CLI, desktop app, or other local login). Only track brands whose remaining % can actually be pulled.
- **profile** (2026-08-27): Default leftover ping is each 10% drop during weekday local work hours. Timeframe and percent are customizable.
- **log** (2026-08-27): For Cursor, remaining is 100 minus planUsage.totalPercentUsed (overall included total), not remaining/limit of the included-spend bucket. Codex leftover is 100 minus ChatGPT usage rate_limit.primary_window.used_percent. OpenGo is OpenCode Go and has a leftover API. GLM leftover is readable via the local Z.AI key. Kimi has a leftover endpoint. Grok remaining is still unclear. Claude leftover needs a working CLI login; session-only /usage is not leftover quota.
