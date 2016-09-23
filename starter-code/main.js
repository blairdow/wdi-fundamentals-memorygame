console.log("JS file is connected to HTML! Woo!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* if(cardTwo === cardFour) {
    alert("You found a match!");
}
else if(cardTwo !== cardFour) {
    alert("Sorry, try again");
}; */

var gameBoard = document.getElementById('game-board');
function createCards() {
    for(var i=0; i<4; i++) {
      var newCardDiv = document.createElement('div');
      newCardDiv.className = 'card';
      gameBoard.appendChild(newCardDiv);
    };  
};

createCards();

