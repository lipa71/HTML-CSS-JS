const options1 = document.getElementById("options1");
const options2 = document.getElementById("options2");
const number_of_rounds = document.getElementById("number_of_rounds");
const round_time = document.getElementById("round_time");
const break_time = document.getElementById("break_time");
const round = document.getElementById("round");
const timer = document.getElementById("timer");
const start_timer = document.getElementById("start_timer");
const break_timer = document.getElementById("break_timer");
const reset = document.getElementById("reset");
const time_to_start = document.getElementById("time_to_start");
const ok = document.getElementById("ok");
const start = document.getElementById("start");
const option_list = document.querySelector(".option_list");
const pause = document.getElementById("pause");
const resume = document.getElementById("resume");

options1.addEventListener("click", () => {
  option_list.style.display = "flex";
  options1.style.display = "none";
  options2.style.display = "inline";
});

options2.addEventListener("click", () => {
  option_list.style.display = "none";
  options2.style.display = "none";
  options1.style.display = "inline";
});

ok.addEventListener("click", () => {
  timer.innerText = round_time.value;
});

reset.addEventListener("click", () => {
  window.location.reload();
});

start.addEventListener("click", () => {
  start_timer.innerText = time_to_start.value;
  break_timer.innerText = break_time.value;
  options1.style.visibility = "hidden";
  start.style.display = "none";
  pause.style.display = "inline";
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

  const x3 = round.textContent;
  const replaced3 = x3.replace(/\D/g, "");
  if (replaced3 !== "") {
    var roundNumber = Number(replaced3);
  }

  const x4 = number_of_rounds.value;
  const replaced4 = x4.replace(/\D/g, "");
  if (replaced4 !== "") {
    var numberOfrounds = Number(replaced4);
  }
  const min_and_sec = timer.innerText.split(":");
  let min = min_and_sec[0];
  let sec = min_and_sec[1];
  const min2 = min_and_sec[0];
  const sec2 = min_and_sec[1];

  const start_min_and_sec = start_timer.innerText.split(":");
  let start_min = start_min_and_sec[0];
  let start_sec = start_min_and_sec[1];

  const break_min_and_sec = break_timer.innerText.split(":");
  let break_min = break_min_and_sec[0];
  let break_sec = break_min_and_sec[1];
  const break_min2 = break_min_and_sec[0];
  const break_sec2 = break_min_and_sec[1];

  function break_counting() {
    const breakInterval = setInterval(() => {
      break_timer.innerText = `${break_min}:${break_sec}`;
      break_timer.style.display = "flex";
      if (break_min === "00" && break_sec === "00") {
        setTimeout(() => {
          clearInterval(breakInterval);
          break_timer.style.display = "none";
          break_min = break_min2;
          break_sec = break_sec2;
          // return;
        }, 1000);
      }
      if (break_sec === "00") {
        break_sec = 60;
        break_min = "0" + (break_min - 1);
      }
      break_sec--;
      if (break_sec < 10) {
        break_sec = "0" + break_sec;
      }
      if (break_sec === 0) {
        break_sec = 59;
        break_min = "0" + (break_min - 1);
      }
    }, 1000);
  }

  const start_counting = () => {
    return new Promise((resolve) => {
      const startInterval = setInterval(() => {
        start_timer.innerText = `${start_min}:${start_sec}`;
        start_timer.style.display = "flex";
        if (start_min === "00" && start_sec === "00") {
          setTimeout(() => {
            clearInterval(startInterval);
            start_timer.style.display = "none";
            resolve();
          }, 1000);
        }
        if (start_sec === "00") {
          start_sec = 60;
          start_min = "0" + (start_min - 1);
        }
        start_sec--;
        if (start_sec < 10) {
          start_sec = "0" + start_sec;
        }
        if (start_sec === 0) {
          start_sec = 59;
          start_min = "0" + (start_min - 1);
        }
      }, 1000);
    });
  };

  const counting1 = () => {
    return new Promise((resolve, reject) => {
      const myInterval1 = setInterval(() => {
        timer.innerText = `${min}:${sec}`;
        pause.addEventListener("click", () => {
          pause.style.display = "none";
          resume.style.display = "inline";
          clearInterval(myInterval1);
          reject();
        });
        if (min === "00" && sec === "00") {
          clearInterval(myInterval1);
          if (roundNumber === numberOfrounds) {
            resolve();
          } else {
            setTimeout(() => {
              break_timer.style.display = "flex";
              break_counting();
              roundNumber++;
              round.innerText = roundNumber + " Round";
              min = min2;
              sec = sec2;
              resolve();
            }, 1000);
          }
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
    });
  };

  const counting2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const myInterval2 = setInterval(() => {
          timer.innerText = `${min}:${sec}`;
          pause.addEventListener("click", () => {
            clearInterval(myInterval2);
            pause.style.display = "none";
            resume.style.display = "inline";
            reject();
          });
          if (min === "00" && sec === "00") {
            clearInterval(myInterval2);
            if (roundNumber === numberOfrounds) {
              resolve();
            } else {
              setTimeout(() => {
                break_timer.style.display = "flex";
                break_counting();
                roundNumber++;
                round.innerText = roundNumber + " Round";
                min = min2;
                sec = sec2;
                resolve();
                counting2();
              }, 1000);
            }
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
      }, breakTime * 1000);
    });
  };

  const counting3 = () => {
    return new Promise((resolve, reject) => {
      const myInterval3 = setInterval(() => {
        timer.innerText = `${min}:${sec}`;
        pause.addEventListener("click", () => {
          clearInterval(myInterval3);
          pause.style.display = "none";
          resume.style.display = "inline";
          reject();
        });
        if (min === "00" && sec === "00") {
          clearInterval(myInterval3);
          if (roundNumber === numberOfrounds) {
            resolve();
          } else {
            setTimeout(() => {
              roundNumber++;
              round.innerText = roundNumber + " Round";
              min = min2;
              sec = sec2;
              resolve();
            }, 1000);
          }
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
    });
  };

  async function async2() {
    try {
      await counting3();
      await counting2();
    } catch {
      return;
    }
  }

  async function async1() {
    try {
      await start_counting();
      await counting1();
      await counting2();
    } catch {
      return;
    }
  }

  async1();
  resume.addEventListener("click", () => {
    resume.style.display = "none";
    pause.style.display = "inline";
    async2();
  });
});
