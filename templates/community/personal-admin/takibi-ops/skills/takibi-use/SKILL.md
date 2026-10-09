---
name: takibi-use
description: "Use the Takibi knowledge base and task board through the takibi CLI (ask, search, tasks, docs, notes). Use whenever the user asks about Takibi content, evidence-backed answers from their docs, or crew task boards."
---

# takibi-use: Takibi via the CLI

Always use the CLI. Never hand-roll curl/fetch against `/v1/*` — the CLI already bakes in the auth shape, the `q` param, project resolution, and error hints.

## Setup (once)

- CLI: `npx takibibase …` (zero-install), `takibi …` (global install), or `node <path>/takibi.mjs …` for the single-file download (use the alias when it exists).
- Key on Grok Bot: use the masked secret input (never paste in chat). Write one `<publicId>.<secret>` line to a key file such as `~/.takibi/keys/takibi-ops.key` (`chmod 600`) and set `$TAKIBI_KEY_FILE` to that path. Fallback: `~/.takibi/key`. The CLI does not read `TAKIBI_API_KEY` from the environment. Never print the key, paste it in chat, or commit it. If a command says the key is missing, stop and collect it via the secret box again.
- Base URL defaults to Takibi's servers (`https://app.takibibase.com`). Only local setups override with `$TAKIBI_BASE_URL` or one URL line in `~/.takibi/config`.
- Projects: `takibi projects` lists what this key can reach. `--project` takes a name or a UUID; single-grant keys may omit it. `takibi projects --add <name> <uuid>` keeps local aliases for offline use.
- Folders: `takibi folders [--project …]` lists folder names → uuids for `--folder`. Discovery flow: `projects` → `folders` → scoped `ask`/`search`/`doc list`.
- First probe: `takibi version` (needs no key; shows build + `jev` status).
- Update notice: the CLI polls the npm registry once a day and nudges on stderr when behind (never on `--json`).

## Commands

- `takibi ask -q "…"` — answer from the evidence. Output is verbatim spans with citations plus a support line. `--project`, `--folder <uuid>`, `-k 1-12`, `--json`.
- `takibi search -q "…"` — ranked chunks (snippets + metadata, not full text). Same flags, `-k 1-20`.
- `takibi tasks list | get <id> | claim <id> | status <id> <todo|in_progress|review|done> [--note …]` and `takibi tasks artifact add <taskId> <url> [--note …]`. The status `--note` is the review handoff note (max 1000 chars); leaving review clears it. A sent-back card keeps the last handoff as `previousReviewNote`.
- `takibi tasks artifact add <taskId> --markdown <file|-> [--title …] [--note …]` — attach an inline markdown note; `takibi tasks artifact show <taskId> <artifactId>` prints one note's raw markdown. Prefer inline markdown for text deliverables.
- `takibi tasks handoff <id> <profile> [--review] [--note "…"]` — hand a card you hold to another profile on the same board (name or UUID; unknown names error with the eligible list — never guess).
- `takibi tasks follow-up <id> --title "…"` — spin a fresh linked todo off any card (`--body`, `--due`, `--assignee`). Never move a done card back to To do — follow up instead.
- `takibi tasks create --title "…"` — open a fresh card (`--body`, `--due`, `--assignee`). Needs the create cap. Claim it before driving it.
- `takibi tasks update <id> [--title …] [--body …] [--due …] [--blocked [--reason …]] [--unblocked]` — amend without a follow-up.
- `@name` in a task names the handoff target: the FIRST explicit assign-to @name. The mention itself assigns nothing — the handoff does.
- `takibi tasks escalate <id> --reason "…"` / `takibi tasks deescalate <id>` — founder help flag on a card you hold.
- `takibi doc list | get <id> | text <id>` — metadata, then converted text. Prefer `doc text` over account-only download.
- `takibi doc upload <file> [--project …] [--folder <uuid>]` — one file per call; needs Uploads grant plus owner approval in conversation.
- `takibi notes append|list|search|export|keep|remove` — agent scratchpad notes (not canon). Export/keep/remove need owner approval.
- `--json` anywhere prints raw server JSON. Exit 0 = ok, 1 = transport/API error, 2 = usage error.

## Reading answers

- Spans are verbatim with citations and a versioned support score. Support is not confidence — report the number, never upgrade it into certainty.
- Honor `answerability` and `conflict`. On conflict, surface both sides.
- Jev-down is not app-down: ask may answer with degraded fields; search is unaffected.

## Abstains

`abstained: true` means broaden `q`, fall back to `search`, try `doc text` — then answer from evidence or say the evidence is not there. Never fill gaps with unsourced prose.

## Mutation policy

- Reads are free: ask, search, tasks list/get, doc list/get/text, notes list/search. Agents may append their own debriefs.
- Task create/update/claim/status/handoff/artifact/escalation/follow-up and doc upload only with owner approval already given in conversation.
- Claim-first: a plain key must claim before moving a card; only orchestrators/owners accept review→done or assign cards they do not hold.
- Account-only routes (delete, retry, download originals, PATCH docs/projects) are never the agent's — ask the account owner.

## Failure table

- 401: key wrong/missing/revoked. 403: outside grant or missing capability. 404: bad id (or hidden grant gap). 409 on claim: someone else holds it. 422 SECRET_BLOCKED: strip secrets and retry. 429: throttle or daily budget.
