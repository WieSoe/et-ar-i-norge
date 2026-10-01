// Rendering für Aufgabentyp "luecke" – siehe SPEC.md Abschnitt 4.1.
//
// Vertrag (gilt für alle künftigen render-*.js genauso, siehe TASKS.md
// Phase 2): renderLuecke(aufgabe, container, onAntwort)
// - baut die UI in `container` auf (container wird vorher geleert)
// - zeigt nach Klick auf "Prüfen" das Feedback (richtig/falsch, Lösung,
//   Erklärung) direkt im container an
// - ruft `onAntwort(warRichtig)` genau einmal auf, sobald geprüft wurde

function renderLuecke(aufgabe, container, onAntwort) {
  container.innerHTML = "";

  var frage = document.createElement("p");
  frage.className = "aufgabe-text";
  frage.textContent = aufgabe.aufgabe;
  container.appendChild(frage);

  var eingabe = document.createElement("input");
  eingabe.type = "text";
  eingabe.className = "aufgabe-eingabe";
  eingabe.setAttribute("aria-label", "Antwort");
  container.appendChild(eingabe);

  var pruefenBtn = document.createElement("button");
  pruefenBtn.type = "button";
  pruefenBtn.textContent = "Prüfen";
  container.appendChild(pruefenBtn);

  var feedback = document.createElement("div");
  feedback.className = "feedback";
  container.appendChild(feedback);

  function pruefen() {
    var wert = eingabe.value;
    var richtig = window.istRichtig(wert, aufgabe.antworten);

    eingabe.disabled = true;
    pruefenBtn.disabled = true;

    if (richtig) {
      feedback.textContent = "✓ Richtig!";
      feedback.className = "feedback feedback-richtig";
    } else {
      feedback.textContent =
        "✗ Falsch. Richtige Antwort: " + aufgabe.antworten.join(" / ") +
        ". " + aufgabe.erklaerung;
      feedback.className = "feedback feedback-falsch";
    }

    if (aufgabe.thema === "adjektive" && typeof window.renderAdjektivReferenz === "function") {
      window.renderAdjektivReferenz(container);
    }

    if (typeof feedback.scrollIntoView === "function") {
      feedback.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    onAntwort(richtig);
  }

  pruefenBtn.addEventListener("click", pruefen);
  eingabe.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      pruefen();
    }
  });

  eingabe.focus();
}

window.renderLuecke = renderLuecke;
