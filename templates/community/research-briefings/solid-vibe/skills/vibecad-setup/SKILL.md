---
name: vibecad-setup
description: "Use when installing or launching VibeCAD on the shared Linux agent computer, or configuring its AI provider (especially Grok/X OAuth)."
---

# VibeCAD setup (shared Linux agent computer)

## Install
1. Use the newest **GitHub release** from `https://github.com/10-X-eng/vibecad/releases` (often prerelease-only; there may be no non-prerelease `latest`).
2. Prefer the **Linux x86_64 AppImage** (~1 GB). Download the AppImage and its `-SHA256.txt`; verify the digest before running.
3. If FUSE is missing, extract instead of mounting:
   - `./VibeCAD-*-Linux-x86_64.AppImage --appimage-extract`
   - Launch with `./squashfs-root/AppRun` (or `AppImage --appimage-extract-and-run`).
4. Suggested shared path: `/workspace/vibecad/`.

## Provider (Grok / X preferred on containers)
1. Open **Edit → Preferences → VibeCAD**. Enable online provider.
2. Select **Grok (X / xAI)**.
3. Prefer **Use device code** when browser loopback callbacks fail (common on shared/container desktops). Surface the device URL + user code to the human; never ask them to paste tokens in chat.
4. After approve: **Fetch models** → choose a Grok model (e.g. `grok-4.6`) → set reasoning effort → **Apply/OK**.
5. Confirm auth status shows signed in. Do not store API keys for the OAuth path.

## Smoke check
- New document, **save** it (assistant stays disabled until saved).
- Tiny measurable solid (e.g. 20×20×10 mm box) via VibeScript or Native.
- Confirm the model runs tools and geometry appears.

## Notes
- VibeCAD is FreeCAD-based; CLI recovery uses `freecadcmd` / AppRun Python against the same install tree.
- Do not change provider settings mid-build unless the human asks.
