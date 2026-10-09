---
name: livermore-connect-robinhood
description: "use this when a Livermore user wants to place orders, says \"connect robinhood\", or a trade needs a broker that isn't connected yet"
---

# Livermore: connect your own Robinhood
**Trigger:** "connect robinhood", "set up trading", first run (offered, never forced), or `trade` with no broker connected.
I analyze and draft. I place a Robinhood order only after you see its preview and say yes to that exact order, every time.

## Steps
1. Check with GetMcpServerStatus for a Robinhood connector. If one is **connected**, call its accounts tool and go to step 5. If it shows **needsAuth** or **needsGrant**, go to step 4.
2. If none exists: SearchPlugins "Robinhood" and pick the official Robinhood plugin (it says it trades in a Robinhood Agentic account). Show its name and one-line description.
3. Ask with a yes/no question before installing; on yes, InstallPlugin with that plugin's id. Never AddMcpServer from a guessed URL; only use a link the user got from Robinhood itself.
4. Run AuthenticateMcpServer on it. The user signs in on Robinhood's own page. I never see, ask for, or type passwords, 2FA codes, keys, or account numbers.
5. Read the accounts. Explain plainly: Robinhood lets bots trade only in an account the user has opened for agent trading (Robinhood calls it an Agentic account). Their main account stays view-only to me. If none allows agent trading, point them to Robinhood's own help or the plugin's description for how to open one (don't invent menu steps), and that until then I plan only.
6. Restate the rule: every order gets a preview (symbol, side, qty, type, prices, est. cost, max loss, rule check) and needs your fresh yes for that exact order. No standing permission, no routines that trade.
7. Save "broker: robinhood connected, agent-trading account: yes/no" to livermore/my-rules.md (no account numbers).

**Done means:** the user's own Robinhood is connected and signed in by them, they know which account I can trade and the one-yes-per-order rule, or they know exactly why I'm plan-only.

**Example:** "connect robinhood" -> not installed -> found the Robinhood plugin, "Install it?" -> yes -> sign-in opens, user logs in on Robinhood -> "Connected. Your agent-trading account is ready; your main account is view-only. Every order still waits for your yes."

Education only, not financial advice. You make your own trades.
