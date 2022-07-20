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

ok.addEventListener("click", (zmiana_opcji) => {
  timer.innerText = czas_rundy.value;
});

start.addEventListener("click", () => {
  var x = czas_do_startu.value;
  var replaced = x.replace(/\D/g, "");
  if (replaced !== "") {
    var start = Number(replaced);
  }

  var y = czas_przerwy.value;
  var replaced = y.replace(/\D/g, "");
  if (replaced !== "") {
    var przerwa = Number(replaced);
  }

  var myArray = timer.innerText.split(":");
  var min = myArray[0];
  var sec = myArray[1];

  var liczenie = setTimeout(function () {
    var myInterval = setInterval(function () {
      timer.innerText = min + ":" + sec;
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
      if (min === "00" && sec === "00") {
        clearInterval(myInterval);
        var koniec = setTimeout(function () {
          timer.innerText = "00:00";
        }, 1000);
        var liczenie2 = setInterval(function () {
          timer.innerText = czas_rundy.value;
          var myArray2 = timer.innerText.split(":");
          var min2 = myArray2[0];
          var sec2 = myArray2[1];
          var myInterval = setInterval(function () {
            timer.innerText = min2 + ":" + sec2;
            if (sec2 === "00") {
              sec2 = 60;
              min2 = "0" + (min2 - 1);
            }
            sec2--;
            if (sec2 < 10) {
              sec2 = "0" + sec2;
            }
            if (sec2 === 0) {
              sec2 = 59;
              min2 = "0" + (min2 - 1);
            }
            if (min2 === "00" && sec2 === "00") {
              clearInterval(myInterval);
              var koniec = setTimeout(function () {
                timer.innerText = "00:00";
              }, 1000);
            }
          }, 1000);
        }, przerwa * 1000);
      }
    }, 1000);
  }, start * 1000);
});
