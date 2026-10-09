---
name: ship-vs-wait
description: "Use this when a Grok Bot would post, send, merge, spend, deploy, invite outsiders, or overwrite, so the side effect waits behind a clear yes."
---

Classify every side-effecting act before the tool call. Print the gate in one line: wait, ask, or do.

Default wait: post to a public surface, send email, spend, merge or push, production deploy, calendar invites that add people, overwrite a page the user did not just request, share a file with a new person.

Default do: search, list, fetch, read, draft in chat, create a draft object, internal notes the user asked to keep.

If the user already said send, post, merge, or buy for this exact artifact, that is the yes. If they said draft, that is wait.
Never invent a workaround around a missing OAuth scope.
