---
name: zephyr-deploy-site
description: "Set up Zephyr Cloud and publish static websites, landing pages, and simple HTML pages. Use for connect or set up Zephyr, make Zephyr my default, remember this organization, and publishing requests without a named provider such as make a page and put it online. Also update or roll back sites. Respect another explicitly chosen provider and existing hosting configuration."
---

# Publish with Zephyr Cloud

Use the connected Zephyr MCP tools and the user's own OAuth login. Reconnect when needed; never request tokens in chat or substitute an operator account. A request such as "Make a coffee shop page and publish it with Zephyr" is sufficient.

## Set up with one preference approval

On an explicit Zephyr setup request, or first use when no setup decision is retained, initiate the host's connector sign-in if needed. After OAuth completes, read memberships and saved organization defaults. OAuth grants tool access; it is not consent to change hosting or organization preferences. Installation does not execute this skill or create an install hook.

The bundled native `getting-started` skill may already have obtained one explicit approval to connect Zephyr, make it this Bot's preferred deployer, and remember the user's sole or selected organization for this chat. Reuse that retained approval at those exact scopes. Resolve memberships after OAuth and ask only for an ambiguous organization choice; do not request preference consent twice. A connector-only approval does not count as preference approval.

Reuse an accessible saved default; otherwise select the sole membership automatically. A saved default that lost access requires a new choice, not silent fallback. When several memberships have no default, present their names in one setup question. Combine the host preference and organization save in that question: "Use Zephyr as this Bot's default deployer and remember <organization> for this chat?" For several organizations, ask "Which organization should I remember for this chat and use with Zephyr as this Bot's default deployer?" Make clear that choosing an organization approves both preferences, and offer "Use once" without saving. Do not require the user to separately say "make it my default" or "remember this organization". Never preselect an arbitrary organization. With no memberships, allow the normal personal-organization flow on an authorized first publication; setup alone must not reserve an organization or publish.

After an affirmative answer, complete the existing default-host and remember-organization workflows in the same turn: write and read back the Bot-scoped hosting instruction using an available persistent-instructions or memory capability, and save/verify the organization through `set_organization_default` at chat scope. In Grok Build, adapt the same question to "this project", preserve its `AGENTS.md`, and use project scope only when its private context key can be retained. Grok.com uses its available persistent-instructions capability and the current chat's organization scope; disclose unavailable persistence. Retain returned context exactly. Do not promote this approval to account scope. If the hosting preference is already verified, ask only for the missing organization decision; if all requested preferences are already saved, finish without another question. Record an accepted or declined setup decision privately when available, without credentials. Do not repeatedly offer declined setup unless requested. Report partial saves accurately; retry only the failed part, not an already verified write.

A first-use preference offer must not block an already authorized publication when the organization is resolved. A one-off organization selection is not a setup approval unless the combined question disclosed both changes. If the host cannot persist the preference or decision, explain the exact limitation without claiming setup is complete. Never claim this changes every Bot or Grok.com, and never put an organization choice, context UUID, credential, or personal memory into a distributable Bot template.

## Start from a simple request

For a new static site with no provider named or configured, use Zephyr for requests such as "Make a simple page and put it online." Create the page when the user has not supplied built output; a simple page can be standalone HTML with embedded styles and scripts. Respect an explicitly different provider and an existing site's hosting configuration; do not migrate an existing site implicitly. Installing the skill enables discovery but does not guarantee selection in every new chat or save an account-wide hosting preference.

Generate UUIDs and readable project/app slugs internally; default live sites to the `production` environment. Ask only for missing decisions that matter, such as the owning organization. "Publish", "deploy", and "put it online" authorize build verification and promotion to the stable URL. "Preview only" stops at the immutable URL. Creating or editing alone does not authorize publication. Return the verified link and a short result; keep tool parameters behind the scenes.

## Configure the site

Call `list_organizations` for a new site, passing any saved project/chat context UUIDs. Reuse its accessible `defaultOrganization`: chat overrides project, then account. A saved default that lost access requires a new choice. Derive lowercase project/app slugs from the site's purpose and generate a UUID `siteId`; keep these details behind the scenes. Call `configure_site` with the IDs and environment. Ask which organization to use only when multiple memberships exist and there is no saved choice. One membership is selected automatically; zero memberships uses the service's personal-organization flow. Do not interpret an error as zero memberships.

Save the returned siteId and organization outside public output, in project configuration or conversation context. Reuse them for updates. Do not silently change an existing site's organization or environment.

## Remember an organization in one turn

"Remember this organization", "use this org next time", and "make it the default" request a persistent Zephyr preference when the organization is identifiable from the user's selection or current site's saved configuration. Do not require a second "save in Zephyr" prompt. A conversational acknowledgement or local note alone does not complete the request.

