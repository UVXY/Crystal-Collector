var random = Math.floor(Math.random() * 110) + 19;

var totalValue = 0;
var lose = 0;
var wins = 0;

// functions =======================================

// restart game
function reset() {
    totalValue = 0;

    random = Math.floor(Math.random() * 110) +19;
    $("#random-number").text(random);

    randButton1 = Math.floor(Math.random() * 12) + 1;
    randButton2 = Math.floor(Math.random() * 12) + 1;
    randButton3 = Math.floor(Math.random() * 12) + 1;
    randButton4 = Math.floor(Math.random() * 12) + 1;

    $("#total").text(totalValue);

    // game();
}

// outcome, will be the wins++ lost++
function winning(){
    alert("Winner!");
    wins++;
    $("#wins").text(wins);
    reset();
}
function losing(){
    alert("Loser!");
    lose++;
    $("#lost").text(lose);
    reset();
}

// function game(){
$("#crystal1").on("click", function () {
    totalValue = totalValue + randButton1;
    $("#total").text(totalValue);
    if (totalValue === random) {
        winning();
    }
    else if (totalValue > random) {
        losing();
    }
})
$("#crystal2").on("click", function () {
    totalValue = totalValue + randButton2;
    $("#total").text(totalValue);
    if (totalValue === random) {
        winning();
    }
    else if (totalValue > random) {
        losing();
    }
})
$("#crystal3").on("click", function () {
    totalValue = totalValue + randButton3;
    $("#total").text(totalValue);
    if (totalValue === random) {
        winning();
    }
    else if (totalValue > random) {
        losing();
    }
})
$("#crystal4").on("click", function () {
    totalValue = totalValue + randButton4;
    $("#total").text(totalValue);
    if (totalValue === random) {
        winning();
    }
    else if (totalValue > random) {
        losing();
    }
})

reset();


// four crystals displayed as buttons(maybe)
// rand number at the start of the game (19-120)
// when crystal clicked, points will be added to total score (value 1-12)
// player wins if score matches the total rand number 
// player looses if score goes above the rand number 
// game restarts when lose/win
// show number of games player wins/looses