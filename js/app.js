// View-Steuerung – Phase 3+4: Themen-/Lektionsauswahl, Zufallsmodus,
// Fortschritts-Tracking. Siehe SPEC.md Abschnitt 6.4 / 8 / 9.

(function () {
  "use strict";

  // Jede data/aufgaben-*.js-Datei trägt sich selbst in
  // window.ALLE_AUFGABEN ein (siehe SPEC.md Abschnitt 6.3). Hier wird
  // nur noch gelesen, kein manuelles Zusammenführen pro Thema nötig.
  var ALLE_AUFGABEN = window.ALLE_AUFGABEN || [];

  var auswahlView = document.getElementById("auswahl-view");
  var uebungView = document.getElementById("uebung-view");

  var aktuelleAufgaben = [];
  var index = 0;
  var richtigCount = 0;
  var letzteFilterAuswahl = null; // für "Nochmal gleiche Auswahl üben"

  // ---------- Hilfsfunktionen ----------

  function themaLabel(slug) {
    var t = window.THEMEN.filter(function (x) { return x.slug === slug; })[0];
    return t ? t.label : slug;
  }

  function anzahlAufgabenFuerThema(slug) {
    return ALLE_AUFGABEN.filter(function (a) { return a.thema === slug; }).length;
  }

  function vorkommendeLektionen() {
    var set = {};
    ALLE_AUFGABEN.forEach(function (a) {
      if (a.lektion !== null && a.lektion !== undefined) {
        set[a.lektion] = true;
      }
    });
    return Object.keys(set)
      .map(function (s) { return Number(s); })
      .sort(function (a, b) { return a - b; });
  }

  function shuffle(array) {
    var result = array.slice();
    for (var i = result.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = result[i];
      result[i] = result[j];
      result[j] = tmp;
    }
    return result;
  }

  function filterAufgaben(gewaehlteThemen, lektionFilter) {
    return ALLE_AUFGABEN.filter(function (a) {
      var themaPasst = gewaehlteThemen.indexOf(a.thema) !== -1;
      if (!themaPasst) {
        return false;
      }
      if (lektionFilter === "alle") {
        return true;
      }
      if (a.lektion === null || a.lektion === undefined) {
        return true; // lektionslose Aufgaben immer durchlassen
      }
      return a.lektion === Number(lektionFilter);
    });
  }

  function berechneAufgabenListe(filter) {
    var gefiltert = filterAufgaben(filter.gewaehlteThemen, filter.lektionFilter);
    if (filter.zufall) {
      gefiltert = shuffle(gefiltert);
    }
    if (filter.anzahl !== "alle") {
      gefiltert = gefiltert.slice(0, Number(filter.anzahl));
    }
    return gefiltert;
  }

  var RENDER_NACH_TYP = {
    luecke: window.renderLuecke,
    form: window.renderForm,
    satzstellung: window.renderSatzstellung,
    zahlen: window.renderZahlen
  };

  function renderAufgabe(aufgabe, container, onAntwort) {
    var renderFn = RENDER_NACH_TYP[aufgabe.typ];
    if (!renderFn) {
      throw new Error("Unbekannter Aufgabentyp: " + aufgabe.typ);
    }
    return renderFn(aufgabe, container, onAntwort);
  }

  // ---------- Auswahl-Ansicht ----------

  function baueAuswahlView() {
    auswahlView.innerHTML = "";

    var titel = document.createElement("h1");
    titel.textContent = "Et år i Norge – Übungen";
    auswahlView.appendChild(titel);

    var fortschritt = fortschrittLaden();

    var themenListe = document.createElement("div");
    themenListe.className = "themen-liste";

    var checkboxen = [];

    window.THEMEN.forEach(function (thema) {
      var anzahl = anzahlAufgabenFuerThema(thema.slug);
      var eintrag = document.createElement("label");
      eintrag.className = "thema-eintrag";

      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = thema.slug;
      checkbox.disabled = anzahl === 0;
      checkboxen.push(checkbox);

      var text = document.createElement("span");
      text.className = "thema-text";
      text.textContent = thema.label;
      if (anzahl === 0) {
        text.textContent += " (noch keine Aufgaben)";
      }

      var fortschrittSpan = document.createElement("span");
      fortschrittSpan.className = "thema-fortschritt";
      var eintragFortschritt = fortschritt[thema.slug];
      if (eintragFortschritt && eintragFortschritt.versucht > 0) {
        var prozent = Math.round(
          (eintragFortschritt.richtig / eintragFortschritt.versucht) * 100
        );
        fortschrittSpan.textContent =
          prozent + "% (" + eintragFortschritt.richtig + "/" +
          eintragFortschritt.versucht + ")";
      } else {
        fortschrittSpan.textContent = "noch nicht geübt";
      }

      eintrag.appendChild(checkbox);
      eintrag.appendChild(text);
      eintrag.appendChild(fortschrittSpan);
      themenListe.appendChild(eintrag);
    });

    auswahlView.appendChild(themenListe);

    // Lektion-Filter
    var lektionLabel = document.createElement("label");
    lektionLabel.className = "feld-label";
    lektionLabel.textContent = "Lektion: ";
    var lektionSelect = document.createElement("select");
    var optAlle = document.createElement("option");
    optAlle.value = "alle";
    optAlle.textContent = "alle Lektionen";
    lektionSelect.appendChild(optAlle);
    vorkommendeLektionen().forEach(function (nr) {
      var opt = document.createElement("option");
      opt.value = String(nr);
      opt.textContent = "Lektion " + nr;
      lektionSelect.appendChild(opt);
    });
    lektionLabel.appendChild(lektionSelect);
    auswahlView.appendChild(lektionLabel);

    // Zufallsmodus
    var zufallLabel = document.createElement("label");
    zufallLabel.className = "feld-label";
    var zufallCheckbox = document.createElement("input");
    zufallCheckbox.type = "checkbox";
    zufallLabel.appendChild(zufallCheckbox);
    zufallLabel.appendChild(document.createTextNode(" Reihenfolge mischen"));
    auswahlView.appendChild(zufallLabel);

    // Anzahl Aufgaben
    var anzahlLabel = document.createElement("label");
    anzahlLabel.className = "feld-label";
    anzahlLabel.textContent = "Anzahl Aufgaben: ";
    var anzahlSelect = document.createElement("select");
    [5, 10, 20].forEach(function (n) {
      var opt = document.createElement("option");
      opt.value = String(n);
      opt.textContent = String(n);
      if (n === 10) {
        opt.selected = true;
      }
      anzahlSelect.appendChild(opt);
    });
    var optAlleAufgaben = document.createElement("option");
    optAlleAufgaben.value = "alle";
    optAlleAufgaben.textContent = "alle";
    anzahlSelect.appendChild(optAlleAufgaben);
    anzahlLabel.appendChild(anzahlSelect);
    auswahlView.appendChild(anzahlLabel);

    // Start-Button
    var startBtn = document.createElement("button");
    startBtn.type = "button";
    startBtn.textContent = "Start";
    startBtn.disabled = true;
    auswahlView.appendChild(startBtn);

    var hinweis = document.createElement("p");
    hinweis.className = "hinweis";
    auswahlView.appendChild(hinweis);

    function aktualisiereStartButton() {
      var gewaehlte = checkboxen
        .filter(function (cb) { return cb.checked; })
        .map(function (cb) { return cb.value; });
      startBtn.disabled = gewaehlte.length === 0;
    }

    checkboxen.forEach(function (cb) {
      cb.addEventListener("change", aktualisiereStartButton);
    });

    startBtn.addEventListener("click", function () {
      var gewaehlteThemen = checkboxen
        .filter(function (cb) { return cb.checked; })
        .map(function (cb) { return cb.value; });
      var filter = {
        gewaehlteThemen: gewaehlteThemen,
        lektionFilter: lektionSelect.value,
        zufall: zufallCheckbox.checked,
        anzahl: anzahlSelect.value
      };

      var gefiltert = berechneAufgabenListe(filter);

      if (gefiltert.length === 0) {
        hinweis.textContent =
          "Keine Aufgaben für diese Auswahl gefunden. Bitte andere Themen/Lektion wählen.";
        return;
      }

      hinweis.textContent = "";
      letzteFilterAuswahl = filter;
      starteUebung(gefiltert);
    });
  }

  // ---------- Übungs-Ansicht ----------

  function baueUebungViewGeruest() {
    uebungView.innerHTML = "";

    var fortschrittAnzeige = document.createElement("p");
    fortschrittAnzeige.className = "fortschritt-anzeige";
    uebungView.appendChild(fortschrittAnzeige);

    var aufgabeContainer = document.createElement("div");
    aufgabeContainer.id = "aufgabe-container";
    uebungView.appendChild(aufgabeContainer);

    var weiterBtn = document.createElement("button");
    weiterBtn.type = "button";
    weiterBtn.textContent = "Weiter";
    weiterBtn.style.display = "none";
    uebungView.appendChild(weiterBtn);

    var endeContainer = document.createElement("div");
    endeContainer.id = "ende-container";
    uebungView.appendChild(endeContainer);

    return {
      fortschrittAnzeige: fortschrittAnzeige,
      aufgabeContainer: aufgabeContainer,
      weiterBtn: weiterBtn,
      endeContainer: endeContainer
    };
  }

  function starteUebung(liste) {
    aktuelleAufgaben = liste;
    index = 0;
    richtigCount = 0;
    var falscheAufgaben = [];

    auswahlView.hidden = true;
    uebungView.hidden = false;

    var refs = baueUebungViewGeruest();

    function zeigeAufgabe() {
      if (index >= aktuelleAufgaben.length) {
        zeigeEnde();
        return;
      }

      refs.fortschrittAnzeige.textContent =
        "Aufgabe " + (index + 1) + " von " + aktuelleAufgaben.length;
      refs.weiterBtn.style.display = "none";

      var aktuelleAufgabe = aktuelleAufgaben[index];

      renderAufgabe(aktuelleAufgabe, refs.aufgabeContainer, function (warRichtig) {
        if (warRichtig) {
          richtigCount++;
        } else {
          falscheAufgaben.push(aktuelleAufgabe);
        }
        fortschrittAktualisieren(aktuelleAufgabe.thema, warRichtig);
        refs.weiterBtn.style.display = "inline-block";
      });
    }

    function zeigeEnde() {
      refs.fortschrittAnzeige.textContent = "";
      refs.aufgabeContainer.innerHTML = "";
      refs.weiterBtn.style.display = "none";

      refs.endeContainer.innerHTML = "";

      var ergebnisText = document.createElement("p");
      ergebnisText.className = "ergebnis-text";
      ergebnisText.textContent =
        "Fertig! " + richtigCount + " von " + aktuelleAufgaben.length + " richtig.";
      refs.endeContainer.appendChild(ergebnisText);

      if (falscheAufgaben.length > 0) {
        var rueckblickTitel = document.createElement("p");
        rueckblickTitel.textContent = "Zum Nachlesen – diese Aufgaben waren falsch:";
        refs.endeContainer.appendChild(rueckblickTitel);

        var liste = document.createElement("ul");
        liste.className = "rueckblick-liste";
        falscheAufgaben.forEach(function (a) {
          var eintrag = document.createElement("li");
          var aufgabenText = document.createElement("strong");
          aufgabenText.textContent = a.aufgabe;
          eintrag.appendChild(aufgabenText);
          eintrag.appendChild(document.createElement("br"));
          eintrag.appendChild(document.createTextNode(
            "Richtig: " + a.antworten.join(" / ") + " — " + a.erklaerung
          ));
          liste.appendChild(eintrag);
        });
        refs.endeContainer.appendChild(liste);
      }

      var buttonZeile = document.createElement("div");
      buttonZeile.className = "ende-buttons";

      var nochmalBtn = document.createElement("button");
      nochmalBtn.type = "button";
      nochmalBtn.textContent = "Nochmal gleiche Auswahl üben";
      nochmalBtn.addEventListener("click", function () {
        if (!letzteFilterAuswahl) {
          return;
        }
        var neueListe = berechneAufgabenListe(letzteFilterAuswahl);
        if (neueListe.length === 0) {
          return;
        }
        starteUebung(neueListe);
      });
      buttonZeile.appendChild(nochmalBtn);

      var zurueckBtn = document.createElement("button");
      zurueckBtn.type = "button";
      zurueckBtn.textContent = "Zurück zur Auswahl";
      zurueckBtn.addEventListener("click", function () {
        uebungView.hidden = true;
        auswahlView.hidden = false;
        baueAuswahlView(); // Fortschrittsanzeige neu aufbauen
      });
      buttonZeile.appendChild(zurueckBtn);

      refs.endeContainer.appendChild(buttonZeile);
    }

    refs.weiterBtn.addEventListener("click", function () {
      index++;
      zeigeAufgabe();
    });

    zeigeAufgabe();
  }

  // ---------- Start ----------

  baueAuswahlView();
})();
