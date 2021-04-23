function incrementWinScore() {
    $("#player-score").innerHTML = ++userScore;
    $("#player-score-text").classList.add("green-flash");
    $("#player-score").classList.add("green-flash");
    setTimeout(function(){
        $("#player-score-text").classList.remove("green-flash");
        $("#player-score").classList.remove("green-flash");
    }, 500);

    if (computerScore.innerHTML === gameChoice) {
        $("#overall-div").show().fadeOut();
        $("#overall-winner").show().html(`
        Unlucky, the computer got to ${gameChoice} first...
        <br>
        <span class = "span-trophy">&#128079;&#127996;</span>
        <br>
        `).fadeOut();
        $("#game-div").hide().delay().fadeIn();
        $("#btn--game--controls").hide().delay().fadeIn();
    }
}