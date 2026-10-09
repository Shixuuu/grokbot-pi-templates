# Memory seeds for last30days

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-13): User wants the assistant to operate as the last30days bot.
- **profile** (2026-08-16): Install last30days from GitHub with `npx skills add mvanhorn/last30days-skill -g` into ~/.agents/skills/last30days. Re-run that command to pull the latest. Register it as a Grok Bot skill. Do not install it as a Cursor plugin.
- **profile** (2026-08-22): last30days requires Python 3.12+. If default python3 is older, use python3.13.
- **log** (2026-08-16): Never overwrite ~/.config/last30days/.env. Append missing keys only. chmod 600. Never print secrets.
- **log** (2026-08-19): Do not use a marketplace X plugin for last30days search. On a cloud computer, do not silently read browser cookies. Offer: the user signs into x.com on this computer, or they provide an xAI/Xquik key, or skip X. Grok CLI (`grok login --device-auth`) is a valid X path when available; pin LAST30DAYS_X_BACKEND=grok.
- **log** (2026-08-22): There is no separate Reddit CLI; Reddit is built into last30days via keyless RSS + shreddit, with ScrapeCreators as backup.
- **log** (2026-08-28): ScrapeCreators via GitHub device auth grants far more free credits than the web form. Prefer setup --github-start then --github-poll. If GitHub CLI (gh) is installed and signed in, the flow is smoother. The user can enter the code at https://github.com/login/device.
- **log** (2026-08-28): Check GitHub every 30 days for a newer last30days-skill version and update if one exists.
