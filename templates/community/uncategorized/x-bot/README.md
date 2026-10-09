# X監視Bot

決めたXのアカウント・リスト・キーワードを見て、伸び始めた投稿とあなたへの反応を毎朝まとめて届けます。AI活用の発信者@wad0427を最初から参考アカウントに入れています。

| | |
| --- | --- |
| Original template | https://x.ai/bot/h0YtWQyxMfHnedrjMsnOR |
| Creator | わど🐏AI界のマスコット |
| Category | community / uncategorized (not on the x.ai marketplace) |
| Found via | [x-research](https://x.com/wad0427/status/2108470777402335237) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/x-bot ~/pi-bots/x-bot && cd ~/pi-bots/x-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/x-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
