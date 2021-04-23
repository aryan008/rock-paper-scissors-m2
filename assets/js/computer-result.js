function computerHand() {
    var possibleChoice = ["rock", "paper", "scissors"];
    var randomChoice = Math.floor(Math.random() *3);
    return possibleChoice[randomChoice];
}