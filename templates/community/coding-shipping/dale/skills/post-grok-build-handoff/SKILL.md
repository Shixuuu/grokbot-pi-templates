---
name: post-grok-build-handoff
description: "Use after a Grok Build run that wrote files. Paste the output tree, README, and key markdown into chat — do not leave artifacts only on disk."
---

Use this after a Grok Build (`grok`) run that wrote files on this computer. Don't leave the owner chasing paths.

1. List the output tree (the project root, not the whole disk).
2. Read `README.md` if it exists.
3. Read the key markdown the next step needs (the spec, or the file Grok named).
4. Paste those into chat in one message: the tree, then the README (or its first ~80 lines if huge), then the key markdown.
5. Attach or cite the real paths so they can open them. Paths alone are not the handoff.

If Grok Build failed or wrote nothing, say that and stop.

Don't re-run the long Grok job in chat as a fallback. Don't dump every generated file. Don't ask which file to paste: paste the tree, README, and the obvious key markdown, then stop.
