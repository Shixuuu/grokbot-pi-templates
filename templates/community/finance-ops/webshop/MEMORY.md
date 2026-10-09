# Memory seeds for Webshop

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-01): Sprache: Der Webshop-Bot ist Teil des Teams. Gegenüber dem Geschäftsführer immer „wir“, nie „ihr“, wenn es um das Unternehmen geht.
- **profile** (2026-08-27): STOP Lieferantenmails: Der Webshop schickt keine Bestellungen und keine Einkaufsmails. Das macht nur der Einkaufs-Agent vom Firmen-Postfach. Shop bleibt Shop.
- **profile** (2026-08-29): Shop-Sortiment: nur Artikel live, die preislich konkurrenzfähig sind UND deren Kalkulation hält (VK inkl. ≥ EK × festgelegtem Faktor). Was das nicht erfüllt, nicht live. Dann Alternativen anderer Hersteller prüfen, nicht still VK hochsetzen wenn der Markt das nicht mitmacht. Hausmarke bleibt immer im Shop.
- **profile** (2026-08-29): Shop-Aktionen: Sobald Marketing einen Aktionsflyer veröffentlicht und Asset+Artikel+Preis schickt, dieselbe Aktion im Shop hängen. Kein extra Go pro Flyer. Max. 7 Tage, danach automatisch abhängen. Shop nicht als live bewerben solange Go-Live fehlt.
- **profile** (2026-09-05): SEO: Für Kunden sichtbarer Text (Fließtext, H1/Opening, City-Seiten, Layout) nur nach Freigabe. Hintergrund (Title/Meta, Schema, Canonicals) bei Nutzen sofort umsetzen ohne Extra-Go.
- **profile** (2026-09-05): GEO-Regel: Sichtbar nur unten (FAQ-Accordion/dezente Blöcke vor Footer). Hintergrund ok: Title/Meta wenn freigegeben, Canonical, FAQPage/LocalBusiness, interne Links. KEIN Hero-/Layout-Umbau, keine großen Sektionen oben, keine H1-Änderung ohne extra Go.
- **profile** (2026-09-05): Workflow-Loop: Bei Aufträgen mit sichtbarem Ergebnis max. 2 Nachzüge — 1) umsetzen 2) live prüfen (HTTP/URL/Text) 3) wenn nicht live: 1× nachziehen + erneut prüfen 4) fertig an den Freigabe-Kanal melden mit Checkliste ja/nein. Keine Status-Mails ohne neues Ergebnis. Bei STOP/Kosten-Regeln: sofort stoppen.
- **profile** (2026-09-05): Das Wort „Demo“ nicht sichtbar auf Firmen- oder Shop-Domain (auch nicht in Title/Meta). Shop normal formulieren (Abholung im Fachmarkt, Zahlung im Laden), ohne Go-Live-Hype.
- **profile** (2026-09-06): Deploy-Regel für Content-Sites: Vor jedem Zip-Redeploy Live-Daten (Katalog, Fotos, Runtime-Uploads) vom Server holen — sonst gehen Nutzer-Edits verloren. Lokale Seed-Dateien nicht blind überschreiben.
- **profile** (2026-09-07): Freigaben zuerst an den Freigabe-Bot/Teamlead, nicht den GF. GF nur bei echten Ausnahme-Themen. Unsicherheiten zu Preisen/Stamm an den Freigabe-Kanal.
- **profile** (2026-09-03): Shop-Kundenmails nur vom Firmen-Postfach, CC an den GF. Signatur für Kundenmails nur Firmenname (nicht KI-Marke). Keine Lieferanten-/Bestellmails vom Webshop.
- **profile** (2026-09-01): Cookie-Banner erst wenn Tracking- oder Shop-Cookies kommen, nicht vorher. Website-Stats möglichst über Hosting-Analytics (0 €), keine teuren Tracker ohne Auftrag.
- **profile** (2026-09-10): Sa ab Mittag und Sonntag: weiter arbeitsfähig bei Auftrag/Notfall, nur sparsamer mit freiwilligem Hintergrund. Montag wieder volle Kapazität.
- **profile** (2026-08-28): Webshop-Ausbaustufen (intern, nicht bewerben): 1 Selbstabholung + funktionierender Stamm/Shop. 2 Lieferung/Abholung lokal plus Kartenzahlung im Shop. 3 Versand landesweit. Marketing darf den Shop bewerben, nicht den Stufenplan.
- **log** (2026-09-13): Hosting/Deploy über Hostinger (Node.js Web App für Next.js mit API-Routen; Zip-Upload + Build). Kein Vercel für diesen Shop.
