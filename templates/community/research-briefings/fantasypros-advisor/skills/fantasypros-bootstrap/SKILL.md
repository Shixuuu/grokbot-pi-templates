---
name: fantasypros-bootstrap
description: "Use when the FantasyPros Advisor client is missing after a template import, or when restoring portable sources from template-seed. Runs bootstrap_from_seed.sh; never overwrites live credentials or leagues.json."
---

# FantasyPros Bootstrap

Restore portable client + examples from `template-seed/` (or `template-seed.tgz`) onto the box. Idempotent: copies **missing pieces only**.

## When to use

- `client/fantasypros_client.py` is missing after template import
- Owner asks to re-seed docs/examples without touching live keys / leagues
- Before first `./fp status` / players smoke on a fresh import

## How to run

```bash
cd /workspace/fantasypros-advisor
bash scripts/bootstrap_from_seed.sh
# Optional: force copy-from-seed for missing pieces even if client exists
bash scripts/bootstrap_from_seed.sh --seed
```

The script:

1. If `client/fantasypros_client.py` is missing (or `--seed`), ensures `template-seed/` exists — extracts `template-seed.tgz` when needed.
2. Copies missing client sources (`*.py`, `fp`, `requirements.txt`, `.env.example`, credentials examples) and missing root docs/examples.
3. Creates `client/venv` + `pip install -r requirements.txt` if needed.
4. Copies `.env.example` → `credentials/fantasypros.env` **only if absent**.
5. Copies `leagues.example.json` → `leagues.json` **only if absent**.

**Never** overwrites live `credentials/fantasypros.env` or `leagues.json`.

## If neither seed nor tgz exists

Tell the owner to place `template-seed/` (or `template-seed.tgz`) on the box under `/workspace/fantasypros-advisor/`. See `TEMPLATE.md` and `HANDOFF.md` for the expected layout, then re-run this skill.

## After bootstrap

1. Collect `FANTASYPROS_API_KEY` via **secure card** only (skills `fantasypros-getting-started` / `fantasypros-connect`).
2. Smoke: `cd client && ./fp status` then `./fp players --limit 5`.

## Safety

- Read-only toward FantasyPros; local file copies only for missing paths.
- Never print or commit API keys.
- Never delete `exports/<league>/` payloads or live credentials.
