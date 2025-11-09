const guessInput = document.getElementById('ip');
const guessButton = document.getElementById('btn');
const message = document.getElementById('msg');
const retry = document.getElementById('rtry-btn');
const guessesLeft = document.getElementById('left');

let secretNumber;//holding the number in the memory
let guessesLeftCount; //holding the number of guesses of user

function Game(){
    secretNumber = Math.floor(Math.random()*20)+1;
    guessesLeftCount = 4;
    guessesLeft.textContent = guessesLeftCount;
    message.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    guessButton.disabled = false;
    retry.classList.add('hidden');
}

function checkGuess(){
    const userGuess = parseInt(guessInput.value);
    if(isNaN(userGuess)||userGuess<1||userGuess>20){
        message.textContent='Please enter the number between 1 to 20🙃';
        message.style.color= 'white';
        return;
    }
    guessesLeftCount--;
    guessesLeft.textContent = guessesLeftCount;


    if(userGuess===secretNumber){
        message.textContent='Congratulations You Guessed It Right!🥳🎊';
        message.style.color='#ecd0ec';
        endgame();
        
    }
    else if(guessesLeftCount===0){
        message.textContent=`Sorry, you're out of guess.😢 The number was ${secretNumber}`;
        message.style.color='#461d3a';
        endgame();
    }
    else{
        if(userGuess>secretNumber){
            message.textContent='Too high! Try again!';
        }
        else{
            message.textContent='Too low! Try Again';
        }
    }
    guessInput.value='';
}

function endgame(){

    guessInput.disabled= true;
    guessButton.disabled=true;
    retry.classList.remove('hidden');
}
    document.addEventListener('DOMContentLoaded',Game);
    guessButton.addEventListener('click',checkGuess);
    retry.addEventListener('click',Game);


