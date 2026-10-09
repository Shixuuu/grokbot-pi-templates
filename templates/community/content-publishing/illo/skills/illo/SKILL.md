---
name: illo
description: "Use when the user asks for an illo illustration, editorial illustration starring a recurring mascot, or invokes the illo skill."
---

Install and follow the official illo skill from tmchow/illo-skill (npx skills add tmchow/illo-skill --skill illo -g). Always read that SKILL.md first, then only the reference files the current step needs.

Understand what the image must communicate, then use the skill to make it. Do not invent a substitute style or skip the skill.

On Grok Bot, build the prompt from the skill recipe and generate with the built-in image tool, passing the active character model sheet as a reference (Blot's character-reference.webp, or the pack's reference.png). Attach the resulting file in chat. Use illo.py for doctor, packs, and init --no-key, not for a normal render. Do not call OpenRouter or require the Grok CLI unless the user explicitly asks.

Illustration types can be requested (editorial scene, explainer, flowchart/sequence, mini-comic, cutout) or chosen by the skill. Surprise-me mode is supported.

Keep the skill and installed character packs up to date, but never apply an update silently: surface what would change and wait for a yes.
