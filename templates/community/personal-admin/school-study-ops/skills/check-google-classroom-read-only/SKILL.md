---
name: check-google-classroom-read-only
description: "Use this when checking a student's Google Classroom for Stream posts, Classwork, To-do (Assigned/Missing/Done), and View your work. Read-only: never post, comment, submit, or message a teacher."
---

# Check Google Classroom (read-only)

Assumes Chrome is already signed in as the **student** school Google account. Never switch to a parent's personal Google in this browser. Never post, comment, submit work, message a teacher, or change grades. If you hit a login wall or the page is clearly the wrong account, stop and report that instead of guessing.

Destination: `https://classroom.google.com/h` (student Home).

## Inputs

- `{student}`: the student whose work pages should show that name
- `{classes}`: default **all enrolled classes** on Home. Do not skip cards below the fold.
- `{language-arts-class}`: Language Arts class name
- `{math-class}`: Math class name
- `{school-mail-domain}`: school / teacher domain (also treat `@k12` and similar school domains)

## Steps

1. Open `https://classroom.google.com/h`. Confirm the Home dashboard (Due soon, class cards). Scroll until every class card is visible.
2. For **each** class, in this order:
   1. Click the class card. On **Stream**, scroll the feed and note teacher announcements (quizzes/tests often live here, not as assignments).
   2. Open **Classwork**. Scroll the list. Note topics, due dates, and attachments. Some classes may open a **Google Drive** folder instead of a Classwork page — treat that folder as the classwork surface, then return to Classroom.
   3. Click **View your work**. Confirm the page is `{student}`'s work. Note assigned / returned / graded items. Do not invent scores.
   4. From Stream, click **View all** in Upcoming (or open class To-do). Check the three tabs in order: **Assigned**, **Missing**, **Done**.
   5. Open the left menu and click **Home** before the next class.
3. Skip **People** unless you were asked who is in the class.
4. Do not type into Classroom. Mouse/navigation only except to open URLs.

## Student school Gmail (read-only)

Once a day, last **24 hours only**. Not the whole mailbox.

Open `mail.google.com` in the same school browser session. Confirm it is the **student** account. Stay **read-only**: never send, reply, forward, delete, or compose.

Pull a message only if **both** are true:

1. From a teacher, or from `@{school-mail-domain}` / `@k12` / another school domain.
2. Subject or body contains at least one of: assignment, due, grade, missing, Classroom, attach, packet, quiz, test.

Skip junk, social, shopping, newsletters, and anything older than 24 hours.

Never sign into a parent's personal Gmail in this browser except to send the parent digest. Prefer the parent's Gmail **connector** for that digest.

In the recap, list Language Arts and Math teacher mail first, then other classes.

## What to report

Write the recap in this exact shape. Subject: `Classroom — [Day], [Date]` (owner timezone).

Put **Language Arts** and **Math** first. Other classes appear only if something is missing, late, due today/tomorrow, due later this week, or newly graded.

```
MISSING / LATE
- [Class] [Assignment]  due [date]  [link if available]

DUE TODAY / TOMORROW
- [Class] [Assignment]  due [date]

HOMEWORK / TO-DO (rest of week)
- [Class] [Assignment]  due [date]  status: assigned | turned in

NEWLY POSTED GRADES
- [Class] [Assignment]  [score or "posted"]  date seen

LANGUAGE ARTS (detail)
- materials / assignments / grades from today

MATH (detail)
- same

OTHER CLASSES
- only if something is due, missing, or newly graded

TEACHER EMAIL (last 24 hours, student inbox)
- [From] [Subject] [date]   one-line: what they want / due date / link
  (Language Arts and Math first)

NOTES
- login ok / login needed
- pages opened: N
```

If a section has nothing, write `none` under it (do not omit the heading). Do not invent due dates, scores, or links. Count every Classroom/Drive page actually opened in `pages opened`.

## Safety

Read-only on Classroom and on the student Gmail. No New announcement, no comments, no Turn in, no emails to teachers, no send/reply/forward/delete on the student mailbox. Sign-in lives in the browser profile.
