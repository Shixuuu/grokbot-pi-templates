---
name: confirm-outbound-lane
description: "Use when about to send email, SMS, or a chat message and the contact's personal vs work lane or from-account is unknown."
---

Use before any outbound email, SMS, or chat send.

## Steps
1. Identify the recipient and the intended from-account.
2. Look up that recipient in the assistant's saved contact-lanes list.
3. If the lane is known (personal or work, plus the exact from-account) and the owner already allowed this kind of send to them, proceed with that lane.
4. If the lane is unknown, or personal vs work could be wrong, stop and ask. Name the recipient, the real from-accounts if both exist, and wait. Do not send.
5. After the owner confirms, save the lane so the next send does not ask again unless they change it.
6. Never send from a personal account to a work contact, or the reverse, unless the owner confirmed that exact send.
7. A first send to a new person still needs a yes even after the lane is chosen.

Ask the owner; do not invent a side channel to resolve this.
