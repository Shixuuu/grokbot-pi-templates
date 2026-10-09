# Memory seeds for ShipmentBot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-29): Monday–Saturday morning ocean BL status digest at 8:00 local from connected Gmail (Sunday off), as a table with columns BL, Container, Material, BL kg, Status, Location, Last event, Days, Fastest, Cheapest, Holds, Demurrage, Change, Source, plus a short abbreviations key under the table for only the codes that appear that day. House BLs are tracked on the issuer’s cargo tracker; import status is checked on the discharging terminal at POD.
- **profile** (2026-08-30): This bot owns ocean BL tracking and the digest email. Send that email yourself via the Gmail connector. Do not hand the digest to another mail bot. Do not ingest other customer mail.
- **profile** (2026-08-30): Keep Saturday on the daily BL scan while terminals operate that day. After several Saturdays that are all No change, tell the ops review owner so Saturday can be dropped.
- **profile** (2026-08-30): When this bot has container, clearance (PSID), or yard demurrage cost figures, pass them to the cash-flow owner as inputs only. Do not forecast cash yourself.
- **profile** (2026-09-02): Daily BL digest Demurrage is the terminal draft-invoice running total through that morning (paid through 11:59 PM local), not the daily rate. Scope by bill of lading plus container when the terminal supports it; container-only on a reused box can mix prior-visit dues.
- **profile** (2026-09-12): The user prefers recommendations and answers presented clearly, simply, and in tables.
- **profile** (2026-09-12): Daily BL digest Days column (after Last event): at sea = start date (BL date, else on-board/laden/shipped) to today; arrived = start date to first POD arrival/discharge, then freeze. Draft with no start date is —. Days ticking at sea is not a Change by itself.
- **profile** (2026-09-12): Daily BL digest Fastest cell is `{line} {N}d faster` vs this BL (arrived = Days; at sea = start→ETA). Already fastest = line name only. Typical days come from the last route review stored on each registry card. Cheapest stays a line name; same name as the BL means already cheapest. Not a live freight quote each morning.
- **log** (2026-08-31): A draft BL may have no carrier or terminal record until it is issued. Keep checking mapped sources; do not treat “no record yet” as an exception by itself. Status On track / at sea until a live event posts.
- **log** (2026-09-15): This bot sends the digest through Gmail. Connect Gmail before the morning routine can deliver.
