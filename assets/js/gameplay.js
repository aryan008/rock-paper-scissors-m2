/**
* @fileOverview JavaScript main play Library.
* @author <a href="https://github.com/aryan008">Adam Ryan</a>
* @version 1.1.1
*/
/*jshint esversion: 6 */

/* Variable noted in other files: userHand, cpu
Functions created noted in other files: play(), win(), lose(), draw()
Functions noted from other files: audioHand()
*/

/**
* [Function to determine whether to call the win, loss or draw functions depending on the user/computer choice]
* @param  {[string]}    userHand        [Whether the user chose rock, paper or scissors]
*/
function play(userHand) {
    // declare the cpu variable and calling the computerHand() function
    var cpu = computerHand();    
    // switch statement used for the scenarios whether the hand is won, lost or drawn against the computer
    switch(userHand + "-" + cpu) {
        // the three cases where the user has won against the computer
        case "rock-scissors":
        case "scissors-paper":
        case "paper-rock":
            // on this determined win, call the win() function and assigning the appropriate user choice and computer choice
            win(userHand, cpu);
            break;
        // the three cases where the user has lost against the computer
        case "rock-paper":
        case "scissors-rock":
        case "paper-scissors":
            // on this determined loss, call the lose() function and assigning the appropriate user choice and computer choice
            lose(userHand, cpu);
            break;
        // the three cases where the user and computer have drawn the game
        case "rock-rock":
        case "scissors-scissors":
        case "paper-paper":
            // on this determined draw, call the draw() function and assigning the appropriate user choice and computer choice
            draw(userHand, cpu);
            break;
    }
}

/** This function will occur when the user clicks on either the rock, paper or scissors button to start the game
* When the user clicks on 1 of the 3 options, the audio file is played to start the hand
* the setTimeout function is called from here to delay the "play()" of the hand for 1200ms - allowing the full audio file to be heard
*/
function main() {
    // when the user clicks on the rock button
    $("#rockHand").on("click", function () {
        // play the audio
        audioHand();
        // setTimeout function to call the play() function for the user's choice of rock after 1200ms
        setTimeout(function(){
            play("rock");
        }, 1200);
    });
    // when the user clicks on the paper button
    $("#paperHand").on("click", function () {
        // play the audio
        audioHand();
        // setTimeout function to call the play() function for the user's choice of paper after 1200ms
        setTimeout(function(){
            play("paper");
        }, 1200);
    });
    // when the user clicks on the scissors button
    $("#scissorsHand").on("click", function () {
        // play the audio
        audioHand();
        // setTimeout function to call the play() function for the user's choice of scissors after 1200ms
        setTimeout(function(){
            play("scissors");
        }, 1200);
    });
}

// calling the main() function
main();