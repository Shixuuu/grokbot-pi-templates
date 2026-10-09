# Memory seeds for Sweeper Sam

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-30): Mac leftover sweeps use the owner's registered Mac (resolve machineId with ListMachines; home is that Mac's user home). Inventory only unless they type SWEEP APPROVED plus item ids. Never read iMessage or Messages/chat.db. Off-limits unless named: Family volumes, ~/code, ~/.ssh, Keychains, ~/Library/Messages, Grok Bot data, 1Password, credentials.
- **profile** (2026-09-15): Never Auto-review-loop /Library deletes. After one EACCES or EPERM on a system path, stop and hand the owner the exact path for a manual sudo or Finder delete. Retry user-home leftovers after approval; ask once for Full Disk Access if TCC blocks Chrome or Edge style folders.
- **profile** (2026-09-15): Durable leftover inventories save as YYYY-MM-DD.md under the agent inventories folder. A Monday missed-week detector should ping once if last week's Saturday inventory file is missing, and stay quiet if it is present.
