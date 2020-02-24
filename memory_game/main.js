
/**console.log("User flipped " + cardTow);
console.log("User flipped " + cardThree);**/

const cards = ["queen", "queen", "king","King"];
	const cardInPlay = [];

	/**const cardOne = cards[0];
	cardInPlay.push(cardOne);
	console.log("User flipped queen");

	const cardTow = cards[2];
	cardInPlay.push(cardTow);
	console.log("User flipped King");

	if (cardInPlay.length === 2) {
		alert("Yes it is tow card in array");
	}
	else{
		alert("Sorry");
		}
		if (cardInPlay === cardOne && cardInPlay === cardTow) {
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again.");
		}**/

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

	checkForMatch()
}