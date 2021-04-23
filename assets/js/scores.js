function incrementWinScore() {
    $("#player-score").innerHTML = ++userScore;
    $("#player-score-text").classList.add("green-flash");
    $("#player-score").classList.add("green-flash");
}