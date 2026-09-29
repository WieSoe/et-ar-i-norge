// Antwortprüfung / Normalisierung – siehe SPEC.md Abschnitt 7.

/**
 * Normalisiert einen Text für den Vergleich:
 * - trim (führende/nachfolgende Leerzeichen entfernen)
 * - mehrfache Leerzeichen zu einem zusammenfassen
 * - Kleinbuchstaben (unterstützt æ/ø/å über toLowerCase())
 */
function normalisieren(text) {
  return String(text)
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

/**
 * Prüft, ob `eingabe` (nach Normalisierung) mit mindestens einer der
 * hinterlegten `antworten` (nach Normalisierung) übereinstimmt.
 * @param {string} eingabe
 * @param {string[]} antworten
 * @returns {boolean}
 */
function istRichtig(eingabe, antworten) {
  var normEingabe = normalisieren(eingabe);
  return antworten.some(function (antwort) {
    return normalisieren(antwort) === normEingabe;
  });
}

window.normalisieren = normalisieren;
window.istRichtig = istRichtig;
