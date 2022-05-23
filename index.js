// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
const messages = []; 
function writeCards(messages, event){
    for(let i = 0; i < messages.length; i++){
        messages[i] = `Thank you, ${messages[i]}, for the wonderful ${event} gift!`;
    }
    return messages;
}
function countDown(integer){
    while(integer > -1){
        console.log(integer);
        integer--;
    }
}