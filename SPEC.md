# SPEC: Norwegisch-Übungswebseite ("Et år i Norge")

Status: Planungsdokument – es existiert noch kein Code. Diese Datei ist die
verbindliche Grundlage für die Umsetzung in TASKS.md.

## 1. Ziel

Eine private Übungswebseite, die Grammatikaufgaben zu "Et år i Norge"
(Norwegisch Bokmål) stellt, die Antwort sofort prüft und bei Fehlern die
korrekte Lösung plus eine kurze deutsche Erklärung der Regel zeigt.

Zielgruppe: eine Person (die Nutzerin selbst), kein Mehrbenutzerbetrieb,
keine Anmeldung.

## 2. Nutzungskontext

- Läuft rein lokal im Browser durch Doppelklick auf `index.html`
  (`file://…`), **ohne** Node/Build-Tools, **ohne** Backend-Server,
  **ohne** Internetverbindung.
- Diese Randbedingung hat eine wichtige technische Konsequenz, siehe
  Abschnitt 6.3.

## 3. Grammatikthemen

Jedes Thema hat einen stabilen Slug (wird in den Aufgaben-Dateien und im
Fortschritts-Speicher verwendet) und eine kurze Beschreibung. Die
Aufgabentypen je Thema sind bewusst eingeschränkt auf das, was
grammatikalisch sinnvoll ist (nicht jedes Thema bekommt jeden Typ).

| Slug | Thema | passende Aufgabentypen |
|---|---|---|
| `infinitiv` | Infinitiv | Lückentext, Formen bilden |
| `praesens` | Präsens | Formen bilden, Lückentext |
| `modalverben` | Modalverben | Lückentext |
| `adjektive` | Adjektive (inkl. unbestimmte Formen) | Formen bilden, Lückentext |
| `wortstellung` | Wortstellung (allgemein, V2-Regel) | Sätze ordnen |
| `inversion` | Inversion | Sätze ordnen, Lückentext |
| `ikke-stellung` | Wortstellung mit "ikke" | Sätze ordnen, Lückentext |
| `imperativ` | Imperativ | Formen bilden, Lückentext |
| `artikel` | Unbestimmte und bestimmte Artikel | Formen bilden, Lückentext |
| `artikel-auslassen` | Auslassen des Artikels | Lückentext |
| `singular-plural` | Singular und Plural | Formen bilden |
| `fragewoerter` | Fragewörter | Lückentext |
| `mye-mange` | mye/mange | Lückentext |
| `zahlen` | Zahlen bis 100 | Zahlen schreiben |

Diese Liste ist die verbindliche Themenliste für Auswahl-UI und
Fortschritts-Tracking (14 Themen).

### 3.1 Aufgabenanzahl je Thema (Startbefüllung)

Verbindliche Zielzahlen für die Erstbefüllung (Phase 1/2/6 in TASKS.md):

- **6 Aufgaben** pro Thema als Standard.
- **Ausnahme `adjektive`: 10–12 Aufgaben**, da dieses Thema Priorität hat
  und der vorhandene Adjektiv-Wortschatz aus `vokabeln/lektion-01–04.md`
  bereits mehrere Beugungsmuster abdeckt (siehe Anhang, Abschnitt 14).
  Damit lassen sich Aufgaben zu regelmäßiger Beugung, Adjektiven auf
  `-ig` (kein `-t`), Doppelkonsonant-Reduktion und e-Ausfall (z. B.
  `gammel → gammelt/gamle`) abdecken, ohne Vokabeln zu erfinden.
- Ergibt in Summe ca. **14 × 6 + (10–12 zusätzlich für adjektive) ≈
  92–94 Aufgaben** in der Erstbefüllung.
- Diese Zahlen sind ein Startpunkt, keine Obergrenze – du kannst jederzeit
  weitere Aufgaben in den `data/aufgaben-*.js`-Dateien ergänzen.

## 4. Aufgabentypen

### 4.1 Lückentext (`luecke`)
Ein Satz/Text mit einer oder mehreren Lücken (`___`). Eingabe über ein oder
mehrere Textfelder. Mehrere richtige Antworten möglich (z. B.
`boka`/`boken`).

