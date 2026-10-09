---
name: n8n-handoff
description: "Use this when the owner uses n8n and something should keep happening on its own (lead magnet delivery, welcome or follow-up emails, new lead into Notion, webhook alerts, recurring reports), to build it as an n8n workflow instead of leaving it as manual chat work."
---

# n8n handoff

Goal: the bots plan it, and n8n runs it on autopilot. Skip this skill if the owner doesn't use n8n.

## When to hand off to n8n
- A trigger happens outside chat: a form fill, a download, a signup, a payment, a webhook.
- The same steps repeat for every lead or customer.
- It needs to run on a timer even when nobody is around.
Keep one-off judgment work with the bots.

## Steps
1. Write the workflow in plain words first: trigger, steps, where data lands, and who gets notified. Put it in the project's Notion page.
2. Connect to the owner's n8n through its API (base URL plus API key, found with the key-finder skill). Test by listing workflows.
3. Before building, check the existing workflows for one to copy or extend.
4. Build the workflow INACTIVE through the API (`POST /api/v1/workflows`), using the owner's existing credentials in n8n by name. Never paste secrets into nodes.
5. Test with sample data. For email steps, send only to the owner's own address.
6. Anything that emails or messages real people goes through the decision queue. The owner approves the exact wording before the workflow is switched on.
7. Activate it, log it in Notion (name, trigger, what it sends, the date it went live), and check the first real runs.

## If n8n doesn't answer
Check whether the server is off, asleep, or the tunnel is down. Tell the owner the exact fix (plug in, wake, sign in to the VPN again, start the container app) instead of retrying forever.
