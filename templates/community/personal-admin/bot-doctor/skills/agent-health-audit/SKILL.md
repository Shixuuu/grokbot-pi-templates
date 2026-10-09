---
name: agent-health-audit
description: "Use when a Grok Bot or long session feels dumber — thorough checkup and complete repair plan. Only Bot Doctor entrypoint."
---

# Agent health audit

**Only Doctor entrypoint.** When a Grok Bot or long session feels dumber: run a thorough, broad diagnosis, then a complete repair plan. Confirm before writes (unless the owner named exact fixes). Apply **every** agreed fix in the plan — not one token tweak when more is broken.

## Surfaces to read

Box health, profile, memory pins/logs, routines, MCP/skills catalog + instructions, recent transcripts (ReadTranscript), doctor PIN/COMPACTION under `/workspace/doctor/<id>/` if present. Prefer full evidence over guesses.

## Owner-facing scorecard / plan (HARD RULE — mandatory)

Everything the owner sees (scorecard, top repairs, full plan, confirm copy) must follow this:

1. **Lead with overall grade** in one sentence a non-builder gets (e.g. “Mostly fine — one leftover to clean up.”).
2. **Rank by priority / impact** (worst pain → smallest nice-to-have). Number items that way.
3. **High-school plain English only.** One short line per item: what’s wrong → what you’ll change. No clinic prose, no walls of jargon.
4. **Jargon** (PIN, compaction, surface lint, dossier, etc.) only as an **optional one-line footnote under an item** — never in the main line. Skip footnotes unless useful.
5. Prefer everyday words: “job description,” “hard rules,” “cheat sheet,” “undo list,” “reload the bot.”

Internal notes, file paths, and tools stay precise for you; the owner chat stays plain.

## Deliverable order

1. Scorecard + top repairs in the HARD RULE format above (first-run / getting-started path may stop here until Ask for full plan).
2. Complete risk-ordered plan across all broken surfaces — same HARD RULE voice (highest impact first).
3. One confirm card: Apply all / Apply selected / Cancel (**see Confirm UX** — personality danger banner when needed).
4. Apply agreed set (**with undo ledger** — see below).
5. Right after apply: **one-line before → after** (plain words: what should feel different in the next chat with that bot).
6. Internal smoke (PIN quiz / quick re-lint) — **not** an immediate owner happiness grill.
7. Always schedule the **~1h soft-ping watch** (see section 6).

## Confirm UX

After the complete plan, present **one** confirm batch — not a drip of per-fix yes/nos:

- **Apply all**
- **Apply selected** (list the numbered fixes; owner picks which)
- **Cancel**

**Personality / voice rewrite — LOUD warning (mandatory when applicable):** If any planned fix changes the patient’s personality, voice, tone, or “how it talks” (profile Voice line, style pins, or equivalent), the confirm card **must** say so clearly before Apply — danger-style wording, e.g. helpText or a labeled danger option note: “This will change how \<bot\> sounds / its personality.” Never bury that in clinic prose. Exact fixes the owner already named still skip re-ask of the whole plan, but still surface this warning once if personality is in scope.

Exact fixes the owner already named skip re-ask of the batch. Then proceed to apply.

## 5) Apply + undo ledger + before→after + internal smoke

After confirm: apply the whole agreed set.

**Before/while writing**, append one batch to `/workspace/doctor/<patientId>/UNDO.jsonl` (create the dir if needed). Each batch includes:

- `ts` (owner’s local timezone ISO), `checkupId` (short unique id for this apply)
- one object per change: `surface` (profile | memory | skill | routine | pin | compaction), `path`, `before` (enough text to restore), `after` (what you wrote)

Only record surfaces **this checkup** actually wrote. Never invent a before you did not read.

Then PIN quiz / quick re-lint. PASS/FAIL leftovers for the Doctor only.

**Tell the owner (required):**
1. Repairs landed.
2. **One plain line — before → after:** what should feel different next time they chat with that bot (no jargon).
3. You will soft-check in about an hour (better / same / worse + Revert).
4. They can say **“revert that checkup”** anytime if they hate it.

Do **not** immediately quiz “did the fixes work?” after apply.

## Revert (owner-initiated)

Triggers: “revert that checkup”, “undo the last fix”, or picking Revert on the ~1h soft-ping.

1. Read the **latest** batch in `/workspace/doctor/<patientId>/UNDO.jsonl`. If missing: say so; stop.
2. One confirm card — never silent: **Revert all** / **Revert selected** (list numbered changes) / **Cancel**.
3. On confirm: restore each selected `before` to its surface/path; append a `revert` note to the ledger (do not delete history).
4. Scope: only Doctor-written surfaces from that batch. **Cannot** rewind chat history or model aging — say so once if asked.
5. After revert: short reload-from-doctor steer to the patient if pins/compaction changed.

## 6) Deferred outcome check — always soft-ping ~1h

After every apply, **always** soft-ping the owner about ~1 hour later — not only when monitoring is unsure.

**Create a one-shot delayed routine on yourself** (finite; delete after it fires) ~1 hour after apply. Prompt intent: inspect patient (recent transcript / PIN adherence / whether old failure modes returned); then message the owner with a short HARD RULE note and a widget: **Better** / **Same** / **Worse**, plus **Revert that checkup** as a first-class choice. Stay brief. If the owner already said they’re happy/unhappy before the hour, skip the widget and stay quiet or one line.

**Also monitor the patient** (default path alongside the ping):
1. Note repair time, patient id, checkupId, top symptoms fixed.
2. At the ~1h wake (or sooner if useful), inspect the patient.
3. If still broken: evidence + next options + Revert.
4. Soft-ping widget still fires unless the owner already answered.

## Safe share / republish checklist (Do not auto-publish)

When restaging or exporting the public Bot Doctor template (`CreateBotShareJson`), follow these defaults — **do not press Publish** (owner only):

1. Geometric medical card fallback: **shield + red** (custom PNG still not packable on marketplace cards).
2. Locked **marketing** storefront blurb only — everyday “bot got dumber / fix this bot” language. **Never** paste the live clinical/operational profile into the public card description.
3. Pack Doctor skills + portable DOCTOR_PIN / Voice / NEVER / LIMITS memories only — no owner names, no fleet episode junk, no deleted one-off skills (e.g. pfp-reference-match).
4. `gettingStarted` → `getting-started`. Omit personal fleet crons unless scrubbed generic.
5. After staging: tell the owner the review card is ready and they should hit **Publish**.

## Never

Never: delete agents; silent personality rewrite; bulk-delete without preview; edit managed/plugin skills; decrypt store.db/secrets; do the patient’s job; weaken safety; silent revert; auto-publish marketplace cards.

Report: symptoms → evidence → full plan → confirm (personality danger if needed) → apply all agreed (+ UNDO) → before→after line → internal smoke → always ~1h soft-ping (Revert available).
