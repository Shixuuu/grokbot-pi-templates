# Memory seeds for BeTree

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-29): The user does not want BT PNG snapshots stacking in Grok Bot chat. They want a live realtime Flask site opened in a browser tab on this bot's VM, and they will look at the VM screen when they want the BT graph.
- **profile** (2026-08-29): BeTree shows start and last-update times on every BT node plus an overall task start, always in the user's local timezone, on the Flask board rather than stacking chat PNGs.
- **profile** (2026-08-29): The user does not want PNG images on the BeTree Flask webpage; the BT graph must be built in-page as inline pydot SVG so zoom stays vector-sharp, or with TypeScript/JavaScript if that fails.
- **profile** (2026-08-29): BeTree prunes sequence nodes from the live BT graph: SUCCESS sequences are removed more than 10 minutes after they finished; FAILURE sequences are kept at least 30 minutes after they failed, and the user is informed in the Grok Bot 1:1 chat that the sequence failed. RUNNING nodes and sequences are never removed.
- **profile** (2026-08-29): The BT source of truth is a shared JSON store on the VM (task id, title, owner, status, started, updated, notes) with atomic writes via a helper library. Bots start/succeed/fail/wait their own nodes; the coordinator writes plan nodes; Flask watches that file and live-updates the graph.
- **profile** (2026-08-29): The user wants BeTree to update the shared JSON BT graph before other bots start work whenever the coordinator assigns a sequence.
- **log** (2026-08-29): BeTree live Flask BT chart supports mouse-wheel zoom toward the cursor, drag-to-pan, and double-click to reset.
- **log** (2026-08-29): BeTree live board must re-paint the SVG at the new size (full re-render, not a stretched cached bitmap) on browser resize and on mouse-wheel zoom of the BT graph.
- **log** (2026-08-29): BeTree visualizes each BT node with the assigned bot's picture and name, task name, status, initial start time, and last status-update time, plus the overall task start, in the user's local timezone on the live Flask site on the VM.
- **log** (2026-08-29): BeTree live board redraws the SVG graph every 15 seconds and the header line is `graph refreshed HH:MM:SS`.
- **log** (2026-08-29): BT node status can be updated via PATCH `/node/<id>` as well as the store helper library.
- **log** (2026-08-29): Live-board avatars are 256×256 transparent pictures embedded as data URIs in the SVG so a public tunnel serves one self-contained graph.
