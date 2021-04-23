function win(userHand, cpu) {
    // Win/lose/draw hand text emoji source: https://www.w3schools.com/charsets/ref_emoji_smileys.asp
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

function lose(userHand, cpu) {
    // Win/lose/draw hand text emoji source: https://www.w3schools.com/charsets/ref_emoji_smileys.asp
    $("#result-text-paragraph").html(`<h4>You lost :( You chose ${userHand} but the computer chose ${cpu}, hard luck!<span class = "result-emoji">&#128549;</span></h4>`
    );
    incrementLoseScore();
    if (userHand === "rock") {
        $("#rockHand").addClass("red-click-lose");
        setTimeout(function(){
            $("#rockHand").removeClass("red-click-lose");
        }, 500);
    } else if (userHand === "paper") {
        $("#paperHand").addClass("red-click-lose");
        setTimeout(function(){
            $("#paperHand").removeClass("red-click-lose");
        }, 500);
    } else if (userHand === "scissors") {
        $("#scissorsHand").addClass("red-click-lose");
        setTimeout(function(){
            $("#scissorsHand").removeClass("red-click-lose");
        }, 500);
    }
}

function draw(userHand, cpu) {
    // Win/lose/draw hand text emoji source: https://www.w3schools.com/charsets/ref_emoji_smileys.asp
    $("#result-text-paragraph").html(`<h4>It's a draw! Both you and the computer chose ${cpu}!<span class = "result-emoji">&#128533;</span></h4>`
    );
    
    $("#player-score-text").addClass("yellow-flash");
    $("#player-score").addClass("yellow-flash");
    setTimeout(function(){
        $("#player-score-text").removeClass("yellow-flash");
        $("#player-score").removeClass("yellow-flash");
    }, 500);

    $("#cpu-score-text").addClass("yellow-flash");
    $("#cpu-score").addClass("yellow-flash");
    setTimeout(function(){
        $("#cpu-score-text").removeClass("yellow-flash");
        $("#cpu-score").removeClass("yellow-flash");
    }, 500);

    $("#rockHand").addClass("yellow-click-draw");
    $("#paperHand").addClass("yellow-click-draw");
    $("#scissorsHand").addClass("yellow-click-draw");
    setTimeout(function(){
        $("#rockHand").removeClass("yellow-click-draw");
        $("#paperHand").removeClass("yellow-click-draw");
        $("#scissorsHand").removeClass("yellow-click-draw");
    }, 500);

}