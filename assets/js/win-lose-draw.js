function win(userHand, cpu) {
    $("#result-text-paragraph").html(`
    <h4>You won! You chose ${userHand} and the computer chose ${cpu}, congratulations!<span class = "result-emoji">&#128516;</span></h4>`
    );
    incrementWinScore();
    if (userHand === "rock") {
        $("#rockHand").addClass("green-click-win");
        setTimeout(function(){
            $("#rockHand").removeClass("green-click-win");
        }, 500);
    } else if (userHand === "paper") {
        $("#paperHand").addClass("green-click-win");
        setTimeout(function(){
            $("#paperHand").removeClass("green-click-win");
        }, 500);
    } else if (userHand === "scissors") {
        $("#scissorsHand").addClass("green-click-win");
        setTimeout(function(){
            $("#scissorsHand").removeClass("green-click-win");
        }, 500);
    }
}