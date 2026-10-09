---
name: take
description: "Use when the owner runs /take or asks to take over, keep going, watch, or notify when local / Herdr agents are done."
---

# /take

Router. The owner is stepping away and wants local Herdr / CLI work owned.

**Do:** follow [factory-local-takeover](sand-workflow:factory-local-takeover): arm path (factory-mode gate on, done-only webhook resumed, one Task-wrapped wait per live pane with settle checks), then keep the stream moving in that pane. One line naming the panes armed.

**Don't:** arm anything if they are clearly at the keyboard; a status ask is a one-shot list.

Command table: [Factory commands](sand-workflow:factory-commands).
