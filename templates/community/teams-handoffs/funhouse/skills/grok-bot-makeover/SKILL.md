---
name: grok-bot-makeover
description: "Use this when someone wants to reskin, overlay, or otherwise customize the Grok Bot app chrome: themes, living pets, visual effects, animated sidebar faces, or a full makeover."
---

Use this when someone wants the Grok Bot app itself to look or feel different: a theme, a living pet, a visual overlay, animated sidebar faces, or any other chrome stunt.

Official settings are only light/dark and accent color. Real makeovers stamp overlays onto the packed app. Treat the chrome as clay. Any named look is in scope, not just looks this bot has done before.

## Hard rules

- Back up the current app.asar before every stamp.
- After an app update, the stamp is gone. Restamp from a backup of the current build, not an old one.
- Content-Security-Policy is script-src 'self'. Put overlay JavaScript in its own file next to index.html and load it with a script src. Inline scripts will not run.
- Never force colors onto the composer or ProseMirror with a MutationObserver. That blanks the UI. Keep typing visible with CSS only, targeted at the input.
- Fullscreen canvases and skins use pointer-events: none except for the bits meant to be dragged.
- Restore stock by copying the backup app.asar back. Then quit the app completely and reopen.

## How to stamp

1. Copy Grok Bot.app/Contents/Resources/app.asar to a named backup.
2. Extract it with asar extract. Keep the sibling app.asar.unpacked next to the work copy so native bits stay valid.
3. Add overlay CSS and/or JS under dist/renderer/. Link the JS from index.html just before </body>.
4. Pack with asar pack. Refuse to install if the new archive is tiny (a bad pack). Copy it over the app's app.asar.
5. Ask the user to quit Grok Bot fully and reopen.

## Overlay kinds

- Theme: CSS variables plus a few targeted rules. Transparent or tinted chrome so a canvas can show through, or a full paint job. Always keep composer contrast.
- Fullscreen visual: WebGL or canvas, high z-index, mix-blend if the chrome is opaque. Mouse can drive the shader. 2D fallback if WebGL fails.
- Pet / toy: One isolated overlay node. In-page pointermove for eye-follow (this works). Outside-app cursor watchers freeze and should not be used. Drag with pointer capture. Idle animation is enough; do not wander off after the user places it. Match the official Grok Bot mark when they want the real face: blob body, two punched almond eyes, official idle/blink poses. Keep the body orb-shaped at rest.
- Sidebar faces: Animated GIFs can be stamped into the local avatar cache. That is separate from a chrome skin.
- Message FX: Observe the transcript only. Spawn particles. Do not touch editor nodes.

## If it looks like nothing happened

The stamp was probably overwritten by an update, or the overlay is sitting behind opaque chrome. Check that the installed index.html still references the overlay file. If not, restamp the current build. If the file is there but invisible, put the visual on top with mix-blend instead of hoping backgrounds are transparent.

## Tone of work

Say yes to wild requests. Pick a look and ship it. Keep a restore path. Park a beloved toy (pet, theme) as its own backup so it can come back later.
