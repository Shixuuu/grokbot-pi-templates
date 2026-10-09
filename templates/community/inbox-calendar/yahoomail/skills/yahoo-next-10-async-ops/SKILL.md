---
name: yahoo-next-10-async-ops
description: "Use when YahooMail builds or delivers a Next-10 host list — always async (never block on filter UI), verify folder name before picker, keep 8h host exclusion."
---

# Yahoo Next-10 async ops

Use whenever YahooMail builds or delivers a Next-10 host list.

## Async (required)

Next-10 **must not wait** on filter-creation UI. Run filter work **in parallel or after**. If the filter UI is slow, **still deliver Next-10**. Do not strand the owner on a Save click.

## 8-hour host exclusion (already standing — do not recreate the rule)

Exclude any From host that appeared in **any** Next-10 list in the **prior 8 hours** (America/New_York). Keep scanning until **10 fresh** hosts (or fewer if Inbox runs out). Record each delivered list (e.g. a local `yahoo-next10-recent.json`). Never rewrite this exclusion as a new policy; it already stands.

## Folder verify before picker

Before opening a folder picker / file-to-folder UI, **verify the folder name exists**. If it does not, create or confirm the name with the owner — do not pick a near-miss.

## With other Yahoo skills

Action mode and FIFO queue still apply (yahoo-action-mode-ops). Filter create/save still uses yahoo-filters-create-save. Next-10 delivery is the thing that must not block.
