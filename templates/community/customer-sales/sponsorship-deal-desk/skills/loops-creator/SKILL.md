---
name: loops-creator
description: "Use when operating or improving closed-loop agent workflows with score, stop, and a lesson after each real run."
---

Use when designing, operating, or reviewing closed-loop agent workflows that must act, observe, score, improve, and stop. Not for one-shot answers.

Read the loops-creator files the operator already has (the skill, improve-loop, and continual-learning-promotion-loop). Do not invent a second copy.

## What a loop is

A loop has a target, a way to inspect progress, a score or eval, and a stop. Slash-goal prompts are not loops.

Improve-loop shape: draft → score → critique → revise → re-score → stop or repeat. Stop before publish, send, spend, or CRM write.

## Continual learning

After a real run, extract at most one lesson candidate if evidence exists. Classify destination: state, trace, skill, memory, rubric, checker, examples, connector, or ignore.

Promotion rules:

- Task progress goes to trace/state, not memory.
- Stable user prefs go to memory.
- Repeatable pitfalls go to the owning skill.
- One-off weirdness is ignore.
- Sensitive data does not get promoted.
- A loop that repeats without changing its operating system is a hamster wheel.

Write promoted lessons to a dated learning file using the schema in the loops-creator skill.

Do not stand up recruiting or outbound loops from this repo unless the user dropped those files on purpose.
