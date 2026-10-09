---
name: inference-provider-relogin-cua
description: "Use when Tier-A inference-provider-relogin already ran status/BWS/refresh and a provider still needs a single account-chooser click via CUA/vision (Safari preferred) — not for fresh Turnstile/passkey/device login."
---

# Inference provider re-login — Tier B (CUA account chooser)

Sibling addendum to **`inference-provider-relogin`** (Tier A). This skill covers **only** the case where a real browser profile already shows an **account chooser** (Google / Claude.ai / xAI / similar) and the agent can vision-match the mapped email and click that row **once**.

Never print passwords, TOTP seeds, device codes, refresh tokens, API keys, BWS values, or full account maps. Allowed in chat: provider name, email **match boolean**, secret **length**, `ok` / `need_human` / `need_map` / `skipped` / `aborted_misclick`.

Portable: resolve paths from `$HOME`, `$HERMES_HOME` (else `$HOME/.hermes`), and `hostname`. Do not hardcode hostnames, mailbox addresses, or fleet IPs into this file.

## Tier boundaries (A / B / C)

| Tier | Skill | What it does | Unattended |
|---|---|---|---|
| **A** | `inference-provider-relogin` | BWS key inject + `hermes auth refresh` + status short-circuit | **Yes** when keys/refresh tokens valid |
| **B** | **this skill** | CUA/vision: pick mapped email on an **already-open** account chooser (prefer Safari + real profile cookies) | **Yes** only while the chooser is visible and no challenge appears |
| **C** | human | Fresh browser login, device code, Turnstile, passkey, phone-push, Approve on iPhone, macOS TCC Allow | **No.** Report `need_human`. Leave existing session intact |

If Tier A already marked the provider `ok`, do nothing. If Tier A reported `need_human` because the next screen is a challenge (not a chooser), do **not** escalate to Tier B.

## When to Use

- After Tier A status: provider unhealthy **and** a Safari (or allowed) window already shows an account picker listing the mapped email
- Operator says: click the right account on the Google / Claude / xAI chooser
- Cron/watchdog handoff: Tier A left `need_chooser` / equivalent and CUA is available

Do **not** use to:

- Start a fresh `codex login` / `claude auth login` / `grok login` / device flow
- Drive Hermes Desktop built-in automation browser when Safari+profile cookies would work (cold browser → Turnstile death)
- Inject BWS keys (that is Tier A)
- Click macOS TCC Allow, passkey prompts, or phone-push Approve

## Prefer Safari + computer_use (hard preference)

| Surface | Use for Tier B? | Why |
|---|---|---|
| Safari + Hermes `computer_use` / cua-driver | **Preferred** | Real profile cookies; Google/Claude/xAI choosers often succeed without full re-auth |
| Existing Chrome/Chromium profile via CUA (operator-allowed) | Fallback only | Same idea: real cookies |
| Hermes Desktop built-in / ephemeral automation browser | **Avoid for choosers** | Often forces full login → Turnstile / passkey → Tier C |
| Headless Playwright / CloakBrowser cold context | **Avoid** | No shared session; marketplace DNA is `browser-automation` patterns at high level only — not the path here |

DNA (high level only — follow those skills for capture/click vocabulary):

- `macos-computer-use` / `computer-use` — capture → click by element index → verify
- `browser-automation` — when **not** to use cold stealth browsers for auth

## Per-host account map (SSOT)

Same map as Tier A. Copy `references/accounts.example.yaml` to:

`$HERMES_HOME/inference-relogin-accounts.yaml`

Profile-aware: `$HOME/.hermes/profiles/<name>/inference-relogin-accounts.yaml` when `HERMES_PROFILE` is set.

- Emails live **only** in that host map file.
- **Never** hardcode emails into this `SKILL.md` or into chat logs.
- Missing map → `need_map`, stop. Do not guess from memory.

See `references/cua-account-chooser.md` for the click protocol.

## Procedure (Tier B only)

1. Confirm Tier A already ran status (or run status only — no login commands that wipe sessions).
2. Load the account map. Missing → `need_map`.
3. Confirm `computer_use` (or equivalent CUA) is available. Else → `need_human` (no CUA).
4. Focus **Safari** (or the operator-named real-profile browser). Prefer `raise_window=false` / background capture per `macos-computer-use`.
5. `capture` (mode `som` preferred; `vision` if overlays hide text). Confirm the screen is an **account chooser**, not a password field, Turnstile, passkey sheet, or TCC dialog.
6. Vision/AX-match the **exact** mapped email string for this provider. If not visible → scroll once within the chooser list; if still missing → `need_human` (wrong profile or account not signed into this browser).
7. Click the matching row **once**. Increment mis-click counter only when post-capture shows a different account selected, an unexpected page, or no navigation.
8. Re-capture. Classify next screen:
   - Session healthy / CLI probe ok → `ok`
   - Still on chooser with same list → treat as mis-click (retry match once)
   - Turnstile / passkey / phone-push / Approve on iPhone / TCC Allow / password field → **stop** `need_human`; do not click further; leave session intact
