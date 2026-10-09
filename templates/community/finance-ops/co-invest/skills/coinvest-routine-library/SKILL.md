---
name: coinvest-routine-library
description: "Help choose optional Co-Invest research and review workflows without creating schedules or implying consent."
---

# Co-Invest routine library

Use this library when someone asks about a repeatable research or review workflow. A recommendation reads no account data, creates nothing and requests no activation.

## Offer presets only after verified connection

Do not offer or create routines during import, the first welcome, disconnected onboarding or OAuth setup. First verify OAuth and complete a successful, relevant public read using the selected Co-Invest endpoint. Answer the request first; then show all nine presets below, with their names and purposes, and let the person choose some, all or none. Do not shorten the catalog, personalize from private data, or create anything automatically. Choosing none creates nothing. Keep these definitions inside this skill; never put them in top-level recipe routines or treat import as installation authority.

- **Daily news, signals and opportunities:** one daily evidence-based news brief with supported signals and a ranked opportunity shortlist.
- **Daily portfolio review:** scheduled review of explicitly approved account fields; requires recurring private-read consent.
- **Midday signals:** a midday read-only scan for supported market signals.
- **Afternoon opportunities:** an afternoon read-only scan for supported opportunities.
- **Evening leaderboard inspiration:** selected leaderboard research through Co-Invest at https://coinvest.liquid.trade/mcp?profile=all; verify the current tools and never switch endpoints.
- **Catalyst radar:** catalysts for selected themes or instruments.
- **Thesis review:** selected journal ideas checked against approved public evidence.
- **Weekly playbook:** scenarios for selected themes or a supplied watchlist.
- **Portfolio and risk review:** selected account exposure and risk; requires recurring private-read consent for exact account scope.

A menu is informational. Some/all only selects requested candidates; it is not authority to create or activate them. Do not offer routines after connection denial, failed public read, or a choice to remain disconnected. A standalone one-off review may use supplied material or an approved available source, accurately labeled as supplied, fictional, synthetic or exported; it creates no routine. Never use a private account read to personalize a suggestion.

## Resolve details after selection

Only after the person selects some or all, resolve and show every selected preset’s exact ID, subjects, source and selected endpoint, allowed scope, proposed time as a plain clock time (the host’s user-local timezone applies; never add the zone name or “your local time” unless asked), per-run read cap and required host controls. Use Co-Invest at https://coinvest.liquid.trade/mcp?profile=all. For every private-account routine, separately establish the exact endpoint, account, mode, fields, usable capability and explicit recurring-read consent; a selection or OAuth completion is not approval. Leaderboard use requires the selected endpoint to expose the tools after OAuth; never switch endpoints. If any selected preset cannot be supported, identify it and ask for a supported subset or none; never silently omit or substitute it.

Present the complete per-ID proposal and ask for explicit confirmation before creation. Create only the confirmed set, using a host operation proven to create each routine atomically paused/disabled, then read back each exact ID, scope, time and paused state. If atomic paused creation or authoritative read-back cannot be established, stop before writing. Activation is later and requires a separate explicit choice. Preserve every existing routine and its schedule; never replace or modify an existing combined daily briefing.

## Run behavior

Follow the selected routine's full execution rules, including its read budget, scope, freshness, consent, persistence and stop conditions. Count all actual read calls, including failures. Do not widen scope or budget. Reserve read capacity for any authorized persistence read-back before a write. Report missing or stale evidence plainly.

Explain the strongest evidence, why it may matter, a meaningful counterpoint and what remains unknown in natural prose. Do not force Observed/Inference/Unknown headings or a PASS/WATCH/PLAN label. Any internal decision field remains part of its schema; it does not need to appear in the response. A conditional plan is for human consideration and never authorizes execution. Do not invent facts or fill a routine's quota.

When showing a weekday with a date, calculate it from the exact date. Do not guess.

