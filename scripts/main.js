/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  console.log('Given cards: ' + hand);
  for(var i = 0; i < hand.length; i++){
    if(hand[i] === 'A'){
      console.log('Found an ace. Re-ordering.');
      hand.splice(i, 1);
      hand.push('A');
      console.log(hand);
    }
  }
  var handValue = 0;
  for(var p = 0; p < hand.length; p++){
    if(hand[p] === 'K' || hand[p] === 'Q' || hand[p] === 'J'){
      handValue = handValue + 10;
      console.log('Face card found, adding 10. ' + handValue);
    }
    if(hand[p] != 'K' && hand[p] != 'Q' && hand[p] != 'J' && hand[p] != 'A'){
      handValue = handValue + parseInt(hand[p]);
      console.log('Number card found, adding. ' + handValue);
    }
    if(hand[p] === 'A'){
      if(handValue < 11){
        console.log('Ace found and hand value less than 11. Adding 11.');
        handValue = handValue + 11;
      } else {
        console.log('Ace found and hand value more than 11. Adding 1.');
        handValue = handValue + 1;
      }
    }
  }
  return handValue;
  // console.log('Total hand value: ' + handValue);
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
