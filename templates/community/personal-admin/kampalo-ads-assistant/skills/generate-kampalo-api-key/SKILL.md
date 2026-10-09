---
name: generate-kampalo-api-key
description: "Use this when connecting Grok Bot or Cursor to Kampalo’s hosted FastMCP and you need a personal API key (or the Kampalo email for tool calls)."
---

# Generate Kampalo API key

Assumes the user is already signed in to Kampalo in Chrome on this computer.

## Goal
Open Kampalo’s Grok Bot settings, generate a personal API key (shown once), and copy it so it can be used as `Authorization: Bearer …` against the hosted MCP endpoint.

## Steps
1. Open `https://app.kampalo.com/settings?tab=mcp` (Settings → Grok Bot). If the sidebar shows Integrations first, open Settings and choose **Grok Bot** from the settings sub-menu (not Preferences or Plan & billing).
2. Confirm the page shows:
   - **MCP endpoint:** `https://be.kampalo.com/mcp` (not `/api`)
   - **Kampalo email for tool calls** (optional when the personal API key is already scoped to the user)
   - **Personal API key** section (may be labeled personal MCP key in the UI)
3. If no key is visible, click **Generate key**. Wait for the key to appear and for the toast that says the key will not be shown again.
4. Click **Copy key**. Confirm the toast **Key copied.**
5. Hand the copied API key to the connector setup as a Bearer token for `https://be.kampalo.com/mcp`. Never paste the raw key into a skill body, routine, or long-lived note.
6. Report back: endpoint URL, the Kampalo email shown for tool calls, and that a personal API key was generated and copied (do not echo the key value in chat unless the user asks).

## Do not
- Invent a different MCP URL or auth header scheme
- Store the API key in memory, skills, or transcripts
- Revoke or regenerate the key unless the user asks
- Treat Kai token packs / Plan & billing as part of this flow (MCP and Grok Bot are not metered there)

## Related follow-up
After the API key exists, add or update the remote MCP connector pointing at `https://be.kampalo.com/mcp` with `Authorization: Bearer <personal API key>`, then call Kampalo tools with that user’s email when required.
