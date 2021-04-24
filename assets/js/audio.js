/**
* @fileOverview JavaScript Initialisation Library.
* @author <a href="https://github.com/aryan008">Adam Ryan</a>
* @version 1.1.1
*/
/*jshint esversion: 6 */

/*
The following functions represent the playing of sounds throughout stages in the game.
audioHand() used for the "rock, paper, scissors, shoot" for each hand.
winnerOverall() used when the user beats the computer on an overall basis.
loserOverall() used when the user loses to the computer on an overall basis.
Use of functions:
audioHand() - scores.js
winnerOverall() - scores.js
loserOverall() - scores.js
*/

// Understanding of how to add audio at the following source:
// https://www.codegrepper.com/code-examples/javascript/how+to+add+sound+javascript
/** This function will play the audio it looks for in the audio folder. */
function audioHand() {
    //Declare audio variable and assign to filepath
  var audio = new Audio("assets/audio/rps_shoot.m4a");
  // play the audio
  audio.play();
}

// Source of the win/loss audio: https://mixkit.co/free-sound-effects/
/** This function will play the audio it looks for in the audio folder. */
function winnerOverall() {
    //Declare audio variable and assign to filepath
  var audio = new Audio("assets/audio/win.wav");
  // play the audio
  audio.play();
}

// Source of the win/loss audio: https://mixkit.co/free-sound-effects/
/** This function will play the audio it looks for in the audio folder. */
function loserOverall() {
    //Declare audio variable and assign to filepath
  var audio = new Audio("assets/audio/lose.wav");
  // play the audio
  audio.play();
}