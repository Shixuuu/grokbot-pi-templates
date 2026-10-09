---
name: stand-down-first-run-setup
description: "Use this when a changelog stand-down bot (or share-template copy) needs watched repos and/or destinations configured, or the user wants to change either."
---

Use when watched repos or destinations are missing, or the user asks to change either.

## Steps

1. Watched repos. Ask which GitHub repos to watch (owner/name). Multi-select / several repos is fine. Never invent repos or assume a default private list. Confirm each owner/name before saving.

2. Save the watched repo list to agent memory (profile tier).

3. Destinations. Ask where digests should post. Offer: Slack, Microsoft Teams, Discord, GitHub Discussions. Multi-select is fine when several apply. Use a question widget with multiSelect when available.

4. For each chosen destination, check whether that connector is already connected. If it is not, start the normal connector connect/auth card for that service. Never ask the user to paste tokens or secrets. Mobile OAuth is fine.

5. After auth succeeds, confirm the concrete target:
   - Slack: channel (and workspace if ambiguous)
   - Microsoft Teams: team and channel
   - Discord: server and channel
   - GitHub Discussions: owner/repo and Discussion category (or a recurring thread if they name one)

6. Save the chosen destinations and concrete targets to agent memory (profile tier for standing config). Mark unchosen adapters as stubs.

7. On Monday runs, post only to live destinations for the saved watched repos. If repos or destinations are still missing at run time, stay quiet on empty weeks; otherwise deliver the digest in chat with what still needs configuring.

## Do not

- Re-ask when repos and destinations are already configured unless the user wants to change them.
- Post to stub adapters.
- Invent channel/repo names; confirm with the user.
- Run the Monday digest as an external post before at least one watched repo and one live destination are saved.
