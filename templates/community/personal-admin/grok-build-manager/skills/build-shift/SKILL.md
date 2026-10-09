---
name: build-shift
description: "Use when the user names a GitHub repo and a task, says \"plan only\", says \"build it\", or asks for project status — move one existing repo forward on the Grok Bot computer with Grok Build (plan, optional implement, draft PR). Gate: both grok and gh must be installed and signed in before clone."
---

# Build Shift

Move one existing GitHub repo forward on the Grok Bot computer while the user is away. Work only on that computer. Durable files live under `/workspace`. Do not ask to run commands on the user's Mac or Windows machine.

Before every shell that runs `grok`, ensure PATH includes it:

```bash
export PATH="$HOME/.grok/bin:$PATH"
```

Or call `$HOME/.grok/bin/grok` by absolute path. Interactive `.bashrc` alone is not enough for headless runs.

## Inputs

- GitHub repo URL or `owner/name`, plus one task
- Optional: `plan only` or `build it`
- `status` needs no repo

## Required access (gate before every clone)

Both tools must be installed and signed in. Before the first clone (and any time a later run finds auth broken), check and report this board:

| Tool | Installed? | Signed in? |
| --- | --- | --- |
| `grok` (Grok Build) | yes / no | yes / no |
| `gh` (GitHub) | yes / no | yes / no |

Say explicitly that both are required. Fix red cells before continuing.

### How to check

- **grok installed:** `export PATH="$HOME/.grok/bin:$PATH"` then `which grok` and `grok --version`. Missing → install with the official script only: `curl -fsSL https://x.ai/cli/install.sh | bash`, then re-check.
- **grok signed in:** Do **not** use `grok whoami` or `grok auth status` (they are unreliable or missing). Treat as signed in when `~/.grok/auth.json` exists and contains a non-empty `refresh_token` for an account entry. Never print token values to chat. If missing or empty → `grok login --device-auth`. Hand the user the URL and code. They sign in on their phone. Never ask them to paste a password, token, or API key into chat.
- **gh installed:** `which gh` and `gh --version`. Missing → stop and tell the user. Do not download an installer until they say yes.
- **gh signed in:** `gh auth status` shows a logged-in account. Not signed in → start device login (`gh auth login` web/device flow). Hand them the URL and code. They type the password. You never see it.

Do not clone a private repo (or start a plan/build) until both rows are green.

## A. Status

If the user asks for status, read `/workspace/builds/registry.md` and report the last run for each repo. Do not start Grok Build.

## B. One run

If the message names more than one task, do the first and say the second is waiting.

## C. Checkout

1. Clone or update the repo at `/workspace/repos/<owner>/<repo>`. Use `gh repo clone` when `gh` is signed in.
2. If the checkout is dirty, stop. Do not stash and do not reset. (Exception only in D below.)
3. Detect the default branch. Create `build-shift/YYYYMMDD-<slug>` from the latest default branch. The slug is a few words from the task. If that branch name exists, stop.
4. Record the base commit.

## D. Plan pass

Run Grok Build headless in that checkout. The plan is the model's final message. Save it to `/workspace/builds/<owner>-<repo>/<utc>-plan.md`. Do not commit that file into the repo.

Use this shape (always with PATH set as above), with `--no-auto-update` and `--no-plan` so the run does not sit on the plan-approval screen:

```bash
export PATH="$HOME/.grok/bin:$PATH"
grok --no-auto-update --no-plan --cwd "$REPO" \
  --sandbox workspace \
  --permission-mode dontAsk \
  --allow 'Read' \
  --allow 'Grep' \
  --allow 'WebSearch' \
  --allow 'WebFetch' \
  --allow 'Bash(git status*)' \
  --allow 'Bash(git diff*)' \
  --allow 'Bash(git log*)' \
  --allow 'Bash(ls*)' \
  --deny 'Edit' \
  --deny 'Bash(git push*)' \
  --deny 'Bash(git merge*)' \
  --deny 'Bash(git reset*)' \
  --deny 'Bash(git clean*)' \
  --deny 'Bash(rm *)' \
  --deny 'Bash(sudo *)' \
  --deny 'Bash(curl *)' \
  --max-turns 30 \
  --output-format json \
  -p "<plan prompt>"
```

Plan prompt: explore this repo and write a plan for the one task. Cite the files you would change. Do not edit files. If the task is ambiguous, list the assumption you would need and stop.

If the CLI rejects `--permission-mode`, rerun the same command with `--always-approve` instead of `--permission-mode dontAsk`, and keep every deny. Deny wins over always-approve.

### Plan-pass cleanup exception (only case where reset is allowed)

After the plan pass, run `git status`. If files changed and **all** of these are true, run `git reset --hard <base commit>` to undo accidental plan-pass edits:

1. Current branch name starts with `build-shift/`
2. The branch has **no commits of its own** yet (still at the recorded base commit)
3. The dirt came from this plan pass, not from prior user work

If the branch already has its own commits, or the dirt was there before the plan pass, stop and tell the user. Do **not** reset then. Never stash. Never reset the default branch. Never reset to discard the user's own uncommitted work.

## E. Plan only

If the user said `plan only`, post the plan in chat and stop. Update the registry. Do not edit, commit, or push.

## F. Build pass

Run when the user did not say `plan only`, or when they reply `build it` to a plan you already wrote and the checkout is still clean at the base commit.

Same flags as the plan pass (including PATH), plus `--allow 'Edit'`, and `--allow` for the one test or build command you actually found in the repo (for example `Bash(npm test*)` or `Bash(cargo test*)`). If you cannot name one command from the repo, do not invent one and do not allow a package installer.

Prompt: implement the saved plan on this branch. Do not expand the task. Do not push, merge, or change git remotes.

One implement pass. If the named check fails, one fix pass. Then stop, even if the check is still red.

## G. Hand back

1. If the build pass changed files, commit them on the build-shift branch. The message is the task in one line. Do not commit secrets, `.env` files, or credentials. If a secret showed up in the diff, stop and tell the user. Do not push.
2. Confirm the current branch starts with `build-shift/` and is not the default branch.
3. `git push -u origin HEAD`
4. `gh pr create --draft` with:
   - **Title:** the task in one line
   - **Body:** five-line plan summary, list of files changed, check command + result (or "no check in the repo")
   Draft only.
5. Write `/workspace/builds/<owner>-<repo>/<utc>-status.md` and update `/workspace/builds/registry.md` with repo, path, default branch, branch, draft PR URL, check result, and time.

## Chat return (then stop)

- **Repo**
- **Branch**
- **Draft PR**, or "not pushed" and why
- **Plan**, five lines
- **Files changed**
- **Check**: the command and what it returned, or "no check in the repo"
- **Needs you**: only a login, a dirty tree, an ambiguous task, a secret in the diff, or a check that is still red

## Approval rules

Signing in is the user's. Pushing a new `build-shift` branch and opening a draft pull request is part of the job when they did not say `plan only`. Merging is never part of the job. Do not merge even if they used the word merge. They merge it themselves.

If a login, a dirty tree, or an unreadable repo stops you, say what blocked you. Do not write a plan from memory and do not edit a different repo.

Never merge. Never force-push. Never push the default branch. Never delete a branch. Never answer the coding task from chat — the work happens in Grok Build, on this computer, in the named repo.

One repo, one task, one branch. A second repo waits for a second message.
