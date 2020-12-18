const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const DELAY_SETINTERVAL = 1000;
let intervalId = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
}

choiceActive()

refs.start.addEventListener('click', onHandleBtnStart);
refs.stop.addEventListener('click', onHandleBtnStop);

function render(color) {
  document.body.style.backgroundColor = colors[color];
}

function onHandleBtnStart() {
  intervalId = setInterval(() => {
    const firstColor = 0;
    const lastColor = colors.length - 1;
    const randomColor = randomIntegerFromInterval(firstColor, lastColor);
    render(randomColor);
    choiceActive(true, false);
  }, DELAY_SETINTERVAL)
}

function onHandleBtnStop() {
  clearInterval(intervalId);
  choiceActive(false, true);
}

function choiceActive(start = false, stop = true) {
  refs.start.disabled = start;
  refs.stop.disabled = stop;
}
