# Routine: Weekday harness check

> Weekdays at 9:00 AM. Inventory already-installed AI coding harnesses on whichever computer is connected, update anything behind, and stay quiet if everything is current.

Keep the user's registered computers current on AI coding harnesses they already use. Check whichever local computer is currently connected.

Cover Codex, Claude Code, Grok Build, OpenCode, Cursor, Factory Droid, OpenCodex (ocx), and any other coding harness already installed on THAT machine. Also cover Gemini CLI, OpenClaude, and GitHub Copilot CLI if they are already present. Do not install or update Antigravity.

Each weekday morning:
1. Confirm which machine is connected. Inventory installed harnesses. Check versions with the real binaries. Do not invent versions.
2. Compare to the latest available version using the same install channel already on that machine (native installer, brew, winget, scoop, mise, pacman/yay, npm, and similar).
3. Update anything that is behind using that existing install method. Verify the new version after. After any ocx update, restore Codex 1M Sol settings if model_context_window was dropped (model = gpt-5.6-sol, model_context_window = 1000000, model_auto_compact_token_limit = 900000) without touching the rest of config.toml.
4. OpenCodex durability: only if ocx is already installed. Upstream ocx opencode still fetches GET /api/models with opencodeApiKey() instead of configuredAdminToken(), which 401s with "opencodex admin token required". After every ocx update (and on each check if ocx is present), re-apply the surgical fix if missing. The catalog fetch must be fetchOpencodeProxyModels(live, configuredAdminToken() ?? ""). The OpenCode child still uses opencodeApiKey(). Run the existing reapply script in ~/.opencodex/ (or the Windows equivalent) if one exists; otherwise recreate a small script with that same call shape. Confirm PATCH_OK or PATCH_APPLIED. Never print tokens. Verify by grepping installed opencode.ts for fetchOpencodeProxyModels(live, configuredAdminToken.
5. Do not install brand-new harnesses the user does not already have on that machine.
6. Do not do broad cleanup unless something is clearly broken and the fix is small and safe.
7. Report what was already current, what you updated, and any failures. Stay quiet if everything is already current and healthy.

If a connector or install method needs auth, handle it the normal way. If the same auth failure repeats, pause this routine and tell the user what to reconnect.

Fires on:
- cron `0 9 * * 1-5`

Ask the importing user for:
- Timezone
