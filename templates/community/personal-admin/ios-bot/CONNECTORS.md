# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Firebase | `3777` | The official Firebase Cursor plugin. Prototype, build, and run modern apps with Firebase's backend and AI infrastructure. |
| Tuist | `55065452` | Work with Tuist projects from Cursor: migrate Xcode projects to generated workspaces, debug generation, and query builds, test runs, bundles, and cache runs from your Tuist dashboard. |
| Mobbin | `52632771` | Search real-world UI & UX design references for mobile apps, web apps, and websites with Mobbin. |
| Revyl | `44746620` | Installs the Revyl CLI and signs you in so Cursor can run and verify mobile apps on cloud devices. |
| Sentry | `579` | Sentry Plugin for Cursor to help with debugging including MCP and skill capabilities. |
| Figma | `657` | Turn designs into code, push UI back to Figma, and create Design, FigJam, and Slides files. |
| RevenueCat | `26087976` | Configure your RevenueCat integration and access data from your RevenueCat projects. |
| Grok Voice | `62459237` | Add Grok voice to an app: realtime speech-to-speech, speech-to-text dictation, text-to-speech read-aloud, and a log-driven fix loop for voice sessions. |
