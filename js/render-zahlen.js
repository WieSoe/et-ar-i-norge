// Rendering für Aufgabentyp "zahlen" – siehe SPEC.md Abschnitt 4.4.
// Strukturell identisch zu "form" (Text + ein Eingabefeld). Eigene Datei
// für Klarheit/spätere Erweiterbarkeit (z. B. Zahlwort-Tastatur o. Ä.).

function renderZahlen(aufgabe, container, onAntwort) {
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

window.renderZahlen = renderZahlen;
