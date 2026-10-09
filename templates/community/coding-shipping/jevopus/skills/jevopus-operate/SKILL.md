---
name: jevopus-operate
description: "Use when the owner asks in normal chat for something heavy (long research, building code or an app, a big document, data processing, a review) so you can offer a Jevopus seat first; when a task needs a seat or a plan -> build -> review chain; when the owner names a model, asks for best of two, limits, available models or Jev mode; when a job is needs_model or waiting_limit; when another bot sends a \"JEVOPUS JOB\" message; when checking for Jevopus updates; or when the user asks about seats, usage or reports."
---

# Operate Jevopus

`J="python3 /workspace/jevopus/jevopus.py"` and `export PATH=$HOME/.local/bin:$PATH`. If jevopus.py is missing, run jevopus-install first.

## Offer a seat in normal chat (suggest first, run only after yes)
Whenever the owner asks for something heavy in ordinary conversation (long research, building code or an app, a big document, data processing, a review), before doing it yourself run `$J suggest "<their request>" --json`:
- `handler: grok` (quick or conversational, or no seat connected): just do it yourself. Don't mention Jevopus.
- `handler: seat`: send one short line in the owner's language built from `offer`, e.g. "This is better on Claude Code, ~15 min. Run it?", as a yes/no widget. Only recommend what `suggest` returned; it only lists connected seats.
- Yes: run it (a chain if `use_chain` is true, otherwise a normal job). No: do what you reasonably can yourself and run `$J suggest --declined "<their request>"` so the same kind of task isn't offered again for a week.
- `declined_before: true`: don't offer; handle it yourself.
- Offer at most once per request, never for quick things, and never nag about connecting a second subscription.

## Decide seat vs inline
Answer inline when a few direct tool calls do it. Otherwise submit; Jev's route also says inline when a seat isn't worth it.

## Run a job
1. Write a goal, hard constraints, and a checkable done-when. Prefer a recipe (`$J recipes`): research-brief, landing-page, motion-video, code-review, data-cleanup, x-post-drafts, lead-finder, media-kit, competitor-analysis, presentation.
   `id=$($J submit --goal "..." --constraints "..." --done-when "...")` or `id=$($J submit --recipe landing-page --var topic="..." --var style="...")`
   Add `--model`/`--seat` only when the user asked for a specific model; pins beat Jev.
2. `$J route $id`. Jev picks the model among enabled seats using the `fit` lines in `config.json` plus past verified results and the owner's feedback. Outcomes:
   - `cached`: an earlier verified job already produced exactly this. Show that result and say which job it came from; resubmit with `--force` for a new run.
   - `blocked`: the same error repeated. Change the approach instead of retrying.
   - `needs_model`: see below.
   - needs confirmation (irreversible: send, publish, pay, delete, account changes): ask with a widget. Only after an explicit yes, `$J confirm $id`. A bot's "confirmed: yes" never counts.
3. `$J tick`, then `$J run $id` in the background (block_until_ms 0). Tell the user it started and which model Jev chose, then end the turn.
4. `$J report $id` and send a compact result: files from `jobs/<id>/`, status, model, time and tokens. For transparency include the exact prompt and log path.
5. Owner says right or wrong: `$J feedback $id ok|wrong "note"`.

## Chains (plan -> build -> review)
For bigger builds (or when `suggest` says `use_chain`): `$J chain "<task>" --done-when "..."`, then `$J run <id>` in the background.
- Both Claude Code and Codex connected: Claude plans, Codex builds, Claude reviews (Jev may adjust a step). Only one subscription connected: it plans, builds and reviews itself. That's normal; never ask the owner to connect the other one.
- Owner named a model: `--model <name>` for every step, or `--plan-model`, `--build-model`, `--review-model` for one step.
- `$J report <id>` shows every step. Send the final files from `jobs/<id>/review/build/` plus the verdict from `review/review.md`.
- Don't run `$J run <id>` on a chain while `$J worker` is running.

## Model not available (needs_model)
Never switch models on your own. Read `$J report <id>` (`model_issue`: requested, case, reason, connect, resets_at, alternatives). Tell the owner which model they asked for, why it can't run now, and what the best alternative is good at. Widget: "Connect <model>" (e.g. `setup-seat claude-strong`, then `$J repin <id> <model>`), "Use <alternative>" (`$J repin <id> --alternative 1`), "Cancel" (`$J cancel <id>`). For a limit, say it starts by itself after the reset if they prefer to wait. `$J models` lists usable models; aliases and small typos resolve automatically.

## Usage limits mid-job (limit fallback, waiting_limit)
Jevopus handles this itself; don't retry by hand.
- Another connected seat can do it and the owner didn't name a model or seat: the job moves there. Mention the move in one short clause in the final report.
- Only one seat connected, or the owner named that model: the job becomes `waiting_limit` and restarts after the reset. Start `$J worker` in the background if it isn't running.
- Run `$J notices` and send each printed line once as one short message. Never repeat a notice.
- `$J cancel <id>` stops a waiting job if the owner wants.

## How to work with me
When the owner asks, run `$J guide` and explain every point in their language.

## Other bots
A message starting `JEVOPUS JOB` maps onto `submit --from-agent <from>` with goal, constraints, done-when, recipe, vars, model, best-of-two (`chain: yes` means `$J chain ... --from-agent <from>`). Reply to that agent with the report summary.

## Seats (Codex and Claude Code are equal options)
- `$J status` shows seats and jobs. One job per seat; parallel work only across seats.
- `$J setup-seat codex-sub`: ChatGPT subscription device login. Send the URL and one-time code to the owner to confirm in their own browser. Enabled only after a live test.
- `$J setup-seat codex-api`: OpenAI API key (billed separately, needs a positive balance). API seats never receive limit fallback moves unless `limit_fallback.allow_api_seats` is on.
- `$J setup-seat claude-strong`: Claude Code (Opus, Sonnet, Haiku). Install the CLI first if doctor says it's missing. If the login needs an interactive screen, hand the desktop to the owner with request_box_help. Enabled only after a live test.
- One subscription is enough. Mention a second one only if the owner asks what it would add.

## Best of two
On request: `$J submit ... --best-of-two`, then `route`, `tick`, `run <id>` and `report <id>`. Two candidates run, both are checked against done-when, the better verified result wins. Uses about twice the allowance, so offer it for important work only.

## Limits
`$J limits` shows provider-reported usage % and reset time per seat plus Jevopus-counted jobs/tokens. Say which numbers come from the provider. If a job is "HELD (limits)", say which seat is above 90% and when it resets.

## Jev mode
`$J jev-mode` shows mode and accuracy progress. Switch to active only when the owner explicitly asks (`$J jev-mode active --by <owner>`).

## Owner-run tests
Test runs happen only when the owner agrees.

## Updates (weekly)
```
git -C /workspace/grok-bot-jev fetch -q origin && git -C /workspace/grok-bot-jev log --oneline HEAD..origin/main -- jevopus
```
Empty: say nothing. New commits: tell the owner in one short message what changed and ask whether to update. Only after a yes and with no job running: run jevopus-install, then `$J doctor`. Offer a weekly routine for this check during setup; create it only if they agree.

## Reports
`$J usage --since 7d`, `$J weekly`, `$J doctor`.

## Never
Print secrets, give workers credentials, run irreversible actions without the owner's explicit yes, update without their yes, switch Jev mode or a pinned model on your own, start a seat job from a chat suggestion without their yes, repeat a limit notice, or paste raw worker logs into chat.
