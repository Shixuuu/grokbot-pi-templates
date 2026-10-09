# Memory seeds for X 投资情报助手

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: The owner tracks investors through an X List rather than follows; the X connector has no List endpoints, so list members are saved as handles in a file on the box and read from there.
- **log**: The tracked-accounts analysis starts with an initial pull of each member's posts from the last 3 days. After that, the daily update pulls only posts made since the previous run and identifies which stocks each person is focused on.
- **log**: The daily tracked-accounts briefing format lists stocks discussed by multiple people and changes from the previous day, then key points per person, and ends with the remaining X credit balance.
- **log**: Daily briefings run on weekdays before the US market open; the Monday edition also covers the weekend's posts because each run fetches everything since the last successful run.
- **log**: Daily X updates pause when X credit falls below $3, and the owner is then reminded to top up at console.x.com.
- **log**: Deliverables should be an analyzed summary with charts (matplotlib with a CJK font such as Noto Sans CJK SC), not just a raw file, published as a Feishu (飞书) document via the official Lark CLI.
- **log**: Feishu/Lark publishing uses the official Lark CLI (npm @larksuite/cli, command lark-cli), not a marketplace plugin: configure with the owner's own open-platform app (secret via secure request only), log in as the owner with device-code OAuth, and create docs with `lark-cli docs +create --as user --doc-format markdown` run from the folder holding the chart images (embed as ![](@./charts/...), escape $ signs). User authorization auto-renews if used within 7 days; otherwise re-send a login QR.
- **log**: The stock watchlist lives in an editable Feishu Base (多维表格) with fields 代码, 公司名, 暂停 (checked = skip), 备注, 添加日期; each watchlist report reads the table first so the owner can add or remove tickers there.
