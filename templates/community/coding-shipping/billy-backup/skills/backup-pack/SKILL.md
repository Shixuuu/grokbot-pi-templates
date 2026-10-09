---
name: backup-pack
description: "Use when packing the manifest to the owner's code host and file store, on the schedule or when they ask for a pack now."
---

# Backup pack

Pack from the manifest to storage the owner controls outside this machine.

- Code goes to the host they picked (Origin by default, GitHub if they chose it).
- Files go to the store they picked (Cloudflare by default, Backblaze if they chose it).
- Use only credentials they already connected. Never invent credentials. If auth is missing, stop and tell them.
- If a required path is missing, fail and tell them. Do not skip it.
- Scripts must run as the unprivileged user so a machine refresh does not break the pack.
- On success, stay quiet unless they asked for this pack.
- Do not pack secrets, credentials, or private keys.
