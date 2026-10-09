---
name: check-package-grok-bot
description: "Review a Grok Bot for completeness, compare it with its intended behavior, and prepare or verify a reusable source package and staged template. Use for bot audits, missing-file investigations, export preparation, and import checks."
---

# Check and package a Grok Bot

Establish whether another user could reproduce this bot from the supplied source. A review produces findings; repairs, live changes, and publication follow the user's actual requested scope.

## Establish the target

Read the bot's purpose, current configuration, source files, and intended installation method. Use an existing brief when available. Ask only about a missing requirement that changes the review or package. Do not require the user to repeat the creation interview.

Inventory the full profile, intended image, reusable public context, skill bodies and supporting files, plugin requirements, and requested routines. Trace references: distinguish a locally authored skill from one supplied by a plugin, and a missing file from an installed but unavailable skill. A label, description, or memory that mentions a capability is not proof that the capability exists.

Use the supported interfaces actually available. Do not guess an internal file path, API contract, or standalone bot import format. If a component cannot be inspected, record it as unverified rather than absent or working.

## Check the result

Compare the saved bot and any template with the intended behavior:

- The full operating instructions survive; a storefront summary does not replace them.
- The intended image is included or explicitly configured, and its preview matches. A correct live avatar does not prove the template image is correct.
- Every required skill has usable instructions; each required script, reference, or asset resolves to readable content.
- Dependencies have a purpose and reproducible setup. Optional tools remain optional. User authentication is a recipient setup step, never packaged credentials.
- Any requested routine has the right owner, workflow, schedule, time zone, and intended state. Repeated setup does not create another copy.
- Profile, memories, skills, and routine instructions agree about responsibilities and action limits.

For missing components, identify the authoritative source and installation step. Do not fabricate the original skill implementation from its title. If the user wants a replacement, label it as a new implementation and verify it independently.

## Prepare portable source when requested

Use the project's existing layout where one exists. Include the full profile, required skill folders, public supporting files, a dependency list, setup instructions, and a small example with expected output. Mark unused categories as unnecessary rather than creating empty scaffolding.

Record a source version or commit, authorship and source attribution, redistribution permissions, and the verification status. Include only reusable public context. Keep credentials, private account data, and rollback copies out of the distribution bundle. Avoid absolute author-account paths as installation requirements.

Separate source authoring conventions from Grok's verified installation mechanism. If registration requires an in-app step, document it explicitly; do not describe a source ZIP as natively importable without evidence.

When template staging is requested, use the supported staging flow, inspect the resulting card and contents, and reconcile any omission with the source package. Stage privately where supported. Publish only when the user requested publication to the specified audience and applicable platform requirements are satisfied.

## Verify installation and report limits

When authorized and a clean recipient environment is available, install from the same source version, inspect what transferred before repairs, complete documented setup, and run the representative example. Check that missing-input behavior names what is unavailable and that repeated setup avoids duplication. Run only tests appropriate to the changes and their side effects.

A second bot on the creator's shared account does not prove recipient portability. If a clean recipient test is unavailable, record that limit while completing the source and staging checks that are possible.

Report: observed issues and their evidence; repairs actually applied; required recipient setup; and three separate statuses—source completeness, operation in the creator account, and operation after recipient import. Use verified, failed, or untested with a short explanation. Do not turn a missing test into a success claim or invent usage savings from a plugin's skill count.
