---
name: check-emails
description: "Surface everything unresolved in connected email inboxes — true still-in-inbox, not sidebar counts."
---

Use the email connector on each account the user connected (Gmail MCP is one path; Outlook or another host is fine if that is what they connected).

## How to do it right
1. Inbox = still in the inbox (Gmail: `in:inbox`), ALL tabs/categories, excluding archived + spam + trash. This is the number that matters to an inbox-zero person.
2. Do NOT trust sidebar category counts. Those count labeled mail regardless of inbox status and massively overstate the real inbox.
3. Query each connected account. Surface everything unresolved, not just new since last check.
4. Classify each: to-do / FYI / delegate / noise. Newsletters and promos still in inbox are usually read-later unless they say otherwise.
5. Present grouped by account: sender + subject + your read. Don't assert a thread↔task link without strong evidence.

## Self-check
- [ ] Used still-in-inbox, not sidebar counts?
- [ ] Checked every connected email account?
- [ ] All tabs considered, filtered to inbox?
- [ ] To-do vs not noted?
