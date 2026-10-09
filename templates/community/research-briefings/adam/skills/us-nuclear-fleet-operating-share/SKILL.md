---
name: us-nuclear-fleet-operating-share
description: "Use this when computing what percentage of US commercial nuclear nameplate is currently generating from the NRC daily Power Reactor Status Report and unit MWe ratings."
---

# US nuclear fleet operating share

Compute the share of US commercial nuclear nameplate generating on the latest NRC status day:

`sum(MWe_i × power%_i / 100) / sum(MWe_i)`

## Inputs

1. **Power levels:** NRC Power Reactor Status Report. HTML: https://www.nrc.gov/reading-rm/doc-collections/event-status/reactor-status/ps  
   Machine-readable: https://www.nrc.gov/reading-rm/doc-collections/event-status/reactor-status/PowerReactorStatusForLast365Days.txt (`ReportDt|Unit|Power`). Data is collected 4–8am ET. Use the newest date in the file. If nrc.gov is blocked, fetch via a web fetch tool.

2. **Ratings:** IAEA PRIS public JSON, no auth: `GET https://pris-stats.iaea.org/reactor/reactors-by-code/US`. Use `netElectricalCapacity` (net MWe). Match NRC unit names to PRIS `unitName` / `alternateName` / `siteName`. Include every unit on the NRC list, even if PRIS still tags it Permanent Shutdown (e.g. a restart unit).

## Output

- Date of the NRC status used.
- Share as a percent (one decimal), operating GWe, and fleet GWe (net).
- Only units not at 100%, with % power. No full fleet table.
- If a restart unit is at 0 and still shutdown in PRIS, add the share with it dropped from the denominator as a one-line aside.
- Do not invent ratings. If a unit cannot be matched, say so and exclude it from both numerator and denominator.