9. **Max 2 mis-clicks** then `aborted_misclick`. Do not thrash.
10. Re-run Tier A status probes for that provider. Touch Tier A `last_ok` only via the parent skill rules.

## Mis-click budget

| Attempt | Action |
|---|---|
| 0 | First matched click |
| 1 | One re-match + one click after verifying still on chooser |
| 2 | Final allowed retry |
| >2 | Abort `aborted_misclick`; leave session; escalate Tier C |

Do not click a different email "to see what happens." Do not Use another account / Add account unless the map explicitly names that flow (default: never).

## Never

- Never logout / `auth logout` / clear cookies to force a clean login
- Never print secrets, map file contents with real emails, BWS values, or API keys
- Never hardcode emails or private hostnames in this skill
- Never click Turnstile, passkey, phone-push, Approve on iPhone, or TCC Allow
- Never prefer ephemeral Desktop automation browser over Safari for Google/Claude/xAI choosers
- Never start device-auth flows that wipe `auth.json` / tokens (Codex pitfall — Tier A)
- Never ship a host's real `inference-relogin-accounts.yaml` into a marketplace package

## Verification

- Post-click CLI probe matches Tier A healthy criteria for that provider
- Log contains provider + outcome codes only (no email plaintext required; match boolean ok)
- Mis-click count ≤ 2 or aborted
- Existing session untouched when stopping for Tier C challenges

## Fleet install

1. Install sibling to `inference-provider-relogin` on the target profile `skills/`.
2. Ensure **that host's** account map exists (do not copy another Mac's map).
3. Confirm `computer_use` / cua-driver works on Safari (SOM capture).
4. Dry-run: capture a chooser screenshot classification only, no click, when operator requests.
5. Do not stamp live template bots until marketplace leak checklist passes (see fleet stamp note).

## References

- `references/cua-account-chooser.md` — detailed click protocol
- `references/accounts.example.yaml` — placeholder map shape (copy locally; fill on host)

---

## Appendix: references/cua-account-chooser.md

# CUA account-chooser protocol (Tier B)

Detailed click protocol for `inference-provider-relogin-cua`. Parent skill owns when Tier B is allowed. This file owns **how** to click safely.

## Preconditions

1. Tier A (`inference-provider-relogin`) already decided the provider is not healthy via inject/refresh alone.
2. Account map loaded from `$HERMES_HOME/inference-relogin-accounts.yaml` (or profile path). Missing → stop `need_map`.
3. Hermes `computer_use` (cua-driver) available. Prefer patterns from `macos-computer-use` / `computer-use`.
4. Target surface is a **real browser profile** — **Safari first** for Google / Claude.ai / xAI account choosers.
5. Operator (or prior step) has a window/tab where the chooser is already visible, **or** navigating with existing cookies lands on the chooser without a password wall.

If opening a URL cold would force full login, **do not open it** in an ephemeral automation browser. Stop `need_human`.

## Browser preference order

1. Safari + `computer_use` (SOM capture, click by element index)
2. Operator-named existing Chromium profile via CUA (same machine, real cookies)
3. **Stop** — do not fall through to Hermes Desktop built-in / headless cold browsers for auth choosers

## Screen classification (before any click)

Capture with `mode="som"` scoped to the browser app. Optionally `mode="vision"` if numbered overlays obscure email text.

| Screen class | Signals (examples) | Action |
|---|---|---|
| `chooser` | List of accounts / emails / avatars; "Choose an account"; "Select account" | Proceed to match |
| `signed_in` | App home / CLI redirect success / already the mapped identity | Treat as success; run Tier A probe |
| `password` | Password field, "Enter your password" | Stop `need_human` |
| `turnstile` | Cloudflare / bot check / checkbox challenge | Stop `need_human` |
| `passkey` | Passkey / security key / Touch ID sheet for web auth | Stop `need_human` |
| `phone_push` | "Check your phone"; "Approve on iPhone"; number-matching prompt | Stop `need_human` |
| `tcc` | macOS Accessibility / Screen Recording / Automation Allow dialog | Stop `need_human` — never click Allow |
| `device_code` | User code + verification URL | Stop `need_human` |
| `unknown` | None of the above | One scroll within page; if still unknown → `need_human` |

**Hard rule:** any class other than `chooser` or `signed_in` → leave session intact, no further clicks.

## Email match (map is SSOT)

