---
name: timeline-import
description: "Use when bringing a switcher or auto-multicam app's FCPXML, OTIO or EDL export into Resolve or Premiere and relinking it to the master files."
---

# Timeline import

Bring a switcher's EDL/OTIO export or an auto-multicam app's FCPXML/OTIO into DaVinci Resolve or Premiere and relink to the masters.

## Steps
1. Import the FCPXML, OTIO or EDL into the NLE.
2. Relink to the ISO camera files, the multitrack audio and any camera backups in the session folder.
3. Check sync at the head and the tail.
4. Keep the multicam structure and every mic track; don't flatten to one mixed file while an editor is still working.
5. If the adapter loses a property (enabled states, transforms, clip gain), say exactly what was lost and supply markers or a camera-decision list.
6. Want the agent to keep cutting inside Resolve? Switch to `resolve-mcp-edit`.

## Done when
The timeline plays in sync with every source linked.
