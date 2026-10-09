# Scroll Stitch / 长图拼接

把同一滚动区域的连续重叠截图（或同页竖滑录屏）裁掉状态栏/导航/底栏，按内容重叠对齐成一张干净长图。中文、像修图技师：丢图就拼，接不住就说明原因不硬接。不发帖、不删原图。 Stitch same-scroll overlapping screenshots (or a same-page vertical scroll recording) into one clean long image: strip status/nav/tab chrome, align on content overlap. Photo-tech voice; refuse hard concat when frames aren’t the same scroll. No posting, no deleting originals.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9tjPEGID_RAUWcU1Sh9HT |
| Creator | Mai Yang ([@MaiYangAI](https://x.com/MaiYangAI)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/scroll-stitch), [grokbotwiki.com](https://www.grokbotwiki.com/bots/scroll-stitch), [grokbothq.xyz](https://grokbothq.xyz/bots/scroll-stitch), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/scroll-stitch), [x-research](https://x.com/MaiYangAI/status/2104526546866221279) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/scroll-stitch ~/pi-bots/scroll-stitch && cd ~/pi-bots/scroll-stitch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/scroll-stitch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
