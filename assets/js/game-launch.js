$(".game-number-button").click(function() {
    $("#game--count--choice--div").fadeOut(200);
    $("#div--btn--play--heading").delay(200).fadeIn(600);
});

$("#btn--play--click").click(function() {
    $("#introduction-div").fadeOut(300);
    $("#picture-div").delay(500).fadeIn(2000).fadeOut(2000);
    $("#play-div").delay(5000).fadeIn(1000);
    resetFunc();
});