### 4.2 Formen bilden (`form`)
Anweisung + Ausgangswort (z. B. „Bilde den bestimmten Plural von: et hus“).
Eingabe über ein Textfeld.

### 4.3 Sätze ordnen (`satzstellung`)
Vorgegebene Wörter/Satzteile in korrekte Reihenfolge bringen. UI: Wörter als
antippbare Chips, die per Klick/Tap in eine Zielzone übernommen werden
(kein Drag & Drop nötig, damit es auf dem Handy gut funktioniert). Klick auf
ein Wort im Zielbereich nimmt es wieder zurück. Mehrere korrekte
Reihenfolgen können hinterlegt werden (z. B. bei freier Stellung von
Adverbialen).

### 4.4 Zahlen schreiben (`zahlen`)
Zwei Richtungen möglich, je Aufgabe festgelegt:
- Ziffer → Wort (z. B. „Schreibe die Zahl 42 in Worten“)
- Wort → Ziffer (z. B. „Wie viel ist ‚førtito‘? Schreibe die Ziffer.“)

Eingabe über ein Textfeld.

## 5. Datenmodell

Jede Aufgabe ist ein Objekt mit gemeinsamen Basisfeldern plus
typspezifischen Zusatzfeldern.

### 5.1 Gemeinsame Felder (alle Typen)

```
{
  "id": "adj-001",            // eindeutig, Format: <thema-kurz>-<laufnummer>
  "thema": "adjektive",       // muss einem Slug aus Abschnitt 3 entsprechen
  "lektion": 3,               // optional, Zahl oder null; freies Feld,
                               // KEIN automatischer Abgleich mit vokabeln/*.md
  "typ": "form",              // "luecke" | "form" | "satzstellung" | "zahlen"
  "aufgabe": "…",             // Aufgabentext, wie er angezeigt wird
  "antworten": ["…", "…"],    // Liste akzeptierter Antworten (mind. 1)
  "erklaerung": "…"           // kurze deutsche Regel-Erklärung, wird bei
                               // Fehler UND auf Wunsch bei richtiger
                               // Antwort angezeigt
}
```

### 5.2 Zusatzfeld für `satzstellung`

```
"woerter": ["Jeg", "ikke", "liker", "fisk"]   // Reihenfolge wie angezeigt
                                                // (zufällig/gemischt),
                                                // "antworten" enthält die
                                                // vollständigen korrekten
                                                // Sätze als Strings
```

### 5.3 Beispiel je Typ

**Lückentext:**
```json
{
  "id": "mm-003",
  "thema": "mye-mange",
  "lektion": 3,
  "typ": "luecke",
  "aufgabe": "Hvor ___ koster billetten? (mye/mange)",
  "antworten": ["mye"],
  "erklaerung": "'mye' steht bei nicht zählbaren Mengen/Größen wie Preisen; 'mange' steht bei zählbaren Dingen im Plural."
}
```

**Formen bilden:**
```json
{
  "id": "plur-005",
  "thema": "singular-plural",
  "lektion": 3,
  "typ": "form",
  "aufgabe": "Bilde den unbestimmten Plural von: en pølse",
  "antworten": ["pølser"],
  "erklaerung": "En-Wörter bilden den unbestimmten Plural meist mit -er: en pølse → pølser."
}
```

**Sätze ordnen:**
```json
{
  "id": "ikke-002",
  "thema": "ikke-stellung",
  "lektion": null,
  "typ": "satzstellung",
  "aufgabe": "Bring die Wörter in die richtige Reihenfolge.",
  "woerter": ["liker", "Jeg", "ikke", "fisk"],
  "antworten": ["Jeg liker ikke fisk"],
  "erklaerung": "Im Hauptsatz steht 'ikke' direkt nach dem finiten Verb (V2-Regel)."
}
```

**Zahlen schreiben:**
```json
{
  "id": "zahl-021",
  "thema": "zahlen",
  "lektion": null,
  "typ": "zahlen",
  "aufgabe": "Schreibe die Zahl 42 in Worten.",
  "antworten": ["førtito"],
  "erklaerung": "Zusammengesetzte Zehnerzahlen werden im modernen Bokmål als ein Wort geschrieben: førti + to = førtito."
}
```

