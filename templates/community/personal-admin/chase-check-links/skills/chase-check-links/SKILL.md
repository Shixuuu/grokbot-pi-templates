---
name: chase-check-links
description: "Use this when pulling Chase check front images into Google Drive and hyperlinking them on matching Tiller Transactions Full Description cells (incremental watermark runs)."
---

# Chase Check Links

## When
The user wants new (or backlog) Chase checking **front** check images stored in Drive and hyperlinked onto **Tiller Transactions → Full Description**.

## Source of truth
Prefer the project folder the user names (often `~/.grokbot/_chase_check_links` or similar). Read `README.md`, `AI_RUNBOOK.md`, `PROJECT_STATE.md`, and `LAST_DATE.txt` there before inventing steps. Use `scripts/extract_fronts.py` and `scripts/link_check_images.gs` when present.

## Hard rules
- Fronts only; never backs.
- Never edit/delete a **Copy of Transactions** (or named backup) tab unless the user says so.
- Hyperlink the existing **Full Description** text in place — do not leave a separate Check Image helper column.
- One Chase PDF at a time via Check downloads **Saves document** (not the PDF viewer Save; not multi-check Create PDF).
- Never use Clear filter on Chase search (logs out).
- Remotes before **2024-10-05** have no Chase online image — log and skip.
- Extract the PDF’s **embedded** front image (not a half-page page crop).
- Ask before advancing `LAST_DATE.txt`.

## Steps
1. Read watermark + open items from the project folder.
2. Inventory Tiller check/remote rows for the target Chase account with dates ≥ watermark that are missing from the **Check Images** tab.
3. Chase sign-in via Secure Form / box handoff (sign-in + in-chat-forms skills).
4. Download written checks (check-from/to testids) and remotes (date+amount) one at a time; `pdftotext` verify each PDF.
5. Run `extract_fronts.py` → upload/replace PNGs in the Drive folder recorded in README.
6. Append **Check Images** rows (Transaction IDs as text); run `linkCheckImages` Apps Script.
7. Report skips; update `PROJECT_STATE.md`; ask before advancing `LAST_DATE.txt`.

## Match keys
Written: check number (+ post date). Remote: date + amount (`-b` for same-day duplicates). Link: `https://drive.google.com/file/d/{id}/view`.
