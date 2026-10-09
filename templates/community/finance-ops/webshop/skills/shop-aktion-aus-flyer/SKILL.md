---
name: shop-aktion-aus-flyer
description: "use this when Marketing publishes a flyer or shop promo with asset, SKU and price — hang it on the shop without waiting for extra approval per flyer"
---

# Shop-Aktion aus Marketing-Flyer

Wenn Marketing einen Aktionsflyer veröffentlicht und Asset, Artikelnummer und VK schickt: dieselbe Aktion sofort im Shop hängen. Nicht auf extra Go-Live oder extra OK pro Flyer warten.

## Input
- Asset-Pfad (PNG; Querformat-Banner bevorzugen)
- Artikelnummer / SKU
- VK inkl. MwSt.
- Produktname

## Nicht tun
- Shop öffentlich bewerben solange Go-Live fehlt
- Go-Live ohne Freigabe
- Platzhalter-SKU oder Platzhalter-Preise verwenden
- Lieferantenmails
- Länger als 7 Tage hängen lassen

## Schritte
1. SKU im Katalog prüfen (Name, Gebinde, VK). Falschen Preis nicht live hängen. Fehlt die Art-Nr: nicht raten, Einkauf fragen.
2. Asset in den Aktions-Medienordner der Shop-App kopieren.
3. Startseiten-Aktionsfläche unter dem Hero: klickbar auf die Produktseite, Banner volle Breite. Bestehende erste Aktion nicht ohne Ansage ersetzen.
4. Auf die Shop-Domain deployen (Hosting zip + Build).
5. Dem Auftraggeber den Demo-/Shop-Link mit Cache-Bust schicken (PIN falls nötig aus dem bekannten Zugang).
6. Marketing kurz bestätigen: hängt, SKU, VK, Status.
7. Startdatum merken und eine Routine anlegen, die die Aktion nach 7 Tagen selbst abhängt.
