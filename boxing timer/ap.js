const opcje = document.getElementById("opcje");
const number_of_rounds = document.getElementById("liczba_rund");
const round_time = document.getElementById("czas_rundy");
const break_time = document.getElementById("czas_przerwy");
const round = document.getElementById("runda");
const timer = document.getElementById("timer");
const stop = document.getElementById("stop");
const time_to_start = document.getElementById("czas_do_startu");

$("#ok").click(() => {
  var x1 = time_to_start.value;
  var replaced1 = x1.replace(/\D/g, "");
  if (replaced1 !== "") {
    var start1 = Number(replaced1);
  }

  var x2 = break_time.value;
  var replaced2 = x2.replace(/\D/g, "");
  if (replaced2 !== "") {
    var breakTime = Number(replaced2);
  }
  var x3 = round_time.value;
  var replaced3 = x3.replace(/\D/g, "");
  if (replaced3 !== "") {
    var roundTime = Number(replaced3);
  }

  var x4 = round.textContent;
  var replaced4 = x4.replace(/\D/g, "");
  if (replaced4 !== "") {
    var round_number = Number(replaced4);
  }

  var myArray = timer.innerText.split(":");
  var min = myArray[0];
  var sec = myArray[1];
  const min2 = myArray[0];
  const sec2 = myArray[1];

  var bettwenRounds = breakTime + roundTime;

  timer.innerText = round_time.value;

  $("#start").click(() => {
    setTimeout(() => {
      var counting = setInterval(() => {
        var myInterval = setInterval(() => {
          timer.innerText = min + ":" + sec;
          if (min === "00" && sec === "00") {
            clearInterval(myInterval);
            round_number++;
            round.innerText = round_number + " Runda";
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
      }, bettwenRounds * 1000);
    }, breakTime * 300);
  });
});
