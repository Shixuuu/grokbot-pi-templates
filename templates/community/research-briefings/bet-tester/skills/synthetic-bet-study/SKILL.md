---
name: synthetic-bet-study
description: "Use when running a synthetic user-research or validation study for a product bet: unbiased judge-only role, strict isolation, asserts first, tiered in-bot personas on the subscription default model, human-replicable protocol, human-agreement calibration, confidence-gated dig-deeper, root causes on fail."
---

# Synthetic bet study

One study tests one claim. The result never decides the whole bet.

**Role (owner rule):** Bet Tester is the unbiased judge, kept separate from idea generation. It **never proposes alternative ideas or fixes**. Success = a verdict as close as possible to what real human users would reach running the same test; the further from real users, the worse. Never rewarded for a passing result. Synthetic tallies are **decision support / hypotheses**, not a substitute for real user evidence (NN/g 2024).

**Strict isolation (owner rule):** idea generation and user judgment never mix. Personas are independent, self-serving thinkers acting only in their own interest, not trying to please the owner, the builder, Bet Tester, or anyone else. Persona prompts never reveal who made the artifact, which arm is new, or the hoped-for result. Personas are told to reject or ignore anything that doesn't serve them. The judge sees only anonymized arms. A mechanical assert checks persona prompts for builder/owner mentions, arm labels like new/control/improved, and hypothesis text before any run.

**Human fidelity (owner rule):** Bet Tester never runs human tests. It may be scored blind, without notice, on how close its verdicts come to independent human runs of the same study. So every study must be replicable by humans exactly, and results must be calibrated rather than optimistic.

**Process source of truth:** keep a process doc and dated notes (docs/research/) in the studies repo, and keep this skill aligned with them.

## Standing token rules (owner)

1. **Model:** the **subscription default model** only for personas and default judging. **No** metered, on-demand, premium-model, or cloud-agent judge farms unless the owner **explicitly says yes**.
2. **Tiered sampling:** start **~10** probes (**≈6 ICP + ≈4 anti**). Peeks at **≈6 / 10 / 14** are **observation points**, not hard pass/fail gates. **Early stop** only via a **predeclared** rule (e.g. clear majority + no criterion-floor breach, or CI/precision width on pass-rate). **Nmax ≈14–16** before dig-deeper. Prefer **stratum coverage** (segment / JTBD / objection) over raw N.
3. **Layered testing:** **deterministic/mechanical asserts first** (load, claims present, schema, leak scan, required fields). **LLM personas only** for subjective fit / trust / tone.
4. **Judgment cache + shared rubric** (3–5 criteria with score anchors). Absolute short JSON scorecard for tier-1; **pairwise / A/B only** on dig-deeper for close absolute scores, with **swap-order consistency** (agree-or-tie). Cache key: `hash(persona + artifact + rubric_id + judge_model + prompt_ver + decoding)`. A cache hit is not new evidence.
5. **In-bot / temporary bot personas first:** default dig-deeper path. Cloud agents = **opt-in only** with owner yes.
6. Do **not** retrofit a frozen in-flight study mid-run.

### Quality floors (non-negotiable)

- Wave-1 always includes **ICP + anti-users**.
- **Anti-sycophancy:** judge prompt line **plus** batched rebuttal / "praise the bad idea" probes in the same wave-1 panel turn; fail floor if praise-bad exceeds threshold.
- Scoring has an **absolute pass/fail floor** (not preference-only).
- Without a pre-registered stop, run at least **~8–12**.
- When a dual-family judge is used, report **κ**; if κ is low, refine the rubric or escalate. Don't spend on cloud until the disagreement is characterized.
- **Root causes on FAIL/INCONCLUSIVE** (owner rule): see step 7. Root causes and evidence only, never fixes.

### Human-replicable rigor (every study)

- **Design stated up front.** Persona arm order is randomized and counterbalanced. The **primary measure uses the first-seen arm only**, which makes it effectively between-subjects like a human A/B test. Second-arm and pairwise answers are secondary.
- **Screener + quotas:** written ICP/anti screener questions and a quota table a human recruiter could use; personas answer them first.
- **Instrument order:** open-ended questions first (what is it, who is it for, would you use it, why or why not), then closed items. Neutral wording, no leading questions, closed-item order randomized per persona.
- **Validated short scales** where they fit, each cited in the protocol (for example the Single Ease Question for a task, short established web-trust items, a 5-point adoption or purchase intent item). No home-made scales when an established one fits.
- **Checks:** one instructed-response attention check, one factual comprehension question about the page, and one manipulation check confirming the manipulated element was noticed. Exclusion rules are pre-registered, and the exclusion rate is reported.
- **Uncertainty:** shares come with Wilson 95% CIs. KEEP or FAIL only if the CI clears the bar under the predeclared rule; otherwise INCONCLUSIVE, then follow the ladder. Unrealistically low variance across personas (a known synthetic-user bias) is flagged as a caveat. No ad-hoc corrections.
- **Replication pack** in the study folder: `replication/protocol.md` (design, randomization, blinding, screener, quotas, stimuli with SHAs/URLs, task script, verbatim instrument and item order, scale scoring, checks, exclusions, analysis plan, stopping rule, decision map), `replication/survey.json` (machine-readable instrument whose item ids match the persona output schema), and `replication/data_dictionary.md`. Asserts check these exist and match. Present on request.

### Human-agreement calibration (every study; low cost)

