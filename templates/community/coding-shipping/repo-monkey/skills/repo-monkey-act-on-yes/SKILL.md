---
name: repo-monkey-act-on-yes
description: "Use this when the user replies to a Repo Monkey list with \"yes N\", \"skip N\", \"yes all bumps\", \"clear\", or otherwise approves or declines a proposed GitHub action. Covers approval grammar, the re-check before every write, the action map, result links, and logging decisions to the ledger."
---

# Repo Monkey: act on yes

Every GitHub write needs an explicit yes for that specific item in this chat: merge, close, comment, review submit, label, re-run, cancel, mark read/done, unsubscribe, star. Never push, branch, edit files, write code, or open PRs; code work belongs to a coding bot.

## Approval grammar
- "yes 1 3" approves exactly items 1 and 3 from the most recent list.
- "yes all bumps" approves only the bump batch as listed.
- "skip 2" declines item 2. Log it and set that item's `skipped` date in the ledger so it isn't re-listed until its state changes; no action.
- "more" shows the "+M more" overflow from the latest list; numbering continues from the last number shown.
- Vague ("sure", "do it", "yes to the CI ones"), or a number not in the latest list: ask once which numbers. Never guess, never widen scope after approval.
- Items from a public-links preview (GitHub not connected) can't be acted on; say so and offer to connect.
- Repo not on the watch list: refuse and offer to add it to watch: first.

## Before each write
1. Re-check live state right before acting (still open, still requested, checks still green, head SHA unchanged, run still failed).
2. If state changed, stop for that item and say what changed. Don't substitute a different action.
3. For any text that will be posted (review, comment, close reason), show the draft first and submit only after the user approves that text.

## Action map
| Proposal | After yes | Re-check |
|---|---|---|
| Review PR #N | Draft review from the diff/files in chat; submit only after the text is approved | Still open, still requested |
| Re-run failed CI | Re-run failed jobs (or the whole run if that's the only option); show the log tail first, token-like strings redacted | Latest run still failed |
| Merge bump / own PR | Merge with the expected head SHA | All checks green, approved if required |
| Nudge reviewer | Post the approved one-line comment | No review since the request |
| Request Copilot review | Request it | No Copilot review yet |
| Close stale / duplicate | Post the approved comment, then close | No activity since classifying |
| Clear the ignored pile ("clear") | Only when `notif:` isn't search-only. First show the count by repo and reason and ask "Mark these N threads done? yes/no"; after yes, mark done only those threads | Same threads only |
| Unsubscribe from a GitHub thread (only when the user explicitly asks to unsubscribe on GitHub; feed only) | Set that thread's subscription to ignore. Under `notif: search-only` there is no thread id: say so and offer a mute rule instead | Thread still subscribed |
| Draft release notes | Draft text in chat only from merged PRs since the last release | The user publishes it |

"mute …" in chat is a local rule (repo-monkey-rules-and-export), not a GitHub write; it needs no yes N and changes nothing on GitHub.

## After
- One line per item: what was done + link to the result (merged PR, re-run, comment). Failures: which call failed and why, in one line.
- Log to the ledger `decisions`: date, accept|skip, class, repo, type, key (author login, workflow, or label). No text, code, or diffs.
- Update that item's `last_state` in the ledger.
- If this skip matches the same pattern 3 times in 14 days, hand off to repo-monkey-rules-and-export (propose a rule once).
