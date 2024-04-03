let randomNumber = parseInt(Math.random() * 100 + 1)
const button = document.querySelector('#subt');
const userInput = document.querySelector('.guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')


let prevGuess  = [] ; 
let numGuesses = 1; 
let playGame = true



if (playGame){
    button.addEventListener('click', (event)=>{
        event.preventDefault();

        const guess = parseInt(userInput.value)
        console.log(guess)
        validteGuess(guess)
    })
}




const validteGuess = (guess) =>{
    if (isNaN(guess)){
        alert("enter a valid number")
    }
    else if (guess < 1 ){
        alert('enter a number > 1')
    }
    else if (guess > 100 ){
        alert('enter a number < 100')
    }
    else {
        prevGuess.push(guess);
        if (numGuesses === 11){
            dispalyGuess(guess)
            displayMsg(`game over Random number was ${randomNumber}`)
            endGame();
        }
        else{
            dispalyGuess(guess)
            checkGuess(guess)
        }
    }
}



const checkGuess = (guess) =>{
    if (guess === randomNumber){
        displayMsg(`you won`);
        endGame();
    }
    else if (guess < randomNumber){
        displayMsg(`number is too low`);
    }
    else if (guess > randomNumber){
        displayMsg(`number is too high`);
    }

}


const displayMsg = (message)=>{
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


const dispalyGuess = (guess) =>{
    userInput.value = '';
    guessSlot.innerHTML  += `${guess} `;
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`;
}

function endGame () {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<button id = "newGame">play a new Game </button>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame (){
   const newGameBtn =  document.querySelector('#newGame');
   newGameBtn.addEventListener('click', (event)=>{
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1 ; 
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true

   })
}
