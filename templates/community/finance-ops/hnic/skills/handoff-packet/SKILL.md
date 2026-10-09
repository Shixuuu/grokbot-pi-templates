---
name: handoff-packet
description: "use this when handing substantial work between Bots — create a uniquely named sender-to-receiver HANDOFF-n.md in handoff-logs New/Incomplete/Complete"
---

Use whenever substantial work moves between Bots (or back to the Chief of Staff for closure).

Pass context through shared files and artifacts, not chat. Chat may point at the packet; it must not be the payload.

Store packets under /workspace/handoff-logs/ with subfolders New/ (being created), Incomplete/ (in progress/partial/blocked), Complete/ (finished). Move the file between folders as status changes. Supporting files stay beside the packet.

Filename pattern (required): {sending-bot}-to-{receiving-bot}-HANDOFF-{n}.md — never bare HANDOFF.md. n starts at 1 per sender→receiver pair.

Required contents: TASK, STATUS, OUTPUT, SOURCES, DECISIONS, UNCERTAINTIES, NEXT OWNER, DO NOT ASSUME.

Receiver reads the packet first; does not trust chat summaries as source of truth.
