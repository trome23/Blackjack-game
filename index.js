
let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard + 4;
let hasBlackJack = false
let isAlive = true

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if(sum === 21) {
    console.log("Oh yeah! You got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}

console.log(isAlive)