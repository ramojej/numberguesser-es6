//game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    //validate
    if ( isNaN(guess) || guess < min || guess > max ) {
        setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
    }

    //check if won
    if ( guess === winningNum ) {
        gameOver(true, `${winningNum} is correct, you win!`);
    } else {
        //wrong num
        guessesLeft -= 1;
        if ( guessesLeft === 0 ) {
            // game over - lost
            gameOver(false, `Game over, you lost. The correct number was ${winningNum}.`);
        } else {
            // game continues - answer wrong
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

//gameover function
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    //disable input
    guessInput.disabled = true;
    //change color
    guessInput.style.borderColor = color;
    setMessage(msg, color);
}

//message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}