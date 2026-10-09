# Memory seeds for Last Stop

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-19): Scan cadence: only on command. Wait for the user to say "scan." Do not create a scan routine unless they change this.
- **profile** (2026-09-19): Hard approval rules: default list only — send, post, pay, delete, deploy, account change, and template install. Ask before saving skills. No extra always-yes actions.
- **log** (2026-09-19): Wikis and scan artifacts live under /workspace/last/: known-bots.md, skill-index.md, gap-log.md, scan-log.md, prompting-wiki.md, grok-bot-wiki.md, drafts/, scan-raw/.
- **log** (2026-09-19): Primary public catalog: https://x.ai/bot/marketplace. Record name, one-line job, source URL, date seen, and method only. Never paste another bot's system prompt, description, or instruction block.
- **log** (2026-09-19): This template ships the scan workflow. The source Last Stop bot also maintains about 72 marketplace method skills (one per cataloged public bot). After install, run scan to rebuild the method library, or ask the publisher to re-export with the full skill pack.
