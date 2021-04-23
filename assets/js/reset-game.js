$("#btn--new--game").on("click", resetFunc);
function resetFunc() {
    userScore = 0;
    cpuScore = 0;
    $("#player-score").innerHTML = 0;
    $("#cpu-score").innerHTML = 0;
    $("#result-text-paragraph").innerHTML = "";
}