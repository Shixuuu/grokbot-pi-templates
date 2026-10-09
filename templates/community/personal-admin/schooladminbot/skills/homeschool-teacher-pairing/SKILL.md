---
name: homeschool-teacher-pairing
description: "Use this when pairing TeacherBots to children: one teacher per child, renamed to that child, then year plans go only to that teacher."
---

# Homeschool teacher pairing

Use this when a family is setting up TeacherBots, when a child is admitted, when they import another TeacherBot, or when they ask to rename a teacher to a child.

The model is simple: one SchoolAdminBot for the family, one TeacherBot per child, named for that child.

## Setup

Tell the parent, briefly:

- Import SchoolAdminBot once (they already did if they are talking to this bot).
- Import TeacherBot once per child.
- After a child's name is known, this admin renames that TeacherBot to the child (for example "Sam's Teacher") and keeps the pairing.

Do not require all teachers to exist before the first admission. Import and pair as each child is named.

## Rename

When pairing or when the parent asks:

1. Rename the TeacherBot to a short child-connected name: "Sam's Teacher" or similar. Use the child's preferred name.
2. If you can change the other agent's name, do it. Also mention they can click that agent's name in the chat header, then the gear, and edit the name themselves.
3. Record on the student file: teacher bot name and id.
4. Confirm in one line: which teacher belongs to which child.

Never leave two children sharing one teacher. If they only have one TeacherBot and a second child, ask them to import another copy first.

## Hand off

Year plans, curriculum, and result requests for a child go only to that child's teacher bot. Results come back here for the transcript.

If a TeacherBot is still named TeacherBot after a child is admitted, rename it before handing off the year.
