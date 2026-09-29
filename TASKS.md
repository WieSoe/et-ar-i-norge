# TASKS: Norwegisch-Übungswebseite

Reihenfolge = Umsetzungsreihenfolge. Jeder Schritt ist einzeln testbar
(im Browser per Doppelklick auf `index.html` öffnen). Bezieht sich auf
SPEC.md – bei Widersprüchen gilt SPEC.md.

## Phase 0 – Projektgerüst

- [x] Ordnerstruktur anlegen: `css/`, `js/`, `data/`
- [x] Leere `index.html` mit Grundgerüst (`<head>`, Titel, Einbindung von
      `css/style.css` und den `js/*.js`-Dateien in sinnvoller Reihenfolge)
- [x] `css/style.css` anlegen (zunächst leer/minimal)
- [x] Test: `index.html` lässt sich per Doppelklick öffnen, zeigt eine
      leere Seite ohne Konsolenfehler

## Phase 1 – Minimal lauffähige Version: ein Thema, ein Aufgabentyp

Ziel dieser Phase: End-to-end einmal alles durchspielen (Aufgabe
anzeigen → Antwort eingeben → prüfen → Feedback) mit dem einfachsten
Aufgabentyp (`luecke`) und einem Thema (`mye-mange`), noch **ohne**
Themen-/Lektionsauswahl, **ohne** Fortschritts-Tracking.

- [x] `data/themen.js`: Themenliste aus SPEC Abschnitt 3 als Array von
      `{slug, label, erlaubteTypen}` anlegen
- [x] `data/aufgaben-mye-mange.js`: 6 Beispielaufgaben vom Typ `luecke`
      nach Schema aus SPEC 5.1/5.3 anlegen (Vokabeln aus `vokabeln/`
      verwenden, wo passend)
- [x] `js/check.js`: Funktion `normalisieren(text)` schreiben (trim,
      Mehrfach-Leerzeichen, lowercase)
- [x] `js/check.js`: Funktion `istRichtig(eingabe, antworten[])` schreiben,
      die `normalisieren` nutzt
- [x] Manueller Test in Browser-Konsole: `istRichtig("Mye ", ["mye"])` →
      `true`, `istRichtig("mange", ["mye"])` → `false`
      (per Node statt Browser-Konsole ausgeführt, siehe Chat)
- [x] `js/render-luecke.js`: Funktion, die eine `luecke`-Aufgabe ins DOM
      rendert (Aufgabentext + ein Eingabefeld + „Prüfen“-Button)
- [x] `js/app.js`: beim Laden die 6 Aufgaben aus
      `data/aufgaben-mye-mange.js` nacheinander anzeigen (feste
      Reihenfolge, kein Zufall)
- [x] `js/app.js`: Klick auf „Prüfen“ ruft `istRichtig` auf und zeigt
      Feedback-Bereich mit „Richtig!“ oder „Falsch. Richtige Antwort: …“
      + `erklaerung`
- [x] „Weiter“-Button, der zur nächsten Aufgabe springt; nach der
      letzten Aufgabe erscheint ein einfacher Endtext („Fertig, X von 6
      richtig“)
- [ ] Manueller Test (durch dich): alle 6 Aufgaben einmal richtig,
      einmal falsch beantworten, Feedback und Endergebnis stimmen
      (`index.html` doppelklicken)
- [x] **Inhaltsprüfung `mye-mange`:** alle 6 Aufgaben nochmal auf
      Grammatikfehler, falsches Genus und eindeutige Lösbarkeit geprüft
      (inkl. Kontrolle der Vokabel-/Lektionsregel aus SPEC 10 und der
      en/ei-Doppelformen-Regel aus SPEC 7.1) – keine Fehler gefunden,
      5 Beispielaufgaben im Chat gezeigt

## Phase 2 – Weitere Aufgabentypen

- [x] `js/render-form.js`: Rendering für Typ `form` (Anweisung +
      Ausgangswort + ein Eingabefeld), nutzt dieselbe `istRichtig`-Logik
- [x] `data/aufgaben-singular-plural.js`: 6 Beispielaufgaben vom Typ
      `form` angelegt (pølse→pølser, hus→hus, bil→biler, tre→trær,
      bok→bøker, egg→egg – regelmäßig + unregelmäßig gemischt)
