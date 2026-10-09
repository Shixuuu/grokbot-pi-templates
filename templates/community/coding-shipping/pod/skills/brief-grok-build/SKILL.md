---
name: brief-grok-build
description: "Use when handing coding work to Grok Build on this computer — dashboard, slash commands, subagents, plan mode, sandbox, and proof deliverables."
---

# Brief Grok Build

Grok Build (`grok`) is the local TUI/CLI. Official docs live under `~/.grok/docs/user-guide/` when installed.

**Surfaces:** interactive `grok` · headless `grok -p` · ACP `grok agent stdio|serve`.

Open with `grok dashboard` or `/dashboard`. Set location with `Ctrl+L` or `/cd <path>` before `+ New Agent`.

**Charter:** Default lane is review-only. Implement / always-approve babysits only when the owner authorizes that pass. Never silent-patch product code.

## Default launch hygiene

1. **`/always-approve`** for owner-authorized implement passes you are babysitting; **`/auto`** when safer classifier gates are enough; ask mode for unfamiliar trees.
2. **`/effort xhigh`** for hard art/architecture; default for small fixes.
3. **`/plan`** first when approach is ambiguous. Approve before product edits; `/view-plan` to reopen. Plan mode blocks edit tools (not bash redirection).
4. **Subagent hole:** parent plan mode does **not** lock write-capable children — only spawn `explore`/`plan` (or read-only) until the plan is approved; then spawn `general-purpose`.
5. **`/remember …`** for standing constraints (off main, skin-only, tip SHA).
6. **Worktree** for risky parallel edits.
7. Prefer **dashboard multi-agent dispatch** over one mega-prompt when work parallelizes.
8. Review-only: `grok --sandbox read-only` + explore / review skills — no product edits.

## Slash commands worth using

| Command | When |
| --- | --- |
| `/dashboard` | Top-level multi-session roster |
| `/plan` / `/view-plan` | Ambiguous approach; art strategy; large refactors |
| `/effort` / `/model` | Raise reasoning for hard passes |
| `/always-approve` / `/auto` | Unattended implement vs safer mode |
| `/compact keep …` | Long babysits before context dies |
| `/fork` | Branch after a good survey |
| `/btw …` | Side question without derailing |
| `/deep-research …` | Background researched claims with sources |

Keys: `Ctrl+C` cancels (Esc does **not**); Esc Esc clears draft / opens rewind when idle.

Deny rules and PreToolUse hooks still win under always-approve.

## Subagents — ask explicitly in the prompt

- **`explore`** — read/search/shell; no file edits.
- **`plan`** — structured plan; no file edits.
- **`general-purpose`** — full implement/test/commit.

Good parallel shape:

1. Parent orchestrates.
2. `explore` ×N survey / measure.
3. Parent `/plan` (or `plan` subagent) → approve.
4. `general-purpose` implementers (worktree OK) for disjoint batches.
5. Final explore/GP: tests + proof composites.

## Watchable vs headless

When the owner may want to watch the job, use a **visible interactive TUI** — paste into a live `grok` window or start interactive `grok` with high effort (and `--always-approve` when that pass is authorized). Do **not** run headless-only `grok -p` / `--prompt-file` for those jobs. Headless `-p` stays for true unattended automation nobody is expected to watch.

## Brief recipe (clipboard into dashboard)

1. Goal + success criteria + off-main / no-merge.
2. Explicit slash/subagent choreography (explore → plan → approve → implement).
3. Paths, tip/branch, prior notes.
4. In/out of scope.
5. Deliverables: notes md, proof dir, test command + expected green.
6. Permission stance: always-approve only if the owner authorized implement babysit.

## After finish

Read notes + proofs; sync to a local play tree only when the owner asks; Origin push in the same session when a watched tip lands unless they said keep it local.
