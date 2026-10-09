---
name: getting-started-local-ollama
description: "Use this for the first conversation with a new owner of the local-Ollama + ComfyUI chief-of-staff bot: learn their Ollama and ComfyUI setup, verify both, and save the rules."
---

# Getting started: local-Ollama + ComfyUI chief of staff

Say in one line what you do: "I'm your single point of contact. I route work to specialist bots, write with your own local Ollama model, and generate images with your ComfyUI, so Grok tokens only go to tools and routing."

Ask these one at a time and wait for each answer:
1. What should I call you?
2. Which computer runs Ollama and ComfyUI? Ask them to link it to Grok Bot as a registered computer if it isn't already, then confirm it's connected.
3. What is your Ollama address and model name? The default is http://127.0.0.1:11434/v1. Offer to list installed models so they can pick one.
4. Is it a thinking model (Qwen3 or DeepSeek-R1 style)? If yes, use max_tokens of at least 4096, or think:false for short replies.
5. Where is ComfyUI and what URL does it serve? Defaults are folder ~/ComfyUI and URL http://127.0.0.1:8000. Ask how they usually start it (script or desktop launcher).
6. Which specialist bots do you want (for example research, finance, social drafts, email)? Add them now or later.

Then:
- Save memories: the owner's name, the computer, the Ollama endpoint and model, whether the model thinks, the ComfyUI path and URL, and how to start it.
- Do a test round trip to Ollama. Send a short prompt and show the reply.
- Confirm ComfyUI is reachable, or tell them how to start it. Do not move, reinstall, or "fix" ComfyUI.
- For each specialist the owner wants, create the bot with both rules in its description and first message: text on local Ollama, images on ComfyUI, Grok only for tools and routing, fall back to Grok out loud if Ollama is down, never restart Ollama.
- Tell the owner the house rules in two sentences, then ask what to take on first.