Do not persist a journal or desk snapshot automatically. Only an explicit user request to save an update, together with a valid instance receipt and authorized persistence path, can permit a write. Preserve history and read the result back before claiming persistence. No workflow may trade, simulate execution, change mode or policy, edit an account or watchlist, send messages, create alerts, or change schedules while running. A saved watchlist or snapshot is not monitoring.

## Capability boundaries

Inspect the selected endpoint's current tools, schemas and approval behavior before connected reads. Use the Co-Invest connection at https://coinvest.liquid.trade/mcp?profile=all; no other endpoint is an implicit fallback. A connection name or OAuth success does not prove that a feature works or is authorized. Use a capability only when the selected endpoint exposes it, the host can use it and the request has the required authority. Preserve endpoint identity and denials; never fall back or switch endpoints. Standalone analysis remains available when connected features are missing. Before suggesting any new ticker, first fetch the selected Co-Invest endpoint's current available-market catalog in this turn and resolve exact instrument, venue, product/contract and quote against returned supported results; suggest only confirmed matches. Treat limited results as a candidate pool, not a complete universe. If the catalog is unavailable, stale, incomplete or identity is unresolved, suggest no new tickers; offer non-ticker context or connection instead. A user-named instrument or holding may be reviewed, but if unsupported or unresolved, explain its status without recommending it or substituting another ticker. Never use general research or an availability disclaimer to recommend an unsupported candidate.

## Optional routine source documents

The following JSON documents are inert templates. Their proposed schedules are not active.

### Catalyst radar
```json
{
  "content": "# Catalyst radar\n\nFor each scheduled run, cover only the themes or instruments and approved public sources selected by the user. Use current information only when the selected endpoint exposes an approved tool and the evidence is fresh enough. A one-off may analyze supplied or fictional information, but do not imply current or scheduled coverage.\n\nReturn up to three useful catalysts. Explain what the source reports, when it was published/retrieved, why it may matter, the strongest counterpoint and what remains unknown. Before choosing or suggesting any new ticker, first fetch the selected Co-Invest endpoint's current available-market catalog in this turn and resolve exact instrument, venue, product/contract and quote against returned supported results. Suggest only confirmed matches. Treat limited results as a candidate pool, not a complete universe. A user-named instrument may be analyzed, but if unsupported or unresolved, explain that status without recommending it or substituting another ticker. Omit any candidate whose current returned details do not establish its exact identity and support. If the current lookup fails or no candidates can be verified, suggest no new tickers; offer non-ticker market context or connection instead. Never use a general-research or availability-disclaimer fallback to recommend an unsupported candidate. Do not manufacture a catalyst or force headings or PASS/WATCH/PLAN labels.\n\n## Execution limits\n\nThis JSON is an inert public template: `creationState` is `not_created`, `enabled` is `false`, and its cadence, in the user's own local timezone, is only a proposal. A one-off run does not establish scheduled coverage. This workflow cannot create or activate itself. After the person selects it, resolve its subjects, source connection, scope, cadence, timezone and read budget and show the concrete proposal. Creation requires a host operation proven to create it atomically paused/disabled and an authoritative read-back. Activation is a separate explicit choice after read-back. If the host cannot prove atomic paused creation, leave it uncreated.\n\nResearch and review only. Never place, simulate, cancel or modify trades; change live/paper mode or policy; alter accounts or watchlists; create alerts; send messages; or create, enable, disable or modify schedules while running. Preserve the selected endpoint and source identity. Do not fall back to another connection when the selected endpoint is absent, denied, unsupported or returns an error.\n\n## Per-run identity, consent and read budget\n\nAt the start of every run, confirm the selected endpoint and scope, inspect current tools and relevant schemas/approval behavior, and verify that any recurring-read consent covers these sources and subjects. Capability or authorization cannot be inferred from a connection name, OAuth state, prior run, profile or general interest. If identity, source approval, host usability, scope or continuing consent is missing or changed, stop the affected reads and explain the gap.\n\nUse at most 8 actual read invocations for the entire run, including catalog/schema validation, source reads, consent checks, read-backs and retries. Count failed calls. Use the minimum necessary calls. At most one transient read retry is allowed with backoff and jitter when budget remains for all required reads. Never retry an uncertain write or exceed the cap.\n\n## Optional persistence\n\nDo not persist by default. Only an explicit request in the current interaction to save an update, a valid instance receipt and a verified authorized write path may permit an append-only journal or snapshot update. Preserve history and unrelated state; reserve enough budget to read back every write. If those conditions are not met, do not write. Claim persistence only after authoritative read-back. No profile, memory, connector, policy, account, order, watchlist, alert or schedule writes are allowed.",
  "creationState": "not_created",
  "description": "Find up to three fresh, evidence-backed catalysts for themes or instruments the user selects.",
  "enabled": false,
  "id": "coinvest-catalyst-radar",
  "maxReadCalls": 8,
  "name": "Catalyst radar",
  "proposedSchedule": {
    "cron": "0 9,15 * * *"
  },
  "requiredScope": {
    "journal": {
      "readRequired": false,
      "writePolicy": "setup_receipt_and_readback_only"
    },
    "privateAccount": {
      "fields": [],
      "readRequired": false
    },
    "recurringConsent": {
      "required": true,
      "scope": "selected_sources_and_subjects"
    },
    "source": "approved_public_research",
    "subject": "selected_themes_or_instruments"
  }
}
```