- [x] `js/app.js` erweitert: `RENDER_NACH_TYP`-Dispatch-Tabelle erkennt
      `typ` einer Aufgabe und ruft die passende Render-Funktion auf
- [x] Manueller Test: Übungsrunde mit gemischten Typen funktioniert
      (per simulierter DOM-Umgebung: alle 90 Aufgaben aus allen 14
      Themen nacheinander durchlaufen, korrekter Renderer je Typ)
- [x] **Inhaltsprüfung `singular-plural`:** geprüft, keine Fehler,
      5 Beispiele s. Chat
- [x] `js/render-satzstellung.js`: Rendering für Typ `satzstellung`
      (Wort-Chips antippbar, Zielzone, Zurücknehmen durch erneutes
      Antippen im Zielbereich)
- [x] `data/aufgaben-wortstellung.js`: 6 Beispielaufgaben vom Typ
      `satzstellung` angelegt (einfache SVO-Sätze, V2-Regel; für
      Inversion und 'ikke' siehe die separaten Themen, die bereits in
      Phase 6 mit `luecke` befüllt wurden)
- [x] `js/check.js` genutzt: zusammengeklickte Wortfolge wird zu einem
      String verbunden und mit `istRichtig` geprüft
- [x] Manueller Test: Wörter antippen, Reihenfolge ändern (durch
      Zurücknehmen), richtige und falsche Reihenfolge geprüft (inkl.
      automatischem Konsistenz-Check: Antwort-Wörter == woerter[]
      als Multiset, für alle 6 Aufgaben bestätigt)
- [x] **Inhaltsprüfung `wortstellung`:** geprüft, keine Fehler,
      5 Beispiele s. Chat
- [x] `js/render-zahlen.js`: Rendering für Typ `zahlen` (wie `form`,
      eigene Render-Funktion für Klarheit/spätere Erweiterbarkeit)
- [x] `data/aufgaben-zahlen.js`: 6 Beispielaufgaben (Ziffer→Wort und
      Wort→Ziffer gemischt, Zahlen 0–100, modernes Bokmål ohne "og")
      angelegt
- [x] Manueller Test: Zahlen-Aufgaben in beide Richtungen funktionieren
      (getestet: zahl-001 Ziffer→Wort korrekt erkannt)
- [x] **Inhaltsprüfung `zahlen`:** geprüft, keine Fehler, 5 Beispiele
      s. Chat
- [ ] Manueller Test (durch dich): im echten Browser eine
      `satzstellung`-Aufgabe per Antippen lösen (Wort-Chips), eine
      `form`- und eine `zahlen`-Aufgabe beantworten

**Architektur-Hinweis:** Alle `data/aufgaben-*.js`-Dateien registrieren
sich seit dieser Phase selbst in `window.ALLE_AUFGABEN` (siehe SPEC 6.3)
statt in eigenen `window.AUFGABEN_<THEMA>`-Variablen – neue Themen
brauchen dadurch keine Änderung an `app.js` mehr.

## Phase 3 – Themen- und Lektionsauswahl, Zufallsmodus

- [x] Auswahl-Ansicht (HTML-Grundgerüst): Bereich mit Checkboxen für
      alle Themen aus `data/themen.js`
- [x] Lektion-Dropdown befüllen: alle in den geladenen Aufgaben
      vorkommenden Lektionsnummern + Option „alle Lektionen“
- [x] Checkbox „Reihenfolge mischen“ (Zufallsmodus)
- [x] Auswahlfeld „Anzahl Aufgaben“ (5/10/20/alle)
- [x] „Start“-Button: deaktiviert, solange kein Thema ausgewählt ist
- [x] Logik: Aufgaben aus allen `data/aufgaben-*.js`-Dateien
      zusammenführen zu einer Gesamtliste (`ALLE_AUFGABEN`)
- [x] Logik: Filterfunktion (gewählte Themen + Lektion, wobei
      `lektion: null` immer durchgelassen wird) nach SPEC 9
- [x] Logik: Zufallsmodus mischt gefilterte Liste (Fisher-Yates-Shuffle),
      danach Begrenzung auf gewählte Anzahl
