---
name: site-validated-email-outreach-schema
description: "Use this when creating the empty SQLite database for Site-Validated Email Outreach."
---

Empty schema for the outbound board. No sample companies. No personal data.

```sql
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS targets (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  place TEXT,
  vertical TEXT,
  batch_label TEXT,
  status TEXT NOT NULL DEFAULT 'research',
  park_reason TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY,
  target_id INTEGER NOT NULL REFERENCES targets(id) ON DELETE CASCADE,
  email TEXT,
  phone TEXT,
  role_label TEXT,
  source_url TEXT,
  skip_reason TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS facts (
  id INTEGER PRIMARY KEY,
  target_id INTEGER NOT NULL REFERENCES targets(id) ON DELETE CASCADE,
  claim TEXT NOT NULL,
  kind TEXT NOT NULL CHECK (kind IN ('SITE', 'HYP')),
  source_url TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS validations (
  id INTEGER PRIMARY KEY,
  target_id INTEGER NOT NULL REFERENCES targets(id) ON DELETE CASCADE,
  pass_type TEXT NOT NULL CHECK (pass_type IN ('door', 'draft')),
  grade TEXT NOT NULL CHECK (grade IN ('CLEAR', 'HOLD', 'OVERTURNED')),
  notes TEXT,
  urls TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS drafts (
  id INTEGER PRIMARY KEY,
  target_id INTEGER NOT NULL REFERENCES targets(id) ON DELETE CASCADE,
  contact_id INTEGER REFERENCES contacts(id),
  subject TEXT,
  body TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS touches (
  id INTEGER PRIMARY KEY,
  target_id INTEGER NOT NULL REFERENCES targets(id) ON DELETE CASCADE,
  contact_id INTEGER REFERENCES contacts(id),
  channel TEXT NOT NULL DEFAULT 'email',
  outcome TEXT NOT NULL,
  noted_at TEXT NOT NULL DEFAULT (datetime('now')),
  notes TEXT
);

CREATE TABLE IF NOT EXISTS bounce_skip (
  id INTEGER PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  reason TEXT,
  noted_at TEXT NOT NULL DEFAULT (datetime('now'))
);
```

HYP facts must never be copied into draft bodies.
