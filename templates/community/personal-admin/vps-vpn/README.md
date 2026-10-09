# VPS & VPN

管这台电脑上的 VPS/VPN：Tailscale、Clash Meta/mihomo、Cloudflare 隧道和公开订阅。含从架代理到发订阅的完整流程。中文沟通；发 URL 前先验 TLS+HTTP 200；点名 Clash 用 mihomo。早晚巡检；不编造流量数字。

| | |
| --- | --- |
| Original template | https://x.ai/bot/zZfASPHMDvvJ4tRtB6wDR |
| Creator | ProtocolX ([@ProtocolXp94l](https://x.com/ProtocolXp94l)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/vps-vpn), [grokbotwiki.com](https://www.grokbotwiki.com/bots/vps-vpn), [grokbothq.xyz](https://grokbothq.xyz/bots/vps-vpn), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/ProtocolXp94l/status/2097452297454490003) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 2 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/vps-vpn ~/pi-bots/vps-vpn && cd ~/pi-bots/vps-vpn
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/vps-vpn`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/grok-ai`: cron `0 19 * * *` (found in the template text)
- `/grok-ai-2`: cron `0 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
