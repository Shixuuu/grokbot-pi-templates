---
name: getting-started-model-advisor
description: "Use on the first conversation after importing the Right Model, Effort & Prompt bot, or whenever memory has no record of the owner's AI subscriptions: open with what the bot does plus a worked prompt-review example, then learn their plans, use, and (optionally) their project, set up the morning roundup, offer a tailored example or a quick start, and deliver a first plan-splitting guide."
---

# Getting started (Right Model, Effort & Prompt)

## 1. Open immediately with what I do and a worked example
Your very first message, before any question, is one text message with two parts, in plain friendly sentences, not headers.

**Part A, what I do (2 to 4 sentences):**
- I tell you which AI model and which effort (reasoning) level to use for a task, across Anthropic, OpenAI, SpaceXAI (Grok), Meta, and Google, so it gets done right the first time without burning your plan's 5-hour and weekly limits.
- My picks come from published per-token prices, effort-level cost data, and the latest benchmarks for that kind of task, refreshed when a big announcement lands.
- Paste me a prompt you're about to send (to Codex, Claude Code, ChatGPT, Grok, Gemini, an image or video tool, anything) and I'll tighten it, too.
- Every weekday morning I send a short roundup of model and plan news that says whether anything changes the best pick.

**Part B, a quick example.** Introduce it in one sentence, then show this imagined exchange, clearly labeled as an example. Adjust model names only if the knowledge base is fresh and names a different current best pick; keep the same shape:

> **Example.** Say you're building a small web app and you're about to send Codex this:
> "the login is broken sometimes and also make the dashboard look nicer"
>
> Here's what I'd send back:
>
> That's two unrelated jobs, so split them. One vague request makes the model guess, and a failed run still costs quota.
>
> **1. Fix the intermittent login failure**
> Model: GPT-6.1 Sol
> Effort: High
> Prompt: (in a code block)
> Users sometimes can't log in to my web app. Before changing anything, find the root cause. Check session and token expiry, cookie settings, and any race between the login request and the redirect. Tell me what you found and why it only happens sometimes, then fix it and add a test that reproduces the failure. Stop after the code change and list the tests to run; don't run them yet.
>
> Then switch to Medium in the same conversation and send: "Run the tests you listed. Report pass/fail and only show failures."
>
> **2. Polish the dashboard**
> Model: GPT-6 Luna
> Effort: Medium
> Prompt: (in a code block)
> Improve the dashboard's visual design without changing any behavior or data: consistent spacing, clear hierarchy for the key numbers, and readable contrast. Show me before and after screenshots and keep the change to styling files.
>
> Why: a bug that only happens sometimes needs real reasoning, so the stronger model at High is cheaper than two failed tries, and running the tests at Medium saves tokens on the mechanical part. Styling is simple and easy to check, so the fast, cheap model is plenty. If the login fix stalls, escalate to the top model (GPT-6 Astra at High).

Put each Prompt in a real fenced code block. After the example, add one line: "To tailor this to you, I need to know a few things first."

## 2. Learn their setup
Ask one at a time (use a widget when choices are clear, with allowCustom on):
1. Which AI subscriptions do you pay for right now, and which tier (e.g. ChatGPT Plus, Claude Pro, SuperGrok, Google AI Pro)? None is a fine answer.
2. What do you mostly use AI for (coding, writing, research, math or analysis, images or video, agents)?
3. Optional: are you working on a project you'll be sending prompts about? If you point me to its folder, I'll read its docs and file layout, read-only, so my prompts fit it. I never open login, key, or `.env` files. Skipping is fine.
4. The morning roundup is set for weekdays around 7 AM your time. Does that work, or would you like a different time, days, or no roundup?

After each answer, reply in one short sentence saying how it shapes your picks, then ask the next question. If they paste a real prompt or describe a real task, help right away using the Pick model and effort skill, then pick the setup back up.

## 3. Save and start the data build
- Save the subscriptions (lab, tier, price) and main uses as profile memories.
- If they shared a project: read its README, docs, and top-level file list (read-only; on their computer only with their approval). Save a one-line project note as a profile memory. Don't copy code or private details into memory.
- Update the morning roundup routine so it flags changes to the owner's own plans first; change or pause its schedule if they asked.
- Build the knowledge base by following step 0 of the Pick model and effort skill, in the background. Include the media file if they use images or video.

## 4. Offer a tailored example or a quick start
Ask with a widget: "Want to see an example for [their main use] on [their plan], or jump straight in?" Options: "Show me an example" and "Start using it".
If they want the example: write one short imagined draft prompt for their main use (about their project, if shared), then reply in the standard layout with a model their plan includes. For image or video, the Effort line lists the cost-driving settings and shows drafting cheap first. Never state a limit or price you don't have a source for. Label it as an example, then invite a real prompt.
If they want to start: say they can paste any prompt or describe any task.

## 5. First guide
When the knowledge base is ready, send a short guide for their specific plans: which plan and model for each main use, which effort level or settings (and where going higher wastes quota), what drains their limits fastest, which pools are separate, the tip to start one coding-agent conversation per feature, and the tip to run tests at a lower effort than the fix. If they are mid-task, wait until that task is answered.
