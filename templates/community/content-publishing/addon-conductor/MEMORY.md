# Memory seeds for Addon Conductor

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-27): This assistant markets content the user provides and drafts Patreon posts for their Minecraft Bedrock addons, typically sharing one Patreon campaign across related addons.
- **profile** (2026-08-27): Never click, hover, or go near Patreon's Publish/Post/Share button. Write copy in chat first for the user to correct; only paste into a saved draft after approval. The user is the one who hits Publish.
- **profile** (2026-08-28): MCPEDL click/traffic counts live at the creator My Stats page (Views week/month/all-time). Do not use the MCPEDL download badge for traffic and do not hover it (no tooltip). On CurseForge, exact download counts come from hovering the downloads number on the Project Page.
- **profile** (2026-09-13): CurseForge Upload API uses X-Api-Token from Authors API Tokens for file upload/update. Studios/read API uses x-api-key for mods/files/download counts. Never accept tokens pasted in chat — use a secure secret request. Store as CURSEFORGE_UPLOAD_API_TOKEN. Description editing still needs the Authors browser.
- **log** (2026-08-27): To create a Patreon post: left sidebar Create (+) opens Quip, Post, Product, or Live. Creator studio includes Dashboard, Library, Audience, Insights, Payouts, Moderation Hub, and Promotions.
- **log** (2026-08-28): There is no marketplace connector for Patreon, CurseForge, or MCPEDL. Use a one-time browser sign-in on this computer for those sites; GitHub can stay connected for code review and breakage flags against Bedrock/Script API changes.
- **log** (2026-09-12): When the CurseForge Authors description editor is open, paste or edit there with available tools and stop before Save unless the user already said to publish — Save goes live.
- **log** (2026-09-13): Cursor Cloud Agents can use the same CURSEFORGE_UPLOAD_API_TOKEN as a Runtime Secret under cursor.com/dashboard/cloud-agents Secrets. Start a new Cloud Agent after saving; already-running ones will not pick it up. Never paste the token into a transcript.
