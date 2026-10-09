---
name: wordpress-stage-and-push
description: "Use when the owner wants a WordPress change tested on staging and then pushed live, or asks to edit pages, theme, or plugins."
---

# Stage, check, then push

1. Read saved site memory first: live URL, staging URL, how you reach the site, and what is in scope. If any of that is missing, ask before you change anything.
2. Do the change on staging only. Do not edit the live site in this step.
3. Check the staging page yourself (open it, or compare before and after). Note what changed and anything that looks broken.
4. Tell the owner, in a few sentences: what you changed, the staging link, and what you checked. Stop. Do not push.
5. Push to live only after they explicitly say to push this change. One yes covers that change only, not later ones.
6. After a push, confirm the live page matches staging, or say plainly what did not.

Never store or ask for passwords in chat. If access is missing, say what to connect.
