---
name: box-fill
description: "Use this when an electrician needs a box-volume worksheet with entering conductors, hardware and adopted-edition allowances checked individually."
---

# Box Fill

**Review status:** `[needs-code-review]`. Correcting the defect below is not approval of every arrangement, edition or installation.

## Execution gate and inputs
Apply the Calculation execution gate in the embedded Bot instructions profile memory. Confirm 2023 dwelling scope and final adopted-source applicability; otherwise provide an input worksheet. Obtain marked usable box/ring/cover volume, conductor sizes and whether each enters/leaves or stays wholly inside, loops, devices/yokes/gangs, internal clamps, support fittings, terminal blocks, EGCs and bonding-jumper arrangements. Unknown or unreadable fields stay **TBD**.

## Count by category
- Inspect adopted rules for entering/spliced/pass-through/loop conductors. Do not count by cable label alone.
- Check clamps, support fittings, devices/yokes/gangs and terminal blocks separately, with the conductor size each rule names.
- For mixed sizes, multiply each category by its own checked volume basis and sum; never multiply everything by one convenient size.
- Obtain only the needed final adopted-edition table value and cite its row. Do not reproduce the volume table.

## Grounding-conductor correction `[needs-code-review]`
For **2023 entering equipment grounding conductors (EGCs) or equipment bonding jumpers**, the final-codebook check supports one allowance for 1–4 qualifying entering conductors/jumpers together, then one-quarter for each additional one. Use the largest entering EGC or equipment bonding jumper's checked volume basis. Five qualifying entries yield **1.25 allowances**; six yield **1.5**; eight yield **2.0**.

This is not an extra-isolated-ground-set rule. Do not transfer this template's supported 2023 dwelling scope to 2017/2020/2026, or assume unusual arrangements and exceptions are covered. Check the exact applicability for the actual job. Wholly internal jumpers are not entering entries; record entry/exit distinctly. For mixed sizes, use the largest qualifying entering EGC or equipment bonding jumper for this grouped allowance, while other categories retain their own required size basis. If scope or source is uncertain, leave the affected term **TBD** and calculate only other confirmed categories.

**AI book-checked provenance, not Jason approval:** On 2026-09-28, Claude inspected the final **NFPA 70 (2023), 314.16(B)(5)** in the [official NFPA Free Access 2023 reader](https://link.nfpa.org/free-access/publications/70/2023), reader pages **198–199**, printed pages **70-195 / 70-196**. The recorded paraphrase confirms the four-plus-quarter rule and largest-conductor basis above, referring to Table 314.16(B)(1); no table is reproduced here. The separate terminal-block item at 314.16(B)(6) was noted on reader page 199, printed 70-196, and still needs its own applicability/value check for a job.

Claude also recorded the same count rule in **NFPA 70 (2020), 314.16(B)(5)** in the [official NFPA Free Access 2020 reader](https://link.nfpa.org/free-access/publications/70/2020), reader page **187**, printed page **70-183**. This comparative source observation does not expand Job Desk's supported 2023 dwelling scope. These are AI observations, not Jason's personal review or an AHJ approval; local adoption/amendments, actual conductor inventory, applicable exceptions and table values remain job-specific checks. All review tags remain.

## Arithmetic examples `[needs-code-review]`
Assume all categories and a 2.25 in³ volume basis have been explicitly supplied for arithmetic:
- Four insulated conductors + two entering EGCs (1 allowance) + one eligible clamp allowance + one standard yoke (2 allowances) = 8 allowances; **8 × 2.25 = 18.0 in³**.
- Six 12/2 cables with six ordinary entering EGCs, one eligible clamp allowance, no devices/other hardware: **(12 + 1.5 + 1) × 2.25 = 32.625 in³**. Relative to a confirmed 32.0 in³ volume, the arithmetic deficit is **0.625 in³**.
These are arithmetic demonstrations until final edition, category applicability, usable volume and complete inventory are source-checked. Never call the installation approved from an example.

## Output
```
BOX VOLUME WORKSHEET · <job label> · <edition/status>
Source register: <category rule, volume basis, actual evidence/status>
Each category: <allowances> × <checked in³ or TBD> = <in³ or TBD>
Sum: <in³ or incomplete> · Usable marked volume: <confirmed in³ or TBD>
Numerical margin: <only for complete, applicable, verified inputs>
Unresolved fittings, exceptions, scope and installation checks: <list>
Planning aid, not stamped engineering. Verify adopted NEC, amendments and AHJ.
```
