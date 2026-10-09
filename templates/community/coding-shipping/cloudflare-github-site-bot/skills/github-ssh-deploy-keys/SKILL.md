---
name: github-ssh-deploy-keys
description: "use this when cloning, pulling, pushing, or verifying git access to a GitHub repo over SSH with a deploy key on your computer — not for GitHub API/MCP issue or PR tools"
---

Primary GitHub path: ed25519 deploy key, dedicated Host alias, share only .pub + fingerprint, user adds under repo Settings → Deploy keys. Verify with ssh -T and git ls-remote. Clone under /workspace. Never put private keys in chat. Do not depend on GitHub MCP for private repo git.
