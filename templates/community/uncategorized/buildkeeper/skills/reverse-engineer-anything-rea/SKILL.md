---
name: reverse-engineer-anything-rea
description: "Use when asked to understand how a shipped app, binary, package, Electron/JavaScript app or website feature works, to decompile or compare versions, or to rebuild a feature from observed behavior, using the free open-source REA tool. Skip for ordinary source-repo analysis."
---

# Reverse engineer anything with REA

Source: https://github.com/morluto/rea (MIT, npm package `rea-agents`, an MCP server with about 125 tools plus a routing skill). Only use on software the user owns or is allowed to analyze. REA does not recover original source; it gives evidence (pseudocode, assembly, strings, symbols, call graphs).

## Free-only notes
- REA itself is free (MIT). Deep native analysis needs a provider: Hopper (paid app, free demo mode with limits) or bring-your-own Ghidra 12.1.4 + 64-bit JDK 21 (both free). Prefer Ghidra. REA never downloads Ghidra or Java for you.
- On Windows only an experimental, read-only Ghidra path exists, for native x86-64 .exe apps (not DLLs) on local NTFS; follow REA's Windows Ghidra guide. JavaScript/Electron/ASAR, browser and managed .NET analysis do not need a native provider.
- Needs Node.js 22.19+, 24.11+ or 26+.

## Setup (once)
1. Register the MCP server in the agent: command `npx`, args `-y rea-agents@4.1.0 mcp` (pin one exact version; 4.1.0 was current on 2026-10-06). Restart the agent session.
2. Run `npx -y rea-agents@latest doctor` only when tools are missing or something fails. Show the exact plan and get approval before any setup that writes config or installs software.
3. For native binaries set `GHIDRA_INSTALL_DIR` and `JAVA_HOME` to absolute paths, then rerun doctor.

## Route by target
- ASAR or extracted JavaScript/Electron tree: `analyze_javascript_application`.
- Archive/package (ZIP, APK, IPA, MSIX, AppX, DMG): `open_binary`, then `inspect_artifact` if the graph helps.
- Managed .NET assembly: `inspect_managed_artifact`.
- Browser page already open (user-owned Chrome, loopback CDP): `list_browser_targets`. Electron already running: `list_electron_targets`. Both are off by default and need explicit approved origins.
- Native executable or library: `open_binary`, then `binary_overview`, then focused tools (search_strings, xrefs, procedure_pseudo_code, get_call_graph, trace_feature).
- If no app was named, ask which one. Never pick an example app.

## Work
- Start summary-first; don't repeat identical calls; follow up only on a specific gap.
- Every conclusion separates observations, inferences, unknowns, and cites Evidence IDs. Static analysis never proves execution.
- Broad requests: write a checklist of questions, reuse existing sessions/evidence, work one hypothesis at a time, keep a finding ledger (conclusion, evidence IDs, confidence, remaining unknowns). Mark each question answered, partial, or unresolved at the end.
- Dynamic capabilities (process capture, browser scenarios, replay) are disabled by default and need both operator policy and per-call approval. Stop and ask before enabling any.
- Close native sessions with `close_binary` when done.

## Finish
Explain findings in plain words tied to the evidence. If asked to build a feature from it, use normal coding tools and separate observed behavior from design choices. The repo's own skill and reference guides live under `skills/reverse-engineer-anything/` for deeper per-target detail.
