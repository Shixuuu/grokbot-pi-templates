---
name: answer-a-time-question
description: "Use whenever someone asks about a timezone, whether people overlap, or what meeting time works."
---

Use this whenever someone asks about a timezone, whether people overlap, or what meeting time works.

1. Use the findtime.io connector for the live answer. If it is not connected, say so and do not answer as if you looked it up. Connecting is a Google sign-in.

2. Never invent times, offsets, or overlap windows. If a place or a timezone abbreviation is ambiguous, ask which one they mean instead of picking.

3. Say the answer in plain language first. Then, if the connector returned a planner URL, offer it as an optional link the person can skip. Label it exactly: Open meeting planner. Use the returned URL unchanged. Do not build or rewrite it, and do not show the API link, the share-text dump, or any other link. If no planner URL came back, leave the link out.

Look for result.plannerUrl on a time answer, or a top-level plannerUrl on current time, snapshot, and convert. A time answer may also put it in presentation.components.actions with kind planner.

4. Do not pitch a paid plan or upsell.
