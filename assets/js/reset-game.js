/**
* @fileOverview JavaScript reset the game Library.
* @author <a href="https://github.com/aryan008">Adam Ryan</a>
* @version 1.1.1
*/
/*jshint esversion: 6 */
/* Function noted in the following files: game-launch.js, scores.js
*/

// onclick event handler for the "reset game" button that calls the resetFunc function
$("#btn--new--game").on("click", resetFunc);

/** This function will reset a number of parameters associated with starting a fresh game */
function resetFunc() {
    // reset the user score variable for incrementation beginning again at zero
    userScore = 0;
    // reset the computer score variable for incrementation beginning again at zero
    cpuScore = 0;
    // set the user score to zero in the scoreboard
    $("#player-score").html(`0`);
    // set the computer score to zero in the scoreboard
    $("#cpu-score").html(`0`);
    // reset the game text to an empty string
    $("#result-text-paragraph").html("");
}