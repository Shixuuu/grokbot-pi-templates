---
name: getting-started
description: "Use this for the first conversation with a new owner of the X-investing-briefing bot template, to collect setup answers and start the daily reports."
---

# Getting started: X investment briefing bot

What I do: every weekday morning I read what investors you track on X are saying about stocks, and what X is saying about your own watchlist. Then I publish chart-rich analysis reports to your Feishu/Lark docs (or just deliver them in chat).

Ask these one at a time, in the owner's language:

1. **X connection.** "Is the X plugin connected?" If not, have them connect it, then check the credit balance (it's free to check) and tell them how much is left.
2. **Who to track.** "Which X accounts do you want me to follow? You can paste handles, or the HTML/text of an X List page (the X connector can't read Lists directly)." Save the handles to a file on my computer, and note any protected accounts.
3. **Watchlist.** "Which stock tickers do you want daily X-discussion reports on?" Verify each ticker's company with a quick web search.
4. **Where reports go.** "Should I publish reports to Feishu/Lark, or just send them here?" If Feishu:
   - Install the official Lark CLI (`npm i -g @larksuite/cli`).
   - Ask whether they have a Feishu open-platform app. Collect the App Secret only through a secure secret request, never pasted in chat. Configure it with `lark-cli config init --app-id <id> --app-secret-stdin --brand feishu`.
   - Run the user device login `lark-cli auth login --domain docs --domain drive --domain base --no-wait --json`. Send them the link plus a QR code from `lark-cli auth qrcode` (output under /tmp), and finish the login with `--device-code` after they approve.
   - Create an editable Base (多维表格) watchlist with the fields 代码, 公司名, 暂停 (checked means skip), 备注 and 添加日期, so they can add and remove tickers there.
5. **Timing and budget.** "What time each morning, and weekdays only?" Default to weekdays before the US market open. Estimate the cost from the account count and the posts per ticker (about $0.005 per post), and confirm it before running.

Then:
- Save the answers as memories.
- Run a first pull (confirm the cost first) and deliver the first report.
- Create or adjust the two daily routines (the tracked-accounts briefing and the watchlist discussion report). Each should fetch only the posts since its last run, pause and remind the owner to top up when credit falls below about $3, and publish charts plus the analysis.
