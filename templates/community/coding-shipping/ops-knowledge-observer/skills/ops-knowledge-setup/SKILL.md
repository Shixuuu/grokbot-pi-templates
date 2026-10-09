---
name: ops-knowledge-setup
description: "Use on first import (and when re-tailoring): questionnaire for owner, EDI/TMS sources, peer specialists, and Drive paths before daily harvest."
---

# Ops Knowledge setup (import questionnaire)

Use this on first run after someone imports the Ops Knowledge Observer template, and any time they want to re-tailor memories, Drive paths, or the daily routine. Do not invent answers. Ask one question at a time (or a tight widget), write confirmed answers into agent profile memories, then rewrite the daily harvest routine fill-ins. Do not edit Hard_Rules. Do not start a multi-hour harvest until setup is done unless they say go.

## Goal of setup
Map THIS importer's world onto the shared-brain workflow: who the owner is, where EDI/TMS tenders come from, which specialist bots feed facts, and where the Drive knowledge book / ingest live.

## Running questionnaire (ask in order; skip only if already answered in memory)

1. **Who is the user / owner?**
   - Display name for open questions tab (becomes {{OWNER_DISPLAY_NAME}} and {{ASK_TAB}}, e.g. Ask_Jordan — never leave a sample person's name).
   - Primary observe-only mailbox ({{OWNER_MAILBOX}}).
   - Confirm: this bot must never send/reply/forward as them without a separate explicit ask (default: never send).

2. **What information sources for EDI / TMS tenders do you have?**
   - Sender domains or mail rules ({{EDI_SENDER_FILTER}}).
   - Preferred log tab name ({{EDI_TENDER_LOG_TAB}}) — default Edi_Tender_Log; do not keep a vendor brand name unless they want it.
   - How tender ID joins to brokerage BOL ({{ID_LAYER_RULES}}): describe their layers (brokerage order vs tender/BOL vs asset load) in their own patterns.
   - Confirm: scrape tenders into the log quietly; never click appoint/create-load-note; never alert on every message.

3. **Where does the company brain live?**
   - Knowledge Drive folder ({{KNOWLEDGE_FOLDER_ID}}).
   - Live workbook name ({{LIVE_WORKBOOK_NAME}}) — fileId may change after merges.
   - Ingest folder ({{INGEST_FOLDER_ID}}) and _merged folder ({{MERGED_FOLDER_ID}}).
   - Merge schedule note ({{MERGE_SCHEDULE_NOTE}}), if any.

4. **Which specialty bots / roles feed this brain?**
   - List peer roles and what is read-only vs off-limits ({{PEER_SPECIALIST_ROLES}}, {{PEER_READONLY_FOLDER_IDS}}).
   - Suggested prompts if they are unsure:
     - Freight / customer-book ops bot(s): live loads — harvest durable facts only, never steal cadence.
     - Prospecting / outbound bot(s): network facts only; do not prospect from this bot.
     - Accounting / AP mailbox observer: not primary for this bot.
   - Any freeze or "do not write" fences between teams.

5. **Mail hygiene**
   - Folders to ignore as personal/trash ({{IGNORE_MAIL_FOLDERS}}).
   - Any work-customer folders that look personal but are WORK.

6. **Training preferences**
   - Confirm Verdict is owner-only; bot proposes Scope + Importance only.
   - Soft_Rules = PROPOSED after 3 matching goods; Hard_Rules = owner only.

7. **First harvest**
   - ACK fill-ins back in one short list.
   - Ask: run first delta now, or wait for go?

## After answers
- Save scrubbed facts to profile memory (no secrets, no card/bank digits).
- Update the Ops Knowledge daily harvest routine content so every {{FILL_IN}} is replaced with their values (or keep the placeholder only if they deferred).
- Set a memory: Import setup complete on {{date}} for {{OWNER_DISPLAY_NAME}}.
- Do not modify other imported users' data; this setup is local to the importing agent.

## Anti-patterns
- Do not ship sample names, company codes, or Drive fileIds from the authoring company.
- Do not invent EDI vendors or peer bots they did not name.
- Do not start writing companion workbooks or cloning the live sheet.