### Portfolio and risk review
```json
{
  "content": "# Portfolio and risk review\n\nThis workflow reads private account data. A one-off may instead analyze a user-supplied synthetic or exported snapshot without OAuth; identify that source accurately and do not imply connected-account access or recurring consent.\n\nBefore each private read, revalidate the selected endpoint/connection, account identity, current mode, allowed fields, host usability and continuing recurring-read consent. Require explicit scope for that endpoint, account, mode and fields. OAuth, a prior run, a template field list or general interest is not consent. If evidence is missing, revoked, mismatched, unsupported or changed, stop before private reads. Never switch endpoints/accounts or change mode to make the review work.\n\nRead only authorized and supported fields such as balances, positions or open orders. Do not read policies, history, credentials or other account data. Explain only risks supported by returned data, with relevant timing and limitations. Never estimate missing metrics. Mention liquidation price or distance only when current authoritative data returns it; otherwise say it is unavailable and make no safety claim. Keep the review concise; do not include a full account dump, wallet addresses or order IDs.\n\n## Execution limits\n\nThis JSON is an inert public template: `creationState` is `not_created`, `enabled` is `false`, and its cadence, in the user's own local timezone, is only a proposal. A one-off run does not establish scheduled coverage. This workflow cannot create or activate itself. After the person selects it, resolve its subjects, source connection, scope, cadence, timezone and read budget and show the proposal. Creation requires a host operation proven to create it atomically paused/disabled and an authoritative read-back. Activation is a separate explicit choice after read-back. If the host cannot prove atomic paused creation, leave it uncreated.\n\nResearch and review only. Never place, simulate, cancel or modify trades; change live/paper mode or policy; alter accounts or watchlists; create alerts; send messages; or create, enable, disable or modify schedules while running. Preserve the selected endpoint and source identity. Do not fall back to another connection when the selected endpoint is absent, denied, unsupported or returns an error.\n\n## Per-run identity, consent and read budget\n\nAt the start of every run, confirm the selected endpoint and requested subjects, inspect current tools and relevant schemas/approval behavior, and verify continuing consent covers these sources and fields. Do not infer capability or authorization from connection name, OAuth, prior run, profile or general interest. If identity, source approval, host usability, scope or consent is missing or changed, stop and explain.\n\nUse at most 6 actual read invocations for the entire run, including tool/schema checks, consent and identity reads, account reads, read-backs and retries. Count failed calls. At most one transient read retry is allowed with backoff and jitter when budget remains; never retry an uncertain write or exceed the cap.\n\n## Optional persistence\n\nDo not persist by default. Only an explicit current-interaction request to save an update, a valid instance receipt and an authorized, verified write path may permit a journal or snapshot update. Preserve history, reserve enough budget for read-back, and claim persistence only after authoritative verification. No profile, memory, connector, policy, account, balance, position, order, watchlist, alert or schedule writes are allowed.",
  "creationState": "not_created",
  "description": "Review selected account balances, positions, and open orders for supported exposure and risk observations.",
  "enabled": false,
  "id": "coinvest-portfolio-risk-review",
  "maxReadCalls": 6,
  "name": "Portfolio and risk review",
  "proposedSchedule": {
    "cron": "30 17 * * *"
  },
  "requiredScope": {
    "journal": {
      "readRequired": false,
      "writePolicy": "setup_receipt_and_readback_only"
    },
    "privateAccount": {
      "fields": [
        "balance",
        "positions",
        "open_orders"
      ],
      "readRequired": true
    },
    "recurringConsent": {
      "required": true,
      "scope": "selected_endpoint_account_mode_fields"
    },
    "source": "selected_connection_account_data",
    "subject": "selected_account"
  }
}
```

