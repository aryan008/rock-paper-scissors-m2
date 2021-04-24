// Understanding of how to add audio at the following source:
// https://www.codegrepper.com/code-examples/javascript/how+to+add+sound+javascript
function audioHand() {
  var audio = new Audio("assets/audio/rps_shoot.m4a");
  audio.play();
}

// Source of the win/loss audio: https://mixkit.co/free-sound-effects/
function winnerOverall() {
  var audio = new Audio("assets/audio/win.wav");
  audio.play();
}

// Source of the win/loss audio: https://mixkit.co/free-sound-effects/
function loserOverall() {
  var audio = new Audio("assets/audio/lose.wav");
  audio.play();
}