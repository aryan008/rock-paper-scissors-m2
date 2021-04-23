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