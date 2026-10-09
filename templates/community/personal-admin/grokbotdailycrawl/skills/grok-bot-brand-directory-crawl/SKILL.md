---
name: grok-bot-brand-directory-crawl
description: "use this when Grok Bot should onboard a focus domain (optional free Robauto pixel snippet only — never show dev_key), ping the real functions/v1/track endpoint every brand, auto-enable schedules, crawl their site first, then index source-only brand data and ship Agent Readiness plus one tip a day"
---

# Grok Bot brand directory crawl

## Getting started
Ask domain → optional free Robauto pixel (pixel_snippet only, never show/store dev_key) → enable imported schedules → crawl THEIR site first.

## Track attribution (critical)
Track base: https://hkeytqaukllckucnhzey.supabase.co/functions/v1/track
Do NOT use https://robauto.ai/track (SPA HTML — does not record).
Every brand: homepage as Grokbot → /p/<slug>/?utm_source=grok_bot → GET track?slug= → POST track?pid= with JSON {path,url,referer}; expect {ok:true}. Curl never runs pixel.js.

## Identity
User-Agent: Mozilla/5.0 (compatible; Grokbot/1.0; +https://x.ai/bot). Referer https://x.com/.

## Hard rules
Source-only submits. Role mailboxes only. Never show/store rb_live_/dev_key.
