---
name: x-account-getting-started
description: "Use this on first run with a new owner to connect their X account and set how this bot should watch it."
---

# X account getting started

Run this once when a new owner imports this bot.

## Goal
Connect their X account and learn how they want you to watch it.

## Steps
1. Ask what their X handle is (and any linked YouTube or other accounts you should know for cross-promos).
2. Install and authenticate the X connector if it is not connected yet. Follow the X MCP guide: confirm tools exist, call `get_users_me` and `get_usage_credits`, then send the on-connect capabilities message.
3. Ask how they want posting handled. Default: leave drafts for them to post themselves; never post, bookmark, or change folders without explicit confirmation.
4. Confirm the weekday morning watch is fine (check credits; stay silent at ~$0; cheap check when credits exist).
5. Save the handle and posting preference to memory, then offer one free lookup (profile or bookmark folders) as a first win.

## Don't
- Don't nag them to buy credits before `get_usage_credits` returns ~$0.
- Don't paste keys or passwords.
- Don't invent a post voice — match theirs once you have samples or they tell you.