1. Read the mapped email for **this provider** from the host map file only.
2. Find an AX/SOM element whose visible label or subtitle **equals** that email (case-insensitive exact match preferred).
3. Partial domain-only matches are **not** enough when multiple accounts share a domain.
4. If multiple rows match, prefer the row that also shows the expected account label from the map (if present); else stop `need_human` (ambiguous).
5. If the email is not visible:
   - Scroll the chooser list **once** (small amount)
   - Re-capture and re-match
   - Still missing → `need_human` (account not in this profile)

Never type the email into an "Add account" / "Use another account" field unless the map explicitly sets `allow_add_account: true` for that provider (default **false**).

## Click once + verify

```
computer_use(action="capture", mode="som", app="Safari")
# classify → must be chooser
computer_use(action="click", element=<matched_index>, capture_after=True)
# classify next screen
```

Prefer **element index** over raw coordinates (see `macos-computer-use`). Coordinates only if SOM has no row for a clearly visible email and vision confirms the click target — still counts toward mis-click budget if wrong.

## Mis-click definition and budget

A **mis-click** is any of:

- Post-click shows a different account than the map
- Landed on password / challenge / unexpected product
- Still on chooser with no selection change after click
- Clicked "Use another account" / wrong control

Budget: **maximum 2 mis-clicks**, then `aborted_misclick`.

| Count | Allowed |
|---|---|
| 0→1 | First click |
| 1→2 | Re-classify, re-match, second click only if still `chooser` |
| 2→3 | Third click (final) |
| After 2 mis-clicks recorded | Abort; do not continue |

After abort: do not logout; do not clear site data; report provider + `aborted_misclick`.

## Post-success

1. Run the Tier A status probe for that provider only.
2. Report `ok` or `need_human` based on probe truth (Claude: status text alone can lie — use the parent skill's haiku probe when applicable).
3. Do not touch unrelated providers.
4. Do not write emails into the log; write `email_matched: true|false`.

## Provider-oriented notes (generic)

| Family | Typical chooser host (generic) | Notes |
|---|---|---|
| Google-backed (Cursor, etc.) | Google account picker | Prefer Safari cookies; Turnstile on cold browser → Tier C |
| Claude.ai OAuth | Anthropic / Claude account UI | Pro/Max subscription session ≠ API key |
| xAI / Grok | xAI account picker | Prefer Safari for accounts surfaces; API key ≠ SuperGrok OAuth |
| Codex / ChatGPT | OpenAI / ChatGPT picker | Never start device login that deletes `auth.json` while already healthy |

Do not put private fleet hostnames, Tailscale IPs, or real mailboxes in this reference.

## Failure codes (chat-safe)

| Code | Meaning |
|---|---|
| `ok` | Chooser click + probe healthy |
| `need_map` | Account map missing |
| `need_human` | Challenge screen or no CUA or email not in profile |
| `aborted_misclick` | Hit mis-click cap |
| `skipped` | Provider not installed / not required |

## Never (protocol)

- Never logout to force clean login
- Never click TCC Allow / passkey / Turnstile / phone-push Approve
- Never dump the account map into chat or marketplace artifacts
- Never use ephemeral automation browser as the first choice for these choosers
- Never exceed 2 mis-clicks

---

## Appendix: references/accounts.example.yaml

```yaml
# Example only — PLACEHOLDER emails. Copy to:
#   $HERMES_HOME/inference-relogin-accounts.yaml
# or (profile-aware):
#   $HOME/.hermes/profiles/<name>/inference-relogin-accounts.yaml
#
# Fill real addresses ON THAT HOST. Never commit a filled map.
# Never paste real emails into SKILL.md or marketplace packages.

version: 1
host: "example-host"   # replace with local hostname; do not invent fleet names here

# Optional: default browser for Tier B CUA clicks
cua:
  preferred_browser: "Safari"   # Safari | Chrome | Chromium — real profile only
  max_misclicks: 2
  allow_add_account: false

providers:
  codex:
    email: "codex-user@example.com"
    mode: chatgpt          # chatgpt | api — api is Tier A key path, not chooser
  claude:
    email: "claude-user@example.com"
    mode: subscription     # subscription | api
  grok:
    email: "grok-user@example.com"
    mode: oauth            # oauth | api
  cursor:
    email: "cursor-user@example.com"
    mode: google_oauth
  minimax:
    email: "minimax-user@example.com"
    mode: oauth            # oauth refresh is Tier A; chooser rare
  nous:
    email: "nous-user@example.com"
    mode: oauth
  opencode_go:
    email: null            # API key only — Tier A; no chooser
    mode: api
  mcloud:
    email: null            # Cloud PAT — Tier A; no chooser
    mode: pat

# Optional labels if the chooser shows a display name beside the email
# labels:
#   claude: "Example Claude Account"
```
