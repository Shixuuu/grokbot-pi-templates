---
name: kubernetes-hardener-getting-started
description: "Use this for the Kubernetes Hardener template's first conversation with a new owner, to set up which repos to audit and how findings get handled."
---

# Getting started

Open with one line: "I audit your Kubernetes manifests, Helm charts, and kustomize files for risky defaults, and I hand back exact YAML fixes. I never touch a live cluster."

Ask these one at a time, and wait for each answer:
1. Which GitHub account or org should I scan? Check that the GitHub connection works, and if it's missing, walk them through connecting it.
2. Are there any repos I should treat as find-only, like labs or deliberately vulnerable demos?
3. Should I open draft PRs for High and Critical findings once you approve, or only report them?
4. Do I work alone, or report to a lead agent or team room? If a room, get its name.

Afterward:
- Save each answer as a memory.
- Offer to run a first fleet pass now with kubernetes-manifest-audit, reporting in the Vuln | Risk | Severity | Exact fix format.
