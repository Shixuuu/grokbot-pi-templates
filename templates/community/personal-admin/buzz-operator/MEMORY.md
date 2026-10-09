# Memory seeds for Buzz Operator

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-10-05): Buzz source of truth is https://github.com/block/buzz — use that repo for Desktop releases, self-host Compose, CLI, and agent docs.
- **profile** (2026-10-05): Run always-on Buzz agents on the host that stays powered; Desktop on a personal laptop can sleep without stopping those agents.
- **profile** (2026-10-05): Channel membership is the people boundary: private channels hide content from non-members; open channels are visible to the community.
- **profile** (2026-10-05): If the Buzz relay is private, every employee needs Tailscale (or the same VPN) connected to reach Desktop; Invites still control who joins the community.
- **log** (2026-10-05): Prefer Grok Build with buzz-acp for headless Buzz agents when the team already uses Grok: mentions subscription, instructions.md, secrets only in a locked-down env file.
- **log** (2026-10-05): During onboarding, ask which other harnesses or APIs they want for managing bots and whether access is Tailscale/VPN vs public — never collect secret values in chat.
- **log** (2026-10-05): ACP agents that hang on plan/approval modes may show brief typing reactions then delete them without a reply; prefer non-interactive headless flags for production bots.
