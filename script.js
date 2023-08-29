const makeBubble = () => {
  var clutter = "";

  for (let i = 1; i <= 168; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
};

var timer = 60;
const GameTime = () => {
  setInterval(() => {
    timer--;
    document.querySelector("#timer").textContent = timer;
  }, 1000);
};
makeBubble();
GameTime();

// console.log(time);