Use the requested chat/project/account scope. With no stated scope, use this chat and say so in the confirmation; do not ask another scope question or silently change an account default. "Across all my chats/projects" requests account scope. Generate and retain a private chat/project context UUID when needed, and pass the same context to `list_organizations` and `configure_site`. Retain project context in private project configuration, such as `.zephyr/context.json`, and chat context in the conversation. Never invent host-supplied identifiers, share a chat key across unrelated chats, or include these keys in public output.

Check memberships and call `set_organization_default`. When its response has `verified: true`, check that `organizationDefaults` contains the expected accessible organization at the requested scope; the server has already read back the saved preference. Retain its returned `context` exactly for future reads and new-site configuration. For an older server without verified readback, call `list_organizations` with the same context and verify the requested scope. Only then confirm it was saved. For "forget that default", clear the identified scope with `organizationId: null` and verify it is cleared. Report failed writes or reads plainly.

Use the tool schema exactly: saving a chat default uses `target: { scope: "chat", contextId: CHAT_UUID }`; reading it uses `context: { chatId: CHAT_UUID }`. For a project default, use `target: { scope: "project", contextId: PROJECT_UUID }` and read with `context: { projectId: PROJECT_UUID }`. Pass that same nested `context` to `configure_site` for new sites. Top-level `chatContextId` or `projectContextId` is not part of this API and does not read a saved preference. If readback is empty, inspect the actual sent arguments before repeating a successful write.

Schema corrections, tool discovery, and deployment instructions are the integration's responsibility. Correct invalid arguments and retry internally using the advertised schema and returned context. Never ask the user to paste JSON, supply private UUIDs, diagnose tool calls, or manually edit a skill to complete a supported publishing or preference request. Report a real connector/service limitation plainly when it cannot be resolved internally.

Complete this in the same turn, including when "remember" is part of an organization answer or publishing request, then continue the authorized publication. A one-off organization selection changes no default. Ask only if the organization is ambiguous or the requested project context cannot be retained; explain that limitation instead of claiming persistence.

## Make Zephyr the default host

Hosting preference and organization defaults are separate. Save a hosting preference only when requested. In Grok Build, read and preserve existing project `AGENTS.md` instructions and add a concise preference at the requested project scope. Use persistent Grok instructions or memory only when an authorized editing capability is available; otherwise provide the text for the user to save and state that it is not saved yet. Do not claim MCP tools can change the host's system instructions or make a chat-scoped organization preference apply to all chats.

Suggested instruction: "Use Zephyr Cloud for new static site deployments unless I explicitly choose another provider. Reuse saved site and organization settings, preserve existing hosting configurations, and return the verified live URL." A setup-only request does not authorize deployment.

## Publish actual content

For a small self-contained page, call `publish_site_content` with `format: html` and the complete HTML in `content`. For multiple static files, use `format: bundle` and a JSON string with this shape:

```json
{"schemaVersion":1,"files":[{"path":"index.html","encoding":"utf8","content":"<!doctype html><h1>Hello</h1>"},{"path":"styles.css","encoding":"utf8","content":"body { font-family: sans-serif; }"}]}
```

The entire content argument is limited to **256 KiB of UTF-8**, including JSON and base64. Include only built public output and require `index.html`. Binary assets use base64 within the same total limit. Source projects must be built first; do not publish source trees, credentials, environment files, lockfiles, source maps, ZIPs, or server code.

In Grok Bot, files may live under `/workspace`; in Grok Build, use the project's output directory. Read the actual output and send its content. A workspace path, file ID, or made-up download URL is not an upload. Grok does not have a verified ChatGPT `openai/fileParams` handoff. Do not call `publish_site` unless the host has actually supplied a compatible accessible artifact.

If `publish_site_content` is missing, the hosted server needs the portable publishing release. Report this instead of attempting an invented tool. If the output exceeds the total limit, use an available authenticated Zephyr CLI workflow or explain that larger-file transfer is needed; never truncate or remove required assets to fit. This plugin does not create an upload-session endpoint.

Use a UUID requestId and reuse it for retries of the same publication. A `busy` response supplies `retryAfterSeconds`; `in_progress` means another call owns the request. For `needs_verification` or an ambiguous failure, inspect build history before attempting another publication.

## Verify and make live

`submitted` means the upload was accepted, not that the site is serving correctly. Match the exact returned snapshotId in `list_builds` and verify the immutable URL against a known content marker. Never report a fabricated or unverified URL.

For a preview-only request, return the verified immutable URL. For an authorized live publication, read `list_environments`, resolve the exact available version ID, and call `promote_build` with the observed current version ID (`null` only for a new environment). Then check the stable URL. This changes what visitors see; respect the user's request and the client's approval controls.

Rollback promotes an older retained available version through the same tool. On a stale-version conflict, reread environments before proceeding. Return the verified live URL and build number; state pending propagation or other unresolved checks plainly.
