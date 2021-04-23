function incrementWinScore() {
    $("#player-score").innerHTML = ++userScore;
    $("#player-score-text").classList.add("green-flash");
    $("#player-score").classList.add("green-flash");
    setTimeout(function(){
        $("#player-score-text").classList.remove("green-flash");
        $("#player-score").classList.remove("green-flash");
    }, 500);
}