## 6. Technische Architektur

### 6.1 Dateistruktur (geplant)

```
index.html
css/
  style.css
js/
  app.js            // View-Steuerung, Event-Handling
  check.js          // Antwortprüfung/Normalisierung
  progress.js        // localStorage-Fortschritt
  render-*.js         // je Aufgabentyp eine Render-Funktion
data/
  themen.js          // Themenliste aus Abschnitt 3 (Slug, Label, erlaubte Typen)
  aufgaben-<thema>.js // pro Thema eine Datei mit Aufgaben-Array
vokabeln/
  lektion-01.md … (bereits vorhanden, bleibt unverändert)
SPEC.md
TASKS.md
```

### 6.2 Kein Framework, kein Build-Schritt

Reines HTML/CSS/JavaScript (ES5/ES2017, keine Transpilierung nötig).
Views werden per JS ein-/ausgeblendet (kein Router, keine Mehrseiten-Navigation).

### 6.3 Datenformat: `.js` statt reinem `.json` (wichtige Design-Entscheidung)

**Anforderung war:** Aufgaben als JSON, getrennt vom Code.
**Problem:** Wird `index.html` per Doppelklick geöffnet (`file://…`),
blockieren Chrome/Edge das Nachladen externer Dateien per `fetch()` und
auch ES-Modul-`import` aus Sicherheitsgründen (CORS-Regel für
`file://`-Origins). Reine `.json`-Dateien ließen sich damit **nicht**
zuverlässig laden, ohne dass du jedes Mal einen lokalen Server starten
müsstest – das widerspräche der Anforderung "kein Server".

**Lösung:** Die Aufgaben-Dateien enthalten weiterhin reine
JSON-Datenstrukturen, sind aber in eine minimale JS-Zuweisung
eingebettet, z. B.:

```js
// data/aufgaben-adjektive.js
window.ALLE_AUFGABEN = (window.ALLE_AUFGABEN || []).concat([
  { "id": "adj-001", "thema": "adjektive", "lektion": 2, "typ": "form",
    "aufgabe": "…", "antworten": ["…"], "erklaerung": "…" },
  …
]);
```

Das ist inhaltlich identisch zu JSON (die Objekte selbst sind valides
JSON), nur mit einer Zuweisung drumherum. Jede Themen-Datei hängt ihr
Array an `window.ALLE_AUFGABEN` an, sodass beim Hinzufügen neuer Themen
**keine andere Datei angepasst werden muss** (kein manuelles Ergänzen in
`app.js`). Die Dateien werden per klassischem
`<script src="data/aufgaben-adjektive.js">` geladen (kein `fetch`, kein
`import`, funktioniert unter `file://` uneingeschränkt in jedem
Browser). Du kannst die Aufgaben-Objekte wie gewohnt als JSON
lesen/bearbeiten/ergänzen, nur die erste und letzte Zeile der Datei sind
kein JSON.

Falls du später doch bereit bist, die Seite über einen einfachen lokalen
Static-Server zu öffnen (z. B. `python3 -m http.server`, weiterhin kein
Backend/keine Anmeldung), kann auf echtes `fetch('data/….json')`
umgestellt werden. Das ist als spätere Option in TASKS.md vorgemerkt,
aber nicht Teil der ersten Version.

### 6.4 Views

1. **Auswahl-Ansicht:** Themen (Mehrfachauswahl), Lektion (optional,
   Dropdown inkl. „alle“), Zufallsmodus (Checkbox: Reihenfolge mischen),
   Anzahl Aufgaben (Auswahl z. B. 5/10/20/alle), Fortschrittsübersicht
   pro Thema (Balken/Prozent), Start-Button.
2. **Übungs-Ansicht:** zeigt eine Aufgabe passend zu ihrem Typ, Eingabe,
   „Prüfen“-Button, danach Feedback-Bereich (richtig/falsch, korrekte
   Lösung, Erklärung), „Weiter“-Button, Fortschrittsanzeige innerhalb der
   Session (z. B. „Aufgabe 4/10“).
