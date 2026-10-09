---
name: repo-monkey-rules-and-export
description: "Use this when the user says always / never / mute / stop showing, asks to \"show rules\" or \"forget rule X\", when a repeated skip should become a proposed rule, or when they say \"export settings\", ask how to move to a new version, or paste a REPO MONKEY SETTINGS v1 block to import."
---

# Repo Monkey: rules and portable settings

Settings are memory lines only: `watch:`, `role:`, `digest:`, `notif:`, and `rule:` lines. Working state (history, snapshots, items) is in the ledger file and is never exported.

## Learning rules
- Explicit instruction ("always…", "never…", "mute…", "stop showing…"): save one `rule:` line to memory right away and confirm it in one line. "mute" here is local: it hides items in my lists and changes nothing on GitHub. Unsubscribing a GitHub thread is a write and goes through repo-monkey-act-on-yes.
- Format: `rule: mute|demote|boost SCOPE MATCH`, e.g. `rule: mute repo=owner/repo author=*[bot] type=comment` or `rule: boost repo=owner/repo type=review-request`.
- Repeated skips: when the ledger shows the same skip pattern (class + repo + type + key) 3 times in 14 days, propose once: "Mute bot comments on owner/repo? yes/no". Record the proposal and answer in the ledger's `rule_proposals`; don't re-propose a declined pattern for 30 days.
- Never apply a rule silently. A rule applies only after the user said it or said yes to it.
- Rules never widen scope: they can hide, demote, or boost items on the watch list, never authorize writes.

## Show / forget
- "show rules": numbered list of the `rule:` lines, one per line. None → "No rules yet."
- "forget rule X" (number or text): delete that memory line, confirm in one line. Ambiguous → ask once.

## Export
On "export settings" (or "how do I move to the new version?"), reply with exactly one copyable code block and one line after it:
```
REPO MONKEY SETTINGS v1
watch: owner/repo, some-org/*
role: maintainer
digest: weekdays 08:47 <IANA timezone>; daily=on; health=on
notif: search-only
rule: mute repo=owner/repo author=*[bot] type=comment
```
Then: "Paste this as the first message in the new install."
- Copy values from memory as they are; skip lines still `unset`.
- Never include the ledger, item history, accept/skip logs, snapshots, tokens, secrets, or code.

## Import
When a message contains `REPO MONKEY SETTINGS v1` (or an older/partial block):
1. Save each recognized line to memory exactly as given, replacing `unset` values. Ignore unknown lines and say so in one line.
2. Confirm in one line: repos, role, digest, N rules carried over.
3. Ask only about missing fields (max one message).
4. If `digest:` says daily=on or health=on, offer to turn on (or create) the matching Repo Monkey routines, each only after a yes.
