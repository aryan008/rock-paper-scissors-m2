$("#btn--main--menu").click(function() {
    $("#introduction-div").delay(500).fadeIn(2000);
    $("#game--count--choice--div").delay(500).fadeIn(2000);
    $("#picture-div").hide();
    $("#play-div").delay(100).fadeOut(500);
    $("#div--btn--play--heading").hide();
    $("#history-div").remove();
});