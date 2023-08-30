var timer = 60;
var score = 0;
var Hitrn = 0;

// reload the page
document.querySelector("#reload").addEventListener("click", () => {
  location.reload();
});

const IncreaseScore = () => {
  score += 10;
  document.querySelector("#scored").textContent = score;
};

const GetHit = () => {
  Hitrn = Math.floor(Math.random() * 10);

  document.querySelector("#GetHit").textContent = Hitrn;
};
const makeBubble = () => {
  var clutter = "";

  for (let i = 1; i <= 168; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
};

const GameTime = () => {
  var timeout = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timeout);
      document.querySelector("#pbtm").innerHTML = `<h1> Game Over<h1/>`;
    }
  }, 1000);
};

document.querySelector("#pbtm").addEventListener("click", (dets) => {
  let Click_NUm = Number(dets.target.textContent);
  console.log(Click_NUm);
  if (Click_NUm == Hitrn) {
    IncreaseScore();
    GetHit();
    makeBubble();
  } else {
    makeBubble();
  }
});

makeBubble();
GameTime();
GetHit();
// IncreaseScore();
