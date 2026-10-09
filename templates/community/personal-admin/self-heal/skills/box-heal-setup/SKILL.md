---
name: box-heal-setup
description: "Materialize or repair the Self-Heal stack on a Grok Bot computer."
---

# Box heal setup
Materialize post-Update heal stack. Never print secret values. Never run box-heal-ensure.sh as its own child.

## Steps
1. mkdir -p /home/box/box-heal/modules /home/box/box-heal/state /home/box/box-heal/recipes/templates /home/box/bin
2. From skills box-heal-recipes and box-heal-recipe-templates, write every fenced file to the path in its heading.
3. Implement (or repair) these executables under /home/box/bin if missing:
   - box-heal-discover.py — load inventory.yaml; scan /home/box/bin/*-ensure.sh (exclude box-heal-ensure.sh); merge modules/*.yaml; persist new entries; write JSON plan + state/last-discover.json (counts only, no secrets).
   - box-heal-ensure.sh — run discover; install missing apt_packages; run ensure_scripts in order; run probes; log /tmp/box-heal-ensure.log; quiet OK / OK_WITH_WARNINGS; non-zero on HARD_FAIL; never print secrets.
   - box-heal-register — apt|secret|ensure|module; secret KEY NAMES only; reject values that look like secrets.
   - box-heal-bootstrap.py + box-heal-bootstrap.sh — scan binaries/apt/venvs; match /home/box/box-heal/recipes/*.yaml; merge inventory (never wipe existing ensure_scripts); generate missing *-ensure.sh from templates only; support --dry-run and --force-tailscale; write state/last-bootstrap.json.
4. Write inventory.yaml if missing from inventory.template.yaml (version 1, owner timezone, apt baseline, empty ensure_scripts/probes/required_secret_keys).
5. Run: box-heal-bootstrap.sh --dry-run then box-heal-bootstrap.sh (add --force-tailscale if owner opted in).
6. Smoke-test box-heal-ensure.sh
7. Overnight Computer self-heal ~1:30 AM owner TZ; quiet unless HARD_FAIL.

Org-specific apps: owner adds *-ensure.sh or box-heal-register later. Do not invent district-specific ensures.