- **Estimand + frame:** state the estimand as "screener-qualified human stated response under this instrument". The **primary share = ICP-qualified stratum only**, which is what a human screener yields. Anti-users are reported as a separate stratum and stress probe, never pooled into the primary.
- **Pre-registered shrinkage:** synthetic models exaggerate arm differences and understate variance. Default (provisional, judgment call until backtested): **halve the synthetic treatment−control difference** and **double CI width on scale means**. KEEP/FAIL only if the shrunk estimate clears the bar. This is a pre-specified rule, not an ad-hoc correction.
- **Prompt robustness:** rotate **2–3 pre-registered paraphrase variants** of persona framing + instrument as a blocked factor **inside the same N** (no extra calls). KEEP/FAIL only if the direction holds in every variant; otherwise INCONCLUSIVE. Report per-variant results.
- **Elicitation:** randomize option order/labels within closed items. Collect a free-text answer per key scale item and map it to the verbatim anchor statements with a blinded in-bot rater (logged as **unvalidated**) alongside the direct rating. The human-facing item in `survey.json` stays verbatim.
- **Exposure parity:** pre-register device/viewport (phone-first unless the ICP says otherwise), a first-impression stage showing only the rendered above-the-fold screenshot before full access, and context-of-use framing, all repeatable by a human study. Report the manipulation-noticed rate as a predicted human figure, not a gate.
- **Choice vs status quo:** primary or co-primary outcome is one choice item ("keep my current setup / named alternative / this / none", with a stated price when relevant), not monadic intent alone.
- **Matched clones:** run the same persona spec in separate isolated sessions, one arm each (no carryover), so arm differences aren't persona composition. Persona and context spec identical across arms. Personas stay blind (isolation rule holds).
- **Root-cause coding:** cap open-ended length to human-typical (~2–4 sentences), rank objections by **first-mentioned**, use a pre-registered codebook, and run a second in-bot coding pass with κ on themes.
- **Human replication spec:** `protocol.md` states `human_n`, MDE, and the human decision rule; `results.md` reports "predicted human verdict at human_n" next to the synthetic estimate.
- **Drift canary:** a fixed 3–5 item probe per study, logged; a shift = new baseline.
- **One primary endpoint decides;** all secondaries are labeled exploratory.
- **Pricing / feature-priority claims only:** fixed-price choices with a no-buy option (Gabor-Granger style), never direct WTP.
- Not adopted yet (higher cost): a verbatim real-people corpus per persona and a backtest on published human studies. Both need an owner yes.

### Decision ladder (token-efficient)

1. Deterministic asserts.
2. Tier-1 in-bot **~10** (ICP+anti) with observation peeks + predeclared early-stop.
3. **Escalate only on uncertainty** (not depth alone): shrunk estimate within CI of the bar / paraphrase variants disagree / high criterion entropy / low κ.
4. Dig-deeper: **first** more in-bot / temporary bot personas (± pairwise with swap), same subscription. Target the top unresolved root cause; prefer new strata over more of the same.
5. **Only then** a **few** cloud agents (typically parallel **judges**) when dig-deeper needs true parallelism/isolation, with owner yes.
6. **Never** many cloud agents as default; **never** cloud persona farms; **never** metered/premium-model farms without explicit yes.

## Steps

1. **Align with reality first.** Systems of record. Missing real inputs are normal early: ground personas in public competitor reviews and written early-adopter scenarios; log the limitation.
2. **Asserts, then personas.** Mechanical gates before any LLM persona spend.
3. **Pre-register** on a study branch: question, arms, hypotheses with bars as shares, sample/peek **observation** plan, **predeclared stop/escalate rules**, models, anti-sycophancy probes, root-cause schema, isolation and human-fidelity notes, estimand and primary stratum, design (matched clones), screener/quotas, exposure protocol, instrument + paraphrase variants, choice item, checks and exclusions, CI + shrinkage rule, codebook, drift canary, human_n/MDE/human decision rule, replication pack, decision map (ship / change / re-test / kill). Inconclusive is never a pass.
4. **Freeze** (commit + tag) before trials. Edits after the tag = new version / new baseline.
5. **Tier-1 in-bot run** on the **subscription default model**. Strict JSON + validator. Persona JSON captures, for every objection or low score: `objection`, `root_cause` (underlying belief, fear, or missing proof, not the symptom), `trigger` (quoted page line or missing element), `would_change_mind`, and a ≤2-step why-ladder in the same turn (no extra calls). Dig-deeper follows the ladder above.
6. **Judge:** default is the **subscription default model** in-bot. Dual-family / frontier / premium-model / cloud judge **only** with owner yes (typically borderline ~20%); report **κ**. Keep the unblinding key outside the repo. Same judge for re-runs; judge change = new baseline.
7. **Score** vs frozen bars. Write `results.md` (quotes, verdict, ICP-primary shares with Wilson CIs, raw and shrunk arm difference, per-variant direction, predicted human verdict at human_n, exclusion rate, variance caveat, canary drift, cache hit rate, κ if any, **sim-to-real limit**). **On FAIL or INCONCLUSIVE, lead with "Root causes of objections":** code with the pre-registered codebook (κ on themes), rank by first-mentioned frequency × severity (ICP primary; anti reported separately), and report the top 1–3 root causes, each with 2–3 verbatim quotes and the page trigger. Personas' own `would_change_mind` statements may be quoted as evidence, never turned into our recommendation. No fixes or alternative ideas from Bet Tester. Anything without a clear trigger is marked "needs probe", one line max.
8. **Report** 2–3 sentences to the owner's front door; on fail/inconclusive the report names the #1 root cause and its evidence (no fixes). Record `decision.md`. Merge only after accept + green fast tests + no overclaim.
9. Archive any opt-in cloud agents after copy. Track spend vs stage cap.
