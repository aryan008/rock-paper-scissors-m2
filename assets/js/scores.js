/**
* @fileOverview JavaScript score incrementation Library.
* @author <a href="https://github.com/aryan008">Adam Ryan</a>
* @version 1.1.1
*/
/*jshint esversion: 6 */

/* Variable noted in other files: userScore, cpuScore, gameChoice
Functions created noted in other files: incrementWinScore(), incrementLoseScore()
Functions noted from other files: resetFunc(), winnerOverall(), loserOverall()
*/

// creation of the scoreboard score for the user and setting to zero
var userScore = 0;
// creation of the scoreboard score for the computer and setting to zero
var cpuScore = 0;
// creation of the number of games the user wants to play and setting as an empty string
var gameChoice = "";

/** This function will occur when the user wins a hand
* The user's score will increment on a +1 basis, starting from zero, along with brief coloured class add features to let the user know they won the hand
* If the user wins the number of games they stated at the start ahead of the computer, they will have won the game
*/
function incrementWinScore() {
    // Increments the numerical player score on the scoreboard by 1
    $("#player-score").html(++userScore);
    // adds the flash of color to the scoreboard text on the win
    $("#player-score-text").addClass("green-flash");
    // adds the flash of color to the scoreboard score on the win
    $("#player-score").addClass("green-flash");
    setTimeout(function(){
        // setTimeout function used to remove the above two classes after 500ms
        $("#player-score-text").removeClass("green-flash");
        $("#player-score").removeClass("green-flash");
    }, 500);
    // creation of the IF statement to determine if the user is the overall winner of the game
    // the statement determines the variable gameChoice as the user selection before starting the game - i.e. "first to X"
    if ($("#player-score").html() === gameChoice) {
        // show the div and fade out over 4000ms
        $("#overall-div").show().fadeOut(4000);
        // Trophy obtained at the following source: https://www.compart.com/en/unicode/U+1F3C6
        // add html to the div along with a trophy before fading out over 4000ms
        $("#overall-winner").show().html(`
        Congrats, you were first to ${gameChoice}!
        <br>
        <span class = "span-trophy">&#127942;</span>
        <br>
        <h2 id = "overall-winner">Let's play again!</h2>
        `).fadeOut(4000);
        // call the audio function for the overall winner
        winnerOverall();
        // hide the div initially before fading in for 1500ms after a 4000ms delay
        $("#game-div").hide().delay(4000).fadeIn(1500);
        // hide the div initially before fading in for 1500ms after a 4000ms delay
        $("#btn--game--controls").hide().delay(4000).fadeIn(1500);
        // call the function to reset the game and start from scratch
        resetFunc();
    }
}

function incrementLoseScore() {
    // Increments the numerical computer score on the scoreboard by 1
    $("#cpu-score").html(++cpuScore);
    // adds the flash of color to the scoreboard text on the loss
    $("#cpu-score-text").addClass("red-flash");
    // adds the flash of color to the scoreboard score on the loss
    $("#cpu-score").addClass("red-flash");
    // setTimeout function used to remove the above two classes after 500ms
    setTimeout(function(){
        $("#cpu-score-text").removeClass("red-flash");
        $("#cpu-score").removeClass("red-flash");
    }, 500);
    // creation of the IF statement to determine if the user is the overall loser of the game
    // the statement determines the variable gameChoice as the user selection before starting the game - i.e. "first to X"
    if ($("#cpu-score").html() === gameChoice) {
        // show the div and fade out over 4000ms
        $("#overall-div").show().fadeOut(4000);
        // Trophy obtained at the following source: https://www.compart.com/en/unicode/U+1F44F
        // add html to the div along with a comiserations before fading out over 4000ms
        $("#overall-winner").show().html(`
        Unlucky, the computer got to ${gameChoice} first...
        <br>
        <span class = "span-trophy">&#128079;&#127996;</span>
        <br>
        <h2 id = "overall-winner">Let's play again!</h2>
        `).fadeOut(4000);
        // call the audio function for the overall loser
        loserOverall();
        // hide the div initially before fading in for 1500ms after a 4000ms delay
        $("#game-div").hide().delay(4000).fadeIn(1500);
        // hide the div initially before fading in for 1500ms after a 4000ms delay
        $("#btn--game--controls").hide().delay(4000).fadeIn(1500);
        // call the function to reset the game and start from scratch
        resetFunc();
    }
}