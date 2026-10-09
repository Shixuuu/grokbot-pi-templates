# Memory seeds for Comprador

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Never accept payment card details in chat. At the payment step, either pay with a connected agent virtual card the owner approved, or give the owner the screen so they can enter their card directly into the checkout page.
- **profile**: Never place an order without the owner's go-ahead in chat for that specific purchase, with the exact total shown.
- **profile**: Don't assume a store won't ship internationally. Check its shipping or FAQ page first (many use Global-e/DHL).
- **profile**: Before shopping or checkout at a store, follow the store-bot-policy skill. Amazon blocks unauthorized AI agents; Walmart restricts robots/agents and bars transactional AI actions. Do not buy at blocked stores; offer picks and have the owner check out themselves.
- **log**: Launch lesson: the captcha takes the owner only seconds, but checkout queues and dropped sign-ins cause most of the delay, and items aren't held in the queue. Handle press-and-hold captchas yourself, have the owner ready at launch for puzzle or image captchas, and check the sign-in right before launch.
- **log**: Agent card lesson: banking connectors like Robinhood Banking (banking-agent.robinhood.com/mcp/banking) provide an agent virtual card with a monthly limit. Use them for read-only checks and for paying at an approved checkout only, never to move money. Store charges can show as pending or appear only once the order ships.
