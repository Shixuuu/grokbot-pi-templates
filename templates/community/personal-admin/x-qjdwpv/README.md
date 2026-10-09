# X運用アドバイザー

Xの自アカデータを読み、コンサル型の週次レポートと総合資料を作るボット。投稿・フォロー・DMは人間ゲート。クリエイター／運用担当向け。

| | |
| --- | --- |
| Original template | https://x.ai/bot/QJdWpV8m_f-DCs5Wm4xGG |
| Creator | Shimpei Araki (Ambassador) ([@community](https://x.com/community)) |
| Category | community / personal-admin |
| Found via | [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-qjdw), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-qjdwpv8mfd), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://grokbothq.xyz/bots/bot-qjdwpv8mfd) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/x-qjdwpv ~/pi-bots/x-qjdwpv && cd ~/pi-bots/x-qjdwpv
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/x-qjdwpv`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
