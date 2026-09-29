// Aufgaben zum Thema "mye-mange".
// Format: siehe SPEC.md Abschnitt 5.1/5.3.
// Vokabelregel: siehe SPEC.md Abschnitt 10 (kumulativ, "Eigene Notizen"
// zählen nicht als Quelle). "lektion" = höchste Lektion eines
// verwendeten Vokabelworts.
//
// Verwendete Vokabeln je Aufgabe (zur Nachvollziehbarkeit, nicht Teil
// des Datenschemas):
//   mm-001: mye (L2), tid (L1)                         -> lektion 2
//   mm-002: vi/har (L1), ikke (L2), penger (L3)        -> lektion 3
//   mm-003: hvor (L1), mye (L2), kaffe (L2), koste (L3) -> lektion 3
//   mm-004: vi/har/Norge (L1), venn (L3)               -> lektion 3
//   mm-005: hvor mange (L3), frimerke (L3), trenge (L3) -> lektion 3
//   mm-006: jeg/må-måtte (L2), skrive (L3), brev (L3)   -> lektion 3

window.ALLE_AUFGABEN = (window.ALLE_AUFGABEN || []).concat([
  {
    id: "mm-001",
    thema: "mye-mange",
    lektion: 2,
    typ: "luecke",
    aufgabe: "Jeg har ikke ___ tid.",
    antworten: ["mye"],
    erklaerung: "'mye' steht bei nicht zählbaren Mengen (z. B. Zeit, Geld, Wasser). 'mange' steht dagegen bei zählbaren Dingen im Plural."
  },
  {
    id: "mm-002",
    thema: "mye-mange",
    lektion: 3,
    typ: "luecke",
    aufgabe: "Vi har ikke ___ penger.",
    antworten: ["mye"],
    erklaerung: "'penger' (Geld) ist nicht zählbar, deshalb 'mye penger', nicht 'mange penger'."
  },
  {
    id: "mm-003",
    thema: "mye-mange",
    lektion: 3,
    typ: "luecke",
    aufgabe: "Hvor ___ koster kaffen?",
    antworten: ["mye"],
    erklaerung: "Bei Preisfragen ('hvor mye koster …?') steht immer 'mye', auch wenn man umgangssprachlich an 'wie viele Kronen' denkt – der Preis selbst ist eine nicht zählbare Größe."
  },
  {
    id: "mm-004",
    thema: "mye-mange",
    lektion: 3,
    typ: "luecke",
    aufgabe: "Vi har ___ venner i Norge.",
    antworten: ["mange"],
    erklaerung: "'venner' ist Plural eines zählbaren Substantivs (en venn → venner), deshalb 'mange', nicht 'mye'."
  },
  {
    id: "mm-005",
    thema: "mye-mange",
    lektion: 3,
    typ: "luecke",
    aufgabe: "Hvor ___ frimerker trenger jeg?",
    antworten: ["mange"],
    erklaerung: "'frimerker' ist Plural von 'et frimerke' und zählbar, deshalb 'hvor mange', nicht 'hvor mye'."
  },
  {
    id: "mm-006",
    thema: "mye-mange",
    lektion: 3,
    typ: "luecke",
    aufgabe: "Jeg må skrive ___ brev.",
    antworten: ["mange"],
    erklaerung: "'brev' ist hier Plural (et brev → brev, unverändert) und zählbar, deshalb 'mange'."
  }
]);
