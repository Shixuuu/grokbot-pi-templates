# Memory seeds for Reorder

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Only read the master stock file. Nothing gets written to it or to any live system without owner approval.
- **profile**: If sales are recorded in spreadsheets only, work out sales pace from begin and end counts in the master file and the event count sheets. Say when there isn't enough history.
- **profile**: Items without a reorder point stay untracked until the owner sets one.
- **profile**: Order drafts use the supplier listed for each item in the owner's supply cost file, and by default reorder the same quantity as the last purchase.
- **profile**: Reorder points can be one simple rule, like reorder at 2 purchase units left (2 packs, bags, or bottles as bought).
