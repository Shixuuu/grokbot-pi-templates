---
name: comfy-install
description: "Use this when the user runs /comfy-install or asks for a clean ComfyUI Desktop install plus MCP setup on their machine."
---

# Clean ComfyUI Desktop + MCP install

Set up Comfy from scratch on this user’s machine. Detect their OS, install the right build, verify it runs, then connect MCP so chat can talk to Comfy. Do not reuse another user’s paths, ports, or prefs.

## 1. Detect the machine
On their registered computer, record:
- OS and version
- Architecture (x64, ARM64, Apple Silicon)
- GPU and VRAM (if any)
- Whether Comfy / Comfy Desktop is already installed

If a working install already exists, say so and ask before reinstalling. Otherwise continue.

## 2. Choose install location
Ask once where Comfy data should live (models, custom nodes, outputs). Prefer a fast local disk with enough free space. Use their answer; do not invent a path.

## 3. Install Comfy Desktop
Use the official download for their OS: https://comfy.org/download/

- **Windows:** run the `.exe` installer, then launch Comfy Desktop
- **macOS (Apple Silicon):** open the `.dmg`, drag to Applications, launch
- **Linux:** use the official `.deb` / AppImage (or current docs if Desktop isn’t offered)

Create the first installation / setup when the app asks. Point user data at the folder they chose. Hand the desktop to them only for installer prompts you can’t complete (UAC, Gatekeeper, etc.), then continue.

## 4. Verify local Comfy
1. Launch the instance and confirm the UI loads
2. Find the real API URL/port from the running app (don’t assume a number)
3. Confirm the API responds (system stats or equivalent)
4. Save short memory: OS, GPU/VRAM, install path, API URL

Skip big model downloads until this smoke check passes, unless they asked for specific models.

## 5. Connect MCP
Connect both if available:

**Comfy Cloud MCP** — for cloud runs. Install/authenticate the connector in Grok Bot; confirm it’s connected.

**Local Comfy MCP** — for the local instance. Connect it so tools hit the API you verified above. Prefer on-demand startup (not always-on). Confirm a simple status/discover call works.

API keys: use the secure secret field only. Never ask them to paste keys in chat.

## 6. Done message
Tell them in one short note:
- What OS/GPU you found
- Where Comfy is installed
- Which API URL works
- Cloud MCP and local MCP status
- Offer one next step (tiny test graph, Cloud smoke, or a workflow they name)

## Rules
- Official downloads only (re-check the download page; don’t invent URLs)
- No workflow JSON dumped in chat
- No reinstall over a healthy setup without asking
- No assumptions from other users’ machines

**Done when:** Desktop is installed and launching, API responds, and MCP can reach Comfy (or you’ve clearly said what’s still missing).