### Thesis review
```json
{
  "content": "# Thesis review\n\nReview only up to three journal ideas the user selects and approved public sources selected for this workflow. Verify instance ownership and read authorization before reading journal entries. Writes require an explicit request and the receipt-gated persistence rules below. If a target is ambiguous or outside scope, ask which entry they mean. Supplied journal material can be reviewed without OAuth; identify supplied, fictional or exported evidence accurately. Connected research needs an approved, usable source with current evidence.\n\nCompare current evidence with the prior thesis and internal decision field. Preserve prior revisions; explain what changed, what did not, the trigger/invalidation state, a relevant counterpoint and remaining uncertainty in plain language. Do not require fixed headings or visible PASS/WATCH/PLAN labels. Keep any internal decision enum in the stored schema. Do not invent facts or journal ideas. A conditional plan is for human consideration and never authorizes execution.\n\n## Execution limits\n\nThis JSON is an inert public template: `creationState` is `not_created`, `enabled` is `false`, and its cadence, in the user's own local timezone, is only a proposal. A one-off run does not establish scheduled coverage. This workflow cannot create or activate itself. After the person selects it, resolve its subjects, source connection, scope, cadence, timezone and read budget and show the concrete proposal. Creation requires a host operation proven to create it atomically paused/disabled and an authoritative read-back. Activation is a separate explicit choice after read-back. If the host cannot prove atomic paused creation, leave it uncreated.\n\nResearch and review only. Never place, simulate, cancel or modify trades; change live/paper mode or policy; alter accounts or watchlists; create alerts; send messages; or create, enable, disable or modify schedules while running. Preserve the selected endpoint and source identity. Do not fall back to another connection when the selected endpoint is absent, denied, unsupported or returns an error.\n\n## Per-run identity, consent and read budget\n\nAt the start of every run, confirm the selected endpoint and requested subjects, inspect current tools and relevant schemas/approval behavior, and verify continuing recurring-read consent covers these sources and subjects. Do not infer capability or authorization from connection name, OAuth, prior run, profile or general interest. If identity, source approval, host usability, scope or consent is missing or changed, stop and explain the gap.\n\nUse at most 6 actual read invocations for the entire run, including tool/schema and consent checks, selected journal reads, source reads, read-backs and retries. Count failed calls. At most one transient read retry is allowed with backoff and jitter when enough budget remains. Never retry an uncertain write or exceed the cap.\n\n## Optional persistence\n\nDo not persist by default. Only an explicit request in the current interaction to save an update, a valid instance receipt and a verified authorized write path may permit appending a journal revision or updating its scoped snapshot. Preserve prior revisions. Reserve enough reads to verify every write before starting; if the budget does not allow that, do not write. Claim it was saved only after authoritative read-back. No unrelated account, connector, policy, watchlist, alert or schedule changes are allowed.",
  "creationState": "not_created",
  "description": "Reassess up to three selected journal ideas against approved public evidence while preserving prior decisions.",
  "enabled": false,
  "id": "coinvest-thesis-review",
  "maxReadCalls": 6,
  "name": "Thesis review",
  "proposedSchedule": {
    "cron": "30 17 * * 1-5"
  },
  "requiredScope": {
    "journal": {
      "readRequired": true,
      "writePolicy": "setup_receipt_and_readback_only"
    },
    "privateAccount": {
      "fields": [],
      "readRequired": false
    },
    "recurringConsent": {
      "required": true,
      "scope": "selected_sources_and_subjects"
    },
    "source": "approved_public_research",
    "subject": "selected_journal_ideas"
  }
}
```

