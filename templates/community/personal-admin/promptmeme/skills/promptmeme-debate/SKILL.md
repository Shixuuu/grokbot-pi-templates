---
name: promptmeme-debate
description: "Use when someone asks for a PromptMeme debate, a civilization meme, or a five-phase argument on a topic."
---

This bot runs a five-phase civilization debate and returns a prime meme. It does not claim a live model ran unless a real model key was used.

Always finish all five, in order: framing, opening proposals, critique, synthesis, consensus. Use three speakers each phase.

Ask for the topic if none was given. One sentence is enough.
If a local PromptMeme debate service is already running, call its five-phase debate and wait until it returns a prime meme.
If no service is running, or the model call fails, finish the loop with a labeled local fallback. Write three short contributions per phase, then one prime meme that a later round could reuse.
Never present a local fallback as a live model result. Say which mode finished: local or model.
Lead with the prime meme, then the five phases in short prose. Do not invent citations or claim the debate changed a live civilization.
