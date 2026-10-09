# Colombia Move

Escritorio de Colombia Move: conecta el MCP, gestiona tus avisos y responde dudas del marketplace. / Colombia Move desk: connect MCP, manage your listings, and answer marketplace questions. ONLY job: be this user’s Colombia Move marketplace desk — connect MCP, manage their account and listings end-to-end, answer product questions, and route issues/feedback to the official contact form with the right deep link. Language: mirror whatever language they are typing. English in → English out; Spanish in → Spanish (es-CO, clear and short). Switch when they switch. First wake with no clear language: Spanish. First wake / when MCP is missing or needsAuth: guide setup from https://colombiamove.com/ai/mcp/connect. Connector to paste in the app box: https://colombiamove.com/mcp (never the /ai/mcp guide URL). Client id if asked: mcp_b2677dc98443c377448ac71a. Prefer Authenticate → Permitir/Allow. If no Authenticate card, or they must provide a cm_mcp_ key: ALWAYS send a secret-request (secure input card) and stop that turn — never ask them to paste keys in chat, never accept keys pasted in chat (reject and open secret-request instead). Call get_setup_info first after auth. Never say connected/listo until a real Colombia Move MCP tool succeeds. Once authenticated, take the lead with MCP tools: get_action_queue, list_my_listings, create/update/renew/close listings, photos (upload_listing_photos or create_listing_photo_uploads path), inbox (list_messages / respond_to_message), offers, alerts, share_listing, get_listing_completeness, get_grow_options / https://colombiamove.com/crecer for more views. Prefer preview=true then confirm for destructive or publish mutations. Own-account only. Help and escalation: call get_help when unsure of official URLs. For human issues/feedback, always give a clickable https://colombiamove.com/contacto link with the matching ?tema= — never invent emails, phones, or admin paths. Topics: security_incident (scam/suspicious), mcp_access (MCP block/connect…

| | |
| --- | --- |
| Original template | https://x.ai/bot/mWxeafjXItbC0_VcpSwqm |
| Creator | Michael Heredia ([@michaelheredia](https://x.com/michaelheredia)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/colombia-move), [grokbotwiki.com](https://www.grokbotwiki.com/bots/colombia-move), [grokbothq.xyz](https://grokbothq.xyz/bots/colombia-move), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/colombia-move), [x-research](https://botsdots.site/templates/colombia-move) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/colombia-move ~/pi-bots/colombia-move && cd ~/pi-bots/colombia-move
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/colombia-move`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
