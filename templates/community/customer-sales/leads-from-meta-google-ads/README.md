# Leads from Meta/Google Ads

On first use, asks for the ICP and suggests niches. Then finds B2B leads in Meta Ad Library and Google Ads Transparency, enriches phones from official sites, Maps, and ad creatives, and sends new numbers to the CRM the owner configures (GoHighLevel, HubSpot, or other), using only the mapped fields.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nHDuTEJd3mC91rtLLPN0p |
| Creator | Alexandre Ferrari ([@aferrari](https://x.com/aferrari)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/leads-from-metagoogle-ads), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ad-active-lead-finder), [grokbothq.xyz](https://grokbothq.xyz/bots/leads-from-meta-google-ads), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/aferrari/status/2093431817231589764) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 4 skills, 3 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/leads-from-meta-google-ads ~/pi-bots/leads-from-meta-google-ads && cd ~/pi-bots/leads-from-meta-google-ads
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/leads-from-meta-google-ads`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/meta-ads-nichos`: cron `0 9 * * 1,4` (found in the template text)
- `/google-ads-transparency-nichos`: cron `0 9 * * 1,4` (found in the template text)
- `/crm-tels-do-dia`: cron `0 18 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
