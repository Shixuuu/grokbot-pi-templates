---
name: email-to-asana-tasks
description: "Use when turning one or more Gmail or Outlook inboxes into Asana tasks with KEEP / FOLLOW-UP / SKIP triage, due-today defaults, standing tasks, follow-up comments on the original task, and due-date reminders."
---

# Email to Asana tasks

Inboxes: every inbox the owner connected, Gmail and/or Outlook / Microsoft 365. Destination: the owner's Asana My Tasks by default, or the project they chose. Use the owner's time zone. Run without asking for confirmation.

## 0. Connectors
If Asana, Gmail, or Outlook shows needsAuth, failed to load, or 0 tools, restart the connectors and re-check once or twice with a short wait. If one is still down, work with what's up, label nothing not written to Asana, and tell the owner which connection needs re-signing.

## 1. Find new messages
Look at messages received since the last successful run in every inbox. Do not exclude threads that carry the processed label: a Gmail label covers the whole thread, so a new reply on a labeled thread must still be checked. For each message, get its thread key (Gmail thread id, or Outlook conversation id) and message id.

## 2. Apply the owner's lists first
- Always-skip sender or thread (someone else owns it): SKIP.
- Standing-task mapping matches: comment on that standing task and set due_on to today. Never clone it.
- Always-keep sender: KEEP, even if it looks like a newsletter.

## 3. Existing task?
Search Asana tasks (incomplete and completed) for 'Thread: gmail:THREADID' or 'Thread: outlook:CONVERSATIONID'. If none, search incomplete tasks, including older ones whose names differ, for the same person and same ask, or the email link and subject. A match goes to step 5.

## 4. New thread: triage and create
- KEEP: real ask, deadline, commitment, doc to review/sign, decision, or mail from board, donors, customers, staff, or other key contacts that needs a reply. Due = stated deadline; if the email gives no date, due today.
- FOLLOW-UP: waiting on a reply, deferred matter, or CC with a financial/legal/compliance date. Phrase as a check-back ("Check back with X on Y"). Due = a few days before a stated deadline, after a promised weekend, else 3 business days out.
- SKIP: newsletters, promos, noreply/notifications, receipts, login codes, recurring reports with no ask, threads where the owner sent last and nobody owes them, content-free FYIs.

Prefer a reminder over silence on open loops; still skip genuine noise.

Create the task:
- Always set due_on. No date in the email means due today.
- Assignee: the owner, in their My Tasks, unless they chose a project or the email clearly assigns someone else who exists in Asana.
- Name: short actionable paraphrase under 80 characters. No client, patient, or resident names, case numbers, or medical or financial specifics; those go in notes.
- Notes, in order: the email link on its own line, the 'Thread:' key line, then which inbox, from, date, 2-3 sentence summary, original subject.
- Cap 20 new tasks per run. Leave the rest unlabeled so the next run picks them up.

## 5. Matched task: comment, and move the date only if action is needed
Follow-up comments are the intended behavior. Never create a parallel task.
- Read the task's comments. If one already ends with 'Msg: MESSAGEID' for this message, skip it.
- If the owner sent the new message and it adds nothing to track, skip it.
- Add one comment: sender, date, a 1-2 sentence summary, a link to the new message, and 'Msg: MESSAGEID' on the last line.
- Needs action from the owner (a new ask, a deadline, a doc, a decision, a question): set due_on to today, or to the new deadline if one is stated, and say 'Due date moved to X' in the comment. If the task is completed, reopen it and say 'Reopened'.
- Only FYI (thanks, confirmation, status update with no ask): comment only. Leave the due date and completion state unchanged.
- Add the 'Thread:' line and email link to the notes if the task is missing them.

## 6. Label
After the Asana write (task or comment) succeeds, apply the processed label in Gmail or the processed category to the message in Outlook. Never label without a successful write.

## Owner-set rules
Whenever the owner says a recurring email always goes to a task, a sender is always keep, or a sender or thread is always skip, save it as a memory right away and apply it from the next run.

## Remind
Each weekday morning, if the owner wants it, list tasks due today or in the next 2 weekdays by name and due date. Stay quiet if none.

## Do not
- Script specific MCP tool names or schemas. Look up current tools each run.
- Send, reply to, or draft email as the owner, even if asked.
