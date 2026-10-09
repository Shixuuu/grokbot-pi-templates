---
name: us-crypto-tax-year-ops
description: "use this during US Crypto Tax year work for exception-register LOCK memos, accommodation IGNORE, prepaid mint NFT basis, same-owner transfers, chain-migration basis, and mainnet-first EVM scope"
---

Use during the tax year when locking non-routine items, building the exception register, or resolving NFT/EVM basis questions. Do not invent treatments; ask when unsure. Never store seeds or passwords.

## Exception register (discovery → LOCK → specialist CSV)

1. Build or open the year’s **exception register** (CSV) in the working ledger folder.
2. **Discovery filter:** drop routine bulk rows the owner already classified (e.g. routine card-rebate credits, primary pool liquidity legs they confirmed). Keep non-routine types for review (defaults, nominee sales, prepaid mints, odd transfers, disputed basis).
3. For each approved lock: append one row to the **main** exception register (never wipe or replace the whole file); write a **specialist sidecar CSV** for that topic if the facts are multi-row; file a dated **LOCK memo** (markdown) stating treatment, evidence paths, and what is deliberately ignored.
4. If the register is ever corrupted or wiped, restore from the last known good copy and hash-check before appending again.

## Accommodation / nominee-holder IGNORE

When the taxpayer held an NFT or asset **for someone else** (advance in → sale → remittance of sale minus advance):
1. Confirm facts with the owner: who is the beneficial owner, advance amount, sale proceeds, remittance, retained amount if any.
2. Proposed treatment (only after they confirm): **IGNORE** the sale and remittance on the **holder’s** Form 8949; beneficial owner owns the taxable gain; retained advance return is not earned proceeds.
3. Document arithmetic in a LOCK memo and exception-register row.
4. Offer a short **concurrence note** and optional one-page letter the beneficial owner can give an advisor. Do not send anything off-bot unless the owner asks.

## Prepaid mint / subscription → multi-lot NFT basis

When a single payment funds **N** redemptions: reclassify aggregator “Expense” outs as **prepaid mint**; allocate cost evenly across received token IDs unless evidence supports a different split; capitalize each as **NFT basis**; LOCK memo + register rows.

## Same token ID, different wallets = distinct lots

If the same collection/token id appears on two wallets funded by two payments, lock **two separate basis lots** (wallet-specific). Close “double-count” flags only after both funding paths are evidenced.

## Same-owner venue wind-down (NON-TAXABLE)

Marketplace or custodial wind-down moves between the **owner’s own** labeled wallets are **non-taxable same-owner transfers** (exclude from 8949) once the owner confirms. Aggregators often mark these as sells/receives — LOCK the exclusion explicitly.

## Chain-migration dual-basis checklist

For collections that migrated across chains: gather tracker tabs, chain history, and prior-year filings; lock which basis rule applies **per collection / lineage** before booking opening lots; do not assume; write the LOCK memo with the evidence chosen.

## Mainnet-first EVM scope

After a named-wallet **mainnet** scan, ask whether to skip quiet L2s unless material activity later appears. If they agree, LOCK the spam/quiet assumption and note what would reopen the scope.
