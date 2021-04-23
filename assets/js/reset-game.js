$("#btn--new--game").on("click", resetFunc);
function resetFunc() {
    userScore = 0;
    cpuScore = 0;
    $("#player-score").html(`0`);
    $("#cpu-score").html(`0`);
    $("#result-text-paragraph").html("");
}