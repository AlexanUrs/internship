function getRandomInt(min, max) {
    console.log(`Компьютер 1: Загадал число в диапазоне от ${min} до ${max}.\n`);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function binarySearch(min, max) {    
    return Math.floor((max-min)/2 + min);    
}

let min = 1;
let max = 100;
let randomNumber = getRandomInt(min, max);
let guessNumber = 0;

while (guessNumber !== randomNumber) {
  guessNumber = binarySearch(min, max);
  console.log(`${min} ${max}`);  
  console.log(`Компьютер 2: Пробую число ${guessNumber}.`); 

  if (guessNumber === randomNumber) {
    console.log("Компьютер 1: Угадал!")
  }
  else if (guessNumber > randomNumber) {
    console.log("Компьютер 1: Меньше.\n")
    max = guessNumber
  }
  else {
    console.log("Компьютер 1: Больше.\n")
    min = guessNumber
  }
}
