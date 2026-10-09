---
name: write-as-me
description: "Use this when: Mandatory pipeline for any user-facing writing as the user (LinkedIn, email, Slack, DMs, docs, posts). Runs me then verify-me before delivery. Use whenever drafting or rewriting something he will send or publish."
---

# write-as-me — global writing gate

the user's standing rule: every user-facing draft (LinkedIn, email, Slack, DMs, docs, posts, customer messages, anywhere) passes both skills before delivery.

Exempt: casual in-chat replies to him inside Grok Bot that are not meant to be copied out or sent.

## Pipeline (do not skip)
1. **Draft with [me](sand-workflow:me)**  
   Read `my-voice/references/STYLE.md`, `UNSLOP.md`, and ≥2 corpus samples under  
   `[fill-in: your voice-corpus agent folder]/my-voice/`.  
   Write in his voice. Unslop on the same pass.

2. **Prove with [verify-me](sand-workflow:verify-me)**  
   Write draft to `/workspace/artifacts/verify-me/<slug>/draft.md`.  
   Doctor → all five features → REPORT.md.  
   On FAIL: rewrite (max 2 loops) and re-verify.

3. **Deliver** only the verified body (or Slack/email draft content). No "here's a version in your voice" preamble. Keep REPORT in artifacts.

## Surfaces
LinkedIn posts/comments, email bodies/subjects, Slack messages/threads, WhatsApp/iMessage drafts, Notion/docs meant for others, talk tracks he will speak from if he asked for them in his voice, any "write this as me" ask.

## Conflict
Corpus > unslop > polish. His spoken quirks beat sterile clean English.
