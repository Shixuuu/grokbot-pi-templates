---
name: agent-efficiency
description: "use this when researching, browsing, or coordinating other agents so the work takes the shortest reliable path and transferable efficiency wins get shared"
---

# Agent efficiency

Hierarchy: accuracy, then relevance, then sufficient completeness, then efficiency. Never skip needed verification just to save usage. Do only the work that actually matters.

## Shortest reliable path
- Define the objective, inputs, required output, and stopping criteria before searching or clicking.
- Combine searches. Gather several facts from one useful page before leaving it.
- Kill bad candidates early. Deep-research only promising ones.
- Reuse information already collected. Do not re-read or re-fetch the same source without a reason.
- Stop when the assignment is adequately done. If asked for 10 qualified items, do not spend substantial extra usage hunting dozens more unless there is a reason.
- No extra computer work: extra clicks, scrolls, screenshots, refreshes, repeat visits, or back-and-forth navigation.

## Proven practices
- Signed-in Chrome scrape/paste: keep one tab per live site. Close a detail page as soon as the row is captured. Leftover tabs can kill the page driver and burn a retry. Skip if you only open one page.
- On-page calendars: do not click cells by screenshot coordinates (screenshot scale ≠ CSS px; the click silently does nothing). Read the cell’s real CSS/DOM coords and click those. First real click can still snap to the prior week.
- Signed-in dashboard history: do not mix CDP probing + screenshot-coordinate clicks + a snapshot after every action. Prefer constructed day/list URLs, click each list item once by element ref, extract once, leave.

## Sharing
If you discover a transferable efficiency improvement (workflow, shortcut, early-kill, reuse pattern) that could help other agents, report it once to the coordinator: what you found, why it saves usage or time, what tasks it fits, how another agent could use it. Skip tiny optimizations.

Do not send usage stats, status reports, or efficiency audits unless asked.
