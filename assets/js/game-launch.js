/**
* @fileOverview JavaScript game launch Library.
* @author <a href="https://github.com/aryan008">Adam Ryan</a>
* @version 1.1.1
*/
/*jshint esversion: 6 */
/* Variable noted in other files: gameChoice
Function noted in other files: resetFunc()
*/

/** This onclick function will occur when the user picks the game number they want to play */
$(".game-number-button").click(function() {
    // fading out of div
    $("#game--count--choice--div").fadeOut(200);
    // fading in of div
    $("#div--btn--play--heading").delay(200).fadeIn(600);
});

/** This onclick function will occur when the user clicks that they are ready to play */
$("#btn--play--click").click(function() {
    // fading out of div
    $("#introduction-div").fadeOut(300);
    // fading in of div
    $("#picture-div").delay(500).fadeIn(2000).fadeOut(2000);
    // fading in of div
    $("#play-div").delay(5000).fadeIn(1000);
    // Adding resetFunc() function to the click event
    resetFunc();
});

/** This onclick function updates the "gameChoice" variable for the object ID game choice chosen by the user */
$(".game-number-button").on("click", function(e) {
    // setting the gameChoice variable of the object id of the user's chosen game --> score to be obtained
    gameChoice = $(e.target)[0].id;
});