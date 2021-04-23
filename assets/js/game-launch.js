$(".game-number-button").click(function() {
    $("#game--count--choice--div").fadeOut(200);
    $(playButton).delay(200).fadeIn(600);
});

$("#btn--play--click").click(function() {
    $("#intro-div").fadeOut();
    $("#picture-div").delay().fadeIn().fadeOut();
    $("#play-div").delay().fadeIn();
});