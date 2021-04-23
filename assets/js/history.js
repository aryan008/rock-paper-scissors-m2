$("#btn--read--more").click(function() {
    $("#history-div").html(`
    <p id = "history-text">Rock paper scissors is a hand game usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a fist with the index finger and middle finger extended, forming a V).
    <br>
    A simultaneous, zero-sum game, it has only two possible outcomes: a draw, or a win for one player and a loss for the other.
    <br>
    Rock will beat Scissors.
    <br>
    Scissors will beat Paper.
    <br>
    Paper will beat Rock.
    <br>
    Rock paper scissors is often used as a fair choosing method between two people, similar to coin flipping, drawing straws, or throwing dice in order to settle a dispute or make an unbiased group decision. Unlike truly random selection methods, however, rock paper scissors can be played with a degree of skill by recognizing and exploiting non-random behavior in opponents.
    <br>
    Source: <a class = "href-link" href = "https://en.wikipedia.org/wiki/Rock_paper_scissors" target = "_blank">Wikipedia</a></p>
    `);
});

$("#btn--read--less").click(function() {
    $("#history-text").remove();
});