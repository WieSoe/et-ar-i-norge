// Grammatik-Referenztabelle zur Adjektivdeklination (god/godt/gode) +
// Ausnahmeregel (-ig/-sk ohne Neutrum-Endung). Wird nach JEDER
// Adjektiv-Aufgabe angezeigt, unabhängig davon ob die Antwort richtig
// oder falsch war (siehe js/render-luecke.js und js/render-form.js).
// Quelle: Lehrbuch-Grammatiktabelle (von Hand nachgebaut, kein Bild).

function renderAdjektivReferenz(container) {
  var box = document.createElement("div");
  box.className = "adjektiv-referenz";

  var titel = document.createElement("p");
  titel.className = "adjektiv-referenz-titel";
  titel.textContent = "Grammatik-Referenz: Adjektivdeklination";
  box.appendChild(titel);

  var tabelle = document.createElement("table");
  tabelle.className = "adjektiv-tabelle";

  function zelle(tag, inhalt) {
    var el = document.createElement(tag);
    if (Array.isArray(inhalt)) {
      inhalt.forEach(function (teil, i) {
        if (i > 0) {
          el.appendChild(document.createElement("br"));
        }
        if (teil.fett) {
          var strong = document.createElement("strong");
          strong.textContent = teil.text;
          el.appendChild(strong);
        } else if (teil.de) {
          var span = document.createElement("span");
          span.className = "ref-de";
          span.textContent = teil.text;
          el.appendChild(span);
        } else {
          el.appendChild(document.createTextNode(teil.text));
        }
      });
    } else {
      el.textContent = inhalt;
    }
    return el;
  }

  var kopf = document.createElement("tr");
  kopf.appendChild(zelle("th", ""));
  kopf.appendChild(zelle("th", "Maskulinum"));
  kopf.appendChild(zelle("th", "Femininum"));
  kopf.appendChild(zelle("th", "Neutrum"));
  var thead = document.createElement("thead");
  thead.appendChild(kopf);
  tabelle.appendChild(thead);

  var tbody = document.createElement("tbody");

  var zeileSingular = document.createElement("tr");
  zeileSingular.appendChild(zelle("td", "Singular"));
  zeileSingular.appendChild(zelle("td", [
    { fett: true, text: "en god venn" },
    { de: true, text: "ein guter Freund" }
  ]));
  zeileSingular.appendChild(zelle("td", [
    { fett: true, text: "en/ei god kake" },
    { de: true, text: "ein guter Kuchen" }
  ]));
  zeileSingular.appendChild(zelle("td", [
    { fett: true, text: "et godt eple" },
    { de: true, text: "ein guter Apfel" }
  ]));
  tbody.appendChild(zeileSingular);

  var zeilePlural = document.createElement("tr");
  zeilePlural.appendChild(zelle("td", "Plural"));
  zeilePlural.appendChild(zelle("td", [
    { fett: true, text: "gode venner" },
    { de: true, text: "gute Freunde" }
  ]));
  zeilePlural.appendChild(zelle("td", [
    { fett: true, text: "gode kaker" },
    { de: true, text: "gute Kuchen" }
  ]));
  zeilePlural.appendChild(zelle("td", [
    { fett: true, text: "gode epler" },
    { de: true, text: "gute Äpfel" }
  ]));
  tbody.appendChild(zeilePlural);

  tabelle.appendChild(tbody);
  box.appendChild(tabelle);

  var ausnahme = document.createElement("p");
  ausnahme.className = "adjektiv-ausnahme";
  var ausnahmeLabel = document.createElement("strong");
  ausnahmeLabel.textContent = "Ausnahme: ";
  ausnahme.appendChild(ausnahmeLabel);
  ausnahme.appendChild(document.createTextNode(
    "Adjektive auf -ig und die meisten Adjektive mit der Endung -sk " +
    "(darunter alle Nationalitätenangaben) erhalten im Neutrum keine Endung."
  ));
  box.appendChild(ausnahme);

  var beispiele = document.createElement("ul");
  beispiele.className = "adjektiv-beispiele";

  function beispielZeile(nb, de) {
    var li = document.createElement("li");
    var strong = document.createElement("strong");
    strong.textContent = nb;
    li.appendChild(strong);
    var span = document.createElement("span");
    span.className = "ref-de";
    span.textContent = " – " + de;
    li.appendChild(span);
    return li;
  }

  beispiele.appendChild(beispielZeile("et billig brød", "ein billiges Brot"));
  beispiele.appendChild(beispielZeile("et skandinavisk språk", "eine skandinavische Sprache"));
  box.appendChild(beispiele);

  container.appendChild(box);
}

window.renderAdjektivReferenz = renderAdjektivReferenz;
