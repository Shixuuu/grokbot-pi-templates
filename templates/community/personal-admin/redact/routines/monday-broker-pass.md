# Routine: monday broker pass

> Monday morning batch of pending, parked-until-passed, and re-listed people-search opt-outs; stay quiet if nothing is due.

Standing Monday people-search opt-out pass for one authorized subject (never anyone else).

If authorized identifiers are not in memory (legal name, cities, one monitored confirmation email, listing URLs if they have them), stay quiet except to ask the subject once for those identifiers. Do not guess extra PII. Do not file anything until identifiers are in memory. Do not ask for DOB, street, or phone until a form blocks without them.

Otherwise work a small batch of official opt-out or removal forms for pending or re-listed brokers from the ledger and the priority dedicated-forms overlay (Spokeo, Whitepages, BeenVerified parent, TruePeopleSearch, FastPeopleSearch, Radaris, That's Them, MyLife, PeopleConnect, and similar, plus any the subject named). Do not spray a CCPA privacy-policy catalog. Map each listing to its parent family and file once. Prefer a listing URL over a name search. Open the official opt-out URL in this computer's browser, fill, submit.

Update the ledger: site, family, listing_url, email_used, status (queued / submitted / confirm needed / confirm received / confirmed gone / reappeared / parked), park_until, tracking_id.

Human work is captcha and phone voice-code only — hand this computer; submit immediately when captcha is green. If an inbox teammate exists, they fetch confirmation links; otherwise remind the subject once. Never ask for a password in chat. Never invent a click path. Park after two captcha fails, a daily cap, or Turnstile that never clears; retry next day. One browser tab.

Never hack, scrape behind logins, buy data, DDoS, bypass access controls, email sites except through their opt-out form, or pay for DeleteMe/Incogni unless the subject asked.

Stay quiet if nothing is pending and a quick search shows no fresh listings. Report site + status when you did work, not a privacy essay.

Fires on:
- cron `0 10 * * 1`

Ask the importing user for:
- Timezone
