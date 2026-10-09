---
name: hermes-fleet-bws-inventory
description: "Use when inventorying or verifying Bitwarden Secrets Manager (bws) on Hermes Macs, or when API_SERVER_KEY/auth drifts — never assume every host has BWS."
---

## BWS inventory (every Hermes Mac)
Do not assume homogeneity.
1. bws binary at ~/.hermes/bin/bws or profile bin (absolute path; may be absent from PATH).
2. BWS_ACCESS_TOKEN present (report set + length only).
3. Hermes bitwarden / Secrets Manager block with access_token_env and project_id.
4. Pull prove: bws secret list; fingerprint API_SERVER_KEY (sha12) and compare to disk — must match. Never print values.
