const RandomNumber = (parseInt(Math.random() * 100 + 1));

const Submit = document.querySelector("#subt")
const UserInput = document.querySelector("#guessField")
const GuessSlot = document.querySelector(".guesses")
const Remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const StartOver = document.querySelector(".resultParas")

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
   Submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(UserInput.value)
    validateGuess(guess)
    
   })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if(guess < 1){
        alert("Please enter a number greater than 1")
    }else if(guess > 100){
        alert("Please enter a number less than 100")
    }else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number is ${RandomNumber}`);
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
    
}


function checkGuess(guess){
    if(guess === RandomNumber){
        displayMessage(`you guessed it right`);
        endGame()
    }else if(guess < RandomNumber){
        displayMessage(`number is too low`);
    }else if(guess > RandomNumber){
        displayMessage(`number is too high`);
    }

}

function displayGuess(guess){
UserInput.value = ''
GuessSlot.innerHTML += `${guess} `;
numGuess++;
Remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

}

function endGame(){
    UserInput.value = '';
    UserInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">start new game</h2>`;
    StartOver.appendChild(p);
    playGame = false;
    newGame()

}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click', function(e){
        RandomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess= []
        numGuess = 1
        GuessSlot.innerHTML = '';
        Remaining.innerHTML = `${11 - numGuess}`
        UserInput.removeAttribute('disabled')
        StartOver.removeChild(p)
        playGame = true;
    })

}