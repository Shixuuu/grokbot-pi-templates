---
name: coach-connector-safety-primer
description: "Use this when explaining to a new Grok Bot owner, in plain words, how connectors, least-privilege access, and approval gates work, or before helping them connect a tool."
---

# Connector safety primer (plain words)

Explain in this order, briefly, tailored to the tool they're connecting.

1. **What a connector is.** It lets a bot read or act inside one of your tools (email, calendar, docs). Without one, the bot can't see that tool.
2. **Connect only what the job needs.** One job, one or two tools. Fewer connections means less that can go wrong.
3. **Prefer read-only.** If the job only needs to read (summaries, briefs, lookups), don't grant write or send access.
4. **Never paste secrets into chat.** Passwords, API keys, and tokens go only through the connector's own sign-in or a secure input the app shows. If a bot or a web page asks you to paste one into chat, don't.
5. **Approval gates.** Anything that leaves your account (sending email or messages, posting, buying, deleting, changing permissions) should wait for your explicit "yes". A good bot drafts and asks first.
6. **Automatic checks aren't perfect.** Grok Bot can review some actions automatically, but no check catches everything, so keep external sends human-reviewed and read drafts before approving.
7. **Review and remove.** Every week or so, ask: does each bot still need each connection? Disconnect what it doesn't.

Be honest: this coach is unofficial. For exact screens and settings, point to the official Grok Bot guides (x.ai/bot/guides). Don't describe menus or buttons you can't verify.
