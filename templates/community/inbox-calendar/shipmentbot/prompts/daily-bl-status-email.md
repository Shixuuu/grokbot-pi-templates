---
description: "Grok Bot routine: Daily BL status email — Mon–Sat 8:00 local morning ocean BL status email from the tracked registry."
argument-hint: "[extra context]"
---

Send the weekday-plus-Saturday ocean BL digest.

Read the BL registry and the last snapshot beside it. Run the Ocean BL digest skill: for each active BL, check status on the mapped websites in that card (do not skip a mapped site unless this prompt says to deprioritize it; do not invent events). Diff every row against the previous snapshot.

You own this digest. Email it yourself via the Gmail connector. Do not ask another mail bot to send it. Do not read or ingest other customer mail.

Email ONE digest to every address listed in the registry header (all on To, same email). Subject: “BL status — {dd Mon yyyy} ({N} exception|all clear)”.

Body MUST be an HTML table (with a plain-text table alternative) using columns: BL | Container | Material | BL kg | Status | Location | Last event | Days | Fastest | Cheapest | Holds | Demurrage | Change | Source.
- Material: short cargo name from the BL.
- BL kg: BL gross-weight total (not per container, not terminal weighment), repeated on every row of that BL, with thousands separators.
- Days: calendar days from the start date on the registry card. Start date is the BL date when known; if missing, use on-board / laden / shipped. Still at sea (not yet arrived or discharged at POD): days from start to the digest date (this ticks each morning). Once it has reached POD (first confirmed arrival or terminal discharge), show days from start to that reach date and freeze. Same number on every container row of that BL unless boxes reached on different dates. No start date yet (draft BL with no on-board date) = —. Include Days in the abbreviations key: at sea = start→today; arrived = start→POD.
- Fastest: from the registry card (last POL–POD route review), write the fastest line and how many days faster it is than this BL. Format `{line} {N}d faster`. This BL’s transit = frozen Days if arrived; if still at sea, start date to current POD ETA. N = this BL’s transit minus the fastest typical days on the card. If N is 0 or the BL is already that line, quote the same name only. If no start date or no ETA yet, line name only. Recalculate N when an at-sea ETA moves.
- Cheapest: line name only from the card. If the BL is already on that line, quote the same name. Do not invent dollar freight or re-quote the market each morning.
- Demurrage: only for boxes currently in a destination yard. At-sea and delivered = —. Pull the discharging terminal’s draft invoice paid through that digest date at 11:59:00 PM local, always with BillOfLading + container together when supported. Never use a container-only total if the box has prior visits. If one sister box of the same BL/size/discharge fails or looks polluted, copy the clean sister and mark ~estimate. Local currency primary. Footnote that this is terminal dues (not shipping-line demurrage) and tax may already be included. The Demurrage cell is the running total through that morning, not the daily rate.
- Change: if the row matches yesterday, the cell is exactly “No change”. If it moved, a short phrase. Days ticking up on an at-sea row is not a Change by itself. An ETA slip that changes the Fastest “Nd faster” figure is a Change.
Above the table: if anything changed vs the previous digest, one sentence naming what moved. If nothing changed, omit that sentence.
Needs-action rows first. Short footnotes only if needed. Always end with an Abbreviations key for codes actually used. Times in the user’s local zone.

Keep any box still In Yard with ticking dues / holds / no gate-out as a daily exception.

Deprioritize a carrier site while its boxes stay Delivered and the terminal already confirms Delivered. Resume that carrier site if a box leaves Delivered.

Draft BLs: still check mapped sources. If there is no carrier/terminal record yet, Status On track, Location at sea / draft BL, Days — until a BL or on-board date is known, Demurrage —, and do not count “no record” as an exception by itself.

Do not re-send a snapshot the user already sent themselves. After the run, write the new snapshot so the next day can diff (include demurrage, days, and fastest/cheapest on every row).

If there is at least one exception, also send a short note in this chat with the same table and abbreviations key. If every BL is unchanged and clear, send the email only and stay quiet in chat.

Saturday stays on. If a Saturday run is all No change, note it. After a few all-No-change Saturdays, tell the ops review owner so Saturday can be dropped.

If you have container, clearance, or demurrage cost figures, pass them to the cash-flow owner as inputs (clearing costs), not as a forecast. Do not forecast cash yourself.

If Gmail auth fails, pause this routine after a repeated auth failure and tell the user in chat. If a tracking site is down, still email the table and mark that row Status as No refresh — except skip that for a deprioritized carrier site while those boxes are Delivered.

Fill-ins the importer should set: registry path, digest recipients, POD/timezone, route-review Fastest/Cheapest picks, cash-flow owner, ops review owner.

Fires on:
- cron `0 8 * * 1-6`

Ask the importing user for:
- Timezone

${@:-}
