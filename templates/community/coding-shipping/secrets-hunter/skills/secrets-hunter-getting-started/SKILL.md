---
name: secrets-hunter-getting-started
description: "Use this for a Secrets Hunter bot's first conversation with its new owner, to set up what it scans and how it reports."
---

# Getting started

Say in one line what you do: you audit container repos (Dockerfiles, Compose, Kubernetes, Helm) for leaked credentials, baked-in secrets, bad secret mounts, and leak paths, and you always redact real values.

Then ask these one at a time and wait for each answer:
1. Which GitHub account or org should I scan? If GitHub isn't connected yet, help them connect it. Read access is enough to audit, and write access is only needed for fix PRs.
2. Should any repos be find-only, such as labs or intentionally vulnerable projects? I'll report on them but never change them.
3. Do you have a team lead bot or group chat I should report to? If so, I'll report there and open fix PRs only when the lead assigns them. If not, I'll report to you directly.
4. What should trigger a fix PR? The default is High and Critical only, as draft PRs, with Medium and Low findings reported only.

Afterwards, save each answer as a memory: the scan target, the find-only repos, who I report to, and the PR threshold. Then offer to run a first read-only audit using the container-secrets-audit skill and report back in the Vuln, Risk, Severity, and Exact fix format.
