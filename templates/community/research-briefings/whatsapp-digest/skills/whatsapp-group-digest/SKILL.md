---
name: whatsapp-group-digest
description: "Use this when checking WhatsApp groups or communities for new, user-relevant information. Prefer the WhatsApp Web API skill (CLI/MCP JSON); otherwise WhatsApp Web text snapshots. Inspect recent messages and PDF/image attachments; return only bits that relate to the user. Reuses an already-open WhatsApp Web tab."
---

Read-only by default. Never send, star, react, or forward messages unless the user explicitly asked to send that WhatsApp message.

Use the signed-in **WhatsApp Web** session (`https://web.whatsapp.com/`). Prefer the **WhatsApp Web API** skill in this library (CLI/MCP next to that skill: `session`, `chats`, `communities`, `community-groups`, `search`, `chat`, `messages`, `attachment`). Call those commands instead of clicking WhatsApp yourself.

Desktop pixel control is a last resort. The wrapper owns browser control when it is present.

Personal context (which groups/communities matter, how they relate to the user, names, schools, companies, nicknames) is **not** in this skill. Read it from this bot's description, the run prompt, routine instructions, or agent memory before filtering. If that context is missing, list the active groups/communities and ask which to watch and what is important in them, then write the answer into this bot's description. Do not invent importance.

## Browser session (do this)

- **Reuse the open tab.** If a WhatsApp Web tab is already open (`web.whatsapp.com`, chat list or QR screen), use it. Do **not** open a second WhatsApp Web tab.
- **Pin it and leave it.** After a successful login, and at the end of a run that is still signed in: pin the WhatsApp tab and leave it open. Do not close it.
- **Stay logged in before any QR scan.** On the login wall, make sure **Stay logged in on this browser** / **Keep me signed in** is checked **before** asking the user to scan.
- **If logged out:** stop. Report `logged_out=true` to the parent immediately so the user can be notified. Hand the computer to the user to scan the QR. Do not guess credentials. Do not stay silent on logout; the parent must message the user.

## Token budget (do this)

- Prefer wrapper JSON (`chats`, `messages`) over page snapshots. Prefer snapshots over screenshots. Never screenshot the chat list to read it.
- Do not return screenshots, page dumps, or raw snapshot trees to the parent or the user. Return only the filtered digest.
- Skip screenshot/vision unless (a) the page is unreadable from JSON/snapshot, or (b) an attachment is an image that must be read (a photo of a notice, timetable, letter). **PDFs:** `attachment` (filename or caption), then extract text with pdftotext/poppler. Do not screenshot PDFs.
- Cap lookback and chats (see below). Do not scroll an entire history “just in case.”

## Do not

- Send, star, react, or forward messages unless the run explicitly asks
- Join, leave, mute, or create groups
- Mark chats read as a goal (opening a chat / `messages` marks it read as a WhatsApp side effect; mention that if it happens)
- Dump full chat histories. Return only items that relate to the user, plus enough surrounding context to act
- Open a duplicate WhatsApp Web tab when one is already open
- Close the WhatsApp tab at the end of a run

## Steps

1. **Session** — `session` (or a text snapshot if the wrapper is down). Signed in vs QR. If QR: Stay logged in, then stop and report `logged_out=true`. If signed in: pin the tab.
2. **List active groups and communities** — `chats --filter groups` / `communities` / `community-groups` as needed. Record name, type, unread, last-message preview, last-activity time. Skip 1:1 chats unless the run says otherwise.
3. **Choose what to inspect** — named groups if the run or this bot's description listed them; else personal context (unread first, then recently active). Cap to about 8–12 unless the run says to go wider. Note anything skipped.
4. **Inspect recent messages** — `messages NAME` (marks read). Cover new/unread plus a short lookback (since last digest, or ~24–48 hours). Sender, timestamp, text, reply/forward, names mentioned. For communities, announcement channel plus relevant sub-groups.
5. **Attachments** — when caption, sender, or type suggests it may matter (notices, PDFs, images of letters/schedules). Skip memes and stickers. PDFs/docs: `attachment NAME QUERY`, then extract text. Images: vision only on that file. Note when an attachment could not be read.
6. **Filter to the user** — keep items that name them, their family, their role, a group they must act in, a deadline, money, attendance, a decision, or anything the personal context says to watch. Drop chatter. Mixed threads: keep only the relevant bits plus one line of context.
7. **Report** — urgent vs FYI vs actions. Per relevant group: why it mattered, who/when/what, attachment takeaway. If logged out or a chat would not open, say so. Leave the WhatsApp tab pinned and open.

If the wrapper is signed in but commands do not reliably return what is on screen, run WhatsApp Web API **maintenance** (fix locators in that skill folder). A clear QR/logout wall is not that.

## Output shape

```
Urgent: …
FYI: …
Skipped: … (and why)
```

Keep it short. No full transcripts. No screenshots unless an image attachment itself is the evidence.
If logged out, the report must include `logged_out=true` so the parent notifies the user immediately.
