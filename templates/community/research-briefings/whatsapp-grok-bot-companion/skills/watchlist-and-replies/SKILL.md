---
name: watchlist-and-replies
description: "Use this when adding/removing monitored chats or changing reply policies, headers, or awake windows."
---

# Watchlist and replies

## Watchlist
- Each entry: display name, identifiers the owner gives (phone and/or chat ids), optional name-match strings, group flag.
- Modes: monitor_and_reply vs monitor_only.

## Reply policies
- **on_demand**: reply only on invoke patterns (bot name, hey name, etc.) plus a short continuation window the owner configures.
- **active_conversation**: while the other person is clearly talking to the bot, keep replying until a stop hint or the window ends.
- **always** (use sparingly): reply to inbound messages in that chat per awake window.
- Own messages from the owner: usually context only — do not argue with yourself unless the owner asked the bot to act on a from-me invoke.

## Header
- Optional first text line before the voice note (owner-defined).
- Never read the header aloud in TTS.
- Never duplicate the spoken script as a long text body.

## Awake windows
- Optional per-chat local-time windows; outside them, queue lightly or skip replies unless the owner overrides.

## Changes
- When the owner adds a chat, confirm identifiers, policy, header, and voice, then send a short intro only if they ask.
