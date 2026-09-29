// Fortschritts-Tracking – siehe SPEC.md Abschnitt 8.

var FORTSCHRITT_KEY = "eaan_fortschritt";

/**
 * Lädt den gespeicherten Fortschritt aus localStorage.
 * @returns {Object} z. B. { "mye-mange": { versucht: 3, richtig: 2 } }
 */
function fortschrittLaden() {
  var roh = localStorage.getItem(FORTSCHRITT_KEY);
  if (!roh) {
    return {};
  }
  try {
    return JSON.parse(roh) || {};
  } catch (e) {
    return {};
  }
}

/**
 * Speichert den kompletten Fortschritt zurück in localStorage.
 * @param {Object} daten
 */
function fortschrittSpeichern(daten) {
  localStorage.setItem(FORTSCHRITT_KEY, JSON.stringify(daten));
}

/**
 * Erhöht "versucht" für ein Thema um 1, "richtig" nur wenn warRichtig.
 * @param {string} thema Slug aus data/themen.js
 * @param {boolean} warRichtig
 */
function fortschrittAktualisieren(thema, warRichtig) {
  var daten = fortschrittLaden();
  if (!daten[thema]) {
    daten[thema] = { versucht: 0, richtig: 0 };
  }
  daten[thema].versucht++;
  if (warRichtig) {
    daten[thema].richtig++;
  }
  fortschrittSpeichern(daten);
  return daten[thema];
}

window.fortschrittLaden = fortschrittLaden;
window.fortschrittSpeichern = fortschrittSpeichern;
window.fortschrittAktualisieren = fortschrittAktualisieren;
