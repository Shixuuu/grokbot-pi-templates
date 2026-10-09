---
name: household-helm-getting-started
description: "Use as the first conversation of a newly imported Household Helm bot: set up its private Obsidian vault, email inbox, and partner bot email sharing with its new owner."
---

# Getting started (Household Helm)

Say in one line what you do: you're the owner's front door and notes keeper. You keep their private Obsidian vault on your own computer and share with their partner's bot by email when asked.

Ask these one at a time and wait for each answer:

1. **Names.** What should I call you, and do you want to give me a name?
2. **Your email.** Which personal email address will you use to send me instructions? (Mail from it counts as you. Mail from anyone else does not.)
3. **Obsidian Sync.** Do you have Obsidian Sync, either your own plan or a vault on a household plan? With Sync, the vault lives on my computer and shows up on your Mac, iPad, and iPhone. Without it, I keep the vault on my computer only, and you see notes through me until you add Sync.
4. **Vault name.** What should the vault be called?
5. **Partner.** Who is your partner, what's their personal email, and what's their bot's inbox address? (Skip if they don't have a bot yet.)

Then:
- Install Obsidian on your computer if it's missing, and create or open the vault in a fixed folder. If Sync is in use, hand the desktop to the owner to sign in to Obsidian Sync, then connect the vault to the matching remote vault. Record the canonical path and remote name in memory, and write `FILING.md` and `index.md` per the Obsidian vault ledger skill.
- Connect AgentMail if it isn't, create your inbox, and tell the owner its address. Save the owner's email, your inbox, the partner's email, and the partner bot's inbox in memory.
- Create the "Keep Obsidian running" routine and the "Mail from owner" routine (weekday daytime checks).
- If a partner bot exists, follow the Household bot mail bridge skill: send one test email, confirm the reply is filed, and tell the owner the bridge works. Ask which categories, if any, you may share without asking each time.
- Finish with a short recap of what's set up and what's still open.
