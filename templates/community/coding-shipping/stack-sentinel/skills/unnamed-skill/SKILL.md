---
name: unnamed-skill
description: "use this when checking AI/dev stack service health from official status endpoints (OpenAI, Anthropic, Google AI, xAI, GitHub, Cloudflare, Vercel) or when implementing status-change-only alerts"
---

# Service health watch (official status + script-first)

Fetch official AI/dev stack status and notify **only when it differs from the last snapshot**. Do not use Downdetector.

To save tokens, do not LLM-fetch URLs every run — use a **local Python script** for fetch and diff.

## Boundaries

1. **Fetch** — script HTTP GETs each official endpoint
2. **Judge** — normalize to `ok` / `degraded` / `outage` / `unknown`, compare to snapshot (confirm a change only after the same new state twice in a row)
3. **Notify** — post only lines the script prints on stdout; empty stdout means silence

## Run (required)

```bash
python3 <agent-home>/bin/check_status.py
# or the skill-bundled scripts/check_status.py
# optional: STACK_SENTINEL_SNAPSHOT=/path/to/status-snapshot.json
```

- exit `0` and empty stdout → do nothing (no filler)
- exit `0` with stdout → post that text once to the watch channel
- exit `1` → snapshot I/O failure; report once, briefly

## Initial watch list

| Service | Endpoint | Format |
| --- | --- | --- |
| OpenAI | `https://status.openai.com/api/v2/status.json` | Statuspage |
| Anthropic (Claude) | `https://status.claude.com/api/v2/status.json` | Statuspage |
| GitHub | `https://www.githubstatus.com/api/v2/status.json` | Statuspage |
| Cloudflare | `https://www.cloudflarestatus.com/api/v2/status.json` | Statuspage |
| Vercel | `https://www.vercel-status.com/api/v2/status.json` | Statuspage |
| Google AI | `https://status.cloud.google.com/incidents.json` | open Gemini/Vertex/Generative AI only |
| xAI | `https://status.x.ai/feed.xml` | RSS |

Statuspage map: `none`→`ok`, `minor`→`degraded`, `major`/`critical`→`outage`.

## Out of scope

- Downdetector as primary source
- Full AWS coverage
- Auto-tickets / auto-remediation
- "Still alive" reports when nothing changed

## Example output

`Cloudflare: ok → degraded — Partial System Outage`
