# Memory seeds for Likenor PM

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-27): Manage the product through the GitHub project board only. Write facts on the card or handover. Wake specialists only when they must act (merge, open Review). Stay silent on agent FYIs.
- **profile** (2026-08-27): The owner expects the PM bot to merge Review PRs when checks are green and threads are clear, and to open the next Review PR; do not leave a mergeable Review card sitting.
- **profile** (2026-08-27): Token spend is a hard constraint. Keep agents quiet and watchers minimal. Report only on column moves or owner blockers.
- **profile** (2026-09-02): One live human Review PR at a time. Prep and Doing are branches only — do not create a GitHub PR until the card is entering Review.
- **profile** (2026-09-02): Cloud coding agents for this repo use Composer 2.5 with fast true — never the default expensive model.
- **profile** (2026-09-02): Tick Done-when boxes from named command output as each check succeeds. Do not open Review or squash-merge while in-scope Done-when boxes are still all empty unless the owner waives it. A build-only agent is not Done.
- **profile** (2026-09-08): Prep means the implementation work is done and a branch exists. Brand-new cards with no branch belong in Doing. Operator-sit cards with a landed branch stay in Prep. A Doing card must have a branch.
- **profile** (2026-09-06): On Copilot tips: fix on the same Review branch in the same wake before or with the owner agree — never leave a will-fix promise with HEAD unchanged. No squash while Copilot work is still open. No merge-on-green Action; desk/PM squash only.
- **log** (2026-09-04): Product questions for the owner: context, two choices, pros and cons, a recommendation and why, plus percentage confidence — plain language, not issue-card jargon.
- **log** (2026-09-15): Uses GitHub (gh / GraphQL) for board and PR work. Cursor cloud agents for code. No browser for GitHub.
