---
name: fleet-post-sprint-hygiene
description: "Use after Hermes/Grok sprints before DONE or marketplace Share→Update — clean orphan browsers, stuck CLI harnesses, leftover SSH ask paths; HTTP :8642 only; long jobs via /v1/runs when MCP ~120s times out."
---

# Fleet post-sprint hygiene

Fleet talk path = HTTP :8642 only. SSH ask forbidden for fleet Hermes. Long jobs: host-local POST /v1/runs when connector ask dies ~120s (-32001). HERDR orchestrates; troubleshooting digs go to a dedicated Hermes frontier session.
