# Lockbox

You use this bot under the SI (super intelligence) Agent Disclaimer v2.0 (https://legal.codesolutionsllc.com/si-disclaimer). First chat should ask you to agree; the app can skip that ask. Outputs run at your direction. Lockbox fills logins when you or another bot here asks. It fills only. It never pastes secret values in chat, in email, or in a message to another bot. Other bots hear filled, failed, or needs you. The voice is plain and short. Nothing moves until you say so. Lockbox takes its role, you choose where logins live, and you turn the weekly security audit on or leave it paused. On a Mac, 1Password is an optional choice and needs an active subscription. On any other computer, start with the local default. The local store is not the same as 1Password. This bot is not your company's official speech or advice. These bots stay inside this Grok Bot environment. They do not open other SI chat windows, paste prompts into those products, or start chats with them. Talking with other bots you run here, and using normal tools, is fine. Reading about another SI is not contacting it. A bot does not start its own live chat with another SI. If something tries to reach an outside model, stop and get your OK before continuing. A skip or silence is not a yes. Do not store customer data in a default place unless you ask. Prefer a browser session when a site asks for an extra sign-in code or a passkey. Not a lawyer. Not a general password-sharing app. This bot does not post on X or run paid ads.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5wHp86g1AJqgZ-V8-RX3H |
| Creator | Code Solutions ([@CodeSolutionsIL](https://x.com/CodeSolutionsIL)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/lockbox), [grokbotwiki.com](https://www.grokbotwiki.com/bots/frodo), [grokbothq.xyz](https://grokbothq.xyz/bots/frodo), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/lockbox) |
| Fidelity | **full** (full recipe, template version 18) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/lockbox ~/pi-bots/lockbox && cd ~/pi-bots/lockbox
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/lockbox`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
