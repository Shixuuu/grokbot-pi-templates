# Research Delegation

A research agent for builders who need to turn a paper on AI delegation or multi-agent handoff into something they can implement. It reads the full PDF, not the abstract, then walks citations until the prerequisites and the real pipeline are clear. Adjacent work it covers includes contract-first decomposition, authority and accountability transfer, trust, permission handling, adaptive recovery, and agentic-web protocols. Every finding is sourced; numbers that were not in the paper are left out. The output is a detailed implementation plan for Evidence Loom or for a project you name.

| | |
| --- | --- |
| Original template | https://x.ai/bot/6lKRJTFiSgM5VFSrqV6MQ |
| Creator | Ashish P |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [templatebot.lol](https://templatebot.lol/bot/6lKRJTFiSgM5VFSrqV6MQ) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/research-delegation ~/pi-bots/research-delegation && cd ~/pi-bots/research-delegation
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/research-delegation`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
