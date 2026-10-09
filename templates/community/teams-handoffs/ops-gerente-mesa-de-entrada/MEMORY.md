# Memory seeds for Ops Gerente — mesa de entrada

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-13): Google Calendar is the source of truth for logistics ops. Prefer Calendar + Drive + Gmail over ad-hoc chats when deciding what runs when.
- **profile** (2026-09-16): Ops priority stack: P0 = WhatsApp / Calendar changes / delivery notes / driver alerts; P1 = balances, bank prep, route sheets, margin checks; P2 = growth / ecommerce / campaigns. One heavy task per agent at a time; P0 pauses P1/P2.
- **profile** (2026-09-17): Do not open many spreadsheet tabs at once for margin or admin sheets — 1–2 sheets, close when done — to avoid freezing the desktop.
- **profile** (2026-09-17): Delivery-note photos: Assignment (or drivers via Assignment) forwards finished notes to Coordination; Coordination forwards to the client to close the trip. Never Coordination → Assignment with remito photos.
- **profile** (2026-09-15): Unsigned / unsealed remitos must not go to the client. Client WhatsApp contact is the logistics client of the trip, not the paper destination printed on the remito.
- **profile** (2026-09-15): Orange calendar events mean ready to notify the client: who loads, where, what time, short destination summary; then mark green after sending. Violet/purple means a freight change — Assignment must WhatsApp the already-assigned crew, then return the event to orange.
- **profile** (2026-09-17): Very habitual clients may skip the standard orange WhatsApp template. Some clients get driver details by email thread instead of WhatsApp. Some freights only get the orange WhatsApp once vehicle/driver/time are fully assigned.
- **profile** (2026-09-18): Friday reconfirmations for recurring clients ask about Monday needs, not Saturday — recurrents usually do not work Saturdays.
- **profile** (2026-09-18): Marketplace / platform freight offers advance only with a confirmation email from the platform. No confirmation mail → mark the tentative calendar hold as cancelled (CN). Do not invent WhatsApp or confirm service without that mail.
- **profile** (2026-09-17): For deposit/photo jobs: identify the correct Drive folder for that case, share the folder link as editable (anyone with link can edit when appropriate), put a short Drive link under the Maps link in the calendar description (do not mix links), and send the link to the field person on WhatsApp so they upload directly.
- **profile** (2026-09-17): Assignment WhatsApp acknowledgements: full polite sentence with accents, include calendar context (load place / destination) before ACK. Cover always outside human hours; also cover inside those hours if the human does not answer within a few minutes. Zero hung chats.
- **profile** (2026-09-16): Gmail for ops accounts: triage and drafts only. Never send, reply, click verification/2FA/approval links without explicit owner OK. Just notify that a 2FA mail arrived.
- **profile** (2026-09-16): Daily bank reconciliation prep: convert bank xlsx to Google Sheets, format (filters, freeze header, ARS, sort credits desc), set Fecha to prior business day, copy into the monthly sheet as a new tab named the prior business day. Prepare only — owner reviews before irreversible steps.
- **profile** (2026-09-18): Internal Saturday cover slots on the calendar (e.g. manager weekend extra) are not client CF events and do not enter client orange-notification QC.
- **log** (2026-09-16): Margin control: client collected − truck cost from provider ledger tab − helper cost × 1.5; add a margin column after payments with one blank column in between; bold OK rows. Do not invent missing costs — note FALTA. Open 1–2 sheets at a time.
- **log** (2026-09-18): Non-marketplace connectors used in ops (e.g. Contabilium, WhatsApp Web on agent desktops) cannot ship inside a template; wire them after import.
