---
name: kinetization-of-idle-compute
description: "Use when someone wants to lend or list idle machines on Kinesis (Provide, Fleet, list as spot, Pause, Remove, earnings) or mentions kinetized compute. Live portal wins; if Agree & start providing is gated, stop and say so."
---

# Kinetization of idle compute

You **run Provide** for the machine owner. Live UI at [portal.kinesis.network](https://portal.kinesis.network) wins over this file and over [docs.kinesis.network](https://docs.kinesis.network). Demand-side apps are [kinesis-compute-apps](sand-workflow:kinesis-compute-apps). URLs: [kinesis-network-links](sand-workflow:kinesis-network-links).

**Customer** = grid renter. Skill user = **machine owner**.

Kinetized compute is a **whole machine** listed as **spot**. A Grid uses it when **Rented**. Customers do not pick this host by name.

## Hard rules

1. Do not invent fees, take rate, You earn, or payout rails. Docs do not publish dollar amounts.
2. Never print provision tokens, node keys, SSH keys, or passwords.
3. Confirm before Pause, Remove, Withdraw, uninstall, or power-off.
4. Do not Remove / uninstall / power off while **Rented** unless the owner accepts the lease rules below.
5. Do not list the agent computer as a provider host unless the owner said that machine is the one to onboard.
6. Choose the owner’s OS in Add machines.
7. Keep the machine powered, on the network, and running the Kinesis agent for the listed window.

## Identity firewall (docs)

[What is Kinetized Compute?](https://docs.kinesis.network/getting-started/kinetization-of-idle-compute/what-is-kinetized-compute)

- Customers see hardware, location, and a Kinesis price. They do not see who the provider is.
- Providers see **Idle** or **Rented**. They do not see the renter or the app.
- You do not pick the customer or the app.

## Access

Flip **Provide**.

### Start providing gate

Live path: https://portal.kinesis.network/dashboard/provider/apply Copy: “Start providing / Turn idle GPUs into income on the Kinesis network.” Cards: Plug in, Get rented, Earn monthly.

There is a **Kinesis Network Supply Agreement** (sections 1–8). Live UI has shown §8 as a placeholder pending final legal review, and **Agree & start providing** may not navigate even with the checkbox ticked (Fleet then redirects to apply).

If Agree does not work: stop, tell the owner Fleet is gated, and do not pretend you listed a machine.

If Agree works: only click it when the owner explicitly accepts the agreement.

### After Fleet exists

| Surface | URL |
|---|---|
| Fleet | https://portal.kinesis.network/dashboard/provider/fleet |
| Availability & Pricing | https://portal.kinesis.network/dashboard/provider/availability-pricing |
| Earnings | https://portal.kinesis.network/dashboard/provider/earnings |

Docs: [Kinetization](https://docs.kinesis.network/getting-started/kinetization-of-idle-compute), [What it is](https://docs.kinesis.network/getting-started/kinetization-of-idle-compute/what-is-kinetized-compute), [Expectations](https://docs.kinesis.network/getting-started/kinetization-of-idle-compute/expectations-from-providers), [Onboard](https://docs.kinesis.network/getting-started/kinetization-of-idle-compute/onboard-your-compute), [Earnings](https://docs.kinesis.network/getting-started/kinetization-of-idle-compute/reports-performance-and-earnings), [Offboard](https://docs.kinesis.network/getting-started/kinetization-of-idle-compute/offboard-your-compute)

Onboard (when Fleet opens):

1. Add machines → choose environment → run install command **on the host** → Go to fleet.
2. Row **Needs setup** → Set up → window (Until I change it / Until a date), notice default 24 hrs, You earn filled from specs → **List as spot capacity**.
3. Row becomes **Idle**. The machine can be matched. Earnings start when **Rented**.

Statuses: Needs setup (not listed), Idle (listed, unpaid), Rented (a Grid is using it; earnings accrue).

Idle after listing is normal. Stay listed. Do not list twice. You earn **only while Rented**.

**You earn** is the hourly payout Kinesis sets from the machine’s specs. While Rented it is **locked**.

### Lease / window ([Expectations](https://docs.kinesis.network/getting-started/kinetization-of-idle-compute/expectations-from-providers))

- Extend the window anytime, including while Rented. Extending is free.
- Shortening or withdrawing a committed window during a lease is a **contract violation with a monetary consequence**. Amount is not published. Do not invent it.
- Pause while Rented stops **new** rentals; the current rental continues.
- Remove becomes available after the current lease ends. Do not promise the machine back tonight.

### Earnings ([Reports](https://docs.kinesis.network/getting-started/kinetization-of-idle-compute/reports-performance-and-earnings))

Earnings accrue hourly while Rented. Payouts monthly. Before any rental: **No earnings yet**. After rented hours: **Accrued this period**, **Balance owed**, **Paid out to date**, **Next payout**.

How-it-works also says contributing idle resources can earn **credits**. Kinetization pages speak of monthly payouts. Docs do not reconcile those. Do not pick one as the only truth.

### Offboard ([Offboard](https://docs.kinesis.network/getting-started/kinetization-of-idle-compute/offboard-your-compute))

- **Pause** — withdraws from spot, stays onboarded. Relist with Set up → List as spot capacity. Idle → Needs setup. Confirm: Pause anyway.
- **Remove** — withdraws the listing and uninstalls the Kinesis agent. To use the host again, run the install command. Confirm: Remove machine.

## Failures

| Symptom | What to do |
|---|---|
| Agree button no-ops / fleet redirects to apply | Gate is broken or not enabled for this account. Stop. |
| No Provide | Wrong toggle or account. |
| Install fails | Fresh command on the host. |
| Host never Needs setup | Agent did not register. |
| Remove while Rented | Explain lease. Offer Pause for new rentals only. |

## Support

Portal Support, https://docs.kinesis.network/support, Discord https://discord.gg/ur9g7EctPt, email support@kinesis.network.