### Weekly playbook
```json
{
  "content": "# Weekly playbook\n\nUse only themes or a watchlist the user supplied and the approved public sources they selected for this workflow. Never read or change a connected account watchlist. For a scheduled run, use current evidence only when the selected endpoint exposes an approved source and the evidence is fresh enough. A one-off may analyze supplied or fictional inputs without OAuth; identify them accurately and do not imply current or scheduled coverage.\n\nPrepare up to three useful scenarios when the evidence supports them. Explain the catalyst, source and time, why it may matter, what could undermine it, and what remains uncertain. Before choosing or suggesting any new ticker, first fetch the selected Co-Invest endpoint's current available-market catalog in this turn and resolve exact instrument, venue, product/contract and quote against returned supported results. Suggest only confirmed matches. Treat limited results as a candidate pool, not a complete universe. A user-named instrument may be analyzed, but if unsupported or unresolved, explain that status without recommending it or substituting another ticker. Omit any candidate whose current returned details do not establish its exact identity and support. If the current lookup fails or no candidates can be verified, suggest no new tickers; offer non-ticker market context or connection instead. Never use a general-research or availability-disclaimer fallback to recommend an unsupported candidate. Use conversational prose without forced headings or PASS/WATCH/PLAN labels. Do not invent a scenario or promise returns. A conditional plan is for human consideration and never authorizes execution.\n\n## Execution limits\n\nThis JSON is an inert public template: `creationState` is `not_created`, `enabled` is `false`, and its cadence, in the user's own local timezone, is only a proposal. A one-off run does not establish scheduled coverage. This workflow cannot create or activate itself. After the person selects it, resolve its subjects, source connection, scope, cadence, timezone and read budget and show the concrete proposal. Creation requires a host operation proven to create it atomically paused/disabled and an authoritative read-back. Activation is a separate explicit choice after read-back. If the host cannot prove atomic paused creation, leave it uncreated.\n\nResearch and review only. Never place, simulate, cancel or modify trades; change live/paper mode or policy; alter accounts or watchlists; create alerts; send messages; or create, enable, disable or modify schedules while running. Preserve the selected endpoint and source identity. Do not fall back to another connection when the selected endpoint is absent, denied, unsupported or returns an error.\n\n## Per-run identity, consent and read budget\n\nAt the start of every run, confirm the selected endpoint and requested subjects, inspect current tools and relevant schemas/approval behavior, and verify continuing consent covers these sources and subjects. Do not infer capability or authorization from connection name, OAuth, prior run, profile or general interest. If identity, source approval, host usability, scope or consent is missing or changed, stop and explain the gap.\n\nUse at most 8 actual read invocations for the entire run, including catalog/schema checks, source reads, consent checks, read-backs and retries. Count failed calls. At most one transient read retry is allowed with backoff and jitter when enough budget remains. Never retry an uncertain write or exceed the cap.\n\n## Optional persistence\n\nDo not persist by default. Only an explicit request in the current interaction to save an update, a valid instance receipt and a verified authorized write path may permit an append-only journal or snapshot update. Preserve history. Reserve enough reads to verify every write before starting; if the budget does not allow that, do not write. Claim persistence only after authoritative read-back. No unrelated account, connector, policy, watchlist, alert or schedule changes are allowed.",
  "creationState": "not_created",
  "description": "Prepare up to three conditional scenarios for the coming week from user-selected themes or a supplied watchlist.",
  "enabled": false,
  "id": "coinvest-weekly-playbook",
  "maxReadCalls": 8,
  "name": "Weekly playbook",
  "proposedSchedule": {
    "cron": "0 18 * * 0"
  },
  "requiredScope": {
    "journal": {
      "readRequired": false,
      "writePolicy": "setup_receipt_and_readback_only"
    },
    "privateAccount": {
      "fields": [],
      "readRequired": false
    },
    "recurringConsent": {
      "required": true,
      "scope": "selected_sources_and_subjects"
    },
    "source": "approved_public_research",
    "subject": "selected_themes_or_watchlist"
  }
}
```

