//constants declaration

const p1 = {
  button: document.querySelector("#player1button"),
  score: 0,
  display: document.querySelector("#player1score"),
};

const p2 = {
  button: document.querySelector("#player2button"),
  score: 0,
  display: document.querySelector("#player2score"),
};

const winningScoreSelected = document.querySelector("#winning-score");
const resetButton = document.querySelector("#reset");

let winningScore = 7;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      player.display.classList.add("text-success");
      opponent.display.classList.add("text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

//player one +1 button
p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

//player two +1 button
p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

//reset button
resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.button.disabled = false;
    p.display.classList.remove("text-success", "text-danger");
  }
}
//selecting the winning score
winningScoreSelected.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});
