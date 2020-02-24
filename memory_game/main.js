
/**console.log("User flipped " + cardTow);
console.log("User flipped " + cardThree);**/

const cards = ["queen", "queen", "king","King"];
const cardsInPlay = [];


function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId){

	let cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardOne);

	let cardTow = cards[2];
	cardsInPlay.push(cardTow);
	console.log("User flipped " + cardTow);
	
	checkForMatch();
	/**if (cardsInPlay.length === 2) {
		alert("User flipped " + cardTow);
	}
	else{
		alert("Sorry");
		}
		if (cardsInPlay === cardOne && cardsInPlay === cardTow) {
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again.");
		}**/
}
