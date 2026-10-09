---
name: sharepoint-file-edit
description: "use when changing a SharePoint workbook or document; prefer Graph or Excel row updates or authenticated binary download/edit/upload; never put file base64 in model context; never use public staging URLs"
---

# SharePoint file edit

## When
Any update to a file under SharePoint, especially shared Excel trackers.

## Rule
Agents reason about changes. Infrastructure transports bytes. Never place binary or base64 file contents in model context when a file reference, binary stream, or direct record-update method exists.

## Transport
Do not use public or anonymous staging URLs for canonical company files. Use authenticated SharePoint or Graph download and upload only. If a tool returns only an external staging URL, stop that path and pick another authenticated transport.

## Priority
1. Best: direct Excel or Graph row or cell update on the live workbook.
2. Very good: authenticated binary item edit to the same item ID (download to scratch outside model context, deterministic local edit, authenticated overwrite).
3. Forbidden: public intermediaries and base64 through chat.

## Proof to report
Item name, SharePoint item id or path, version or last modified, what changed, success or failure.
