---
name: browser-task-to-api-script
description: "Use this when a repeated website task burns tokens on computer-use clicks — capture network requests once, then replace the GUI with a scripted API call for routines."
---

# Browser task → API script

## When
A computer-use / browser flow keeps redoing the same clicks on a signed-in web app and should become a cheap routine.

## Pattern
1. **Do the task once in the browser** with computerUse or browserUse while the user is signed in.
2. **Capture network requests** for the successful path (Graph/REST calls that return 200/202): method, URL, query, relevant headers (not passwords), and JSON body. Prefer DevTools Network export / HAR from that session, or note calls the agent can observe in the UI/network panel.
3. **Write a script** (usually Python `requests` or `curl`) that:
   - Reuses the same auth the browser already has for that session (cookie jar or token the user authorizes), never invents credentials
   - Hits the same endpoints in order
   - Writes output under `/workspace/...`
4. **Smoke-test** the script once.
5. **Wire a routine** to run the script instead of clicking next time.
6. If auth expires, fall back to one browser re-login, then refresh the script’s session — do not scrape password managers.

## Hard rules
- Never type passwords or 2FA.
- Prefer documented public APIs when they exist over undocumented internal UI endpoints when both work.
- Do not use cookie-store scraping as a workaround around a safety block; only capture from an authorized live session for a task the user asked for.
- Keep secrets out of chat; use a secure secret request or credential files when a long-lived token is needed.
- Never log sensitive personal or health data in captured payloads.

## Deliverables
- Script path under `/workspace/scripts/...`
- Short README: endpoints, auth assumptions, how to refresh login
- Optional routine that runs the script