- [x] View-Umschaltung: von Auswahl-Ansicht zu Übungs-Ansicht und zurück
      (Ein-/Ausblenden von `<section>`-Blöcken via `hidden`-Attribut)
- [x] Manueller Test: verschiedene Kombinationen aus Themen/Lektion/
      Zufall/Anzahl ergeben plausible Aufgabenlisten (per simulierter
      DOM-Umgebung in Node getestet, siehe Chat)
- [ ] Manueller Test (durch dich): Themen ohne Aufgaben sind ausgegraut/
      deaktiviert, „mye-mange" auswählbar, Start funktioniert, leere
      Auswahl-Kombination zeigt Hinweistext statt Absturz

## Phase 4 – Fortschritts-Tracking

- [x] `js/progress.js`: Funktion `fortschrittLaden()` liest
      `localStorage['eaan_fortschritt']`, gibt `{}` zurück falls leer
- [x] `js/progress.js`: Funktion `fortschrittSpeichern(daten)` schreibt
      zurück in `localStorage`
- [x] `js/progress.js`: Funktion `fortschrittAktualisieren(thema, richtig)`
      erhöht `versucht` (+ ggf. `richtig`) für das Thema und speichert
- [x] `js/app.js`: nach jeder beantworteten Aufgabe
      `fortschrittAktualisieren` aufrufen
- [x] Auswahl-Ansicht: pro Thema Prozentanzeige (`richtig/versucht`)
      anzeigen; „noch nicht geübt“ bei 0 Versuchen (Balkendarstellung
      als CSS-Fortschrittsbalken noch offen, siehe Hinweis unten)
- [ ] Manueller Test (durch dich): Browser-DevTools → Application →
      Local Storage prüfen, dass Werte korrekt geschrieben werden;
      Seite neu laden, Werte bleiben erhalten
- [x] Manueller Test: mehrere Themen nacheinander üben, Prozentwerte in
      der Auswahl-Ansicht aktualisieren sich korrekt (per simulierter
      DOM-Umgebung in Node getestet: 5/6 richtig → 83% angezeigt)

**Hinweis:** Fortschritt wird aktuell nur als Text ("83% (5/6)")
angezeigt, nicht als visueller Balken. Kann bei Bedarf in Phase 7
(Politur) ergänzt werden.

## Phase 5 – Zusammenfassungs-Ansicht

- [x] Nach der letzten Aufgabe einer Runde: Zusammenfassungs-Ansicht
      statt einfachem Endtext (Anzahl richtig/falsch + Liste der falsch
      beantworteten Aufgaben mit korrekter Lösung + Erklärung zum
      Nachlesen)
- [x] Button „Zurück zur Auswahl“ führt zur Auswahl-Ansicht zurück (mit
      aktualisierten Fortschrittswerten)
- [x] Button „Nochmal gleiche Auswahl üben“ startet direkt neue Runde
      mit denselben Filtereinstellungen (`letzteFilterAuswahl` +
      `berechneAufgabenListe`, bei Zufallsmodus neu gemischt)
- [x] Manueller Test: 6 Aufgaben mit 1 bewusst falscher Antwort
      durchgespielt (per simulierter DOM-Umgebung) – Rückblick-Liste
      zeigt genau den einen falschen Eintrag mit Aufgabentext, korrekter
      Antwort und Erklärung; „Nochmal“-Button startet neue Runde korrekt
- [ ] Manueller Test (durch dich): im echten Browser eine Runde mit
      Absicht teilweise falsch beantworten, Rückblick-Liste + beide
      Buttons am Ende prüfen

## Phase 6 – Restliche Themen mit Beispielaufgaben befüllen

**Korrektur gegenüber der ursprünglichen Planung:** `wortstellung`
erlaubt laut `data/themen.js` nur den Typ `satzstellung` (noch nicht
gebaut, siehe Phase 2), nicht `luecke` – war hier fälschlich gelistet.
Stattdessen gehört `ikke-stellung` hierher (erlaubt `luecke` zusätzlich
zu `satzstellung`). Damit sind genau 10 der 14 Themen mit dem aktuell
vorhandenen `luecke`-Renderer befüllbar; `wortstellung`,
`singular-plural` und `zahlen` bleiben bis Phase 2 blockiert (siehe
eigener Abschnitt unten).