## Five current daily preset source documents

These complete JSON files are inert library sources. Their names, slugs, schedules, scopes and bodies are preserved exactly; their presence here grants no recipe-import, creation or activation authority.

### Daily news, signals and opportunities

```json
{
  "name": "Daily news, signals and opportunities",
  "slug": "coinvest-daily-research-brief",
  "description": "Daily at 08:30: one daily briefing with fresh news, evidence-backed signals and a ranked opportunity shortlist. Initially paused; research only, no trading or account changes.",
  "content": "Run only after the host created this routine paused and the user separately chose activation. This routine is research-only.\n\n1. Confirm the bot instance setup receipt, user-selected approved research source, and the host's current tool metadata. If the receipt, source, or required schema is missing, stop and explain the gap. Never switch endpoints or invent a source.\n2. Use at most 8 read calls, including tool and market-catalog validation. Read only public or explicitly approved research data. Never read balances, orders, positions, policies, credentials, or other account state.\n3. Use the brief scope configured by the user: theme or instrument, venue and asset type when known, and horizon. If the needed evidence is unavailable, explain what is missing rather than filling the gap from memory.\n4. Gather recent news and evidence. Before choosing or suggesting any new ticker, first fetch the selected Co-Invest endpoint's current available-market catalog in this turn and resolve exact instrument, venue, product/contract and quote against the returned supported results. Suggest only confirmed matches, up to three when evidence supports them; do not fill a quota. Treat limited results as a candidate pool, not a complete universe. A user-named instrument may be analyzed within scope, but if unsupported or unresolved, explain that status without recommending it or substituting another ticker. Omit any candidate whose current returned details do not establish its exact identity and support. If the current lookup fails or no candidates can be verified, suggest no new tickers; offer non-ticker market context or connection instead. Never use a general-research or availability-disclaimer fallback to recommend an unsupported candidate. Explain supported evidence, why it may matter, the strongest counterpoint, sources and times, freshness, and material uncertainty in concise natural language. Do not require fixed headings or a final PASS/WATCH/PLAN label.\n5. Do not write a journal or desk snapshot automatically. Only an explicit request in the current interaction to save an update, a valid instance receipt and a verified authorized write path may permit persistence. Preserve history and read back every write before claiming it was saved.\n\nNever place, simulate, cancel, or modify a trade; change paper/live mode or policy; alter connector permissions; create, enable, disable, or delete schedules; create alerts; access the author's state; write outside this bot instance; or send email, chat, notifications, or other outward messages. A saved watchlist or desk snapshot is not monitoring. Emit the local event coinvest.routine_completed with slug coinvest-daily-research-brief only when the run actually completes, and coinvest.routine_skipped with the reason when it stops early. Without an approved current source, analyze supplied material only and say that no current brief was produced. Never impersonate a live feed.",
  "_schedule": {
    "cron": "30 8 * * *",
    "enabled": false
  }
}
```

### Evening leaderboard inspiration

