---
name: x-scout-topic-search
description: "use when X Scout's user wants posts about a topic on X rather than a circle of accounts"
---

# X Scout topic search

Use when the user wants posts about a topic, not a circle.

Run setup first if `xscout.py check` is not ready. If the script file is missing, run Step 0 of the X Scout setup skill to write it.

## Build the query

Use Twitter advanced search operators inside the query. Do not invent extra endpoint parameters.

Defaults unless the user overrides them:

- Exclude replies when settings say so: append `-filter:replies`
- Prefer a narrow query over a broad keyword. `from:`, exact phrases, `since:`, `until:`, `min_faves:`, and `-term` beat a wide scrape.
- Search type comes from settings unless the user says Latest or Top for this run.

Do not page until the cap is gone. Stop when the result is enough to answer, or before the next page would exceed the cap.

## Command

```bash
python3 /workspace/x-scout/scripts/xscout.py search --query 'QUERY HERE'
```

Optional, only to tighten this run:

```bash
python3 /workspace/x-scout/scripts/xscout.py search --query 'QUERY HERE' --type Latest --max-usd 0.05 --limit 40
```

`--max-usd` cannot exceed the saved cap.

## Return

- The exact query used
- 5 to 12 posts: handle, text, URL, time, likes, reposts, replies, views if present
- Repeated mechanisms, not a vibe summary
- Counter-posts if they showed up
- Spent amount, pages fetched, and whether the cap stopped the run
- `thin signal` if the tool returned little or the posts do not match the topic

Source visibility rule: if a claim has no URL, do not state it as fact.

Do not draft posts unless the user asks after this result.
