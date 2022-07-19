
const oblicz = document.getElementById('oblicz');
const wyczysc = document.getElementById('wyczysc');
const kwota_netto = document.getElementById('label');
const kwota_brutto = document.getElementById('brutto');
const od_brutto67 = document.getElementById('67-od-brutto');
const od_brutto33 = document.getElementById('33-od-brutto');
const kwota_vat = document.getElementById('kwota-vat');
const od_vat67 = document.getElementById('67-od-vat');
const od_vat33 = document.getElementById('33-od-vat');


function zmiana () {

        opcja = document.getElementById('select');

    function liczenie () {

        let vat = kwota_vat.innerText=
         Math.round((kwota_netto.value * opcja.value) * 100 + Number.EPSILON) / 100;

        let brutto = kwota_brutto.innerText=
         kwota_netto.valueAsNumber + vat

        od_brutto67.innerText=
         Math.round((brutto * 0.67) * 100 + Number.EPSILON) / 100;

        od_brutto33.innerText=
         Math.round((brutto * 0.33) * 100 + Number.EPSILON) / 100;
        
        od_vat67.innerText=
         Math.round(((kwota_netto.value * opcja.value) * 0.67) * 100 + Number.EPSILON) / 100;
    
        od_vat33.innerText=
         Math.round(((kwota_netto.value * opcja.value) * 0.33) * 100 + Number.EPSILON) / 100;
        
        kwota_brutto.style.visibility = 'visible';
        od_brutto67.style.visibility = 'visible';
        od_brutto33.style.visibility = 'visible';        
        kwota_vat.style.visibility = 'visible';
        od_vat67.style.visibility = 'visible';
        od_vat33.style.visibility = 'visible';

    }
    oblicz.addEventListener ('click' , liczenie);


function czyszczenie () {

    kwota_netto.value = '';

    opcja.selectedIndex = null;

    kwota_brutto.style.visibility = 'hidden';
    od_brutto67.style.visibility = 'hidden';
    od_brutto33.style.visibility = 'hidden';
    kwota_vat.style.visibility = 'hidden';
    od_vat67.style.visibility = 'hidden';
    od_vat33.style.visibility = 'hidden';




}
wyczysc.addEventListener ('click' , czyszczenie);
};
