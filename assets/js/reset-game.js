$("#btn--new--game").on("click", resetFunc);
function resetFunc() {
    userScore = 0;
    cpuScore = 0;
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    resultText.innerHTML = "";
}