const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

class colorSwitch {
  constructor({ start, stop }) {
    let isActive = null;
    let timerId = null;
    const refs = {
      start: document.querySelector(start),
      stop: document.querySelector(stop),
    };

    refs.start.addEventListener("click", onButtonEvent);
    refs.stop.addEventListener("click", onButtonEvent);

    function onButtonEvent(e) {
      document.querySelector(".mentor").style.display = "block";
      e.preventDefault();
      if (isActive) {
        onClearTimer();
        document.querySelector(".mentor").style.display = "none";
        return;
      }

      isActive = true;
      refs.start.disabled = true;

      timerId = setInterval(() => {
        let randomColorsOnBody = switchColor();
        document.body.style.background = randomColorsOnBody;
      }, 1000);
    }

    function onClearTimer() {
      isActive = false;
      refs.start.disabled = false;
      clearInterval(timerId);
    }

    function switchColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }
}

const randomColor = new colorSwitch({
  start: 'button[data-action="start"]',
  stop: 'button[data-action="stop"]',
});
