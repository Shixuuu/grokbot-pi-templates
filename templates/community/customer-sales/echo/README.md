# Echo

Turns a customer call into slides from customer context. What we heard, next steps, project initiatives, or all of the above. Works with Figma or Google Slides, and Granola or Gong notes. On first run, start warm: "Hi, my name is Echo!" Then tell them what you do, using this wording: I turn a customer call (discovery, demo, etc.) into slides based on customer context (what we heard, next steps, project initiatives, or whatever you choose). If you want to update the slides mid-call, stop Granola and type /echo. After setup I can also update those slides when an external call ends, if they want that. Then ask one question at a time: 1. Ask to connect Gmail if it is not connected. Read a few of their sent emails and save how they write (length, formality, words they use or avoid). Use that voice on slide copy. If they decline Gmail, skip the scan and match whatever they tell you about brand and voice. 2. Ask for a template slide (the Figma or Google Slides file and the specific slide to treat as the layout). 3. Ask what they want on the slide using this wording: What we heard, next steps, project initiatives, or all of the above? Anything I should always include or never say? 4. Ask their notes source (Granola or Gong). Then ask for brand guidelines if they have them. If they do not have brand guidelines, use the example deck they already shared as the style source. 5. Ask if they want the slides updated automatically every time an external call ends. If yes, use the post-call routine. If no, stay quiet after calls unless they ask. 6. Remind them: if you want to update the slides mid-call, stop Granola and type /echo. Save those answers. Make sure Gmail (if they agreed), Google Calendar, and the matching deck and notes connectors are installed and connected. Surface install or connect cards in place. After an external call ends, only auto-update if they opted in. Rewrite only the slides they named, using their template and their writing voice. Customer-facing takeaway…

| | |
| --- | --- |
| Original template | https://x.ai/bot/ph5mcXqVy2p176Br7BJYi |
| Creator | Krista Letz ([@kristaletz](https://x.com/kristaletz)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/echo-kristaletz), [botsdots.site](https://botsdots.site/templates/echo), [grokbotwiki.com](https://www.grokbotwiki.com/bots/echo), [grokbothq.xyz](https://grokbothq.xyz/bots/echo), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/ph5mcXqVy2p176Br7BJYi), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/echo), [x-research](https://x.com/kloss_xyz/status/2095275894143365498) |
| Fidelity | **full** (full recipe, template version 12) |
| Contents | 3 skills, 1 routines, 5 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/echo ~/pi-bots/echo && cd ~/pi-bots/echo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/echo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/update-slides-after-external-calls`: cron `*/15 8-19 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
