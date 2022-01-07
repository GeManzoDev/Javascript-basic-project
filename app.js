//constants declaration

const p1Display = document.querySelector("#player1score");
const p2Display = document.querySelector("#player2score");
const winningScoreSelected = document.querySelector("#winning-score");
const p1Button = document.querySelector("#player1button");
const p2Button = document.querySelector("#player2button");
const resetButton = document.querySelector("#reset");

let p1Score = 0;
let p2Score = 0;
let winningScore = 7;
let isGameOver = false;

//player one +1 button
p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      p1Display.classList.add("text-success");
      p2Display.classList.add("text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});

//player two +1 button
p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      p2Display.classList.add("text-success");
      p1Display.classList.add("text-danger");
      p2Button.disabled = true;
      p1Button.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
});

//reset button
resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("text-success");
  p1Display.classList.remove("text-danger");
  p2Display.classList.remove("text-success");
  p2Display.classList.remove("text-danger");
  p1Button.disabled = false;
  p2Button.disabled = false;
}
//selecting the winning score
winningScoreSelected.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});
