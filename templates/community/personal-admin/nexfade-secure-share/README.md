# NexFade Secure Share

Create one-time encrypted NexFade links for sensitive files and notes from Grok Bot. Encrypts locally so NexFade only gets ciphertext; the decryption key stays in the URL fragment — built for sharing financials, legal docs, and HR files without email attachments.

| | |
| --- | --- |
| Original template | https://x.ai/bot/s9i2gj-picjq7jFrNWwQt |
| Creator | As Allocated ([@NexFade](https://x.com/NexFade)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/nexfade-secure-share), [grokbotwiki.com](https://www.grokbotwiki.com/bots/nexfade-secure-share), [grokbothq.xyz](https://grokbothq.xyz/bots/nexfade-secure-share), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/nexfade-secure-share), [x-research](https://botsdots.site/templates/nexfade-secure-share) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/nexfade-secure-share ~/pi-bots/nexfade-secure-share && cd ~/pi-bots/nexfade-secure-share
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/nexfade-secure-share`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
