var userScore = 0;
var cpuScore = 0;
var gameChoice = "";

function incrementWinScore() {
    $("#player-score").html(++userScore);
    $("#player-score-text").addClass("green-flash");
    $("#player-score").addClass("green-flash");
    setTimeout(function(){
        $("#player-score-text").removeClass("green-flash");
        $("#player-score").removeClass("green-flash");
    }, 500);

    if ($("#player-score").html() === gameChoice) {
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
    $("#cpu-score").html(++cpuScore);
    $("#cpu-score-text").addClass("red-flash");
    $("#cpu-score").addClass("red-flash");
    setTimeout(function(){
        $("#cpu-score-text").removeClass("red-flash");
        $("#cpu-score").removeClass("red-flash");
    }, 500);

    if ($("#cpu-score").html() === gameChoice) {
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