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
        audioHand();
        setTimeout(function(){
            play("rock");
        }, 1200);
    });

    $("#paperHand").on("click", function () {
        audioHand();
        setTimeout(function(){
            play("paper");
        }, 1200);
    });

    $("#scissorsHand").on("click", function () {
        audioHand();
        setTimeout(function(){
            play("scissors");
        }, 1200);
    });
}

main();