Für jedes der 10 Themen: eine `data/aufgaben-<thema>.js`-Datei mit
Beispielaufgaben (6 pro Thema, Ausnahme `adjektive`: 10–12, siehe SPEC
3.1), passend zu den erlaubten Aufgabentypen. Vokabeln nach der
kumulativen Regel aus SPEC 10 verwenden (nur Wörter bis zur jeweiligen
Lektion, keine „Eigene Notizen"), `lektion`-Feld entsprechend gesetzt.
Jede Datei registriert sich selbst in `window.ALLE_AUFGABEN` (siehe
SPEC 6.3, Architektur-Anpassung).

- [x] `data/aufgaben-infinitiv.js`: 6 Aufgaben angelegt
- [x] **Inhaltsprüfung `infinitiv`:** geprüft (å+Infinitiv vs. Infinitiv
      ohne å nach Modalverben, Lektionen 1/2/3/3/1/4), keine Fehler
- [x] `data/aufgaben-praesens.js`: 6 Aufgaben angelegt
- [x] **Inhaltsprüfung `praesens`:** geprüft (regelmäßige Präsensbildung
      Infinitiv+r, Lektionen 1/3/4/2/3/4), keine Fehler
- [x] `data/aufgaben-modalverben.js`: 6 Aufgaben angelegt
- [x] **Inhaltsprüfung `modalverben`:** geprüft (kan/må/vil, nur Vokabeln
      aus L1–4 verwendet, kein 'skal' da nicht eingeführt), keine Fehler
- [x] `data/aufgaben-adjektive.js`: 62 Aufgaben angelegt (12 initial +
      50 nachträglich ergänzt auf Wunsch; Wortschatz aus SPEC 14 + 14.1,
      alle Beugungsmuster abgedeckt: regelmäßig, -ig/-lig/-sk ohne -t,
      e-Ausfall (gammel, sulten), Doppelkonsonant-Reduktion (snill,
      formell), Konsonant-Verdopplung (søt→søtt), unregelmäßig
      (god/godt/gode, annen/annet/andre), en/ei ohne Endung, Plural/
      Bestimmt +e)
- [x] **Inhaltsprüfung `adjektive`:** geprüft (62/62 automatisiert auf
      korrekte Erkennung getestet, keine doppelten IDs/Aufgabentexte),
      keine Fehler
- [x] `data/aufgaben-inversion.js`: 6 Aufgaben angelegt (Verbform an
      bereits korrekter V2-Position, echte Umstellungsaufgaben folgen
      mit `satzstellung` in Phase 2)
- [x] **Inhaltsprüfung `inversion`:** geprüft, keine Fehler
- [x] `data/aufgaben-ikke-stellung.js`: 6 Aufgaben angelegt (Lücke =
      ganzer Satzrest inkl. korrekter 'ikke'-Position)
- [x] **Inhaltsprüfung `ikke-stellung`:** geprüft, keine Fehler
- [x] `data/aufgaben-imperativ.js`: 6 Aufgaben angelegt
- [x] **Inhaltsprüfung `imperativ`:** geprüft, keine Fehler
- [x] `data/aufgaben-artikel.js`: 6 Aufgaben angelegt (unbestimmter
      Artikel + bestimmte Form, inkl. en/ei-Doppelformen boka/boken)
- [x] **Inhaltsprüfung `artikel`:** geprüft, keine Fehler
- [x] `data/aufgaben-artikel-auslassen.js`: 6 Aufgaben angelegt
- [x] **Inhaltsprüfung `artikel-auslassen`:** geprüft, keine Fehler
- [x] `data/aufgaben-fragewoerter.js`: 6 Aufgaben angelegt
- [x] **Inhaltsprüfung `fragewoerter`:** geprüft, keine Fehler
- [x] Automatisiertes Struktur-Lint (IDs eindeutig, Typ passend zum
      Thema laut `data/themen.js`, Pflichtfelder vorhanden, `___` bei
      allen `luecke`-Aufgaben vorhanden): 72 Aufgaben, keine Fehler
- [x] Manueller Test: alle 11 auswählbaren Themen (10 neue + mye-mange)
      in der Auswahl korrekt aktivierbar, `wortstellung`/
      `singular-plural`/`zahlen` weiterhin ausgegraut (per simulierter
      DOM-Umgebung getestet)
- [x] Manueller Test: Themen- + Lektion-Filter-Kombination liefert
      korrekte Teilmenge (getestet: `infinitiv`+`adjektive` bei
      Lektion 4 → exakt 13 Aufgaben, inkl. lektionslose Adjektiv-Aufgaben)
- [ ] Manueller Test (durch dich): ein paar Aufgaben je Thema im echten
      Browser durchklicken, Feedback/Erklärung erscheinen korrekt

### Ehemals offen, jetzt in Phase 2 erledigt

- [x] `wortstellung` (Typ `satzstellung`) – 6 Aufgaben angelegt
- [x] `singular-plural` (Typ `form`) – 6 Aufgaben angelegt
- [x] `zahlen` (Typ `zahlen`) – 6 Aufgaben angelegt

**Damit sind jetzt alle 14 Themen mit Aufgaben befüllt (90 gesamt).**

## Phase 7 – Mobile/Responsive Feinschliff

- [x] CSS-Grundlayout mit Flexbox (Chip-Liste, Themen-Liste,
      Button-Zeilen), Breakpoint bei 600px per `@media`-Query ergänzt
      (schmalere Innenabstände, volle Breite bei Haupt-Buttons)
- [x] Touch-Ziele (Buttons, Wort-Chips) auf min. 44×44px geprüft: Buttons
      global `min-height:44px`, Wort-Chips `min-height:44px`,
      Themen-Checkbox über umschließendes `<label>` mit `min-height:44px`
      (natives Label-Verhalten macht die ganze Zeile tappbar, nicht nur
      das 20px-Kästchen)
- [x] Eingabefeld-Schriftgröße 16px gesetzt (verhindert Auto-Zoom auf iOS)
- [ ] Manueller Test (durch dich): Seite auf Handy (oder Browser-DevTools
      Mobilansicht, schmales Fenster) durchklicken, alle vier
      Aufgabentypen bedienbar

## Phase 8 – Politur / Robustheit

- [x] Leere Auswahl (keine passenden Aufgaben zu Filter-Kombination):
      verständliche Meldung statt leerer/kaputter Ansicht (`hinweis`-Text
      in `baueAuswahlView`)
- [x] Tastaturbedienung: Eingabefeld per Enter-Taste = „Prüfen“ auslösen
      (in `render-luecke.js`, `render-form.js`, `render-zahlen.js`)
- [x] Grundlegende Barrierefreiheit: `aria-label="Antwort"` auf allen
      Eingabefeldern, native `<label>`-Elemente für Checkboxen/Selects
      (Themenauswahl, Lektion, Zufallsmodus, Anzahl), sinnvolle
      DOM-/Tab-Reihenfolge (Auswahl → Filter → Start; Aufgabe → Eingabe
      → Prüfen → Weiter)
- [x] HTML-Kommentar oben in `index.html`: Hinweis, wie die Seite
      geöffnet wird und wie neue Aufgaben in `data/aufgaben-*.js`
      ergänzt werden (Verweis auf SPEC.md Abschnitt 5/10)
- [x] Kompletten Durchlauf aller 14 Themen mit gemischten Typen UND
      Zufallsmodus getestet (per simulierter DOM-Umgebung: 90/90
      Aufgaben durchlaufen, inkl. Test dass `lektion: null` auch bei
      gesetztem Lektion-Filter durchgelassen wird)
- [ ] Manueller Test (durch dich): einmal alles im echten Browser
      nachvollziehen – Enter-Taste zum Prüfen, leere Auswahl, kompletter
      Durchlauf mit Zufallsmodus

## Später / optional (nicht Teil dieser Aufgabenliste)

- [ ] Umstellung auf echtes `fetch()` von `.json`-Dateien mit lokalem
      Mini-Server (siehe SPEC 6.3)
- [ ] Fortschritts-Export/Import als Datei
- [ ] Detaillierteres Tracking pro Einzelaufgabe (Spaced Repetition)
