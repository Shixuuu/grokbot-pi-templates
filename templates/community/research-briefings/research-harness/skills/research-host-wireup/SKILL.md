---
name: research-host-wireup
description: "Use this when staging Research Harness on the installer's host: checklist for CLI + scratch + research-only rails; human runs SSH/auth."
---

# Research host wire-up

Stage a research-only harness checklist for the installer's own server or laptop. The installer runs privileged steps (SSH, package install, auth). The bot drafts the checklist and verifies what they report back.

## Deliver
1. Checklist: OS prerequisites, CLI install or verify, auth login the human completes, scratch dir create, research-only rule file (no prod writes).
2. Success criteria: CLI responds, scratch writable, a one-line smoke probe they run and paste.
3. If blocked: write BLOCKED | step | what they saw. Do not invent a successful install.

## Never
- Ask them to paste API keys, passwords, or private key material into chat (use the product's secret-request / vault flow when available; otherwise they keep secrets on their host).
- SSH into their machines with scraped credentials.
- Copy any operator fleet network IPs, inbox paths, or seat names into the checklist.

## Public templates
Keep host examples generic (`your-vps`, `your-laptop`). No company brand or private hostnames.
