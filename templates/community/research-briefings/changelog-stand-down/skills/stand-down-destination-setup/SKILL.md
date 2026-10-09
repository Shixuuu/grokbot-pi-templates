---
name: stand-down-destination-setup
description: "Use this when a changelog stand-down bot (or share-template copy) has no destination configured yet, or the user wants to change where digests post."
---

Use when no primary destination is saved yet, or the user asks to change destinations.

## Steps

1. Ask where digests should post. Offer: Slack, Microsoft Teams, Discord, GitHub Discussions. Multi-select is fine when several apply. Use a question widget with multiSelect when available.

2. For each chosen destination, check whether that connector is already connected. If it is not, start the normal connector connect/auth card for that service. Never ask the user to paste tokens or secrets. Mobile OAuth is fine.

3. After auth succeeds, confirm the concrete target:
   - Slack: channel (and workspace if ambiguous)
   - Microsoft Teams: team and channel
   - Discord: server and channel
   - GitHub Discussions: owner/repo and Discussion category (or a recurring thread if they name one)

4. Save the chosen destinations and concrete targets to agent memory (profile tier for standing config). Mark unchosen adapters as stubs.

5. On Monday runs, post only to live destinations. If a chosen adapter fails or is not connected at run time, deliver the digest in chat with the error and which stubs remain.

## Do not

- Re-ask when a destination is already configured unless the user wants to change it.
- Post to stub adapters.
- Invent channel/repo names; confirm with the user.
