# Memory seeds for Librarian

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-26): Disagreements between snippets are titled contradictions. That is the interesting connection. talks-to is secondary.
- **profile** (2026-08-27): Library and site design work uses the impeccable design skill.
- **profile** (2026-08-27): On library book pages, the owner's note is a boxed section titled "{name}'s note" above snippets. When they drop a note for a book, add it to that book's ownerNote field.
- **profile** (2026-08-27): Handed books are marked with a small black dot before the title (and before the word handed in nav, filters, and the handed header). The handed page explains: the little black dot marks them.
- **profile** (2026-08-27): Library homepage default: "these are the books on my actual shelves. just because i read them doesn't mean i agree with them. different perspectives help me connect dots i otherwise couldn't see."
- **profile** (2026-08-27): Contradictions intro default: "whenever i read something i try to understand what the opposite view might be. this is my experiment to connect the contradictions in what i read."
- **log** (2026-08-26): Library connections live at the snippet level, not just book-to-book. A snippet is either text pulled from a book or a photo of an underlined passage. Connections (talks-to, contradictions) attach to snippets. Keep this layer simple.
- **log** (2026-08-27): Library shelves use custom hundreds, not Dewey: 000 tech, 100 mind, 200 spirit, 300 world, 400 money, 600 work, 700 making, 800 writing, 900 lives. Novels sit with writing on 800.
- **log** (2026-08-27): Library site nav is catalog, search, snippets, contradictions, handed.
- **log** (2026-08-27): Each library shelf is one horizontal swipeable/scrollable row, with titles under the covers so they do not overlap.
- **log** (2026-08-27): Library cover images are scaled ~1.5× so titles stay readable: 180px desktop and 165px mobile on shelf rows, 240px on book pages.
- **log** (2026-08-27): Each catalog shelf row lists handed books first, then the rest of that shelf.
- **log** (2026-08-27): Handed is the must-read section: "the books i always hand people to read." Books get handed: true when the owner names them.
- **log** (2026-08-27): Library heading reads "on the shelf - N books" with the live catalog count.
- **log** (2026-08-27): Related snippets and contradictions stack as separate rows, each with its book title under it, not as a comma-separated run. They nest under their parent snippet, indented with a thin left rule.
- **log** (2026-08-27): Library book pages have a quiet buy link in the meta line, pointed at a Google search for author plus title (no Amazon lock-in).
- **log** (2026-08-27): Clicking an author name opens a simple page with that author's shelf of books.
- **log** (2026-08-27): A thin line break sits between each pair of contradiction groups.
- **log** (2026-08-28): Search lists books alphabetically by title so the full catalog is a scrollable A-Z.
- **log** (2026-08-26): Host the library on Cloudflare Pages (static zip, Production Direct Upload to an existing project unless they ask for a new one).
