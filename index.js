
let firstCard = 10;
let secondCard = 2;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el") <--another way to do queryselector
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Your Hand: " + cards[0] + " - " + cards[1]
    sumEl.textContent = "Sum: " + sum
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

function newCard() {
    let anotherCard = 8
    sum += anotherCard
    cards.push(anotherCard)
    
    renderGame()
}