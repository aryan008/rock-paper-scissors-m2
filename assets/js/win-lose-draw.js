function win(userHand, cpu) {
    $("#result-text-paragraph").html(`
    <h4>You won! You chose ${userHand} and the computer chose ${cpu}, congratulations!<span class = "result-emoji">&#128516;</span></h4>`
    );
    incrementWinScore();
}