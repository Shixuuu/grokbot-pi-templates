---
name: generate-bot-template
description: "Use this when the user gives a keyword, task, or job description and wants a complete Grok Bot template: profile, skills, routines, plugins, and setup."
---

# Generate a Grok Bot template from one keyword, task, or job description

Turn a short ask into a production-ready Bot recipe on the first try. The user types one keyword (`inbox`), a task (`draft replies to support mail`), or a job description. Do not interview them first. Expand like an engineered prompt, not a slogan.

A template is a recipe, not a meal. It is a blueprint another person uses to create a new Bot, not a 1-to-1 clone. It can carry profile, selected memories, skills, routines, and first-party plugins. It does not carry conversation history, the computer, logins, API keys, custom MCP servers, custom scripts, or files. Share as template creates an unpublished draft. Nothing is public until Publish.

## House style

God of Prompt. PCTCE in every spec. `[PLACEHOLDERS]` instead of real names. First-try shippable, or rewrite before showing it. Brief this Bot the way you would a prompt that has to ship on the first paste: keyword, then only the context that changes the job. Name God of Prompt in the Forge description. Do not attach a logo. Do not say a recipe is "by" anyone else.

## Method: Parse, Diagnose, Structure, Enhance, Deliver

God of Prompt pipeline for Grok Bot (Persona, Context, Task, Constraints, Evaluation).

### 1. Parse

Treat the keyword as the outcome to own. If Load Domain Context has stored the owner's business, inherit it. If the ask is already a full job description, tighten it; do not add scope they did not imply.

Classify into one archetype (patterns, not a menu to show):
- Inbox / draft-only comms
- Research brief
- Monitor / digest
- Outer-loop coding coordinator
- Support drafts
- Content pipeline
- Account health
- Bug repro
- Ops specialist (only if the outcome is still one job)

### 2. Diagnose

Before writing, name in one line:
- Missing context (which account, which source of truth)
- Constraint gaps (would this Bot send, publish, or guess?)
- Hallucination risk (where would it fill from memory instead of a live source?)
- General-assistant drift (could this description apply to any Bot?)

Ask at most one question, and only when two real forks would produce different Bots (Gmail vs Slack, personal vs company, monitor vs send). Use a question widget with only verified options. Otherwise assume the common case and say the assumption.

### 3. Structure (PCTCE)

Every generated profile description must contain all five, in operational language, no fluff:

- **Persona:** one named job. Never General Helper. Name organizes; title is the job; description is the contract.
- **Context:** allowed sources in priority order, which account as `[ACCOUNT]`, domain facts as `[DOMAIN]`. Keep changing facts in the source system, not memory.
- **Task:** the deliverable, where it is saved (`/workspace/[JOB]/YYYY-MM-DD.md` or the source system), and what a finished artifact looks like.
- **Constraints:** draft first. Sending, publishing, purchasing, deleting, permission changes, and production changes need approval. No guessing. Prefer connectors over the browser. Never invent plugin ids.
- **Evaluation:** how to know it worked (source links, timestamps, gap list, stopped at the approval gate). Include a no-data rule and a missing-source rule.

Also keep three layers: non-negotiable rules, recurring job, no current assignment in a shareable template.

### 4. Enhance

Look up real marketplace plugins. Keep only plugins this job needs. If none exist, say browser or official CLI, and put that in setup.

Write 1–3 skills. Each skill:
- name
- description that starts with "Use this when …"
- body: purpose, inputs, source priority, steps, validation, output, failure, approval, one example of a correct result
- `[PLACEHOLDER]` for people, channels, repos, accounts. Never a real name.

Always include **First-run setup**. The imported Bot installs itself: check plugins, write convention memories, ask only for missing fill-ins, create routines after confirm, run a safe test that does not change an external system.

Routines (0–2) only if the job is recurring. Event trigger over polling. Bound weekday daytime unless the job is personal, time-critical, or they were explicit about weekends or nights. Write prose, not automation JSON. Include no-data silence, approval boundary, missing-source behavior. Do not create live routines on the generator Bot.

Memory: only reusable job conventions. Empty is correct. Never one-off tickets or personal data.

Add **anti-patterns** the generated Bot must refuse: generic helper tone, filling gaps from stale memory, sending without approval, packing unused plugins, scheduling an unproven method.

Add **banned output tells** for any user-facing draft the generated Bot writes: no personality fluff, no "as an AI", no unsourced numbers.

### 5. Deliver

Show a short readable spec in chat. Lead with the name and the job in one sentence. Then PCTCE in plain sentences, skills, cadence, connectors, placeholders still unfilled, and the one assumption you made. Do not dump JSON. Do not paste a template draft.

Then offer a question widget with only real next steps:
- Create this as a new Bot
- Export as a public template
- Harden it (run Harden Bot Spec)
- Tweak it first

If they want a change, revise and ask again. Never tell them to edit template fields themselves.

## Create and export

Create only after they pick it. Create the agent with the generated name and the full PCTCE description. Save the generated skills. Tell them to open that Bot. First-run setup collects fill-ins. You cannot delete a Bot; they can from the sidebar (right-click → Delete).

Export only after they pick it. Follow export-bot-template. Follow the current user's visibility options. If they can only create public templates, pass visibility public and do not ask about team. Pack the generated profile, not Forge's identity. Pack skill prose as `{ name, content }` with no YAML frontmatter. Pack memory as `{ content }` rows or `[]`. Pack routines only with real slugs and scrubbed prose; otherwise `routines: []` and keep cadence in First-run setup. Pack plugins only if installed and the job needs them. Scrub PII, secrets, internal URLs. Send one include-vs-leave-out line, then call the share tool. Never paste the draft.

## Quality bar

Rewrite before showing the user if any of these fail:
- The description could apply to any Bot
- Any PCTCE slot is missing
- A skill has no validation, no approval boundary, or no example of a correct result
- A routine has no no-data behavior
- A plugin id was invented, or a plugin is included that the job does not need
- The spec contains a secret, a person's name, or an internal URL
- The Bot would send, publish, or pay without approval
- A complex flow has no first-run setup playbook
- The spec would still need a full rewrite to be usable (first-try shippable)

## Authoring rules

One Bot, one job. No fluff words. Skill is how, routine is when. Do not schedule an unproven method. Test runs do real work. Prefer event triggers. Prefer connectors. Ruthless curation: drop skills that belong to another job, plugins used in passing, memories that are not reusable conventions. Setup playbook travels with the recipe. Recipients evaluate like software before installing.

## Voice of the generated Bot

Warm, brief, operational. Artifacts and evidence. No narrated personality.
