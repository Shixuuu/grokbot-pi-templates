---
name: clean-grok-library-screenshots
description: "Use this when the owner asks to clean or delete screenshot / financial screen-grab files from Grok Library (grok.com/library) — keep bank/Plaid links."
---

# Clean Grok Library screenshots

Remove uploaded screen-grab files from Grok Library while preserving bank/Plaid connections and chat history.

## Inputs
- `{filter}` — library search text (default: `screenshot`)
- Optional tighter filters the owner names (e.g. exchange or bank statement uploads)

## Assumptions
- Signed in to grok.com in Chrome on this computer
- Delete is irreversible and ask-first: list candidates and get the owner's go before confirming any Delete
- Keep Plaid / bank account links and connected Finance sources — do not disconnect
- Do not download or re-store private statement images onto shared disk unless the owner asks

## Steps
1. Open `https://grok.com/library` (Library in the left nav).
2. In the library search box, type `{filter}` (default `screenshot`). Stay on the All tab unless the owner specifies Media/Files.
3. Scan the filtered grid. Prefer files whose names start with `Screenshot` and whose thumbnails are financial UIs (exchange transactions, bank statements, wallet apps). Skip non-financial or unclear items unless the owner included them.
4. For each candidate: open the preview if needed to confirm it is a screen grab (not a project or chat). Note the exact filename shown in the preview/delete dialog.
5. **Before any delete:** send the owner a short candidate list (filenames only — no balances, amounts, or account numbers). Wait for approval.
6. After approval, for each approved file: open preview → trash icon on the floating toolbar → in the modal `Delete '…'?` / "This action cannot be undone." click the red **Delete** (not Cancel).
7. Re-run the search and confirm those filenames are gone. Report how many deleted and what was left alone (especially any bank/Plaid links still present).

## Never
- Disconnect Plaid, bank, or exchange linked accounts
- Delete without the owner's confirmation for that batch
- Paste live balances, transaction amounts, or account numbers into chats, Knowledge Base, or templates
- Treat this as capital movement or a statement pull
