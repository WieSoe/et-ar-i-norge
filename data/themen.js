// Themenliste – siehe SPEC.md Abschnitt 3.
// Reines JS-Array (kein fetch nötig, siehe SPEC.md Abschnitt 6.3).

window.THEMEN = [
  { slug: "infinitiv", label: "Infinitiv", erlaubteTypen: ["luecke", "form"] },
  { slug: "praesens", label: "Präsens", erlaubteTypen: ["form", "luecke"] },
  { slug: "modalverben", label: "Modalverben", erlaubteTypen: ["luecke"] },
  { slug: "adjektive", label: "Adjektive (inkl. unbestimmte Formen)", erlaubteTypen: ["form", "luecke"] },
  { slug: "wortstellung", label: "Wortstellung", erlaubteTypen: ["satzstellung"] },
  { slug: "inversion", label: "Inversion", erlaubteTypen: ["satzstellung", "luecke"] },
  { slug: "ikke-stellung", label: "Wortstellung mit \"ikke\"", erlaubteTypen: ["satzstellung", "luecke"] },
  { slug: "imperativ", label: "Imperativ", erlaubteTypen: ["form", "luecke"] },
  { slug: "artikel", label: "Unbestimmte und bestimmte Artikel", erlaubteTypen: ["form", "luecke"] },
  { slug: "artikel-auslassen", label: "Auslassen des Artikels", erlaubteTypen: ["luecke"] },
  { slug: "singular-plural", label: "Singular und Plural", erlaubteTypen: ["form"] },
  { slug: "fragewoerter", label: "Fragewörter", erlaubteTypen: ["luecke"] },
  { slug: "mye-mange", label: "mye/mange", erlaubteTypen: ["luecke"] },
  { slug: "zahlen", label: "Zahlen bis 100", erlaubteTypen: ["zahlen"] }
];