3. **Zusammenfassungs-Ansicht:** Ergebnis der Session (richtig/falsch-Anzahl),
   Aktualisierung des Fortschritts, Button „Zurück zur Auswahl“.

## 7. Antwortprüfung / Normalisierung

Vor dem Vergleich mit den Einträgen in `antworten` wird sowohl die
Nutzereingabe als auch jede hinterlegte Antwort normalisiert:

1. Trim (führende/nachfolgende Leerzeichen entfernen)
2. Mehrfache Leerzeichen zu einem Leerzeichen zusammenfassen
3. In Kleinbuchstaben umwandeln (`toLowerCase()`, unterstützt æ/ø/å)

Satzzeichen (Punkt, Komma) werden **nicht** automatisch entfernt – falls
eine Aufgabe mit oder ohne Punkt akzeptiert werden soll, müssen beide
Varianten explizit in `antworten` stehen. Eine Eingabe gilt als richtig,
wenn sie nach Normalisierung mit **mindestens einem** Eintrag in
`antworten` übereinstimmt.

Bei `satzstellung` wird die vom Nutzer zusammengeklickte Wortfolge mit
Leerzeichen verbunden und genauso normalisiert/verglichen.

Bei `zahlen` gilt dieselbe Normalisierung (Groß-/Kleinschreibung,
Leerzeichen); Ziffern vs. Wort-Schreibweise müssen exakt der in der
Aufgabe verlangten Richtung entsprechen (keine automatische Umrechnung).

### 7.1 en/ei-Doppelformen

Bei Substantiven, die im Wortschatz mit doppeltem Genus geführt werden
(„en/ei", z. B. `en/ei kake`, `en/ei bok`), sind **beide** resultierenden
Formen als richtig zu hinterlegen, nicht nur eine:

- unbestimmte Form: z. B. „en kake" **und** „ei kake"
- bestimmte Form: z. B. „boka" **und** „boken"
- ggf. Adjektivkongruenz, die vom Genus abhängt (z. B. „ei stor bok" vs.
  „en stor bok" – hier ist die Adjektivform bei `stor` in diesem Fall
  identisch, aber bei Wörtern, deren Artikel-/Possessivform vom Genus
  abhängt, müssen beide Varianten in `antworten` stehen).

Das bedeutet praktisch: Beim Erstellen einer Aufgabe zu einem en/ei-Wort
müssen in `antworten` grundsätzlich beide Genus-Varianten als eigene
Strings aufgeführt werden, z. B.:

```json
{
  "antworten": ["boka", "boken"]
}
```

Die Antwortprüfung selbst (Abschnitt 7) behandelt das nicht als
Sonderfall – es reicht die normale „mindestens ein Treffer in
`antworten`"-Logik, wenn die Daten korrekt beide Formen enthalten. Diese
Regel ist daher vor allem eine **Vorgabe für die Dateninhalte**, nicht
für den Prüf-Code.

## 8. Fortschritts-Tracking

- Speicherort: `localStorage`, Key `eaan_fortschritt`.
- Struktur:
  ```json
  {
    "adjektive": { "versucht": 12, "richtig": 9 },
    "zahlen": { "versucht": 5, "richtig": 5 }
  }
  ```
- Aktualisierung: nach jeder beantworteten Aufgabe wird `versucht` um 1
  erhöht, `richtig` nur bei korrekter Antwort.
- Anzeige: in der Auswahl-Ansicht pro Thema als Prozentwert
  (`richtig / versucht`, gerundet) plus Balken; Themen ohne Versuche
  zeigen „noch nicht geübt“.
- Kein Ablaufdatum, kein Reset-Mechanismus in Version 1 (kann später
  ergänzt werden, siehe Abschnitt 12).

## 9. Auswahl & Zufallsmodus

- Themenauswahl: Mehrfachauswahl (Checkboxen), mindestens 1 Thema muss
  gewählt sein, sonst ist „Start“ deaktiviert.
- Lektion-Filter: Dropdown mit „alle Lektionen“ + den in den Daten
  vorkommenden Lektionsnummern; Aufgaben mit `lektion: null` erscheinen
  bei „alle Lektionen“ immer, unabhängig vom gewählten Filter (rein
  grammatikalische Aufgaben ohne Lektionsbezug).
- Zufallsmodus: Checkbox „Reihenfolge mischen“; ist sie aus, erscheinen
  Aufgaben in der Reihenfolge, in der sie in den Daten stehen (gruppiert
  nach Thema in Auswahlreihenfolge).
- Anzahl Aufgaben pro Runde: Auswahlfeld, Default z. B. 10; „alle“
  möglich.

## 10. Vokabelanbindung

- `vokabeln/lektion-XX.md` bleibt die Wortschatz-Quelle beim
  **Erstellen** der Aufgaben (manuell durch dich/mich beim Befüllen der
  `data/aufgaben-*.js`-Dateien). Es gibt **keinen automatischen
  Programm-Abgleich zur Laufzeit** zwischen Vokabeldateien und Aufgaben
  (kein Code prüft das) – die folgenden Regeln gelten als redaktionelle
  Vorgabe beim manuellen Erstellen der Aufgaben.
- **Kumulative Wortschatz-Regel:** Für eine Aufgabe dürfen nur Vokabeln
  verwendet werden, die in `vokabeln/lektion-01.md` bis einschließlich
  der Lektion stehen, in der das zuletzt eingeführte verwendete Wort
  vorkommt (d. h. alle Vokabeln aus Lektion 1 bis N, wenn die Aufgabe
  Lektion N zugeordnet wird). Zusätzlich erlaubt sind Grundwörter, die
  nicht in den Vokabeldateien stehen müssen, weil sie als bekannt
  vorausgesetzt werden: Personalpronomen (jeg, du, han, hun, vi, dere,
  de), Possessivpronomen, Zahlwörter, Grundverben wie „å være"/„å ha".
- **Abschnitte „Eigene Notizen"** in den Vokabeldateien (z. B. in
  `lektion-02.md`, `lektion-03.md`) sind **keine Vokabelquelle** – Wörter,
  die nur dort stehen, gelten beim Erstellen von Aufgaben als nicht
  eingeführt.
