const opcje = document.getElementById("opcje");
const liczba_rund = document.getElementById("liczba_rund");
const czas_rundy = document.getElementById("czas_rundy");
const czas_przerwy = document.getElementById("czas_przerwy");
const runda = document.getElementById("runda");
const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const czas_do_startu = document.getElementById("czas_do_startu");
const ok = document.getElementById("ok");

ok.addEventListener("click", () => {
  timer.innerText = czas_rundy.value;
});

start.addEventListener("click", () => {
  var x1 = czas_do_startu.value;
  var replaced1 = x1.replace(/\D/g, "");
  if (replaced1 !== "") {
    var start1 = Number(replaced1);
  }

  var x2 = czas_przerwy.value;
  var replaced2 = x2.replace(/\D/g, "");
  if (replaced2 !== "") {
    var przerwa = Number(replaced2);
  }
  var x3 = czas_rundy.value;
  var replaced3 = x3.replace(/\D/g, "");
  if (replaced3 !== "") {
    var czasRundy = Number(replaced3);
  }

  var x4 = runda.textContent;
  var replaced4 = x4.replace(/\D/g, "");
  if (replaced4 !== "") {
    var wskaznik_rundy = Number(replaced4);
  }

  var myArray = timer.innerText.split(":");
  var min = myArray[0];
  var sec = myArray[1];
  const min2 = myArray[0];
  const sec2 = myArray[1];

  var miedzyRundami = przerwa + czasRundy;

  var liczenie = setInterval(() => {
    var myInterval = setInterval(() => {
      timer.innerText = min + ":" + sec;
      if (min === "00" && sec === "00") {
        clearInterval(myInterval);
        wskaznik_rundy++;
        runda.innerText = wskaznik_rundy + " Runda";
        min = min2;
        sec = sec2;
      }
      if (sec === "00") {
        sec = 60;
        min = "0" + (min - 1);
      }
      sec--;
      if (sec < 10) {
        sec = "0" + sec;
      }
      if (sec === 0) {
        sec = 59;
        min = "0" + (min - 1);
      }
    }, 1000);
  }, miedzyRundami * 1000);
});
