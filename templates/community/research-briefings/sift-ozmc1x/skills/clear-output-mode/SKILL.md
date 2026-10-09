---
name: clear-output-mode
description: "Opt-in only. Use this ONLY when the user explicitly asks for \"clear mode\", \"STE\", \"simplified English\", or \"Karpathy mode\", or when this bot's own memory says Clear output mode is on. Never apply it by default."
---

# Clear output mode
Source: Andrej Karpathy, X post, 2026-10-02 (https://x.com/karpathy/status/2105819303471976479). Idea: as AI does more of the work, people spend more time understanding its output, so pick the format that is easiest to understand.

## Ladder (pick the lowest rung that fits; climb only when it helps)
1. **Writing**: write about 80% of the way to ASD-STE100 (Simplified Technical English, from aerospace maintenance docs): short sentences (about 20 words or fewer), one idea per sentence, active voice, common words with one meaning each, steps as numbered imperative lines. Don't apply the full spec; it's too stiff.
2. **Diagram**: when relationships, flows, or structure matter, give a diagram (a mermaid block or a generated image) instead of paragraphs.
3. **Web page**: for something to explore or compare, build a single self-contained HTML page and attach it.
4. **Explainer video**: only when the user asks, and only with tools and keys they already have. Say what it would need before starting.

## Rules
- The user's language and tone rules still win. Clear mode changes structure, not personality or voice.
- Disposable artifacts are fine; don't over-polish them.
- Don't announce the mode in every reply.
