/**
* @fileOverview JavaScript win, lose or draw determination Library.
* @author <a href="https://github.com/aryan008">Adam Ryan</a>
* @version 1.1.1
*/
/*jshint esversion: 6 */

/* Variable noted in other files: userHand, cpu, userHand
Functions created noted in other files: win(), lose(), draw()
Functions noted from other files: incrementWinScore(), incrementLoseScore()
*/

/**
* [Function to perform a set number of actions if the player wins the hand]
* @param  {[string]}    userHand        [Whether the user chose rock, paper or scissors]
* @param  {[string]}    cpu             [Whether the computer chose rock, paper or scissors]
*/
function win(userHand, cpu) {
    // Win/lose/draw hand text emoji source: https://www.w3schools.com/charsets/ref_emoji_smileys.asp
    // add html to the chosen paragraph using jQuery lookups to what the user/cpu chose
    // add the emoji to the paragraph
    $("#result-text-paragraph").html(`
    <h4>You won! You chose ${userHand} and the computer chose ${cpu}, congratulations!<span class = "result-emoji">&#128516;</span></h4>`
    );
    // call the incrementWinScore function
    incrementWinScore();
    /* Creation of an IF statement to determine what button icons light up for the user when they win a hand.
    Depending on which button the user has chosen to play as their hand, on the win this button will light up as green briefly.
    The set timeout function is added for 500ms to remove the green win class.
    */
    // when the user wins by choosing rock
    if (userHand === "rock") {
        $("#rockHand").addClass("green-click-win");
        // remove the class just added after 500ms using setTimeout function
        setTimeout(function(){
            $("#rockHand").removeClass("green-click-win");
        }, 500);
    // when the user wins by choosing paper
    } else if (userHand === "paper") {
        $("#paperHand").addClass("green-click-win");
        // remove the class just added after 500ms using setTimeout function
        setTimeout(function(){
            $("#paperHand").removeClass("green-click-win");
        }, 500);
    // when the user wins by choosing scissors
    } else if (userHand === "scissors") {
        $("#scissorsHand").addClass("green-click-win");
        // remove the class just added after 500ms using setTimeout function
        setTimeout(function(){
            $("#scissorsHand").removeClass("green-click-win");
        }, 500);
    }
}

function lose(userHand, cpu) {
    // Win/lose/draw hand text emoji source: https://www.w3schools.com/charsets/ref_emoji_smileys.asp
    // add html to the chosen paragraph using jQuery lookups to what the user/cpu chose
    // add the emoji to the paragraph
    $("#result-text-paragraph").html(`<h4>You lost :( You chose ${userHand} but the computer chose ${cpu}, hard luck!<span class = "result-emoji">&#128549;</span></h4>`
    );
    // call the incrementLoseScore function
    incrementLoseScore();
    /* Creation of an IF statement to determine what button icons light up for the user when they lose a hand.
    Depending on which button the user has chosen to play as their hand, on the loss this button will light up as red briefly.
    The set timeout function is added for 500ms to remove the red lose class.
    */
    // when the user loses by choosing rock
    if (userHand === "rock") {
        $("#rockHand").addClass("red-click-lose");
        // remove the class just added after 500ms using setTimeout function
        setTimeout(function(){
            $("#rockHand").removeClass("red-click-lose");
        }, 500);
    // when the user loses by choosing paper
    } else if (userHand === "paper") {
        $("#paperHand").addClass("red-click-lose");
        // remove the class just added after 500ms using setTimeout function
        setTimeout(function(){
            $("#paperHand").removeClass("red-click-lose");
        }, 500);
    // when the user loses by choosing scissors
    } else if (userHand === "scissors") {
        $("#scissorsHand").addClass("red-click-lose");
        // remove the class just added after 500ms using setTimeout function
        setTimeout(function(){
            $("#scissorsHand").removeClass("red-click-lose");
        }, 500);
    }
}

function draw(userHand, cpu) {
    // Win/lose/draw hand text emoji source: https://www.w3schools.com/charsets/ref_emoji_smileys.asp
    // add html to the chosen paragraph using jQuery lookups to what the user/cpu chose
    // add the emoji to the paragraph
    $("#result-text-paragraph").html(`<h4>It's a draw! Both you and the computer chose ${cpu}!<span class = "result-emoji">&#128533;</span></h4>`
    );
    // Add the yellow flash coloring to the scoreboard text for the user
    $("#player-score-text").addClass("yellow-flash");
    // Add the yellow flash coloring to the scoreboard score for the user
    $("#player-score").addClass("yellow-flash");
    setTimeout(function(){
        // use the setTimeout function to remove these classes just added after 500ms
        $("#player-score-text").removeClass("yellow-flash");
        $("#player-score").removeClass("yellow-flash");
    }, 500);
    // Add the yellow flash coloring to the scoreboard text for the computer
    $("#cpu-score-text").addClass("yellow-flash");
    // Add the yellow flash coloring to the scoreboard score for the computer
    $("#cpu-score").addClass("yellow-flash");
    setTimeout(function(){
        // use the setTimeout function to remove these classes just added after 500ms
        $("#cpu-score-text").removeClass("yellow-flash");
        $("#cpu-score").removeClass("yellow-flash");
    }, 500);

    // add the yellow flash to the button due to the draw result
    $("#rockHand").addClass("yellow-click-draw");
    // add the yellow flash to the button due to the draw result
    $("#paperHand").addClass("yellow-click-draw");
    // add the yellow flash to the button due to the draw result
    $("#scissorsHand").addClass("yellow-click-draw");
    setTimeout(function(){
        // Use set timeout to remove the yellow flash from all three buttons after 500ms
        $("#rockHand").removeClass("yellow-click-draw");
        $("#paperHand").removeClass("yellow-click-draw");
        $("#scissorsHand").removeClass("yellow-click-draw");
    }, 500);

}