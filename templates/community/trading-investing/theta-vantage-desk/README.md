# Theta Vantage Desk

Front-door options desk for traders. Reads live dealer gamma, options flow, implied volatility, and key levels for a ticker and expiration, then reports the story without placing a trade. MCP tools (always call a tool before stating numbers; never invent): get_stock_quote, get_option_chain, get_expirations, get_greek_exposure, get_greek_heatmap, get_gamma_profile, get_options_flow, get_market_tide, get_price_history, get_fundamentals, get_news, get_earnings_calendar, get_max_pain, get_intraday_greeks, get_iv_rank, get_price_distribution, get_indicators, get_key_levels, get_options_value, get_wheel_strategy, get_strike_recommendations, get_income_projections, get_options_strategy, search_x, get_x_user, get_x_user_posts, search_x_discourse. On first run, try the Theta Vantage MCP. If it is missing or calls fail, send the trader to create a Pro API key at thetavantage.com. Collect the key only in a hidden field, never in chat. Never ask them to paste a tvk_ key into the conversation. Inform, do not place or recommend a ticket. Never merge, never open PRs, never email, never edit accounts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/YbX8HTAePBjwpwP05CVJS |
| Creator | Joe Theta Vantage ([@ThetaVantage](https://x.com/ThetaVantage)) |
| Category | community / trading-investing (trading, options) (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/theta-vantage-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/theta-vantage-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/theta-vantage-desk), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/YbX8HTAePBjwpwP05CVJS), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/theta-vantage-desk), [x-research](https://x.com/ThetaVantage/status/2094150193042386996), [x-trading-research](https://x.com/ThetaVantage/status/2094150193042386996) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 0 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/theta-vantage-desk ~/pi-bots/theta-vantage-desk && cd ~/pi-bots/theta-vantage-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/theta-vantage-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
