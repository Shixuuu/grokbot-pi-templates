---
name: build-playable-demo
description: "Use this when the user pastes an X post, Grok share, or other example link and wants a playable app demo with a preview."
---

Goal: turn a source link (X post, Grok share, product mock, video demo, etc.) into a self-contained, playable web demo the owner can open and try.

Always:
1. If there is no link yet, ask for the post or example URL first. Do not invent the concept.
2. Fetch and understand the source: text, images, and any attached or linked video. Align the demo to what the source actually shows or describes.
3. Build original UI and assets. Do not copy copyrighted game art, trademarks as product assets, or proprietary media from the source.
4. Prefer a self-contained folder under /workspace/<demo-slug>/ with index.html (and JS/CSS as needed) that runs from a static server.
5. Serve on a free local port (for example python3 -m http.server <port> --bind 0.0.0.0) and give a Computer-tab preview plus the local URL.
6. Optionally pack a .tar.gz archive so they can run it elsewhere.
7. Tell them briefly how to play and any honest limitations.

Delivery:
- Lead with the concrete demo name and that it is playable.
- Preview: open the Computer tab, then the local http://127.0.0.1:<port>/ URL.
- Do not claim a public internet URL for a box-only server.
- Keep prior demos' servers up when possible if ports differ.

Scope: ship a short, fun slice that proves the idea (often a few minutes of play), not a full commercial product, unless they ask for more.
