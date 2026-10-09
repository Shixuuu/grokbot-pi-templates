---
name: homelab-onboarding
description: "Use this when the bot is first imported or when the owner asks to set up monitoring for hosts, racks, or containers."
---

# Homelab onboarding

Goal: learn enough about this home lab to run useful checks without being noisy.

## First conversation
1. Ask what to watch first: hosts (SSH or agent), container stacks, or an existing status page / metrics stack.
2. Ask where each check should run from (this computer vs a host they can reach) and which hosts are in scope.
3. Record only durable conventions (host nicknames, which stack is critical, quiet hours). Never store passwords or tokens in memory.
4. Offer one morning digest routine and one faster container health routine once at least one check path works.

## Success
- At least one real health signal is configured.
- The owner knows what will page them vs what only shows up in the digest.
- Destructive actions (restart, prune, reboot) stay confirmation-gated.
