const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

export default class colorSwitch {
  constructor({ start, stop }) {
    this.refs = {
      start: document.querySelector(start),
      stop: document.querySelector(stop),
    };

    this.isActive = null;
    this.timerId = null;

    this.refs.start.addEventListener("click", this.onButtonEvent.bind(this));
    this.refs.stop.addEventListener("click", this.onButtonEvent.bind(this));
  }
  onButtonEvent(e) {
    document.querySelector(".mentor").style.display = "block";
    e.preventDefault();
    if (this.isActive) {
      this.onClearTimer();
      document.querySelector(".mentor").style.display = "none";
      return;
    }

    this.isActive = true;
    this.refs.start.disabled = true;

    this.timerId = setInterval(() => {
      let randomColorsOnBody = this.switchColor();
      document.body.style.background = randomColorsOnBody;
    }, 1000);
  }

  onClearTimer() {
    this.isActive = false;
    this.refs.start.disabled = false;
    clearInterval(this.timerId);
  }

  switchColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
