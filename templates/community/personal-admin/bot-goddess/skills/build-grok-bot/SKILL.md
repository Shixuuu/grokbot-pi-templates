---
name: build-grok-bot
description: "Design, create, or update a Grok Bot using an adaptive intake, an explicit brief, and verification of the saved result. Use for bot-building requests; a request only for advice or a review does not authorize live changes."
---

# Build a Grok Bot

Turn the user's requested outcome into one focused bot. Use available native Grok Bot capabilities. External plugins are optional and need a task-specific reason.

## Understand before adding

Read the current conversation and relevant supplied materials. For an update, inspect the target's current profile, skills, and routines before proposing changes. For creation, inspect the relevant existing bot names and roles for overlap. Do not read unrelated private conversations to perform this check.

An overlapping role is a decision to resolve, not permission to rewrite, merge, or delete another bot. Prefer the existing bot when the user has authorized updating it. If the choice materially changes ownership or scope and is unclear, ask whether to extend it or create a distinct role. If the roster is inaccessible, record that duplicate checking is unverified.

## Adaptive intake

Discover the following only where they are unknown and relevant:

| Decision | What it changes |
| --- | --- |
| Purpose and user | The outcome this bot owns and who uses its output |
| Inputs | Sources, examples, freshness needs, and required access |
| Output and success | The artifact, destination, and evidence that it is useful |
| Boundaries | Excluded jobs and which actions may happen autonomously |
| Trigger | On-demand, schedule, or event; time zone and cadence if needed |
| Existing roles and distribution | Who already does this work and whether others need to install the bot |

Ask the highest-impact unanswered question first. Default to one question at a time when later questions depend on its answer; group a few independent questions when that saves effort. Give concrete choices, recommend an option when justified, and allow a free-form response.

Do not repeat questions already answered by the user or accessible evidence. Use an example input and proposed output to make an abstract preference concrete. A vague request may need several rounds; a well-specified request may need none. There is no minimum question count or fixed maximum that overrides a material unresolved decision.

For each unknown, choose the appropriate next action:

- **User preference or authority:** ask if it changes the design or permits a consequential action.
- **Discoverable fact:** inspect the available tool, file, or current documentation.
- **Reversible preference:** state a reasonable assumption and proceed.
- **Unclear behavior:** show a small example and use the reaction to refine it.

If the user asks for a quick draft, draft with stated assumptions and conservative capabilities. If they ask for a thorough interview, explore tradeoffs and failure cases more deeply. Neither preference authorizes guessing credentials, recipients, external-write permissions, or consequential scope.

Stop intake when the primary outcome, necessary inputs, expected output, action limits, relevant trigger, and a representative success example are clear enough to implement. Stop sooner for a narrow authorized edit that does not change the other decisions. Do not seek impossible certainty about every future task.

## Capture the brief

Keep a compact brief with: purpose; intended user; inputs; output and success example; exclusions and autonomy; trigger; create/update target; required dependencies; distribution needs; and remaining assumptions or blockers.

Distinguish user decisions from observed facts and assistant defaults. Present the brief briefly. If creation is already authorized and no consequential decision remains, continue without another blanket approval request. Wait for an answer before implementing a dependent, unresolved decision; continue independent preparation meanwhile.

## Build within the brief

Check only the capabilities needed for this operation. Creation needs creation and read-back; updating needs update and read-back; scheduling needs routine controls. Optional organization tools must not block basic creation. Use discovered tool schemas or the supported UI; do not assume tool names or cloud paths from another account.

Write the full operating profile: responsibility, working method, output, action limits, exclusions, failure behavior, and user-selected style. Add a skill only for a reusable procedure that benefits from its own instructions. Include its full contents and every required supporting file. Keep optional enhancements separate from prerequisites.

Create only requested triggers. On-demand is the default when automation was not requested. For a requested schedule, establish the time zone, destination, and missing-input behavior. Reuse a matching existing routine when an update is authorized; avoid creating duplicates on retries.

Before changing an existing bot, retain a private rollback record of the affected fields and files. Keep it out of a public package. Preserve unrelated settings, skills, and routines. Do not globally uninstall an account plugin to simplify one bot.

## Verify and return

Read back the saved result and compare it with the brief. Check the intended bot, full profile, accessible skills, file references, declared dependencies, and any requested trigger. Test a representative task when execution is authorized; a live test can have side effects, so use bounded inputs and respect the bot's action limits.

If something differs, correct the known mismatch within the authorized scope and recheck it. Avoid repeated blind retries; report a persistent blocker with evidence.

Return the bot's identity, what changed, the source location, verification performed, and remaining setup. For distribution, continue through the check-and-package workflow when it is available; otherwise provide a complete source draft and explicitly mark packaging and recipient testing as pending. Never label a staged template as a verified installation.
