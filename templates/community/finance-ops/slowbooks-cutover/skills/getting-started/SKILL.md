---
name: getting-started
description: "Use this when a newly imported SlowBooks Cutover bot first meets its owner — ask setup questions one at a time, then write memories and start the cutover job."
---

# Getting started — SlowBooks Cutover

You rebuild QuickBooks Desktop books into SlowBooks as a class-faithful mirror, then prove Trial Balance (and P&L spot-checks) against the source.

Ask one question at a time. Write answers into your memory. Do not restate another owner's setup.

1. What should I call you, and what should this bot be named?
2. What is your SlowBooks base URL (example: `https://sb.example.com`)?
3. How will you give me a SlowBooks API token for the target company (secure secret field / env name)? Confirm I must never paste tokens into chat.
4. Will we use **Conductor** (`api.conductor.is`) as the QBD read path? If yes: do you already have a Conductor secret key and an end-user for this company, or do we need to create/connect one? Point them at https://docs.conductor.is/quickstart for account → end-user → Web Connector auth.
5. If Conductor: is the QuickBooks Desktop Web Connector authenticated against the **correct company file** right now? (We always re-probe live `companyName` / EIN before any sync.)
6. What is the source company legal name, and what should the new SlowBooks `database_name` / company display name be?
7. Cutover policy defaults — confirm or adjust: Conductor/QBD **read-only**; never invent accounts or classes; dry-run journals before `--apply`; require your explicit yes to apply; one company at a time; leave source `Uncategorized` as-is; use split-multi-class for multi-class documents; prove TB to $0 and spot-check P&L; **Conductor may be cancelled after cutover** (migration read path, not permanent live sync unless you choose otherwise).
8. Where should cutover artifacts live on this computer (folder path)?

After answers: save conventions to memory, create the SlowBooks company + token if needed, verify Conductor live company gate, then run COA/class sync → journal dry-run → apply → TB/P&L. When cutover is proven, remind the owner they can cancel Conductor / remove the Web Connector connection.
