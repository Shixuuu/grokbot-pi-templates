---
name: sharepoint-file-edit
description: "Use when changing a SharePoint workbook or document — prefer Graph or Excel row updates or authenticated download/edit/upload; never put file base64 in model context; never use external staging URLs"
---

Any update to a file under SharePoint (especially lane workbooks and trackers).

## Rule
Agents reason about changes. Infrastructure transports bytes. Never place binary or base64 file contents in model context when a file-reference, binary stream, or direct record-update method exists.

## Priority
1. Best — direct Excel or Graph row/cell update on the live SharePoint workbook (no full-file download).
2. Very good — authenticated binary item edit: resolve item ID, authenticated download to scratch outside model context, deterministic local edit, authenticated overwrite to the same item ID.
3. Forbidden — external intermediaries (temporary public object storage, anonymous staging URLs).
4. Forbidden — base64 through chat, subagents, or model-visible tool arguments.

## Proof to report (compact)
Item name, SharePoint item ID or path, version or lastModified, what changed, success or failure. SharePoint remains sole master; do not keep a standing local master beside it.
