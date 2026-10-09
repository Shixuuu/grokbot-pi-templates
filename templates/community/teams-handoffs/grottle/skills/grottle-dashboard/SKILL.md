---
name: grottle-dashboard
description: "grottle-dashboard"
---

# Grottle™ dashboard — v0.14.1
Use when Grottle™ shows the dashboard (dual or single-lane Sand/SG) or the user asks about skins; install and paint go through grottle-gauge.
Every skin shows the same readouts: per lane the header (`SAND • GROK™ BOT` / `SUPERGROK™`), Status % in the pace colour + status dot + reset line, WEEK LEFT (% and ≈time), Today dial (pie = today left, hand = time to the next daily reset, caption `burned ~Xm of today`), LOOK-AHEAD `≈HhMm/day` + ▲/▼ glyph + pace bar; Sand BRIDGE (reserve ≈time + $ + tank, or "not set"); SG "BRIDGE monthly reserve — INACTIVE"; footer; the Grottle™ sign. The xAI changes panel sits in the top-right corner only when there is a recent change (speed badge and/or mid-week reset note), fading over 7–14 days.
Skins: **Skin2 Neon** is built in and is the default (neon Grottle™ sign, orange Sand / cyan SuperGrok™ panels, segment digits). Every other skin is chosen on grottle.app (e.g. Skin3 Retro Luxury by BCORN) and installed only through `run skin install NAME_OR_SHARE_ID` (verified; see grottle-gauge). Any failure keeps Skin2. `run skin list` lists them.
**Limit:** up to 5 downloaded skins plus Skin2 Neon (never removable; `run skin use skin2` always works). A 6th install prints `SKIN LIMIT`: ask which to remove (`run skin remove dl:NAME`); never delete on your own.
**Upgrades:** saved data lists the installed skins and the active one; `run import` re-downloads and re-verifies each from grottle.app. Name any skin that didn't make it; the dash then stays on Skin2 Neon.
**Skins offer (once, not pushy):** after the first neon dash: PNG alone (wait for its send result), then its text version (the `CHAT` lines), then the one `CHAT OFFER:` question (keep this skin, or check grottle.app?) LAST in a separate call, as printed. Never in parallel. No PNG delivered = no skins offer (ask it once after the next PNG that sends). Never repeat it. **Any time** the user wants to change skins: `run skin browse` → give the link → they pick → `run skin install NAME_OR_SHARE_ID`.
Goldens are per skin: the visual lock and `--compare` always use the active skin's goldens, and switching skins switches goldens. Skin2 goldens are locked by the owner; site skins carry their own owner-approved goldens, verified at install.
Who Ate My Sand? panel: directly under the Sand section and starts ON; `run settings wams off` hides it. In the `OUT` PNG, never inside the golden dash; disclaimer footer sits under the whole stack. Rows come only from bot logs; Grottle™ never messages bots to fill them. A % shown as a dash: only one Sand reading, so the week can't split yet; minutes still show; a 2nd reading fills it (not <1%).
User says `dash` / `dash both|sand|sg` → `run dash [both|sand|sg]` (paint + internal compare).
