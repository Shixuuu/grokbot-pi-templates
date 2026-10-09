---
name: bk-binary-inspection-with-rea
description: "Use when BuildKeeper needs to check what actually ended up in a built or shipped binary: confirm a patch is in the output, compare two builds or a release, inspect a closed-source dependency or game/host executable, or triage a crash without source."
---

# BK binary inspection with REA

Uses REA (reverse-engineer-anything), https://github.com/morluto/rea, MIT License, npm package `rea-agents`: a free MCP server for analyzing binaries, packages, .NET and Electron/JS apps. Only analyze software the owner owns or is allowed to analyze. REA gives evidence (strings, symbols, pseudocode, call graphs), not the original source.

## When BK uses it
- **Prove a patch shipped.** After a green build, confirm a new log string, symbol or function is in the output binary, so the claim isn't just "it compiled".
- **Build vs build, or build vs release.** Diff exports, symbols, strings and sizes between the last green build and this one, or against the official release, to catch an unexpected change (e.g. a link-time drop or wrong config).
- **Closed dependencies and host programs.** Check the version, exports or a hook target in a third-party library, game or host executable the code depends on (e.g. confirm the exact host version a build supports). On Windows only .exe files can be analyzed natively, not DLLs; see Setup.
- **Crash triage without source.** Map a crash address or module from a dump or log to a function, then hand it to build-failure triage.

## Setup (ask the owner first)
This installs software and writes agent config, so ask through the primary bot with options: full setup (REA plus Ghidra for native code) / REA only (JS, Electron, .NET and archives) / skip.
1. Needs Node.js 22.19+, 24.11+ or 26+. Register the MCP server in the coding CLI or agent: command `npx`, args `-y rea-agents@4.1.0 mcp` (one exact version; 4.1.0 was current on 2026-10-06), then restart the session.
2. Native code needs a free provider: Ghidra 12.1.4 plus a 64-bit JDK 21. Set `GHIDRA_INSTALL_DIR` and `JAVA_HOME` to absolute paths. REA never downloads them for you. On Windows, native analysis is experimental and read-only, and covers only x86-64 .exe files (not DLLs) on a local NTFS drive; follow REA's Windows Ghidra guide. Ghidra on Linux x64 and macOS has no such limits.
3. Run `npx -y rea-agents@latest doctor` only when tools are missing or something fails. It may crash on very new Node versions even when the tools work.

## Route by target
- Native exe or DLL (DLLs on Linux or macOS only): `open_binary`, then `binary_overview`, then focused tools (`search_strings`, xrefs, `procedure_pseudo_code`, `get_call_graph`, `trace_feature`). Close with `close_binary`.
- Managed .NET: `inspect_managed_artifact`.
- ASAR or Electron/JS tree: `analyze_javascript_application`.
- Archive or package (ZIP, MSIX, APK and so on): `open_binary`, then `inspect_artifact`.
- Dynamic capture (process, browser, replay) is off by default. Ask the owner before turning it on.

## Reporting
- Start with a summary, don't repeat identical calls, and keep a short ledger: the question, the finding, the evidence IDs, and your confidence.
- Keep observed, inferred and unknown separate. Static analysis never proves something runs. Say "present in the binary", not "works".
- On the board, link the evidence next to the patch it verifies, and keep that link in mind as a proof point for the verification gate.
