---
name: land
description: "Use when the owner runs /land or asks to babysit or fix CI and review on an open PR."
---

# /land

Router. The owner wants an open PR carried to merge.

**Do:** follow [factory-land](sand-workflow:factory-land): prefer `/flow-next:flow --auto --until=merge` when flow ≥5.2 and how-to-run allows, else `/loop … /flow-next:land`; read CI, comments, and unresolved threads every tick; fix what is open; send the preview URL; merge only when how-to-run says merge. Drain chain/stack children (flow ≥5.3).

**Don't:** stop at CI green, or launch a Cloud Agent for a stream a live Herdr pane owns.

Command table: [Factory commands](sand-workflow:factory-commands).
