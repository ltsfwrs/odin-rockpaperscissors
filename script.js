function computerPlay() {
    let randomNumber = Math.floor(Math.random() * (4 - 1) + 1)
    if (randomNumber === 1) {
        return "Rock"
    }
    else if (randomNumber === 2) {
        return "Paper"
    }
    else if (randomNumber === 3) {
        return "Scissors"
    }
}



function playRound(playerSelection, computerSelection) {
    let message = ""
    let outcome = ""
    if (playerSelection === computerSelection) {
        message = "Tie! Player and Computer both chose " + playerSelection
        outcome = "tie" 
        return [message, outcome]
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        message = "Player loses with Rock against Paper!"
        outcome = "lost"
        return [message, outcome]
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        message = "Player wins with Rock against Scissors!"
        outcome = "won"
        return [message, outcome]
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        message = "Player loses with Paper against Scissors!"
        outcome = "lost"
        return [message, outcome]
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        message = "Player wins with Paper against Rock!"
        outcome = "won"
        return [message, outcome]
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        message = "Player loses with Scissors against Rock!"
        outcome = "lost"
        return [message, outcome]
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        message = "Player wins Scissors against Paper!"
        outcome = "won"
        return [message, outcome]
    }
}
const resultDiv = document.querySelector('#result')
const matchResultDiv = document.querySelector('#match-result')
const runningScoreDiv = document.querySelector('#running-score')

const buttons = document.querySelectorAll('button')
let roundsPlayed = 0
let gamesWonByPlayer = 0
let gamesWonByComputer = 0
let gameResult = ""
let winningMessage = false

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        roundsPlayed++
        if (winningMessage === true) {
            matchResultDiv.textContent = ""
        }
        gameResult = playRound(button.id, computerPlay())
        resultDiv.textContent = gameResult[0]
        playerResult = gameResult[1]

        if (playerResult === "won") {
            gamesWonByPlayer++
            resultDiv.style.color = "green"
        }
        else if (playerResult === "lost") {
            gamesWonByComputer++
            resultDiv.style.color = "red"
        }
        else if (playerResult === "tie") {
            resultDiv.style.color = "black"
        }
        runningScoreDiv.textContent = "Player: " + gamesWonByPlayer + " Computer: " + gamesWonByComputer

        if (roundsPlayed === 5) {
            declareWinner()
            roundsPlayed = 0
        }
     })
})

function declareWinner() {
    if (gamesWonByPlayer > gamesWonByComputer) {
        matchResultDiv.textContent = "Player wins the match!"
        matchResultDiv.style.color = "green"
    }
    else if (gamesWonByPlayer === gamesWonByComputer) {
        matchResultDiv.textContent = "The match is a draw!"
        matchResultDiv.style.color = "black"
    }
    else if (gamesWonByPlayer < gamesWonByComputer) {
        matchResultDiv.textContent = "Computer wins the match!"
        matchResultDiv.style.color = "red"
    }
    gamesWonByPlayer = 0
    gamesWonByComputer = 0
    gameResult = ""
    winningMessage = true
}












// Play 5 Rounds
/* function Game() {
    let gamesWonByPlayer = 0
    let gamesWonByComputer = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt()
        let gameResult = playRound(playerSelection, computerPlay())[1]
        console.log(playRound(playerSelection, computerPlay())[0])
        if (gameResult === "won") {
            gamesWonByPlayer++
        }
        else if (gameResult === "lost") {
            gamesWonByComputer++
        }
    }
    if (gamesWonByPlayer > gamesWonByComputer) {
        console.log("Player wins the match!")
    }
    else if (gamesWonByPlayer === gamesWonByComputer) {
        console.log("The match is a draw!")
    }
    else if (gamesWonByPlayer < gamesWonByComputer) {
        console.log("Computer wins the match!")
    }
}
 */
//Game();