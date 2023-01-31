// *** Global Variable
const totalscore = { playerscore: 0, computerscore: 0 }

const playerscoreDiv = document.getElementById('player-score')
const handsDiv = document.getElementById('hands')
const resultDiv = document.getElementById('result')

const endGameDiv = document.getElementById('endGameButton')
const resultContainerDiv = document.querySelector(".resultContainer")



// *** Comparison
// This will compare them and return the score
function Comparison(PlayerChoice, ComputerChoice) {
    let score = 0

    // These are the where match is draw
    if (PlayerChoice === ComputerChoice) {
        score = 0
        resultDiv.innerText = "It's a tie";
    }


    // These are the conditions where Player wins
    else if (PlayerChoice === 'Rock' && ComputerChoice === 'Scissors') {
        score = 1
        resultDiv.innerText = "You Win";
    }

    else if (PlayerChoice === 'Paper' && ComputerChoice === 'Rock') {
        score = 1
        resultDiv.innerText = "You Win";
    }

    else if (PlayerChoice === 'Scissors' && ComputerChoice === 'Paper') {
        score = 1
        resultDiv.innerText = "You Win";
    }


    // These are the conditions where Player loose and computer wins
    else {
        score = -1
        resultDiv.innerText = "You Loose";
    }

    return score
}



// *** ComputerChoice
// It will randomly select the computerchoice
function ComputerChoice() {
    const Choices = ['Rock', 'Paper', 'Scissors']
    const randomChoices = Math.floor(Math.random() * Choices.length)
    return Choices[randomChoices]
}





// *** PlayerChoice
// The user can select his choice after clicking on btns
function PlayerChoice() {
    const rpsButtons = document.querySelectorAll('.rpsButton')

    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => {
            afterOnclickRPS(rpsButton.value)
            resultContainerDiv.style.display = 'block'
        }
    })
}





// *** AfterOnclickRPS
// As the name suggest, after clicking the btns, it will show the 'computerchoice' and the 'userchoice'
function afterOnclickRPS(userchoice) {
    console.log({ userchoice })

    const computerchoice = ComputerChoice()
    console.log({ computerchoice })

    const score = Comparison(userchoice, computerchoice)
    console.log({ score })

    totalscore['playerscore'] += score
    totalscore['computerscore'] -= score

    console.log(totalscore)

    playerscoreDiv.innerText = `👱‍♂️${totalscore['playerscore']}  ${totalscore['computerscore']}🤖 `
    handsDiv.innerText = `${userchoice}👱‍♂️ VS 🤖${computerchoice} `


    endGameButton.onclick = () => endGame()
}





// *** EndgameFunction
// It will reset the Game 
function endGame() {
    totalscore['playerscore'] = 0
    totalscore['computerscore'] = 0

    playerscoreDiv.innerText = ''
    handsDiv.innerText = ''
    resultDiv.innerText = ''
    resultContainerDiv.style.display = 'none'
}




// *** MainFunction
// This will start the Game
PlayerChoice()