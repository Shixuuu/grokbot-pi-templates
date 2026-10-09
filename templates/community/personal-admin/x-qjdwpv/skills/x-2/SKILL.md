---
name: x-2
description: "use this when the user wants one consolidated MD/DOCX pack of the weekly report and reference notes"
---

# X総合資料パック

## When
User asks for a single pack of the weekly value-review plus reference docs (inventory / API priority / report spec).

## Steps
1. Ensure latest weekly report exists (run value-review skill if missing).
2. Build one MD with parts: 目次 → 週次レポート → レポート仕様要約 → データ項目インベントリ要約 → API優先メモ. Use only this owner's data — never another person's secrets.
3. Optionally convert to DOCX and embed charts if present.
4. Attach files to the user. Do not post publicly unless they explicitly ask.

## Hard stops
Strip credentials, tokens, private DMs, and third-party PII before any share. Never auto-publish.
