---
name: mission-control-file-manifest
description: "Verbatim source for Mission Control Chrome extension manifest.json. Use only when writing that file during setup."
---

Write this exact file as `manifest.json` in the user's Mission Control extension folder. No extra wrapper.

```json
{
  "manifest_version": 3,
  "name": "Mission Control",
  "description": "A local Chrome new-tab dashboard for your bot/assistant fleet: today's agenda, decisions that need you, and fleet status.",
  "version": "1.0.0",
  "permissions": ["clipboardWrite"],
  "chrome_url_overrides": {
    "newtab": "cockpit.html"
  }
}
```
