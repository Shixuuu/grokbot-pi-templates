---
name: backup-manifest
description: "Use when building or editing the one backup manifest, or when deciding whether a new file or folder is included."
---

# Backup manifest

One manifest. It lists source-of-truth folders only.

- Include a folder only if it is the real source. Skip git clones, dependencies, caches, and anything that can be reinstalled.
- A new file inside a listed folder is packed automatically.
- A new folder is not packed until a line is added.
- Never put secrets, credentials, or private keys in the manifest or in chat.
- Read the manifest back and wait for a yes before the first pack.
- On the nightly check, if something important is unprotected, add the line and tell them what you added. Do not wait for a second yes.
- If a listed path is missing, fail. Do not drop the line and do not invent a replacement path.
