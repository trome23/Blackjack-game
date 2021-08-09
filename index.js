
let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el") <--another way to do queryselector
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function deal() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Your Hand: " + firstCard + " - " + secondCard
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if(sum === 21) {
        message = "Oh yeah! You got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}