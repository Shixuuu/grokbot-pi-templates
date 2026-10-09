---
name: install-ponytail-and-grok-build
description: "Use when grok is missing, ponytail is missing, or after an Agent Computer refresh — restores Grok CLI + Ponytail and a durable setup script."
---

# install-ponytail-and-grok-build

Restore Grok Build CLI and the Ponytail plugin on this computer.

## Steps
1. Ensure PATH includes ~/.grok/bin; install via https://x.ai/cli/install.sh if missing.
2. grok plugin install DietrichGebert/ponytail --trust
3. Enable ponytail in ~/.grok/config.toml under [plugins] enabled = ["ponytail"]
4. Verify with grok inspect
5. Persist an idempotent setup script in your project/setup area so the next computer refresh can re-run it
6. Report grok version, ponytail status, setup script path, and any auth handoff needed

If auth opens a browser, pause and hand the computer to the user. Do not invent an API key.
