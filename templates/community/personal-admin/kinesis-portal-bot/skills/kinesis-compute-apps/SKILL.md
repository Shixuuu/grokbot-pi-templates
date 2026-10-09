---
name: kinesis-compute-apps
description: "Use when someone wants to get a machine or run an app on Kinesis Network: project, App Gallery or wizard (GitHub/DockerHub/Docker Link/upload), Serverless or Grid, choose/provision servers, Wake/Hibernate, Monitoring and Cost Analysis, then stop so credits do not keep burning."
---

# Kinesis compute apps

You operate the **Compute** side of [portal.kinesis.network](https://portal.kinesis.network). Live UI wins over this file and over [docs.kinesis.network](https://docs.kinesis.network). URLs: [kinesis-network-links](sand-workflow:kinesis-network-links).

Do not invent buttons or SKUs you have not just seen. Do not hold wallets or keys. Do not leave paid compute running.

## Model

A **project** groups **apps** (containers). At launch pick **Serverless**, **New grid**, or **Use an existing grid**. You do not pick a specific stranger’s machine. Shared/Serverless and Grids pull from the pool. Grids can be shared across apps or accounts ([Understanding Grids](https://docs.kinesis.network/getting-started/running-llms-with-kinesis-network/understanding-grids)).

How-it-works “grid” is the global pooled fabric. Product **Grids** are org-scoped resource groups. Keep those distinct.

Docs still mention a “Location” wizard step. Live wizard is **Source / Runtime / Network / Execution / Resources**.

LLM positioning and True-Util: [Running LLMs](https://docs.kinesis.network/getting-started/running-llms-with-kinesis-network). True-Util applies to Shared/Serverless, not to reserved Grids.

## Compute sources (docs)

[Understanding Compute Sources](https://docs.kinesis.network/getting-started/running-llms-with-kinesis-network/understanding-compute-sources):

- **Shared Compute** (live: Serverless): Kinesis-managed, multi-tenant, pay-per-use. Docs: billed by CPU milliseconds, GPU milliseconds, RAM and VRAM bytes used. If the app is idle and not using CPU or GPU, no corresponding compute charges. Suited to prototyping and non-critical work. Skip this section in docs if an admin already shared Grids with the account.
- **Grids**: compute you control (Kinesis-provisioned or your own). Billed on reserved time. **Full price when active**: one or more apps not Stopped (Running or Starting). **Storage-only when hibernated**: no apps, or all apps Stopped. An app can use multiple pools.

Quote live portal rates. Do not invent millisecond prices.

Docs have **no** Getting Started page for provision / Wake / Hibernate / Deprovision. Those exist on live My Servers. Live UI wins.

## Sidebar (Compute)

App Management: My Projects, App Gallery. Compute Cloud: My Servers, My Grids. Observability: Monitoring, Cost Analysis. Account: Billing (Balance and Payment, Invoices), Settings, Support. Footer: Credits.

Projects: https://portal.kinesis.network/dashboard/projects

## Project and gallery

My Projects → `+ New Project`. Card menu: Start Apps, Stop Apps, Share, Rename, Delete.

App Gallery: https://portal.kinesis.network/dashboard/gallery
Docs: https://docs.kinesis.network/getting-started/running-llms-with-kinesis-network/creating-apps-with-app-gallery

Categories: LLMs with Open WebUI, vLLM Multi-GPU, General Purpose. Template sheet: **Quick Launch** or **Customize First**. Match the template to the workload: General Purpose / No GPU for a tiny monitor; LLM or multi-GPU templates when the task is that. Always quote the on-screen cost and confirm before Launch.

## Wizard

Docs (stale names): https://docs.kinesis.network/getting-started/running-llms-with-kinesis-network/creating-an-app-from-scratch

1. **Source** — GitHub (Beta), DockerHub (image+tag, optional registry auth), Docker Link, Upload. Docs omit Upload; live Source has it.
2. **Runtime** — env vars, ENTRYPOINT/CMD, post-start.
3. **Network** — ports / load balancer, custom domain, inbound allowlist.
4. **Execution** — Service / Tasks / Scheduled (coming soon). Preemptable, Auto-Scale, min/max replicas. Restart Policy: Restart Mode (Always), Start Timeout, Max Error Tolerance, Max Retries Per Node.
5. **Resources** — New grid / existing grid / Serverless. Memory, storage, GPU accelerator (or No GPU). Geographic: Most Cost Effective or Customize (US East/Central, Canada East/Central, Europe West). Estimated monthly cost is shown. **Launch App**.

**New grid → Advanced → Hold Behavior**
- Default: **Release spot instances when idle**.
- **Keep warm — Hold machines while your apps are stopped. You keep paying for them.**
- Idle release cooldown (minimum 5 minutes; UI has shown 15 minutes).

After launch: Logs, Terminal, Metrics, History, Config, endpoint URL. Public URL may 503 until the load balancer is ready. Then **Stop Apps**. Delete the app if the owner wants it gone.

## Choose a server (My Servers)

https://portal.kinesis.network/dashboard/my-servers Empty: **Add Servers**.

- **From Cloud Providers**: provider Kinesis; region e.g. Canada Central ca-central; Instance Type; count; storage GB; **Provision Servers**.
- Catalog mixes cheap CPU rows (e.g. Compute Micro) and GPU rows (A4000, A100, H100, …). Pick the row that matches the workload. Quote **Total when Active** vs **Total when Hibernated** from the screen that day. Confirm before Provision.
- **Bring Your Own**: install command with a short-lived `PROVISION_TOKEN`. Never paste the token into chat. Do not run it on a random laptop.

Provisioning can sit on **Awaiting … Queuing…** and disappear without billing. If the row never becomes selectable, do not claim the server exists.

Bulk actions (need a selected node): **Wake**, **Hibernate**, **Smart Lifecycle**, Add to grid, Remove from grid, Deprovision, Clear.

Hibernate is **explicit** on owned servers, not only automatic. Docs: a grid server bills full price while any app is Running/Starting, and storage-only when all apps are Stopped (hibernated).

## Grids

https://portal.kinesis.network/dashboard/grids
Create Grid: name, Add Dedicated, Add Spot, Choose an Existing Instance. Empty grid with 0 machines may **silently reject** Create Grid — do not invent a success. Spot dialog can default to H100; if the task does not need GPU, change it; if it does, quote the on-screen rate and confirm.

In-grid “Choose an Existing Instance → Save changes” has failed to persist. Workaround that worked: My Servers → select node → **Add to grid**.

## Watch

Docs: [Monitoring Apps](https://docs.kinesis.network/getting-started/running-llms-with-kinesis-network/monitoring-apps)

After launch it can take about a minute to provision. Endpoints are upper right. Tabs: **Logs** (per server if multiple), **Terminal** (SSH into the container per server tab), **Metrics** (live or custom range). Live UI has also shown History and Config.

Monitoring sidebar is empty until an app exists. Cost Analysis: actual / forecast / budget, date ranges, cost by project/provider/resource.

## Billing and settings (read unless asked)

Billing: credit balance, payment card, Add Funds (do not click unless asked), auto-reload Edit (threshold / top-up, Cancel if only looking), Redeem voucher (do not redeem unless asked), Credits vs Charges, invoices Download. Never handle card numbers; the owner types those in the portal.

Settings on a Google-login account has shown: Personal information, Theme, SSH keys only. Do not add keys or change name unless asked.

## Hard rules

1. Quote estimated cost before Launch App or Provision Servers. Confirm spend. Then pick the hardware the task actually needs, GPU included.
2. Do not invent SKUs or prices. Use what is on the screen that day.
3. Stop or deprovision before you leave so credits stop burning.
4. Provide / listing machines is [kinetization-of-idle-compute](sand-workflow:kinetization-of-idle-compute).