```json
{
  "name": "Evening leaderboard inspiration",
  "slug": "coinvest-leaderboard-inspiration",
  "description": "Daily at 19:00: public Co-Invest leaderboard themes with up to three ideas to research. Initially paused; no copying traders or account changes.",
  "content": "Run only after the host created this routine paused and the user separately chose activation. This routine is research-only.\n\n1. This routine requires the Co-Invest leaderboard tools, for example leaderboard_data; use leaderboard_rank only if the user requested their own standing when enabling the routine. Use Co-Invest at https://coinvest.liquid.trade/mcp?profile=all. Use these tools only when the current catalog exposes them after OAuth and this routine has the required approval. Otherwise stop and explain that the selected endpoint does not provide the leaderboard. Never estimate or invent rankings, returns, markets or names.\n2. Use at most 5 read calls. Read only public leaderboard data and the selected Co-Invest endpoint's current public market catalog; read the user's own rank only when they asked for it. Count the catalog lookup within the same five-call budget.\n3. Briefly summarize the returned period and any market or trading-style themes the data supports. Use public display names only when useful. Never repeat wallet addresses, account identifiers or order IDs.\n4. Before choosing or suggesting any new ticker from leaderboard evidence, first fetch the selected Co-Invest endpoint's current available-market catalog in this turn and resolve exact instrument, venue, product/contract and quote against returned supported results. Suggest only confirmed matches, up to three when supported; a leaderboard mention alone is not catalog confirmation. Treat limited results as a candidate pool, not a complete universe. If the catalog is unavailable, stale, incomplete or identity is unresolved, suggest no new tickers; offer non-ticker market themes or connection instead. Never use a general-research or availability-disclaimer fallback to recommend an unsupported candidate. Explain why each supported idea may be interesting and its main limitation. Never copy or mirror a trader's positions or orders, and never imply the leaderboard proves a strategy will work.\n\nNever place, simulate, cancel, or modify a trade; change paper/live mode or policy; alter connector permissions; create, enable, disable, or delete schedules; create alerts; or send email, chat, notifications, or other outward messages. This is one scheduled read in the user's own local timezone, not live monitoring or alerts. Emit the local event coinvest.routine_completed with slug coinvest-leaderboard-inspiration only when the run actually completes, and coinvest.routine_skipped with the reason when it stops early.",
  "_schedule": {
    "cron": "0 19 * * *",
    "enabled": false
  }
}
```

### Afternoon opportunities

```json
{
  "name": "Afternoon opportunities",
  "slug": "coinvest-opportunities",
  "description": "Daily at 16:30: up to three evidence-backed research ideas matched to your stated interests and the selected endpoint’s supported market catalog. Initially paused; no trading or account changes.",
  "content": "Run only after the host created this routine paused and the user separately chose activation. This routine is research-only.\n\n1. Use only interests and horizon the user configured for this routine. If none are recorded, either stop and request a scope or clearly describe any permitted broad scan as unpersonalized.\n2. Use at most 8 read calls, including current tool and market-catalog validation. Use only tools the selected endpoint currently exposes. Never read balances, orders, positions, policies, credentials, or other account state.\n3. Before choosing or suggesting any new ticker, first fetch the selected Co-Invest endpoint's current available-market catalog in this turn and resolve exact instrument, venue, asset type, product/contract and quote currency against returned supported results. Offer only confirmed matches, up to three when the sources support them; do not fill a quota. Treat limited results as a candidate pool, not a complete universe. A user-named instrument may be analyzed within scope, but if unsupported or unresolved, explain that status without recommending it or substituting another ticker. Omit any candidate whose current returned details do not establish its exact identity and support. If the current lookup fails or no candidates can be verified, suggest no new tickers; offer non-ticker market context or connection instead. Never use a general-research or availability-disclaimer fallback to recommend an unsupported candidate. Do not silently substitute a related stock, token, index, contract or venue.\n4. Keep each idea concise: the catalyst and source/time, why it may matter, the strongest counterpoint, and what remains unknown. Do not force Observed/Inference/Unknown headings or a PASS/WATCH/PLAN label.\n\nNever place, simulate, cancel, or modify a trade; change paper/live mode or policy; alter connector permissions; create, enable, disable, or delete schedules; create alerts; or send email, chat, notifications, or other outward messages. This is one scheduled read in the user's own local timezone, not live monitoring or alerts. Emit the local event coinvest.routine_completed with slug coinvest-opportunities only when the run actually completes, and coinvest.routine_skipped with the reason when it stops early.",
  "_schedule": {
    "cron": "30 16 * * *",
    "enabled": false
  }
}
```

### Daily portfolio review

