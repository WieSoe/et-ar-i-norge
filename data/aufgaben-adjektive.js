// Aufgaben zum Thema "adjektive" – Neutrum (+t) und Bestimmt/Plural (+e),
// inkl. Sonderfälle (auf -ig kein -t, Doppelkonsonant-Reduktion, e-Ausfall).
// Wortschatz siehe SPEC.md Abschnitt 14 (vokabeln/lektion-01–04.md) und
// 14.1 (vokabeln/adjektive-uebungen.md).

window.ALLE_AUFGABEN = (window.ALLE_AUFGABEN || []).concat([
  {
    id: "adj-001",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Et ___ (varm) rom.",
    antworten: ["varmt"],
    erklaerung: "Neutrum (et-Wörter) bekommt im Adjektiv die Endung -t: varm → varmt."
  },
  {
    id: "adj-002",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Ei ___ (stor) flaske.",
    antworten: ["stor"],
    erklaerung: "Bei unbestimmten en-/ei-Wörtern bleibt das Adjektiv in der Grundform, ohne Endung."
  },
  {
    id: "adj-003",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Et ___ (fin) hus.",
    antworten: ["fint"],
    erklaerung: "Neutrum: fin → fint (+t)."
  },
  {
    id: "adj-004",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Mange ___ (dyr) biler.",
    antworten: ["dyre"],
    erklaerung: "Im Plural/Bestimmt bekommt das Adjektiv die Endung -e: dyr → dyre."
  },
  {
    id: "adj-005",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Et ___ (gammel) vikingskip.",
    antworten: ["gammelt"],
    erklaerung: "Neutrum von 'gammel' ist 'gammelt' (kein e-Ausfall im Neutrum, nur im Plural/Bestimmt: gamle)."
  },
  {
    id: "adj-006",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Mange ___ (gammel) vikingskip.",
    antworten: ["gamle"],
    erklaerung: "Im Plural/Bestimmt fällt bei 'gammel' das e aus: gammel → gamle."
  },
  {
    id: "adj-007",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Et ___ (billig) hus.",
    antworten: ["billig"],
    erklaerung: "Adjektive, die auf -ig enden, bekommen im Neutrum KEIN zusätzliches -t: billig bleibt billig."
  },
  {
    id: "adj-008",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Mange ___ (billig) hus.",
    antworten: ["billige"],
    erklaerung: "Im Plural/Bestimmt bekommen auch -ig-Adjektive die Endung -e: billig → billige."
  },
  {
    id: "adj-009",
    thema: "adjektive",
    lektion: null,
    typ: "luecke",
    aufgabe: "Ei ___ (ny) hytte.",
    antworten: ["ny"],
    erklaerung: "Bei unbestimmten en-/ei-Wörtern bleibt das Adjektiv in der Grundform."
  },
  {
    id: "adj-010",
    thema: "adjektive",
    lektion: null,
    typ: "luecke",
    aufgabe: "Mange ___ (ny) hytter.",
    antworten: ["nye"],
    erklaerung: "Im Plural/Bestimmt: ny → nye (+e)."
  },
  {
    id: "adj-011",
    thema: "adjektive",
    lektion: null,
    typ: "luecke",
    aufgabe: "Et ___ (rød) jordbær.",
    antworten: ["rødt"],
    erklaerung: "Neutrum: rød → rødt (+t)."
  },
  {
    id: "adj-012",
    thema: "adjektive",
    lektion: null,
    typ: "luecke",
    aufgabe: "Mange ___ (grønn) agurker.",
    antworten: ["grønne"],
    erklaerung: "Im Plural/Bestimmt: grønn → grønne (+e)."
  },

  // --- 50 weitere Aufgaben (adj-013 bis adj-062) ---
  // Neue Adjektive aus vokabeln/lektion-01–04.md, die bisher noch nicht
  // verwendet wurden: snill, formell, sulten, lys, lett, god, høy,
  // ledig, mulig, hjertelig, annen/annet/andre, sowie alle
  // Nationalitäts-Adjektive auf -sk (norsk, tysk, engelsk, fransk,
  // italiensk, dansk, svensk, utenlandsk, østerriksk). Dazu die bisher
  // ungenutzten Pool-Adjektive søt, brun, mørk aus
  // vokabeln/adjektive-uebungen.md.

  {
    id: "adj-013",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "En ___ (snill) nabo.",
    antworten: ["snill"],
    erklaerung: "Bei unbestimmten en-/ei-Wörtern bleibt das Adjektiv in der Grundform."
  },
  {
    id: "adj-014",
    thema: "adjektive",
    lektion: 2,
    typ: "luecke",
    aufgabe: "Et ___ (snill) troll.",
    antworten: ["snilt"],
    erklaerung: "Bei 'snill' wird der Doppelkonsonant im Neutrum reduziert: snill → snilt."
  },
  {
    id: "adj-015",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Mange ___ (snill) naboer.",
    antworten: ["snille"],
    erklaerung: "Im Plural/Bestimmt bleibt der Doppelkonsonant erhalten: snill → snille (+e)."
  },
  {
    id: "adj-016",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "En ___ (formell) hilsen.",
    antworten: ["formell"],
    erklaerung: "Bei unbestimmten en-/ei-Wörtern bleibt das Adjektiv in der Grundform."
  },
  {
    id: "adj-017",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Et ___ (formell) problem.",
    antworten: ["formelt"],
    erklaerung: "Bei 'formell' wird der Doppelkonsonant im Neutrum reduziert: formell → formelt."
  },
  {
    id: "adj-018",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Mange ___ (formell) hilsener.",
    antworten: ["formelle"],
    erklaerung: "Im Plural/Bestimmt bleibt der Doppelkonsonant erhalten: formell → formelle (+e)."
  },
  {
    id: "adj-019",
    thema: "adjektive",
    lektion: 2,
    typ: "luecke",
    aufgabe: "En ___ (sulten) student.",
    antworten: ["sulten"],
    erklaerung: "Bei unbestimmten en-/ei-Wörtern bleibt das Adjektiv in der Grundform."
  },
  {
    id: "adj-020",
    thema: "adjektive",
    lektion: 2,
    typ: "luecke",
    aufgabe: "Et ___ (sulten) troll.",
    antworten: ["sultent"],
    erklaerung: "Neutrum von 'sulten' ist 'sultent' (kein e-Ausfall im Neutrum, nur im Plural/Bestimmt: sultne)."
  },
  {
    id: "adj-021",
    thema: "adjektive",
    lektion: 2,
    typ: "luecke",
    aufgabe: "Mange ___ (sulten) troll.",
    antworten: ["sultne"],
    erklaerung: "Im Plural/Bestimmt fällt bei 'sulten' das e aus: sulten → sultne."
  },
  {
    id: "adj-022",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "En ___ (lys) dag.",
    antworten: ["lys"],
    erklaerung: "Bei unbestimmten en-/ei-Wörtern bleibt das Adjektiv in der Grundform."
  },
  {
    id: "adj-023",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Et ___ (lys) rom.",
    antworten: ["lyst"],
    erklaerung: "Neutrum: lys → lyst (+t)."
  },
  {
    id: "adj-024",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Mange ___ (lys) rom.",
    antworten: ["lyse"],
    erklaerung: "Im Plural/Bestimmt: lys → lyse (+e)."
  },
  {
    id: "adj-025",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Et ___ (lett) problem.",
    antworten: ["lett"],
    erklaerung: "Adjektive, die bereits auf -t enden, bekommen im Neutrum keine weitere Endung: lett bleibt lett."
  },
  {
    id: "adj-026",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Mange ___ (lett) problemer.",
    antworten: ["lette"],
    erklaerung: "Im Plural/Bestimmt: lett → lette (+e)."
  },
  {
    id: "adj-027",
    thema: "adjektive",
    lektion: 3,
    typ: "luecke",
    aufgabe: "En ___ (god) venn.",
    antworten: ["god"],
    erklaerung: "Bei unbestimmten en-/ei-Wörtern bleibt das Adjektiv in der Grundform."
  },
  {
    id: "adj-028",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Et ___ (god) hus.",
    antworten: ["godt"],
    erklaerung: "'god' ist unregelmäßig, aber die Neutrum-Form 'godt' sieht zufällig aus wie die reguläre +t-Regel."
  },
  {
    id: "adj-029",
    thema: "adjektive",
    lektion: 3,
    typ: "luecke",
    aufgabe: "Mange ___ (god) venner.",
    antworten: ["gode"],
    erklaerung: "'god' ist unregelmäßig: Plural/Bestimmt ist 'gode'."
  },
  {
    id: "adj-030",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "En ___ (søt) jente.",
    antworten: ["søt"],
    erklaerung: "Bei unbestimmten en-/ei-Wörtern bleibt das Adjektiv in der Grundform."
  },
  {
    id: "adj-031",
    thema: "adjektive",
    lektion: 3,
    typ: "luecke",
    aufgabe: "Et ___ (søt) eple.",
    antworten: ["søtt"],
    erklaerung: "Bei 'søt' wird der Endkonsonant im Neutrum verdoppelt: søt → søtt."
  },
  {
    id: "adj-032",
    thema: "adjektive",
    lektion: 3,
    typ: "luecke",
    aufgabe: "Mange ___ (søt) epler.",
    antworten: ["søte"],
    erklaerung: "Im Plural/Bestimmt: søt → søte (+e, kein doppeltes t)."
  },
  {
    id: "adj-033",
    thema: "adjektive",
    lektion: 3,
    typ: "luecke",
    aufgabe: "En ___ (brun) potet.",
    antworten: ["brun"],
    erklaerung: "Bei unbestimmten en-/ei-Wörtern bleibt das Adjektiv in der Grundform."
  },
  {
    id: "adj-034",
    thema: "adjektive",
    lektion: null,
    typ: "luecke",
    aufgabe: "Et ___ (brun) egg.",
    antworten: ["brunt"],
    erklaerung: "Neutrum: brun → brunt (+t)."
  },
  {
    id: "adj-035",
    thema: "adjektive",
    lektion: null,
    typ: "luecke",
    aufgabe: "Mange ___ (brun) egg.",
    antworten: ["brune"],
    erklaerung: "Im Plural/Bestimmt: brun → brune (+e)."
  },
  {
    id: "adj-036",
    thema: "adjektive",
    lektion: 1,
    typ: "luecke",
    aufgabe: "En ___ (mørk) dag.",
    antworten: ["mørk"],
    erklaerung: "Bei unbestimmten en-/ei-Wörtern bleibt das Adjektiv in der Grundform."
  },
  {
    id: "adj-037",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Et ___ (mørk) rom.",
    antworten: ["mørkt"],
    erklaerung: "Neutrum: mørk → mørkt (+t)."
  },
  {
    id: "adj-038",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Mange ___ (mørk) rom.",
    antworten: ["mørke"],
    erklaerung: "Im Plural/Bestimmt: mørk → mørke (+e)."
  },
  {
    id: "adj-039",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "En ___ (høy) gutt.",
    antworten: ["høy"],
    erklaerung: "Bei unbestimmten en-/ei-Wörtern bleibt das Adjektiv in der Grundform."
  },
  {
    id: "adj-040",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Et ___ (høy) tre.",
    antworten: ["høyt"],
    erklaerung: "Neutrum: høy → høyt (+t) – beide Formen stehen bereits so im Wortschatz."
  },
  {
    id: "adj-041",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Mange ___ (høy) trær.",
    antworten: ["høye"],
    erklaerung: "Im Plural/Bestimmt: høy → høye (+e)."
  },
  {
    id: "adj-042",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Et ___ (ledig) rom.",
    antworten: ["ledig"],
    erklaerung: "Adjektive auf -ig bekommen im Neutrum KEIN zusätzliches -t: ledig bleibt ledig."
  },
  {
    id: "adj-043",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Mange ___ (ledig) rom.",
    antworten: ["ledige"],
    erklaerung: "Im Plural/Bestimmt: ledig → ledige (+e)."
  },
  {
    id: "adj-044",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Et ___ (mulig) problem.",
    antworten: ["mulig"],
    erklaerung: "Adjektive auf -ig bekommen im Neutrum KEIN zusätzliches -t: mulig bleibt mulig."
  },
  {
    id: "adj-045",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Mange ___ (mulig) problemer.",
    antworten: ["mulige"],
    erklaerung: "Im Plural/Bestimmt: mulig → mulige (+e)."
  },
  {
    id: "adj-046",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "En ___ (hjertelig) hilsen.",
    antworten: ["hjertelig"],
    erklaerung: "Adjektive auf -lig bekommen im Neutrum KEIN zusätzliches -t (gilt auch für die Grundform bei en-/ei-Wörtern)."
  },
  {
    id: "adj-047",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Mange ___ (hjertelig) hilsener.",
    antworten: ["hjertelige"],
    erklaerung: "Im Plural/Bestimmt: hjertelig → hjertelige (+e)."
  },
  {
    id: "adj-048",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "En ___ (annen) bil.",
    antworten: ["annen"],
    erklaerung: "'annen' ist unregelmäßig und richtet sich nach Genus: annen (en/ei-Wörter) – annet (et-Wörter) – andre (Plural, alle Genera)."
  },
  {
    id: "adj-049",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Et ___ (annen) hus.",
    antworten: ["annet"],
    erklaerung: "Neutrum-Form von 'annen' ist 'annet' (unregelmäßig, keine einfache +t-Regel)."
  },
  {
    id: "adj-050",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Mange ___ (annen) biler.",
    antworten: ["andre"],
    erklaerung: "Plural-Form von 'annen' ist 'andre' (für alle Genera gleich)."
  },
  {
    id: "adj-051",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "En ___ (annen) dag.",
    antworten: ["annen"],
    erklaerung: "'annen' steht bei en-/ei-Wörtern in der Singular-Form 'annen'."
  },
  {
    id: "adj-052",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Et ___ (annen) problem.",
    antworten: ["annet"],
    erklaerung: "'annen' steht bei et-Wörtern in der Singular-Form 'annet'."
  },
  {
    id: "adj-053",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Mange ___ (annen) studenter.",
    antworten: ["andre"],
    erklaerung: "Plural-Form von 'annen' ist 'andre' (für alle Genera gleich)."
  },
  {
    id: "adj-054",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Et ___ (norsk) hus.",
    antworten: ["norsk"],
    erklaerung: "Adjektive auf -sk bekommen im Neutrum KEIN zusätzliches -t: norsk bleibt norsk."
  },
  {
    id: "adj-055",
    thema: "adjektive",
    lektion: 1,
    typ: "luecke",
    aufgabe: "En ___ (tysk) student.",
    antworten: ["tysk"],
    erklaerung: "Bei unbestimmten en-/ei-Wörtern bleibt das Adjektiv in der Grundform."
  },
  {
    id: "adj-056",
    thema: "adjektive",
    lektion: 1,
    typ: "luecke",
    aufgabe: "Mange ___ (engelsk) biler.",
    antworten: ["engelske"],
    erklaerung: "Im Plural/Bestimmt bekommen auch -sk-Adjektive die Endung -e: engelsk → engelske."
  },
  {
    id: "adj-057",
    thema: "adjektive",
    lektion: 1,
    typ: "luecke",
    aufgabe: "En ___ (fransk) student.",
    antworten: ["fransk"],
    erklaerung: "Bei unbestimmten en-/ei-Wörtern bleibt das Adjektiv in der Grundform."
  },
  {
    id: "adj-058",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Et ___ (italiensk) problem.",
    antworten: ["italiensk"],
    erklaerung: "Adjektive auf -sk bekommen im Neutrum KEIN zusätzliches -t: italiensk bleibt italiensk."
  },
  {
    id: "adj-059",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "Mange ___ (dansk) biler.",
    antworten: ["danske"],
    erklaerung: "Im Plural/Bestimmt: dansk → danske (+e)."
  },
  {
    id: "adj-060",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "En ___ (svensk) student.",
    antworten: ["svensk"],
    erklaerung: "Bei unbestimmten en-/ei-Wörtern bleibt das Adjektiv in der Grundform."
  },
  {
    id: "adj-061",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "En ___ (utenlandsk) student.",
    antworten: ["utenlandsk"],
    erklaerung: "Bei unbestimmten en-/ei-Wörtern bleibt das Adjektiv in der Grundform."
  },
  {
    id: "adj-062",
    thema: "adjektive",
    lektion: 4,
    typ: "luecke",
    aufgabe: "En ___ (østerriksk) student.",
    antworten: ["østerriksk"],
    erklaerung: "Bei unbestimmten en-/ei-Wörtern bleibt das Adjektiv in der Grundform."
  }
]);
