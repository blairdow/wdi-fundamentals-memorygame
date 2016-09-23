console.log("JS file is connected to HTML! Woo!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

/* if(cardTwo === cardFour) {
    alert("You found a match!");
}
else if(cardTwo !== cardFour) {
    alert("Sorry, try again");
}; */

var gameBoard = document.getElementById('game-board');
function createCards() {
    for(var i=0; i<cards.length; i++) {
        var newCardDiv = document.createElement('div');
        newCardDiv.className = 'card';
        
        newCardDiv.setAttribute('data-card', cards[i]);
        newCardDiv.addEventListener('click', isTwoCards);
        
        gameBoard.appendChild(newCardDiv);
    };  
};

createCards();

function isTwoCards() {
    cardsInPlay.push(this.getAttribute('data-card'));
    console.log(this.getAttribute('data-card'));
    
    if(this.getAttribute('data-card')==='king') {
        this.innerHTML = "<img src='knight-1598216_640.png'>";
    }
    else {
        this.innerHTML = "<img src='knight-1598250_640.png'>";
    };
    
    if(cardsInPlay.length ===2) {
        isMatch(cardsInPlay);
        cardsInPlay = [];
        this.innerHTML = "";
    }
    /* on alert - clear innerHTML */
    function clearImg(){
        cardsInPlay.innerHTML = "";
    }
    
};


/*why does it work with just [0] and [1]? -- because it is the two cardsInPlay */
function isMatch(cards) {
    if(cards[0] === cards[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    };
    
};

