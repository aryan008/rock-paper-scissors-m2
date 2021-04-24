/**
* @fileOverview JavaScript computer random result Library.
* @author <a href="https://github.com/aryan008">Adam Ryan</a>
* @version 1.1.1
*/
/*jshint esversion: 6 */

/**
* [Function to return random computer result in an array, by setting "rock", "paper" and "scissors" in an initial array 
but then converting them to a numeric choice using the Math function.]
* @return {possibleChoice[randomChoice]}                     [Returning the random choice chosen by the computer]
*/

/** This function will return a random choice chosen by the computer. */
function computerHand() {
    // initial variable setup of the 3 choices available to the computer
    var possibleChoice = ["rock", "paper", "scissors"];
    // Initial random optionality created using Math functions floor and random
    var randomChoice = Math.floor(Math.random() *3);
    // return the choice chosen by the computer
    return possibleChoice[randomChoice];
}