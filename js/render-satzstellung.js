// Rendering für Aufgabentyp "satzstellung" – siehe SPEC.md Abschnitt 4.3.
// Wörter werden als antippbare Chips dargestellt. Tap in der Quelle
// verschiebt ein Wort in die Zielzone (gewählte Reihenfolge); Tap in der
// Zielzone nimmt es zurück in die Quelle. Kein Drag & Drop (Mobile-
// freundlich).

function renderSatzstellung(aufgabe, container, onAntwort) {
  container.innerHTML = "";

  var frage = document.createElement("p");
  frage.className = "aufgabe-text";
  frage.textContent = aufgabe.aufgabe;
  container.appendChild(frage);

  var quelle = aufgabe.woerter.slice();
  var ziel = [];
  var geprueft = false;

  var quelleContainer = document.createElement("div");
  quelleContainer.className = "chip-liste chip-quelle";
  container.appendChild(quelleContainer);

  var zielLabel = document.createElement("p");
  zielLabel.className = "chip-ziel-label";
  zielLabel.textContent = "Deine Reihenfolge:";
  container.appendChild(zielLabel);

  var zielContainer = document.createElement("div");
  zielContainer.className = "chip-liste chip-ziel";
  container.appendChild(zielContainer);

  var pruefenBtn = document.createElement("button");
  pruefenBtn.type = "button";
  pruefenBtn.textContent = "Prüfen";
  container.appendChild(pruefenBtn);

  var feedback = document.createElement("div");
  feedback.className = "feedback";
  container.appendChild(feedback);

  function macheChip(wort, onClick) {
    var chip = document.createElement("button");
    chip.type = "button";
    chip.className = "wort-chip";
    chip.textContent = wort;
    chip.addEventListener("click", onClick);
    return chip;
  }

  function neuZeichnen() {
    quelleContainer.innerHTML = "";
    quelle.forEach(function (wort, i) {
      quelleContainer.appendChild(macheChip(wort, function () {
        if (geprueft) return;
        quelle.splice(i, 1);
        ziel.push(wort);
        neuZeichnen();
      }));
    });

    zielContainer.innerHTML = "";
    ziel.forEach(function (wort, i) {
      zielContainer.appendChild(macheChip(wort, function () {
        if (geprueft) return;
        ziel.splice(i, 1);
        quelle.push(wort);
        neuZeichnen();
      }));
    });
  }

  function pruefen() {
    var satz = ziel.join(" ");
    var richtig = window.istRichtig(satz, aufgabe.antworten);

    geprueft = true;
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

  neuZeichnen();
}

window.renderSatzstellung = renderSatzstellung;
