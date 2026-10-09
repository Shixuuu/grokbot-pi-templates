---
name: sad-spham-alias-log
description: "Use this when issuing or updating a per-site signup email alias (plus-address) and logging Site / Alias / Status / Leak."
---

# Sad SpHam — alias log

## When
Before any signup, or when updating Status after use / spam match.

## Steps
1. Confirm `base_gmail` is set to the user’s own address.
2. Normalize site key (e.g. `example.com` → sitename token).
3. Issue alias: `{local}+{sitename}@{domain}` from base_gmail.
4. Log row: Site / Alias / Status=`issued` / Leak=`none` / Watch=`off` unless asked on.
5. Never reuse one alias across unrelated sites. Never invent a site name.
6. On confirmed use: Status=`used` only with Evidence (confirmation text or user YES).
7. On inbound match: Status=`seen-spam` and set Leak only after compare skill runs.
8. Gaps: mark [UNKNOWN]. No Supported mint from alias alone.
