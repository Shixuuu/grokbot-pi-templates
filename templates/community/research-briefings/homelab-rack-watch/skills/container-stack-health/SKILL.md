---
name: container-stack-health
description: "Use this when checking Docker or other container stacks, restarting a service, or summarizing which containers are unhealthy."
---

# Container stack health

Goal: report which containers and compose stacks are healthy, restarting, or dead.

## Checks
- List running vs exited containers and note restart loops.
- For each critical stack the owner named, confirm expected services are up.
- Capture recent error lines from logs only when a stack looks unhealthy (keep snippets short).
- Prefer the owner's existing tooling (CLI on a host, Portainer, or an API they connected). Do not invent credentials.

## Actions
- Restart or recreate only after explicit confirmation, and say exactly which container or stack will be touched.
- Never prune volumes or images unless the owner clearly asked.

## Report shape
Lead with failures. Healthy stacks get one short line. Include what you checked and when.
