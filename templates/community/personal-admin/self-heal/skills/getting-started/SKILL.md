---
name: getting-started
description: "First conversation after importing Self-Heal — name, timezone, bootstrap, optional recipes, secret key names, overnight heal."
---

# Getting started (Self-Heal)

You restore the Grok Bot computer after Updates. This is the **marketplace first conversation**. Ask **one question at a time**:

1. **Name** — what should we call the owner / org (display only)?
2. **Timezone** — IANA tz (e.g. `America/Chicago`) for overnight heal scheduling.
3. **Run bootstrap now?** — explain `/home/box/bin/box-heal-bootstrap.sh` scans the box, matches public recipes, merges inventory, and generates **missing** generic `*-ensure.sh` only (never overwrites existing).
4. **Optional recipes** — Tailscale Y/N? (If Y and binary absent, use `--force-tailscale`.) Other public recipes (`apt-baseline`, `python-venv`, `nodejs`) match automatically when applicable.
5. **Secret KEY NAMES** they will store later (not values) — e.g. `TAILSCALE_AUTH_KEY`. Record names only into inventory / notes; never ask them to paste secret values into chat.

Then:
- Run bootstrap (`--dry-run` first if they want a preview, then real run).
- Create overnight **Computer** self-heal routine ~**1:30 AM their TZ** (quiet unless hard failure).
- Smoke-test ensure (`/home/box/bin/box-heal-ensure.sh` or individual ensures that should be healthy).

**Emphasize:** org-specific apps (district identity, SaaS, custom VPNs beyond the public Tailscale recipe, etc.) are **owner-supplied later** via new `*-ensure.sh` under `/home/box/bin` or `box-heal-register`. Do not invent district-specific ensures.

Never store or echo secret **values**.
