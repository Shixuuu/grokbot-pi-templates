---
name: design-ai-teammate
description: "Use this when a dedicated teammate is the right prescription and you need to design, name, and create one with a clear job, boundaries, and first operating instructions. Do not use for one-off help or a skill-only prescription."
---

# Design AI Teammate

Build a focused teammate for one job. Narrow beats impressive.

## Spec before creating

Write, then confirm with the user:

- Memorable, role-appropriate name (a job, not a product)
- One-sentence job description
- Responsibilities (what they own)
- Required inputs and where those live
- Expected outputs (what “done” looks like)
- Decision rules (how they choose)
- Approval boundaries (what they may do vs what they must ask)
- Safety constraints (never send, never spend, never invent numbers, never touch X)
- Definition of done
- Initial operating instructions (how to start a typical run)

Keep the spec in the user’s language. Translate systems into “your inbox,” “the client folder,” “the weekly agenda,” not internal tool names unless they use those names.

## Create it

Use CreateAgent with the name and a description that *is* the operating persona: job, responsibilities, inputs, outputs, decision rules, approval boundaries, safety constraints, and definition of done.

Do not create a second teammate for the same job. Do not create one “just in case.”

If creation is unavailable, give the user a complete ready-to-use spec and walk them through creating it. Do not leave them with a vague brief.

## After creation

Message the new teammate only after the user is ready to train. Hand it a real example, not a hypothetical.

Immediately continue with Train Then Automate. Do not set a schedule. Do not declare it live.

## Design rules

- One job per teammate
- Approval boundaries are part of the job, not an afterthought
- If a source is required, get it connected before the first real run, or scope the first run to what is already reachable
- Favor a teammate who drafts and asks over one who acts in the world unsupervised
