
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]
const suits = ["A", "B", "C", "D", "E", 'F', 'G', 'H', 'I', 'J']
const deck = []
let ship = ["none"]
let inShot = ["none"]
let player1Card = null
let player2Card = null
let cardsInPlay = []

const buildDeck = function() {    
    for (let i = 0; i < values.length; i++) {
      for (let n = 0; n < suits.length; n++)
      for (let y = 0; y < ship.length; y++)
      for (let x = 0; x < inShot.length; x++) {
          deck.push({value: values[i], suit: suits[n], ship: ship[y], inShot: inShot[x], })
      }      
    }      
  }  

  buildDeck();
  console.log(deck);

  // Hint: You will be building a `deck` using `values` and `suits`. This may involve a loop within a loop...
  // What is the best data structure to hold the following: 2/Aces, 10/Hearts, Jack/Diamonds, etc.

/*

  const dealCardsToPlayers = function() {
    let a = ((Math.floor(Math.random() * 53))-1);
    let b = ((Math.floor(Math.random() * 53))-1);
    let player1Card = deck.splice(a, 1);
    cardsInPlay.push(player1Card); 
    let player2Card = deck.splice(b, 1);
    cardsInPlay.push(player2Card);
    return cardsInPlay;
  }

  // Hint: You will need a random card from the deck. Be sure to remove the card that has been assigned to a player...   math.random()
 
const announceCards = function() {
  console.log('Player 1 is showing the ' + cardsInPlay[0][0].value + ' of ' + cardsInPlay[0][0].suit);
  console.log('Player 2 is showing the ' + cardsInPlay[1][0].value + ' of ' + cardsInPlay[1][0].suit);
}



const cardToRank = function(card) {
    return values.indexOf(card) + 2;
}


const announceWinner = function() {
    if (cardToRank(cardsInPlay[0][0].value) > cardToRank(cardsInPlay[1][0].value)) {
        console.log("Player 1 wins!");
    } else if (cardToRank(cardsInPlay[0][0].value) < cardToRank(cardsInPlay[1][0].value)) {
        console.log("Player 2 wins!");
    } else {
      console.log("It's a tie!");
    }
}


const returnCardsToDeck = function() {
    deck.push(cardsInPlay[0][0]);
    deck.push(cardsInPlay[1][0]);
}

const playGame = function() {
  dealCardsToPlayers();
  announceCards();
  announceWinner();
  returnCardsToDeck();
}

buildDeck()
playGame()


*/


