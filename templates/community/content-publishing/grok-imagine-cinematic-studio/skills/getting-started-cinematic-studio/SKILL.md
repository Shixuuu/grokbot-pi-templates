---
name: getting-started-cinematic-studio
description: "Use on the first conversation after importing the cinematic studio bot: offer to set up Grok Build and the studio repo, learn the owner's film idea, then get them to a first locked step."
---

# Getting started

Wherever a step below lists choices, ask it as a question widget with those options as clickable buttons (allowCustom on, so they can type their own answer), one widget per question, and wait for the pick. Ask open questions as plain text.

Open with one line on what you do: you direct 1–2 minute cinematic shorts with Grok Build and Grok Imagine using the Grok Imagine Cinematic Studio plugin, from Production Bible and Character DNA through plates, clips, and assembly.

Then ask the setup offer as a widget: "I can set up Grok Build and the Cinematic Studio repo on my own computer so you don't have to install anything. Want me to?"
- Options:
  - "Yes, set it up on your computer" (primary)
  - "I already run Grok Build myself"
  - "Both: yours as main, mine as backup"
  - "Both: mine as main, yours as backup"

If they pick yes or either "Both", set it up on your own computer:
1. Check whether `grok` is already installed (`grok --version`). If not, install it with xAI's official installer: `curl -fsSL https://x.ai/cli/install.sh | bash`.
2. Install the studio plugin from the repo: `grok plugin install https://github.com/FineComputer14451/Grok-Imagine-Cinematic-Studio`, then confirm it with `grok plugin list`.
3. Ask billing as a widget: "How should Grok Build be billed?"
   - Options:
     - "SuperGrok subscription"
     - "xAI API key"
     - "Both: subscription first, API key as fallback"
     - "Both: API key first, subscription as fallback"
   - For SuperGrok, run `grok login` and hand them your desktop for the browser sign-in.
   - For an API key, request it through a secure secret request; never ask them to paste it in chat.
   - For either "Both", set up both. Use the one they chose first by default, and tell the owner before any run switches to the fallback.
4. Run the plugin's doctor to confirm the setup works, and tell them in one sentence whether it passed.

If they run Grok Build themselves (alone or as one of the "Both" choices), ask in plain text which computer it's on, and note that you'll keep prompts and project files ready for them to run there. Follow their main/backup order when deciding where a session runs.

Then ask these one at a time, waiting for each answer:
1. Plain text: "What's the film about? Give me a one-line pitch and the main character."
2. Widget: "Is this one film or a series?"
   - Options: "One film" and "A series of episodes".
   - For a series, plan one series Bible and one Character DNA shared by every episode, with a script and shot list per episode.
3. Widget: "How long should it be?" (for a series, "How long should each episode be?")
   - Options: "About 60 seconds", "About 90 seconds", "About 2 minutes", and "As long as the story needs".
4. Widget: "What aspect ratio?"
   - Options: "16:9 (widescreen)" and "9:16 (vertical)".
5. Widget: "Do you already have project files (Bible, DNA, script, shot list, reference images)?"
   - Options: "Yes, I have files" and "Starting fresh".
   - If they have files, ask where they are in plain text. Those files will be the source of truth.
6. Plain text: "Any voice direction for the character, and any hard rules (no on-screen text, logos to avoid, budget limits)?"

Then save the answers as memories (billing choice and fallback order, where Build runs and which computer is main, film or series, length, project location, locked rules) and propose the first gated step: usually the Production Bible (a series Bible for a series), or a review of their existing files with any questions. Stop and wait for GO before any generation.
