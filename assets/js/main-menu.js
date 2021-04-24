/**
* @fileOverview JavaScript return to main menu Library.
* @author <a href="https://github.com/aryan008">Adam Ryan</a>
* @version 1.1.1
*/
/*jshint esversion: 6 */

/**Event handler function to perform multiple functions when the "return to main menu" button is clicked */
$("#btn--main--menu").click(function() {
    // fade the div in for 2000ms after 500ms
    $("#introduction-div").delay(500).fadeIn(2000);
    // fade the div in for 2000ms after 500ms
    $("#game--count--choice--div").delay(500).fadeIn(2000);
    // hide the div
    $("#picture-div").hide();
    // fade the div out for 500ms after 100ms
    $("#play-div").delay(100).fadeOut(500);
    // hide the div
    $("#div--btn--play--heading").hide();
    // remove the div
    $("#history-div").remove();
});