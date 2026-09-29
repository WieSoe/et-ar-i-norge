# Et år i Norge – Übungen

Eine private, rein statische Übungswebseite zum Lehrbuch **„Et år i
Norge"** (Norwegisch Bokmål). Sie stellt Grammatikaufgaben, prüft die
Antwort sofort und zeigt bei Fehlern die korrekte Lösung plus eine
kurze Erklärung auf Deutsch.

## Loslegen

Keine Installation, kein Server, kein Build-Schritt nötig:

1. Repository klonen oder herunterladen
2. `index.html` per Doppelklick im Browser öffnen

Das war's. Der Fortschritt wird lokal im Browser gespeichert
(`localStorage`) und bleibt beim nächsten Öffnen erhalten.

## Was die Seite kann

- **14 Grammatikthemen**, u. a. Infinitiv, Präsens, Modalverben,
  Adjektive, Wortstellung, Inversion, Wortstellung mit „ikke",
  Imperativ, Artikel (bestimmt/unbestimmt, Auslassen), Singular/Plural,
  Fragewörter, mye/mange, Zahlen bis 100
- **4 Aufgabentypen**: Lückentext, Formen bilden, Sätze ordnen
  (antippbare Wort-Chips), Zahlen schreiben
- **Auswahl nach Thema und Lektion** + Zufallsmodus
- **Fortschrittsanzeige pro Thema** (Trefferquote), gespeichert im
  Browser
- **Tolerante Antwortprüfung**: Groß-/Kleinschreibung und Leerzeichen
  spielen keine Rolle, mehrere richtige Antworten möglich (z. B.
  `boka`/`boken`)
- Mobil bedienbar (Touch-Ziele, keine Zoom-Probleme bei Eingabefeldern)

Aktuell **140 Übungsaufgaben** über alle 14 Themen (siehe
`data/aufgaben-*.js`), Schwerpunkt Adjektive mit 62 Aufgaben.

## Projektstruktur

```
index.html              Einstiegspunkt, öffnet direkt per Doppelklick
css/style.css           Styles (mobil-first, ein Breakpoint bei 600px)
js/
  app.js                View-Steuerung (Auswahl ↔ Übung), Filterlogik
  check.js              Antwortprüfung/Normalisierung
  progress.js           Fortschritt in localStorage
  render-luecke.js      Rendering: Lückentext
  render-form.js        Rendering: Formen bilden
  render-satzstellung.js Rendering: Sätze ordnen (Wort-Chips)
  render-zahlen.js      Rendering: Zahlen schreiben
data/
  themen.js             Liste aller Themen + erlaubte Aufgabentypen
  aufgaben-<thema>.js    Aufgaben-Daten, ein Array pro Themen-Datei
vokabeln/
  lektion-01.md … 04.md  Vokabellisten aus dem Lehrbuch, nach Lektion
  adjektive-uebungen.md  Zusätzlicher Wortschatz aus Adjektiv-Arbeitsblättern
SPEC.md                 Vollständige Spezifikation
TASKS.md                Umsetzungs-Checkliste (Fortschritt der Entwicklung)
```

## Neue Übungsaufgaben ergänzen

Aufgaben liegen als strukturierte Daten in `data/aufgaben-<thema>.js`,
getrennt vom Code. Eine bestehende Datei öffnen und ein weiteres Objekt
ins Array einfügen, z. B.:

```js
{
  id: "adj-063",
  thema: "adjektive",
  lektion: 4,
  typ: "luecke",
  aufgabe: "Et ___ (stor) hus.",
  antworten: ["stort"],
  erklaerung: "Neutrum (et-Wörter) bekommt im Adjektiv die Endung -t: stor → stort."
}
```

Für ein neues Thema: eine neue Datei `data/aufgaben-<thema>.js` nach
demselben Muster anlegen, in `data/themen.js` eintragen und in
`index.html` per `<script src="…">` **vor** `js/app.js` einbinden.

Details zum Datenschema, den vier Aufgabentypen, der Vokabelregel
(Aufgaben sollen nur Wörter bis zur jeweils angegebenen Lektion aus
`vokabeln/` verwenden) und der Antwortprüfung stehen in
[SPEC.md](SPEC.md), Abschnitte 5, 7 und 10.

## Warum `.js` statt `.json`?

Aufgaben sind inhaltlich reines JSON, liegen aber in `.js`-Dateien mit
einer einzeiligen Zuweisung drumherum (`window.ALLE_AUFGABEN = (...)
.concat([...])`). Grund: Chrome/Edge blockieren `fetch()` und
ES-Module-`import` für lokale Dateien (`file://`) aus
Sicherheitsgründen. Mit klassischen `<script src="…">`-Tags funktioniert
das Laden uneingeschränkt, ganz ohne Server. Details siehe SPEC.md
Abschnitt 6.3.

## Technischer Stand

Reines Vanilla HTML/CSS/JavaScript, keine Frameworks, keine
Build-Tools, keine Abhängigkeiten. Der aktuelle Entwicklungsstand und
offene Punkte (überwiegend manuelle Tests) stehen in
[TASKS.md](TASKS.md).

## Nicht enthalten (bewusst)

Kein Server/Backend, keine Anmeldung, kein Geräte-Sync (Fortschritt ist
rein lokal im Browser), keine Audiodateien. Siehe SPEC.md Abschnitt 12
für die vollständige Liste.
