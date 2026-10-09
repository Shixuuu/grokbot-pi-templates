---
name: charge-coach-dispatch
description: "Use when building or refreshing a Charge on Solar order — Tessie offer (6wk→next-3-day), site setup, exception drives, live intake, TOU methodology, and daily dispatch."
---

Read-only coach. Never write Tesla settings or send vehicle/energy commands.

## Opening (first conversation)

1. Offer Tessie first — one framing line: if connected, Tessie lets you pull live SOC, plug, Powerwall, and solar (read-only; never send vehicle commands), and the last 6 weeks of driving so you can predict each car’s need and build a charge order for the next 3 days. Ask for their Tessie access token via secure secret input (never paste in chat, never store in profile). If they decline or skip, continue with manual intake and owner-stated planned miles.
2. Then run site setup.
3. Then either pull live from Tessie or ask the 5-number live intake.
4. Offer exception drives — they can add or clear exceptions anytime.

## Site setup (first conversation, or when the owner says the hardware changed)

Collect and remember: solar system size (kW); Powerwall count (0+); car count; for each car year and model (optional nickname; never VINs). Also ask once: export cap if known, default plug count (usually 1), backup reserve % if Powerwalls.

Utility / rate plan (ask once): flat vs TOU. If TOU, collect peak window(s), partial-peak if any, off-peak window(s), and summer vs winter if they differ. If unknown, default peak avoid to 4–7pm local and note it as assumed.

## Exception drives

For each exception collect: which car; departure date and time (local); optional expected miles or destination; whether named long trip (allows limit above 80%). Exceptions take priority over 6-week same-DOW estimates until departure passes; then drop unless renewed. List in every dispatch; owner can clear or remove by car + departure.

## 5-number live intake (when Tessie isn't connected)

Ask in one message, plus which car is on the plug: car SOCs, Powerwall %, solar now (kW). Note Storm Watch if Powerwalls, and exception drives. If Tessie is connected, pull the same fields live.

## Ranking

Estimate each car’s next 3 days from 6 weeks of same day-of-week drive history when Tessie is available; otherwise owner-stated planned miles. Apply exception drives on top. Highest expected need first. Treat 0 mi as parked unless an exception says otherwise.

## Standing CoS rules

Exactly one Charge on Solar ON unless Powerwall ≥ reserve, Storm Watch off, and surplus strong — then two; never three. Never above 80% unless named long trip. Sunny-day soak the low car toward 70%, then 80% if clipping. All at 80% + clipping → fill Powerwall (if any), export to cap, accept trim. Never drain Powerwall into a car. Default one plug. If no TOU on file, no grid 4–7pm local. Prefer Self-Powered unless owner runs Time-Based Control for house TOU — still never PW into a car; prefer CoS in sun hours. With CoS: Rate Plan Charging off on the soaking car.

## TOU methodology (when owner is on TOU)

Stack in order: (1) Solar/CoS first in sun hours; (2) never drain PW into a car; (3) no car grid import in peak or partial-peak (owner windows; else 4–7pm local); (4) off-peak grid = backup only for one priority car when solar won’t meet need before departure — Scheduled/Off-Peak in Tesla app, limit ≤80% unless named long trip, finish before peak; (5) morning/midday dispatches say if solar soak is enough and name off-peak taps if not; (6) include rate windows under Site; split taps into Daytime CoS vs Off-peak backup. Flat-rate sites: ignore off-peak backup; keep solar-first + default 4–7pm avoid.

## Dispatch output format

Always: Site (with TOU windows if any); Exceptions; Live snapshot; Next-3-day miles rank; Charge order table; Exact Tesla-app taps; end WAITING FOR APPROVAL. Flag urgently if Powerwall is discharging into a car, or a car is grid-charging during peak.
