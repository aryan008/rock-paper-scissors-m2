function play(userHand) {
    var cpu = computerHand();    
        
    switch(userHand + "-" + cpu) {
        case "rock-scissors":
        case "scissors-paper":
        case "paper-rock":
            win(userHand, cpu);
            break;
        case "rock-paper":
        case "scissors-rock":
        case "paper-scissors":
            lose(userHand, cpu);
            break;
        case "rock-rock":
        case "scissors-scissors":
        case "paper-paper":
            draw(userHand, cpu);
            break;
    }
}

function main() {
    $("#rockHand").on("click", function () {
        play("rock");
    });

    $("#paperHand").on("click", function () {
        play("paper");
    });

    $("#scissorsHand").on("click", function () {
        play("scissors");
    });
}

main();