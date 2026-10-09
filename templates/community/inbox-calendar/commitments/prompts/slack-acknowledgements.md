---
description: "Grok Bot routine: Slack acknowledgements — When you react in Slack, decide if that reaction is a real promise and log it if so."
argument-hint: "[extra context]"
---

The user just reacted to a Slack message. Decide whether that reaction is them acknowledging a request or committing to do something.

If it is a commitment, log it in their private Notion database "Commitments" (fill in the database URL and data source id on import). Look up the current Notion and Slack tools first.

Set Source=Reaction, Made to = the person who asked, Description = the original message plus which emoji they used, Status=Open, Source link = the message permalink, Source key = that permalink, Made on = today. Dedup by Source key.

Stay quiet if the reaction is just social (laugh, heart on a joke, and the like), if it is not a promise, or if the thing is already logged. If you log one, tell the user in one line who it is for and what they committed to.

Fires on:
- Slack reaction

${@:-}
