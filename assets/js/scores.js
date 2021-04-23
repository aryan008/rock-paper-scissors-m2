function incrementWinScore() {
    $("#player-score").innerHTML = ++userScore;
    $("#player-score-text").classList.add("green-flash");
    $("#player-score").classList.add("green-flash");
    setTimeout(function(){
        $("#player-score-text").classList.remove("green-flash");
        $("#player-score").classList.remove("green-flash");
    }, 500);

    if ($("#player-score").innerHTML === gameChoice) {
        $("#overall-div").show().fadeOut(4000);
        // Trophy obtained at the following source: https://www.compart.com/en/unicode/U+1F3C6
        $("#overall-winner").show().html(`
        Congrats, you were first to ${gameChoice}!
        <br>
        <span class = "span-trophy">&#127942;</span>
        <br>
        <h2 id = "overall-winner">Let's play again!</h2>
        `).fadeOut(4000);
        $("#game-div").hide().delay(4000).fadeIn(1500);
        $("#btn--game--controls").hide().delay(4000).fadeIn(1500);
        resetFunc();
    }
}

function incrementLoseScore() {
    $("#cpu-score").innerHTML = ++cpuScore;
    $("#cpu-score-text").classList.add("red-flash");
    $("#cpu-score").classList.add("red-flash");
    setTimeout(function(){
        $("#cpu-score-text").classList.remove("red-flash");
        $("#cpu-score").classList.remove("red-flash");
    }, 500);

    if ($("#cpu-score").innerHTML === gameChoice) {
        $("#overall-div").show().fadeOut(4000);
        // Trophy obtained at the following source: https://www.compart.com/en/unicode/U+1F44F
        $("#overall-winner").show().html(`
        Unlucky, the computer got to ${gameChoice} first...
        <br>
        <span class = "span-trophy">&#128079;&#127996;</span>
        <br>
        <h2 id = "overall-winner">Let's play again!</h2>
        `).fadeOut(4000);
        $("#game-div").hide().delay(4000).fadeIn(1500);
        $("#btn--game--controls").hide().delay(4000).fadeIn(1500);
        resetFunc();
    }
}