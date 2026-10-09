---
name: mac-computer-use
description: "Use whenever operating apps on the user's Mac through the ~/grokbot-cua toolkit (screenshots, clicks, typing, AppleScript, iPhone Mirroring) - the step-by-step workflow, safety rules, and known macOS quirks."
---

# Mac computer use

Toolkit: `$HOME/grokbot-cua` (build it with mac-toolkit-setup if missing). All commands run with Shell on the user's Mac (machineId).

## Safety rules (always)
- **Ask first** before anything that sends, posts, deletes, buys, books, shares, or changes a setting (System Settings, account, privacy, notifications). Show exactly what will happen; one approval covers one action.
- **Real mouse/keyboard = the user's.** Before using it, warn them ("I'll take over the mouse for ~30 s"), record `macctl pos`, and park the cursor back there afterwards. If the user moves the mouse or types, stop and re-check with a screenshot.
- **Never delete**: move to Trash (`osascript -e 'tell application "Finder" to delete (POSIX file "/full/path" as alias)'` moves it to Trash). Never empty the Trash.
- **Never close unsaved work** or quit apps with open documents; never click "Don't Save".
- **Privacy**: if private content (messages, notifications, emails, account or payment details, other people's data) appears on screen while recording or taking screenshots for anyone else, tell the user what was visible. Don't quote it elsewhere; delete stray screenshots in `shots/` when done.
- Don't touch password fields, keychain prompts, 2FA codes, or payment forms; hand those to the user.

## Choose the least invasive method (in this order)
1. Direct: `open -a App`, `open "https://..."`, `open file`, `open "x-apple.systempreferences:..."`, CLI tools, `defaults read`.
2. AppleScript / app scripting dictionaries (Finder, Safari, Mail, Notes, TextEdit...).
3. Accessibility via System Events: `perform action "AXPress"`, `set value`, menu-bar `click menu item` (no pointer needed).
4. Keyboard shortcuts / key codes to the frontmost app (`macctl key`).
5. Background PID events (`pidev`) - only where the app accepts them.
6. Real mouse (`macctl glide/click/drag`) - last resort, with the warning above.
Optional: run the agent pointer overlay (`start-overlay.sh`, `vp.sh move X Y` then `vp.sh click`) to show the user what you're doing while their real mouse stays free. The overlay is only a visual; the real action still comes from AX, pidev, or the real mouse.

## Loop for every step
1. `shot.sh NAME [display#]` and Read the image. Know which display and its top-left offset (`displays`).
2. Find the target: prefer AX position/size (`ax.sh "<spec>"`) over guessing from pixels. Screenshot px = points relative to that display; add its offset.
3. Do ONE small action.
4. Screenshot again and verify the state changed as expected. If not, don't repeat blindly: re-inspect (wrong window frontmost? dialog open? focus lost?).
5. Before any irreversible step, stop and ask (rules above).

## Typing
- Type text as **one string with spaces** (`macctl type "hello world"`), never word by word.
- Before any Post/Send, screenshot and verify the text **character by character** (quotes, punctuation, autocorrect, capitalization). Fix, then ask for approval to send.
- `type` sends unicode characters; Return (36), Tab (48), Backspace (51), Esc (53) need `macctl key`.
- Keystrokes go to the frontmost app and focused field; confirm focus first.

## Localization
macOS UI may not be English: menu, button, and window names in AX specs and menu clicks are localized. Check `defaults read -g AppleLanguages` and read real names from the screenshot or `get name of menu bar items of menu bar 1 of process "X"`. Prefer index-based specs, bundle ids, key codes, and URL schemes, which don't depend on language.

## Known quirks
- **App menus only exist while that app is frontmost.** `tell application "X" to activate` first, then click its menu items.
- **iPhone Mirroring** ignores background/PID-targeted events: it needs the real mouse and keyboard with the iPhone Mirroring window frontmost (warn the user first). Its own menu-bar commands (e.g. Home Screen, Spotlight, App Switcher) work through System Events without real-mouse focus.
  - Mirroring drops when someone touches the phone; to reconnect, the phone must be locked. Ask the user to lock it, then reopen the app.
  - Return and Backspace don't pass through; plain characters do. Use on-screen buttons (e.g. the keyboard's return/send key) by clicking.
  - iOS autocorrect changes `...` into `…` and may alter words; check the result before sending.
- **TextEdit** may save new documents to iCloud by default: use Save As (cmd-shift-S) and pick the intended folder explicitly (cmd-shift-G to type a path), or write the file via shell and `open` it.
- **Safari** asks to confirm opening local `file://` pages; expect and handle that dialog (or serve the file from a local HTTP server).
- **Long-running helpers** (overlay, local servers) must be launched fully detached (double fork + setsid, as in `start-overlay.sh`), or they die when the shell call ends.
- Spaces / full screen: windows on other Spaces aren't in screenshots or AX lists; ask the user rather than switching Spaces unexpectedly.
- Permissions dialogs (Screen Recording, Accessibility, Automation "wants to control...") need the user's click; tell them what to approve and why.

## Finish
Park the real mouse where it was, `vp.sh hide` or `quit` the overlay, delete temporary screenshots, and summarize what changed and anything that needs the user.
