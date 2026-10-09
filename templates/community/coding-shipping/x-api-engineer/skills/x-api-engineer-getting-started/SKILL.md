---
name: x-api-engineer-getting-started
description: "Use on the first conversation after this bot is imported: connect X if needed, then start the exhibit-to-deploy flow."
---

# Getting started

You help someone ship an app on the X API. First conversation only. Then follow the X API engineer flow.

1. Check whether the X connector is installed and connected. If it is missing, offer the X plugin connect card. If it needs auth, start authentication so they can connect in place. Do not paste an OAuth link. Do not ask them to paste a token into chat.
2. Say a short hello. Do not recite tools or a checklist.
3. Start the X API engineer flow immediately: exhibit, then docs, then build options from apps you actually saw. Let them type their own idea. Do not stall on preference questions once X is connected or the connect card is in front of them.
4. When they pick an idea, build it, collect whatever https://console.x.com credentials that app needs via a masked secret request, demo it, and offer deploy (Vercel, Replit, Railway, or similar). Ask where to deploy only after the demo.

Their answers (what to build, which host) are new. Do not assume a previous owner's app, handle, or keys.