- **Bestimmung des `lektion`-Felds:** Das Feld `lektion` einer Aufgabe
  entspricht der höchsten Lektionsnummer, aus der ein in der Aufgabe
  verwendetes (Nicht-Grundwort-)Vokabel stammt. Beispiel: Verwendet eine
  Aufgabe nur Wörter aus Lektion 1 und 2, ist `lektion: 2`. Aufgaben, die
  ausschließlich Grundwörter und keine lektionsgebundene Vokabel
  verwenden (z. B. reine Grammatikbeispiele), erhalten `lektion: null`.
- Vokabeln aus `vokabeln/adjektive-uebungen.md` gelten als eigener,
  lektionsunabhängiger Pool (siehe Abschnitt 14.1) und führen ebenfalls
  zu `lektion: null`, sofern nicht zusätzlich lektionsgebundene Vokabeln
  in derselben Aufgabe vorkommen.
- Es gibt weiterhin **keine Validierung durch Code** – die Regel ist eine
  Arbeitsanweisung für die manuelle/KI-gestützte Aufgabenerstellung
  (relevant für die „Inhaltsprüfung"-Schritte in TASKS.md).

## 11. Mobile/Responsive

- Layout per CSS Flexbox/Grid, Breakpoint ca. 600px.
- Touch-Ziele (Buttons, Wort-Chips) mindestens 44×44px.
- Wort-Chips bei `satzstellung` per Tap (kein Drag & Drop).
- Eingabefelder mit ausreichender Schriftgröße (mind. 16px, verhindert
  Auto-Zoom auf iOS).

## 12. Nicht-Ziele (Out of Scope für Version 1)

- Kein Server, kein Backend, keine Datenbank, keine Anmeldung/Accounts.
- Keine Audiodateien/Aussprache.
- Kein Sync zwischen Geräten (Fortschritt ist rein lokal im Browser-
  `localStorage`, geräte-/browserbezogen).
- Keine automatische Generierung von Aufgaben (z. B. aus Vokabellisten
  per Zufall) – alle Aufgaben werden manuell in den Daten-Dateien
  gepflegt.
- Keine Spaced-Repetition-Logik (nur einfache Trefferquote pro Thema).

## 13. Mögliche spätere Erweiterungen (nicht Teil dieser Version)

- Umstellung auf echtes `fetch('*.json')` mit lokalem Mini-Server.
- Detailliertere Fortschrittsdaten pro Aufgabe (für Spaced Repetition).
- Export/Import des Fortschritts (z. B. als Datei) für Geräte-Wechsel.
- Audio/Aussprache-Beispiele.

## 14. Anhang: Adjektiv-Wortschatz aus `vokabeln/lektion-01–04.md`

Referenzliste für die Erstellung der `adjektive`-Aufgaben (Abschnitt 3.1).
Grundform, Neutrum (+t-Form) und Bestimmt-/Plural-Form (+e-Form), plus
Auffälligkeit für die Erklärungstexte.

| Grundform | Neutrum | Bestimmt/Plural | Muster |
|---|---|---|---|
| varm | varmt | varme | regelmäßig |
| snill | snilt | snille | Doppelkonsonant → einfacher Konsonant |
| formell | formelt | formelle | Doppelkonsonant → einfacher Konsonant |
| sulten | sultent | sultne | e-Ausfall |
| billig | billig | billige | Adjektive auf -ig: kein zusätzliches -t |
| vanskelig | vanskelig | vanskelige | Adjektive auf -ig: kein zusätzliches -t |
| hyggelig | hyggelig | hyggelige | Adjektive auf -ig: kein zusätzliches -t |
| dyr | dyrt | dyre | regelmäßig |
| fin | fint | fine | regelmäßig |
| lett | lett | lette | endet bereits auf -t: Neutrum unverändert |
| lys | lyst | lyse | regelmäßig |
| stor | stort | store | regelmäßig; Komparativ/Superlativ vorhanden: større |
| gammel | gammelt | gamle | e-Ausfall |
| god / bra | godt | gode | unregelmäßig, sehr hochfrequent |

Diese 14 Adjektive decken die wichtigsten Beugungsmuster ab und reichen
für die Zielzahl von 10–12 Aufgaben zum Thema `adjektive`. Sobald weitere
`vokabeln/lektion-XX.md`-Dateien entstehen, kann diese Tabelle erweitert
werden.

### 14.1 Zusätzlicher Adjektiv-Wortschatz aus `vokabeln/adjektive-uebungen.md`

Aus eigenen Adjektiv-Arbeitsblättern (Genus-/Plural-Übung, siehe dortige
Datei), ergänzt Substantive mit allen drei Genera (en/ei/et) sowie
weitere Adjektive:

| Grundform | Neutrum | Bestimmt/Plural | Muster |
|---|---|---|---|
| søt | – | – | (nur Grundform belegt) |
| rød | rødt | røde | regelmäßig |
| grønn | grønt [PRÜFEN] | grønne | regelmäßig, Neutrum nicht im Arbeitsblatt belegt |
| gul | gult [PRÜFEN] | gule | regelmäßig, Neutrum nicht im Arbeitsblatt belegt |
| ny | nytt [PRÜFEN] | nye | regelmäßig, Neutrum nicht im Arbeitsblatt belegt |
| brun | brunt | brune | regelmäßig |
| mørk | mørkt | mørke | regelmäßig |

Zusammen mit den Substantiven `appelsin, tomat, agurk, pære, hytte, hus,
jordbær, egg, hår, jakke, bil, troll, vikingskip, bok` steht jetzt für
alle drei Genera (en/ei/et) und für unregelmäßige Pluralbildung (`bok →
bøker`, unveränderte Plurale bei `hus/jordbær/egg/troll/vikingskip`)
ausreichend Material zur Verfügung, um die Zielzahl von 10–12 Aufgaben
zum Thema `adjektive` ohne erfundene Vokabeln zu erreichen.
