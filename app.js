const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const scoreInput = document.querySelector("#scoreInput");
const resetButton = document.querySelector("#reset");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

function reset() {
  p1Score = 0;
  p2Score = 0;
  isGameOver = false;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.style.color = "black";
  p2Display.style.color = "black";
  p1Button.disabled = false;
  p2Button.disabled = false;
}

scoreInput.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
  }
  if (p1Score == winningScore) {
    isGameOver = true;
    p1Display.style.color = "green";
    p2Display.style.color = "red";
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
  p1Display.textContent = p1Score;
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
  }
  if (p2Score == winningScore) {
    isGameOver = true;
    p1Display.style.color = "red";
    p2Display.style.color = "green";
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
  p2Display.textContent = p2Score;
});

resetButton.addEventListener("click", reset);
