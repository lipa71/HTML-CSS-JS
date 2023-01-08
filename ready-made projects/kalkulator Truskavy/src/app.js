const oblicz = document.getElementById("oblicz");
const wyczysc = document.getElementById("wyczysc");
const kwota_netto = document.getElementById("label");
const kwota_brutto = document.getElementById("brutto");
const od_brutto65 = document.getElementById("65-od-brutto");
const od_brutto35 = document.getElementById("35-od-brutto");
const kwota_vat = document.getElementById("kwota-vat");
const od_vat65 = document.getElementById("65-od-vat");
const od_vat35 = document.getElementById("35-od-vat");

function zmiana() {
  opcja = document.getElementById("select");

  function liczenie() {
    let vat = (kwota_vat.innerText =
      Math.round(kwota_netto.value * opcja.value * 100 + Number.EPSILON) / 100);

    let brutto = (kwota_brutto.innerText = kwota_netto.valueAsNumber + vat);

    od_brutto65.innerText =
      Math.round(brutto * 0.65 * 100 + Number.EPSILON) / 100;

    od_brutto35.innerText =
      Math.round(brutto * 0.35 * 100 + Number.EPSILON) / 100;

    od_vat65.innerText =
      Math.round(
        kwota_netto.value * opcja.value * 0.65 * 100 + Number.EPSILON
      ) / 100;

    od_vat35.innerText =
      Math.round(
        kwota_netto.value * opcja.value * 0.35 * 100 + Number.EPSILON
      ) / 100;

    kwota_brutto.style.visibility = "visible";
    od_brutto65.style.visibility = "visible";
    od_brutto35.style.visibility = "visible";
    kwota_vat.style.visibility = "visible";
    od_vat65.style.visibility = "visible";
    od_vat35.style.visibility = "visible";
  }
  oblicz.addEventListener("click", liczenie);

  function czyszczenie() {
    kwota_netto.value = "";

    opcja.selectedIndex = null;

    kwota_brutto.style.visibility = "hidden";
    od_brutto65.style.visibility = "hidden";
    od_brutto35.style.visibility = "hidden";
    kwota_vat.style.visibility = "hidden";
    od_vat65.style.visibility = "hidden";
    od_vat35.style.visibility = "hidden";
  }
  wyczysc.addEventListener("click", czyszczenie);
}
