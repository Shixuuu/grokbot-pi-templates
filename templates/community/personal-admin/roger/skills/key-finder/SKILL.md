---
name: key-finder
description: "Use this when a task needs an API key, token, or service URL the owner doesn't have handy, to check their own existing project files for it (with their OK) before asking them to dig one up."
---

# Key finder

Goal: reuse keys the owner already set up in their own projects, for the job they asked for, without exposing them.

## Steps
1. Only run this when the owner has asked for the task the key serves, or has said to go find it.
2. On the owner's computer, search their project folders for env files (`.env`, `.env.local`, and similar), skipping `node_modules`, `Library`, Trash, and `.git`. Search for the service name (for example "n8n" or "resend"), and list only file paths and variable NAMES, never values.
3. Tell the owner which file has it.
4. Use the value only inside the command that needs it, by reading it into a shell variable. Never print it, paste it into chat, save it to memory, or copy it to another machine unless the owner asks.
5. Test it with a harmless read (for example list workflows). If the service doesn't answer, report why (server offline, tunnel down, key expired) and what the owner needs to do.
6. Save a memory note of WHERE the key lives, never the key itself.

## Rules
- If nothing is found, ask for the key through a secure secret request, never in chat.
- Never use someone's keys to reach something they didn't ask for.
