const options = document.getElementById("options");
const number_of_rounds = document.getElementById("number_of_rounds");
const round_time = document.getElementById("round_time");
const break_time = document.getElementById("break_time");
const round = document.getElementById("round");
const timer = document.getElementById("timer");
const stop = document.getElementById("stop");
const time_to_start = document.getElementById("time_to_start");
const ok = document.getElementById("ok");
const start = document.getElementById("start");

ok.addEventListener("click", () => {
  const x1 = time_to_start.value;
  const replaced1 = x1.replace(/\D/g, "");
  if (replaced1 !== "") {
    var startTime = Number(replaced1);
  }

  const x2 = break_time.value;
  const replaced2 = x2.replace(/\D/g, "");
  if (replaced2 !== "") {
    var breakTime = Number(replaced2);
  }
  const x3 = round_time.value;
  const replaced3 = x3.replace(/\D/g, "");
  if (replaced3 !== "") {
    var roundTime = Number(replaced3);
  }

  const x4 = round.textContent;
  const replaced4 = x4.replace(/\D/g, "");
  if (replaced4 !== "") {
    var round_number = Number(replaced4);
  }

  const min_and_sec = timer.innerText.split(":");
  let min = min_and_sec[0];
  let sec = min_and_sec[1];
  const min2 = min_and_sec[0];
  const sec2 = min_and_sec[1];

  const bettwenRounds = breakTime + roundTime;

  timer.innerText = round_time.value;

  start.addEventListener("click", () => {
    setTimeout(() => {
      const counting = setInterval(() => {
        const myInterval = setInterval(() => {
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
    }, startTime * 300);
  });
});
