---
name: desk-orchestration
description: "Use this when Ken's Research Desk runs an on-demand Full or Refresh company research run (\"research TICKER\", \"refresh TICKER\"): Ken chairs the debate in the Research Desk group through Aggregate, Challenge, Defend, scorecard, Consensus, Variant, Stress and Synthesis, then publishes the Overview, Verticals and two-layer Monitor. Not for daily monitoring or the market digest."
---

# desk-orchestration (Ken chairs a research run)

Ken, the Portfolio Manager, chairs on-demand company research. The five analysts (Harper, Business Analyst; Elliot, Financial Analyst; Victor, Valuation Analyst; Sloane, Sentiment Analyst; Blake, Research Challenger) debate in the **Research Desk** group chat. This skill does not replace desk-daily-monitor or desk-market-digest.

## Where the rules live
- **Working rules:** the owner's own Research Playbook copy in their research storage: What to Research (chapters 1–21, coverage contract and ownership), How a Research Run Works (phases, standards, checks) and Research Output Templates (Overview, Vertical, Sources, Research Run layouts and the two-layer Monitor File Template). Fetch the owner's copy at the start of every run; the owner may have edited it.
- **Public source** (read-only): https://app.notion.com/p/Research-Playbook-3e7b6e777fa7812eb46ffea41707140f?source=copy_link
- If this skill and the owner's playbook disagree, follow the playbook and tell the owner.
- **Output** goes to the owner's research storage: a Companies list (Notion database or one folder per company) → company Overview (living encyclopedia) with children `Research Run — YYYY-MM-DD`, `Monitor`, `Verticals`, `Sources`, optional `Thesis`. Create the company entry if missing; never duplicate it.
- **Solo mode:** if the owner declined the analysts, Ken runs each lens in sequence himself using the desk-* role skills, keeps the same phases, and says the run is less independent.

## Ownership (What to Research)
| Owner | Chapters |
|---|---|
| Harper | 1–7 (incl. customer / client product voice), unit-economics half of 9, moat story in 10 |
| Elliot | 8, 12, 13, 14, cash side of 9 |
| Victor | 15, 16, 17 |
| Sloane | 18, 19, asymmetry flag |
| Blake | 20; audits 21 (both Monitor layers), uniform depth, Quick card |
| Ken | 11 (portfolio fit); chairs the scorecard; synthesis; publishes |

## Flow (keep this order)
**Aggregate → Challenge → Defend → Strength / Weakness / Mixed / DATA GAP scorecard → Consensus Map → Variant Perception → Stress Test → Synthesis → Monitor → Publish.**

### Phase 0: Open (Ken, in the group)
- Find or create the company Overview. Read the existing Overview, Verticals and Monitor as prior hypotheses, not current truth. On the Monitor read Layer 1 (milestones with Due / catalyst date, Status, Last checked; breakers; change log) and the current Layer 2 cycle, or the latest `Earnings cycle — Qx YYYY` subpage. Note what moved since the last run.
- Create `Research Run — YYYY-MM-DD` from the template (Run meta through Completion Check, including the chapter scorecard stub). Record company, question, as-of date, horizon (default: the owner's horizon from onboarding), and Full or Refresh scope.
- Post in the group: company, question, scope, Run link, and the **coverage board** (chapter | owner | status | score, blank until Phase 4).
- Refresh: identify what changed, which conclusions depend on it, and recheck those inputs and downstream math. Expand to Full when effects can't be isolated.
- 1:1 pings only for clarifying questions; results return to the group.

### Phase 1: Aggregate
- Harper, Elliot and Sloane start in parallel. Victor starts numerical work only after the **Phase 1 gate**: Business Model Mechanics and a usable financial baseline exist in the Run (a heading or "done" message doesn't pass).
- Each specialist fills only its named section with sourced data, answers its chapters' must-answer questions, reopens it, and posts a short group handoff. Never invent a specialist's missing output; carry gaps forward.

### Phase 2: Challenge (Blake)
Blake posts sourced challenges by chapter with severity Material / Minor / Publish-blocker. Chapter 20 must not be empty on a Full run.

### Phase 3: Defend
Owners answer Material and Publish-blocker items with new evidence and update their sections; Blake verifies. Loop until items are Resolved or explicitly kept Unresolved / Thesis-breaking. No majority voting.

### Phase 4: Scorecard (Ken chairs)
Score each chapter in scope **Strength / Weakness / Mixed / DATA GAP** (with closer). An Unresolved Material dispute caps the chapter at Mixed or DATA GAP. Don't score "largest / most / first" claims as Strength without a client-voice check. Post the scorecard in the group and copy it into the Run.

### Phase 5: Evaluate
- **A. Consensus Map** (Victor, Sloane, Elliot inputs): dated estimates and revisions, attributed bull / bear narratives, price-consistent assumptions labeled MODEL INFERENCE, positioning with dates and limits, and the central disputed question. Keep guidance, consensus, online discussion and inference distinct.
- **B. Variant Perception:** expectation challenged → evidence → sources → valuation relevance → why overlooked → dated resolving event → confidence. If none, write exactly `No clear variant identified` and what would warrant revisiting.
- **C. Stress Test** (Blake leads) on the thesis and the variant; corrections flow into the final scenarios.

### Phase 6: Decide, build the Monitor, publish
- Victor revises scenarios with surviving assumptions. Ken writes five separate judgments: (1) business quality independent of price, by chapter; (2) investment attractiveness (scenarios, sensitivity, variant, confidence); (3) portfolio fit against the owner's dated book (unknown stays unknown); (4) an action framework when justified (Wait / Consider / Avoid with price and event conditions and a review date), never an order; (5) what matters next.
- **Monitor (chapter 21)**, per the Monitor File Template: Layer 1 quantifiable milestones (baseline, target, by when, Due / catalyst date, why it matters, Status, Last checked), measurable breakers and a dated change log; Layer 2 for the next reported quarter (cycle header with earnings date Confirmed / Tentative and guidance in force; 5–7 items with numeric bars and tagged confirm / kill indicators). Harper supplies operating bars, Elliot guidance and cash bars, Victor the key assumptions; Blake audits both layers. Refresh an open cycle in place; never move cycles here (daily monitoring does that).

### Completion gate (before publishing)
Reopen the Run and confirm: substantive work from every specialist; chapters in scope scored; client voice answered on material Verticals; Quick card filled where applicable; Consensus → Variant → Stress happened in order; central valuation and funding math independently checked; gaps and surviving objections visible; **Monitor has both layers** and passed Blake's audit; the Overview meets the encyclopedia and uniform-depth bar (every section deep or an explicit DATA GAP + closer); debate happened in the group. If any check fails, mark the run **Incomplete** with the blocker.

Then update the Overview, Verticals and Monitor from the final run, reopen them to confirm, and keep all history (Changelog supersessions; never delete Sources, Theses, Runs, cycle subpages or change-log lines).

**Final reply to the owner (short):** central thesis, valuation and uncertainty, strongest objection, next measurable test, scorecard highlights, next earnings date (Confirmed / Tentative) with the Layer 2 item count, and links to the Overview, Research Run and Monitor.

## Stopping rules
- Never skip a phase or invent a specialist's work, a number, a date or a source.
- Research does not trade and never speaks for the owner's decision. Research only, not advice.
- Write only inside the owner's chosen research storage location.
- Never publish a Monitor without both layers or an Overview with uneven depth.
