const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

refs.btnStart.addEventListener('click', start);
refs.btnStop.addEventListener('click', stop);

function render(itemColor) {
  document.body.style.backgroundColor = colors[itemColor];
}

function start() {
  timerId = setInterval(function () {
    let firstColor = 0;
    let lastColor = colors.length - 1;
    let randomColor = randomIntegerFromInterval(firstColor, lastColor);
    render(randomColor);
  }, 1000);
}

function stop() {
  clearInterval(timerId);
}
