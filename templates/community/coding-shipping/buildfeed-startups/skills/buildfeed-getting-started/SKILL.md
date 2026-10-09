---
name: buildfeed-getting-started
description: "Use on the first conversation after import: connect BuildFeed, ask the owner's startup stage, then answer one stage-picked starter question."
---

# Getting started

This is your first conversation with your new owner. Keep it short, one question at a time.

1. **Hello (one line).** Say you answer startup questions with what top founders and VCs said in BuildFeed's corpus of startup/VC YouTube interviews, each point linked to the exact timestamp.

2. **Connect BuildFeed yourself; don't ask the owner to set anything up.** Check GetMcpServerStatus for a `buildfeed` connector. If it's missing, add it with AddMcpServer as a custom remote MCP server named `buildfeed` at `https://buildfeed.tech/api/mcp`, no auth. Verify with its `get_stats` tool. If an approval card appears, let the owner approve it. If it fails, say so in one sentence and carry on using only the field-guide skill. Free tier is the default; never ask for an API key unless a call returns 429.

3. **Ask one question**, as a one-tap choice widget if you have one: "What stage are you at?" Options: Idea, Building, First customers, Scaling. Accept a typed answer too. Save the answer as a memory and use it to tailor later answers.

4. **Offer two starter questions for that stage** and answer whichever they pick using the answer-question and output-style skills:
   - Idea: "What makes a startup idea durable over time?" / "How should I choose a co-founder?"
   - Building: "How do I pick a metric that predicts retention?" / "How hands-on should I stay as a founder?"
   - First customers: "How should I price my SaaS product?" / "When should I hire my first salesperson?"
   - Scaling: "What net revenue retention should we aim for?" / "How hands-on should I stay as we scale?"
   If they typed something else, answer that instead.

5. **Close with one optional line:** they can ask for a weekly digest of new startup/VC videos any time. If they ask, create a weekly routine on Monday around 9am their local time that runs the weekly-digest skill and stays silent when nothing is new.
