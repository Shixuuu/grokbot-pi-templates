---
name: pick-model-and-effort
description: "Use this when someone asks which AI model, effort/reasoning level, or subscription plan to use for a task across Anthropic, OpenAI, SpaceXAI (Grok), Meta, and Google (including image and video generation), wants a prompt reviewed before sending it to a coding agent, chatbot, or image/video tool, or asks how to stretch their plan's 5-hour and weekly limits."
---

# Pick model and effort

Goal: recommend the model + effort level (or, for image/video, the cost-driving settings) + plan that gets the task done at the lowest quota/token burn, grounded in the latest published benchmarks and prices. When the person has a prompt to send, also hand back an improved, ready-to-send prompt. Never invent numbers.

## 0. Knowledge base (build or refresh first)
Data lives in `/workspace/model-advisor/kb/`:
- `plans-and-quotas.md`: every personal plan per lab (price, models, effort modes, 5-hour/weekly/daily limit structure, coding-agent quotas, what happens at the limit, whether subscriptions can pay for API use).
- `model-lineup.md`: current models per lab, official API $/M input/output (including cached input), intelligence signals.
- `effort-cost-data.md`: per model AND per effort level, composite intelligence score, output tokens used, and cost per task (Artificial Analysis), plus derived relative cost and score per dollar, and how each plan's quota maps to API cost.
- `benchmarks-by-effort.md`: latest task-specific benchmark results per model and effort level, by category (coding, agentic/tool use, reasoning/math/science, knowledge/long context, human preference/writing), with best pick and best value per category and a freshness date per leaderboard.
- `media.md`: image and video generation per lab: current models, which personal plans include them and their published limits, API price per image or per second of video by resolution, the settings that change cost, image generation built into coding agents and how fast it drains their limits, and independent quality rankings with best pick and best value for images and for video.
- `official-guidance.md`: each lab's own advice on when to use which model or effort.

If the folder is missing, or a file's as-of date is older than ~14 days, or a major release or leaderboard update happened since, rebuild or refresh it live from official pricing pages, help centers, docs, release notes, artificialanalysis.ai, and the official leaderboards (SWE-bench, Scale SEAL, Terminal-Bench, ARC Prize, LMArena, Epoch AI) before answering. Every figure needs a source URL and as-of date; mark lab-reported vs independent results and the effort setting used; list gaps instead of guessing. Record single third-party analyses (e.g., measured subscription value) as one data point, not settled fact.

## 1. Know the person's plans and tool setup
Check memory for which subscriptions they pay for. If unknown and it changes the answer, ask once. Otherwise answer for API/general use and note how it maps to common plans.
If they use a local coding agent (Codex, Claude Code, Grok Build, Gemini CLI) and you have access to their computer, you may read its settings file (e.g. `~/.codex/config.toml`) to learn their default model, effort, and enabled effort levels. Never open login/auth files or `.env` files.
Check memory for project notes. If the task is about a project they've shared, use that note, and when you have access, skim the project's docs and relevant files (read-only). If a task clearly involves a project you haven't seen, offer once to look at it (read-only) so the prompt fits.

## 2. Classify the task
- Category: coding (small edit vs feature vs hard bug/architecture), agentic/tool use, reasoning/math/science, knowledge/research/long context, writing/chat, design/UI exploration, image, video, real-time/X content.
- Difficulty: routine, moderate, hard.
- Volume: one-off vs many runs; long context?

## 3. Choose, using the data
- Judge intelligence with the benchmarks that match the task category, not only the composite index. Prefer independent results; treat lab-reported numbers as upper bounds.
- Start from the cheapest model whose score at its DEFAULT effort is enough for the difficulty. A stronger model at lower effort often beats a weaker one at higher effort; check the effort tables.
- Effort never changes per-token price; higher effort costs more only through extra tokens. Step up only where the data shows a large gain for the category; skip steps with tiny gains and big token multipliers. Step up one level after a real miss; step back down for follow-up work that reuses what's settled.
- Split effort inside one coding task: plan, root-cause, and write the fix at High or Max, with the prompt ending "stop after the code change, don't run tests, list which tests to run and what you expect"; then drop to Low/Medium (or the cheap model) in the same conversation to run the tests and report pass/fail only; go back up only for failures that need real thinking. Skip Ultra-style subagent modes for single fixes, and ask for failures-only test output so the context stays lean.
- For image and video: there is no reasoning effort. Cost is driven by resolution, length, number of variations, quality/speed mode, and audio. Draft cheap, then spend high settings only on the keeper.
- For design/UI redesigns: recommend concept images first, then code only the chosen concept. If the coding agent has built-in image generation, keep the whole flow in that agent and say how much faster images drain its limits. Let the agent that knows the code invent the concepts and describe each screen to the image generator. Use a stronger model at moderate effort for that thinking.
- Map API cost to quota burn where the lab says usage is metered by API price (e.g. Codex credits). Where weighting isn't published, API cost only indicates direction; say so.
- Route to the plan pool with the most headroom: separate pools are free capacity; shared pools need rationing.
- Keep the scarcest model as an escalation backup, not the first pick.
- Avoid fast/priority modes, image/video generation, deep research, long agent runs, and bloated context unless the task needs them. For long coding-agent threads, recommend one conversation per feature with a short handoff note.
- Recommend another lab's model only when the data shows it's clearly better or cheaper for this task, and say whether it needs a plan they don't have.

## 4. Review the prompt (when they have one to send)
- Split unrelated problems into separate tasks/threads. For media, split look (still image) from motion (video).
- Replace vague words with testable definitions. When feedback is only symptoms ("it doesn't look like a book"), add a short list of hard requirements describing what done looks like.
- Separate questions from fixes: ask for the explanation or root cause first, then the change. For a vague brief, have the agent restate the goal and stop for OK before building.
- Check feasibility first: when the request depends on something that may not exist (an official sign-in method, an API capability, a plan feature), make step 1 a documented-sources check with a clear stop-and-report if it isn't supported, before any code.
- Add the facts the agent needs: dates, what was observed, which parts of the system to trace, and known suspects.
- For expensive runs, add checkpoints at cheap moments (concept summaries, then one test image or one screen, then the rest). For big refactors, build in phases with a stop for review after each, and recommend a lower effort for later phases that follow an approved pattern. Tell the agent to stop and report if a needed tool is unavailable instead of quietly switching methods. Use mock modes so testing doesn't spend money.
- When changing something that exists, suggest attaching screenshots of the current version with a guard line: don't reuse that layout or style, and treat the code as the source of truth for features.
- Matching a design: build one screen first and stop for review. Have the agent list every visible difference before fixing, and fix through a shared design system. When the person sends a side-by-side, turn it into a numbered list of specific fixes. Carry settled lessons into the next screen's prompt, and point at an approved screen as the spacing and scale reference to avoid swinging between too big and too tight.
- Add a finish line: tests to run (or, at high effort, a list of tests to run in a cheaper follow-up), what to report, and to say plainly if something can't be done.
- Keep their intent and voice; don't bloat it.

## 5. Answer
For each task, use exactly this layout, in this order:
- A bold task title.
- `Model:` the model name.
- `Effort:` the effort level. For image or video, list the settings that drive cost instead and say plainly there is no effort setting.
- `Prompt:` the ready-to-send prompt in a fenced code block (omit when there is no prompt).

Then, briefly and in plain words: why this pick, one cheaper fallback or an escalation backup, and what failure means move up one step. Nothing after that.
