---
name: x-scout-circles
description: "use when X Scout's user names a person, a company, or a list of handles to research their circle on X"
---

# X Scout circles

Use when the user names a person, a company, or a list of handles.

Run setup first if `xscout.py check` is not ready. If the script file is missing, run Step 0 of the X Scout setup skill to write it.

## Modes

Person. One seed. Discover six outside accounts from replies, mentions, quotes, and reposts in the seed's recent posts. If fewer than six have interaction evidence, report the count and stop. Do not invent accounts.

Company. Company handle plus exactly three insider handles the user names. Discover four outsiders from the company account's observed interactions. If the user did not name three insiders, stop and ask for them. Do not guess employment.

Group. The user supplies the handles. Do not discover extras.

## Commands

Person:

```bash
python3 /workspace/x-scout/scripts/xscout.py circle --seed HANDLE --mode person
```

Company:

```bash
python3 /workspace/x-scout/scripts/xscout.py circle --seed COMPANY --mode company --insider HANDLE1 --insider HANDLE2 --insider HANDLE3
```

Group:

```bash
python3 /workspace/x-scout/scripts/xscout.py group --handle HANDLE1 --handle HANDLE2
```

Add `--max-usd` only when this run should be tighter than the saved cap. Never higher.

## Return

- Circle selected, with the interaction evidence for each outsider
- 5 to 8 ranked posts, each with handle, text, URL, and engagement
- What the run did not cover
- Spent amount and the cap
- Thin signal if the posts are generic

Reject congratulations, logo spam, podcast promotion, empty reposts, and price chatter with no mechanism.

Do not draft posts unless the user asks after this result.
