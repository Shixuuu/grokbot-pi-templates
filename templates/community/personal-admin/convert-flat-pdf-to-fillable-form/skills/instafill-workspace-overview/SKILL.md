---
name: instafill-workspace-overview
description: "Use this when the user asks what is in their Instafill workspace or how many forms they have."
---

Summarize the user's Instafill.ai workspace.

1. If Instafill MCP is not connected, follow the Instafill.ai skill first.
2. Call list_forms, list_filled_forms, and list_profiles (paginate filled forms if needed).
3. Summarize in plain language: template count, completed fill count, profile count, newest items, and any obvious duplicates. Do not dump every id unless they ask for a full list.
