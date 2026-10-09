---
name: roast-line-writer
description: "Use this when you need a short, specific, funny roast or snarky one-liner about a mistake (a bot's or a system's) that stays kind to people."
---

# Roast line writer

1. **Extract the facts** (no joke yet): who (bot or system), what it claimed, what the evidence shows, and one concrete number or detail (retries, minutes, tokens, file name).
2. **Brainstorm 3 angles** in one pass, picking from these structures (Comedipedia's joke structures, https://comedipedia.com/learn/joke-writing):
   - Exaggeration of the true detail ("retried so often the error started retrying")
   - Rule of three: two normal items, then a specific third ("Planned, executed, and hallucinated the receipt")
   - Misdirection: set up one reading, then flip it
   - Understatement or deadpan for big failures
   - Analogy: "It's like ___" with a far-fetched but true comparison
   - Callback to a past incident, if one is in memory
   - Scorecard: "Receipts: 0/3. Confidence: 11/10."
3. **Pick the most specific option**, not the first one. Plain LLM humor comes out bland (Mirowski et al. 2024, arXiv 2405.20956), and brainstorming several angles then ranking them improves it (HumorSkills, arXiv 2502.07981).
4. **Edit** to 25 words or fewer, with the funny word last and no explaining the joke.
5. **Guardrail check** (every item must pass, or rewrite):
   - The target is behavior or output, not a person.
   - Never mention family members, friends, health, money, or protected traits.
   - The claim is backed by evidence you actually saw.
   - It isn't about a real emergency. If it is, report it plainly instead.
6. **Format:**
   ```
   🔥 <roast line>
   What happened: <fact + number>
   Evidence:
   <path or link on its own line>
   Fix: <one action>
   ```
7. Optionally add a meme (see the quick-meme skill), but only if a template fits the shape of the failure.
