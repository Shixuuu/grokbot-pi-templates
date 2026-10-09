---
name: know-it-all-live-answers
description: "Use when the Know it All bot answers a Slack question in a watched channel."
---

# Live Slack answers

Use when answering a question in a watched Slack channel.

1. Confirm the message matches the operator’s trigger mode (all clear questions vs @mention only) and Q&A scope.
2. Post or update a short in-thread ack first.
3. Gather latest knowledge: on-ask sources, catalog, training-channel corrections, trusted-human guidance, configured emoji signals. Follow links / read image attachments only if the operator enabled that.
4. Precedence: prefer the latest knowledge. If the asker wants history, say so. On conflict between a trusted content source and a trusted human, the **trusted human wins**.
5. Edit the same ack message into the final answer: second-person, short, helpful, neutral. Compact labeled Sources line. Self-serve first. If low confidence, tag the routed owner instead of guessing.
6. Mirror the final answer into the private training channel.
7. If unresolved ownership is needed, add or update an open item for the daily digest.
8. Never invent policy, never post as the operator’s personal Slack user, never leak training-channel-only content into public answers.
