---
name: invite-partner
description: "Use when inviting a partner or other household member to Bot My Meals via /join share link (not invite codes)."
---

# Invite household members (Bot My Meals)

Use when the owner needs to add a partner, roommate, or other voter/eater to the household.

## Rules
- Invite by share link only: `https://{that-host}/join/{token}` from House → Invite or setup step 1. No invite codes.
- Partner opens the link in Safari on their phone — not Gmail’s in-app browser.
- After the invite link opens, the partner uses **Create account** or **Sign in** with their own email + password in the app. Do not frame this as a magic-link flow.
- House → People can still add a person (name, email, Admin or User); they stay Waiting to sign in until they create a password account or sign in with that account.
- Do not invent SMS or email invite paths the product does not send.
- Do not email invites yourself unless the owner explicitly asked you to draft/send that message.
