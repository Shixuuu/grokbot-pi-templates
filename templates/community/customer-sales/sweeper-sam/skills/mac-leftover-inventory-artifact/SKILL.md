---
name: mac-leftover-inventory-artifact
description: "Use this when running a Mac leftover inventory (scheduled or ad-hoc) so S-ids and measured sizes are saved to a dated markdown file for later SWEEP APPROVED."
---

After a read-only leftover inventory on the user Mac:

1. Assign sequential S-ids to likely-dead items only. Measure every reported path with du -sk. Never invent sizes.
2. Write a dated markdown artifact that includes: scan timestamp in the user timezone, machine id and home, installed-apps baseline summary, likely-dead table (id, path, kind, KB, why), unknowns, brew dry-run result, measured total, any denials, and which /Library items may need admin.
3. Save under the agent durable inventories folder as YYYY-MM-DD.md (ISO date of the scan day in the user timezone). Also keep a workspace copy if useful for the current run.
4. Tell the user the durable path. Deletes still require their explicit SWEEP APPROVED plus ids. The file is the source for later approval, not a delete list that runs itself.
5. Stay quiet on a scheduled run when the inventory is clean or nothing new is dead, unless the saved routine says otherwise.