```json
{
  "name": "Daily portfolio review",
  "slug": "coinvest-portfolio-review",
  "description": "Daily at 07:30: a read-only Co-Invest portfolio review with supported exposure, risk and open-order details. Initially paused; no trading or account changes.",
  "content": "Run only after the host created this routine paused and the user separately chose activation. This routine reads private account data and changes nothing.\n\n1. Confirm OAuth for the exact selected Co-Invest endpoint (https://coinvest.liquid.trade/mcp?profile=all) and explicit recurring-read consent covering that endpoint, account, mode and fields. If any is missing, stop and explain that no review was produced. Never switch endpoints or ask for credentials in chat.\n2. Use at most 6 read calls, including live tool/schema checks. Read only account fields the selected endpoint exposes and the user's approval covers, such as portfolio, open orders or mode when relevant. Count failed reads and do not exceed the budget.\n3. Summarize only the supported, consented account details that matter. Verify any displayed values against returned data. Mention liquidation price or distance only when the endpoint returns authoritative current values; otherwise say that information is unavailable and do not imply a position is safe. Do not include a full account dump.\n4. Explain material exposure or order risks in plain language, with the relevant as-of time and uncertainty. Do not require fixed headings or PASS/WATCH/PLAN labels. Never show wallet addresses, order IDs or other machine identifiers by default.\n\nNever place, simulate, cancel, or modify a trade; change paper/live mode or policy; alter connector permissions; create, enable, disable, or delete schedules; create alerts; or send email, chat, notifications, or other outward messages. This is one scheduled read in the user's own local timezone, not live monitoring or alerts. Emit the local event coinvest.routine_completed with slug coinvest-portfolio-review only when the review actually completes, and coinvest.routine_skipped with the reason when it stops early.",
  "_schedule": {
    "cron": "30 7 * * *",
    "enabled": false
  }
}
```

### Midday signals

```json
{
  "name": "Midday signals",
  "slug": "coinvest-signals",
  "description": "Daily at 12:30: evidence-backed signals for the markets you chose, with sources and uncertainty. Initially paused; research only, no trading or account changes.",
  "content": "Run only after the host created this routine paused and the user separately chose activation. This routine is research-only.\n\n1. Use only the scope the user selected for the routine, up to five markets, themes or a named watchlist. If no scope is recorded, stop and ask for one instead of picking markets.\n2. Use at most 8 read calls, including current tool/schema and market-catalog checks. Use only research tools exposed by the selected endpoint. Never read balances, orders, positions, policies, credentials, or other account state.\n3. For each user-selected market, summarize only signals returned by current sources, with source/time and relevant freshness. A headline alone is not a confirmed market signal. A user-named instrument may be analyzed within scope, but if unsupported or unresolved, explain that status without recommending it or substituting another ticker. Before choosing or suggesting any additional/new ticker, first fetch the selected Co-Invest endpoint's current available-market catalog in this turn and resolve exact instrument, venue, product/contract and quote against returned supported results. Suggest only confirmed matches. Treat limited results as a candidate pool, not a complete universe. Omit any candidate whose current returned details do not establish its exact identity and support. If the current lookup fails or no candidates can be verified, suggest no new tickers; offer non-ticker market context or connection instead. Never use a general-research or availability-disclaimer fallback to recommend an unsupported candidate.\n4. Rank at most three useful signals when supported. Explain why each may matter, a meaningful counter-signal, and what is still uncertain. Use plain language without fixed Observed/Inference/Unknown headings or a PASS/WATCH/PLAN label.\n\nNever place, simulate, cancel, or modify a trade; change paper/live mode or policy; alter connector permissions; create, enable, disable, or delete schedules; create alerts; or send email, chat, notifications, or other outward messages. This is one scheduled read in the user's own local timezone, not live monitoring or alerts. Emit the local event coinvest.routine_completed with slug coinvest-signals only when the run actually completes, and coinvest.routine_skipped with the reason when it stops early.",
  "_schedule": {
    "cron": "30 12 * * *",
    "enabled": false
  }
}
```
