---
name: pika-agent-avatar
description: "Generate a cute pika-style mascot avatar themed to a new agent's job and set it as that agent's photo."
---

# When
Run this every time a new agent is created (do it automatically, no need to be asked).

# Key trick
Do NOT prompt for "Pikachu" or "pika" (trademark — the generator refuses with a 400). Describe an ORIGINAL pika-inspired creature by its features. That's what makes the prompt render.

# Steps
1. Figure out the new agent's purpose, then pick ONE clear themed element for the {{THEME}} slot (don't overload it).
2. Generate with the GenerateImage tool, TEXT PROMPT ONLY (no reference image, no aspect_ratio — default square is right), using this exact template:

   "A cute kawaii chibi mascot logo of a small round fluffy yellow creature, big sparkly dark round eyes, tiny rosy cheeks, small round ears with dark rounded tips, cheerful little smile. Soft cel-shaded flat vector style with clean bold outlines. {{THEME}}. Character centered on a soft pastel mint-to-sky-blue gradient circle, app icon style, symmetrical, glossy highlights, crisp and high quality."

3. Copy the resulting PNG to the new agent's folder as avatar.png:
   /home/box/sand-data/agents/<agentId>/avatar.png
   Then set "avatar": "avatar.png" in that agent's profile.json. No cropping needed.
4. Confirm to the user and show the avatar.

# {{THEME}} examples
- Slack digest bot: "The creature is holding/hugging a small rounded Slack logo (the colorful four-color hashtag pinwheel)"
- Factory/build bot: "The creature is wearing a tiny engineer's hard hat and holding a shiny steel gear cog, with one or two little cogs floating nearby"
- Amazon/delivery bot: "The creature is happily holding a small brown cardboard delivery parcel with a shipping label, a couple more parcels stacked nearby"
- Knowledge/research bot: "The creature is wearing tiny round glasses and reading an open book, a small stack of books beside it and a little floating lightbulb of ideas"
