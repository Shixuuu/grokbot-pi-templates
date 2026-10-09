---
name: xrpl-unl-and-amendments
description: "use this when explaining XRPL consensus, the default UNL, amendments, overlap, or decentralization to people coming from Ethereum, Solana, or Bitcoin"
---

# XRPL UNL, amendments, and the decentralization map

Use this as source-of-truth framing when explaining XRPL consensus to people coming from Ethereum, Solana, or Bitcoin. Prefer Docs MCP (`search_documentation` / `read_sections`, source `xrpl.org` or `XLS`) for Concepts/References and XLS process when connected; fall back to the HTTP links below. Do not invent amendment vote percentages — Known Amendments UI + explorer/`feature` RPC for live counts (Docs MCP does not replace live votes).

## The one analogy

Each XRPL server is a jury that only counts ballots from the names on its own guest list. That guest list is the UNL. Two juries with almost the same list certify the same winner. Two juries with different lists can honestly certify two different winners: a fork, two histories, no shared finality. Worst-case research (Chase/MacBrough 2018, arxiv 1802.07242) says those lists need roughly >90% overlap or a liar can show different ballots to different courts. That is why "just pick your own validators" is technically true and practically a trap.

## Four jobs people mash into "decentralized"

1. **Who writes the amendment.** Anyone can open an XLS and a rippled PR. RippleX (Ripple's core-dev shop) writes most production ones. That is practice, not a protocol privilege.
2. **Who votes it onto mainnet.** Not "the network" and not every hobby validator. More than 80% of the names on *your* UNL, continuously for two weeks. On default config that is the dUNL (~35). A validator nobody lists is shouting into a void.
3. **Who publishes the recommended guest list.** XRPL Foundation at https://unl.xrplf.org (public PRs to https://github.com/XRPLF/unl, 3x UNL-team approval, first-Tuesday monthly promote). Ripple still publishes https://vl.ripple.com. Default xrpld subscribes to both. Publishers do not vote in consensus. They decide who gets listened to by people who take the default.
4. **Whose votes your server counts.** The operator has full control of the local UNL. Overlap math is what keeps almost everyone on the published list.

## How a feature ships

Idea → XRPL-Standards discussion → XLS Draft (editors assign a number; they do not decide what ships) → code in XRPLF/rippled → release makes it *votable*, usually DefaultNo → flag ledger every 256 ledgers (~15 min) → more than 80% of trusted validators for two straight weeks → EnableAmendment pseudo-tx → new rules apply. Drop under 80% even once and the clock restarts. Silence is not-yes. Once enabled, old binaries become amendment-blocked. Only a new amendment can undo it.

Ripple's one validator cannot pass something alone. One independent operator cannot block it alone. A bloc over 20% of the UNL stops 80%. That is the designed veto, and why "independent" is real and bounded.

Fee and reserve voting is a different process (median of trusted validators, same flag-ledger cadence). Do not mix them.

Live Foundation dUNL (XRPLF/unl `data/unl-raw.yaml`, as of 29 Aug 2026): 35 named operators. Ripple is one (`ripple.com`). Others include universities (Berkeley Haas, ANU, Waterloo, UNC, Kansas, Nicosia), exchanges (Bitso, Bitrue, Gatehub), explorers/infra (Bithomp, XRPSCAN, XPMarket, XRPL Labs, XRPL Commons, Interledger), plus independent shops. `squidrouter.com` was added 18 Feb 2026. Axelar is the related interop stack; it is not a named dUNL hostname on that yaml.

## University seats and UBRI (address this, do not skip)

Several dUNL names are universities. Some hostnames still include `ripple.` (e.g. Waterloo, UNC, Kansas). Ripple's University Blockchain Research Initiative (UBRI, since 2018) funded academic partners and in several cases funded standing up an XRPL validator. That is a fair soft-capture argument: who paid for the seat.

Do not dodge it. Also do not treat those seats as a whip Ripple votes through. Cobblr Labs editorial line: the university operators are among the least participative node operators on the ledger. Sleepy inherited seats from a 2018 program are a different problem than a captured voting bloc. The actual progress is UNL churn toward operators who live in the ecosystem (Squid Router is the sourced 2026 example). When explaining, say both: origin of some seats is Ripple-funded academia, and those seats are quiet; newer independent operators are the churn that matters.

Do not invent a participation score. Do not claim Axelar is on the dUNL unless the live yaml says so.

## Halt vs fork

Official priority: correctness, then agreement, then forward progress. As long as fewer than 20% of trusted validators are faulty, consensus continues. Confirming an invalid transaction would require over 80% collusion. If more than 20% but less than 80% are faulty, the network **stops making progress** rather than fork. Negative UNL can later ignore unreliable trusted validators.

## Mental model for ETH / Solana / Bitcoin

Not PoS, not PoW, not 1-token-1-vote. Closest: "core devs write, operators activate." Not a Bitcoin soft fork (old nodes do not keep a minority chain). Not an Ethereum hard fork (no ETH/ETC split). Fees are burned; validators are not paid. Do not claim "XRPL has no MEV"; claim no classic "I mined this block so I order it."

## Fair criticism (say it out loud)

RippleX writes a lot of the code. Two publishers pick the jury. Overlap math means a meaningful alternative UNL is mostly theoretical on mainnet. Inattentive operators inherit default votes. FAQ "80% of the network" is sloppy; it is 80% of your UNL. Some university dUNL seats trace to Ripple-funded UBRI validators; that is a real conflict-of-interest smell.

## Fair defense (also true)

The 35 are named independents. Ripple is 1 of 35. 80% for two weeks is a high activation bar. UNL process is public. Anyone can run a validator (Sybil votes do not count until humans add you). Amendments show up on-chain as EnableAmendment. No stake-weighted capture. University seats exist, but they are not the active operator class; recent dUNL additions are ecosystem operators, not more campus boxes.

## Do not claim

- Fully permissionless like Bitcoin
- Ripple cannot influence the ledger (they write code, publish a list, run 1 validator, are a Foundation founding member, funded UBRI)
- A hobby validator's vote counts
- You can freely choose any UNL with no risk
- It is PoS / DPoS / 1 token 1 vote
- 60% overlap is enough
- Cobalt or a looser-UNL protocol is live
- Specific live amendment percentages without re-fetching https://xrpl.org/resources/known-amendments
- Universities appeared independently of Ripple funding
- Axelar is a dUNL validator unless the live list names it

## Primary URLs

- Docs MCP endpoint: https://mcp.xrpledger.ai (AI tools index: https://xrpl.org/resources/dev-tools/ai-tools)
- Amendments: https://xrpl.org/docs/concepts/networks-and-servers/amendments
- UNL: https://xrpl.org/docs/concepts/consensus-protocol/unl
- Consensus: https://xrpl.org/docs/concepts/consensus-protocol
- Known Amendments: https://xrpl.org/resources/known-amendments
- Foundation UNL: https://github.com/XRPLF/unl and https://unl.xrplf.org
- Overlap paper: https://arxiv.org/abs/1802.07242
- XLS-1: https://xls.xrpl.org/xls/XLS-0001-xls-process.html
