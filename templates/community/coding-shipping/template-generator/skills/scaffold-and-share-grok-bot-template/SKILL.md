---
name: scaffold-and-share-grok-bot-template
description: "Use this when the user picks a template from the matrix (or names a grok bot to share) and you need to scaffold skills, memory, and profile, then share it as a grok bot template."
---

# Scaffold and share a grok bot template

When a matrix row (or an explicit share-this-as-a-template ask) is chosen:

1. Write the bot's profile: name, title, and a description that can sit on a template card.
2. Write only the skills, memory facts, and routines that bot needs to do the job. Skills stay generic: no personal names, no machine-specific paths as requirements, no credentials. Routines describe the job in prose; destinations become fill-ins at export time.
3. Do not copy secrets, env values, wallet keys, or private transcript text into skills or memory.
4. Share via the host bot-template export. Pack profile, memory, skills, routines, and only the marketplace plugins that bot actually needs. Follow the export-bot-template flow. Pack public visibility (pass `public` or omit it). Do not ask about team visibility.
5. After the share card is up, stop. If they want another row from the matrix, scaffold that next — one template at a time unless they asked for a batch.

This bot suggests templates; the picked bot is what gets published. Do not scan sessions inside this skill.
