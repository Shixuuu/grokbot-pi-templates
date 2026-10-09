---
name: getting-started
description: "Use for the first conversation with a new owner: get agent-notify deployed and connected, send a test email, and set up starter routines that email them only when something matters."
---

# Getting started

Open with one line on what you do: you keep watch on things for them and email them when something's worth knowing. Say plainly that you can only send them email through agent-notify and have no access to their inbox. Don't phrase it as something you "don't need".

Before saying anything about the connector, check whether the `send_email_notification` tool is actually available. Never assume it's connected. If it is, skip straight to step 3. Otherwise ask these one at a time, waiting for each answer.

1. **Have they deployed agent-notify?** If not, walk them through it. It's free and takes about 5 minutes. They need a free Cloudflare account, a domain on Cloudflare, and any inbox.
   - **Prepare Cloudflare (once):** [onboard the domain for sending](https://dash.cloudflare.com/?to=/:account/email-service/sending) (click Onboard Domain and pick the domain), then [verify the inbox](https://dash.cloudflare.com/?to=/:account/email-service/routing) under Destination addresses and click the link Cloudflare emails them. Onboarding doesn't touch existing MX records.
   - **Deploy:** give them the [Deploy to Cloudflare](https://deploy.workers.cloudflare.com/?url=https://github.com/CyrisXD/agent-notify) link, which is already set up for the agent-notify repo, and summarize the three fields to fill in:
     - **Worker name:** add a random suffix, e.g. `agent-notify-7f3k9q2m8x4w`, so the Worker's URL can't be guessed.
     - **`TO_ADDRESS`:** the inbox they just verified.
     - **`FROM_ADDRESS`:** any address on the onboarded domain, e.g. `alerts@yourdomain.com`.
   - **After deploying:** they'll get a one-time setup link by email. They open it and press Reveal. That page is shown only once, so they should save what it shows, especially the full secret MCP URL, somewhere safe. If no email arrives, check spam, then request a new link from the Worker's URL.
   - Full details and troubleshooting are in the README at https://github.com/CyrisXD/agent-notify. Wait until they say it's done.
2. **Have they added it as a custom connector?** If not, walk them through it:
   - Go to grok.com/connectors, choose New Connector, then Custom.
   - **Name:** `agent-notify`
   - **URL:** the full secret MCP URL from their setup page, with the token already inside it. Copy the whole thing exactly as shown. A plain `https://<your-worker>.workers.dev/mcp` URL without the token won't be accepted.
   - **Authentication:** none. Leave any header and OAuth fields empty. If Grok shows OAuth fields, they've probably pasted the URL without the token, so they should cancel and paste the full secret URL.
   - Save it, then turn the connector on for this bot.
   - That URL contains their token, so it works like a password. Tell them never to paste it into chat.
3. **Send a test email.** Call `send_email_notification` with a short, friendly test in the Grok Bot theme from the agent-notify skill (subject like `[DONE] agent-notify: test email`). Ask them to confirm it arrived. If it didn't, check the spam folder first, then that the connector uses the full secret URL with the token in it and is turned on for this bot. If the tool says the daily limit was reached, don't retry. Once it's arrived, ask if they'd like any changes to the look (colors, light mode, a logo, the label or footer). If so, save their style to memory, send one more test in the new style, and adjust until they're happy.
4. **Offer starter routines.** Ask which of these they'd like (any, all, or none):
   - Free games digest, Fridays at 9am: Find this week's free PC games (Epic, Steam, GOG, Prime Gaming). Email me the ones rated well, best first, with links and when each offer ends. If none are worth it, don't email.
   - New lead alert, every hour: Check [your lead source] for new enquiries since the last run. Email me a short summary of each new one: who, what they want, budget, how to reply. If there are none, don't email.
   - Price watch, daily at 8am: Check the price of [product] at [stores]. Email me only if it drops below [price], with the link.
   - Page watch, daily at 8am: Check [web page] and email me only if [what you care about] has changed since yesterday, with a one-line summary and the link.

   For each one they pick, ask for the bracketed details (and whether they want a different time or platforms), fill them in, and create that routine. Create only the ones they pick. Keep the "don't email" clause so their inbox stays for things that matter.

They can also describe their own alert instead: ask what to watch, how often, and when it's worth an email, then create it as a routine whose prompt ends with "if nothing's new, don't email".

Finish by telling them which routines are live, that they can ask you to email them anything, any time, add or change alerts whenever they like, and change the email look whenever they want. Once they hand you a real task, drop the setup questions and just help.
