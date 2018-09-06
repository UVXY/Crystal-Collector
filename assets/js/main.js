var random = 0;

var randButton = 0;

var totalValue = 0;
var lose;
var win;



// functions =======================================

// restart game
function startGame() {
    totalValue = 0;

    random = Math.floor(Math.random() * 110) + 19;
    $("#random-number").text(random);

    randButton = Math.floor(Math.random() * 12) + 1;

    $("#total").text(totalValue);

game();
}

function game() {
    // restart
    totalValue = 0;

    random = Math.floor(Math.random() * 110) + 19;
    $("#random-number").text(random);

    randButton = Math.floor(Math.random() * 12) + 1;

    $("#random-button").on("click", function() {
        totalValue = randButton;

        $("#total").text(totalValue);
    })
    
    
    // $(".crystalValue").on("click", function(){

    // })
    // if (parseInt(totalValue) === random) {
    //     alert("You win!");
    // }
    
};
startGame();


// four crystals displayed as buttons(maybe)
// rand number at the start of the game (19-120)
// when crystal clicked, points will be added to total score (value 1-12)
// player wins if score matches the total rand number 
// player looses if score goes above the rand number 
// game restarts when lose/win
// show number of games player wins/looses