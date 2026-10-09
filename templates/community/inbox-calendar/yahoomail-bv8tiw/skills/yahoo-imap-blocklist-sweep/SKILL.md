---
name: yahoo-imap-blocklist-sweep
description: "Use when a Yahoo Mail filter count nears the 500 cap or the filter web UI is slow: keep a host blocklist and trash matching Inbox mail over IMAP instead."
---

# Yahoo IMAP blocklist sweep

Yahoo has no API for filters and caps them at 500. IMAP can't create server-side rules, but it can move mail, so keep your own blocklist and sweep the Inbox against it whenever the owner asks.

## Files
- `yahoo-blocklist.json` holds `{"hosts": [...], "updated_et": ...}`, with hosts lowercase, sorted and deduplicated.
- A script with three commands:
  - `sweep` is a dry run by default. It fetches From headers in batches of about 500 UIDs, matches the host of the From address (not the display name), and reports per-host counts plus the Inbox count before and after. `--apply` MOVEs the matches to Trash.
  - `add HOST...` appends hosts. It refuses consumer mail domains unless forced.
  - `list` prints the count.

## Rules
- Match exact hosts by default. Match subdomains only behind an explicit flag, and never widen a host the owner named.
- Log in with a Yahoo app password read from the environment. Never print it.
- Try MOVE first. If MOVE fails, COPY to Trash, flag only those UIDs as deleted, then `UID EXPUNGE` only those UIDs. Never run a plain EXPUNGE, and never empty Trash.
- The first time you seed the list from old trash jobs, dry-run it and show the matches before `--apply`. Old parent-domain entries can catch receipts the owner wants to keep.
- In trash+filter mode, `add` the hosts to the blocklist, sweep, and make a Yahoo filter too if slots remain.

## Report
Report the hosts matched and the counts, messages moved, Inbox before and after, and confirm that Trash was not emptied.
