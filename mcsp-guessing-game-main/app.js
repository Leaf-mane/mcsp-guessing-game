/* This is a Noah and Sergio production. Buckle up baby.*/ 
const playerData = {};
function newGame(){
        let minNumber = 1
        let maxNumber = 50
        let number = Math.round((Math.random() * (maxNumber - minNumber))) + minNumber;
        let attempts = 0;
        //empty array for previous guess storage
        const failedGuesses = [];
        //username prompt
        const username = prompt("Please enter username:")
    if (playAgain = true) {
        game();
    }
    function game(){
        do {
            //game begin prompt
            const userGuess = prompt("Guess the number between 1 and 50")
            //converts the user's guess number into an integer
            const userGuessNum = parseInt(userGuess);
            //win condition
            if(userGuessNum === number) {
                failedGuesses.push(userGuessNum);
                const guessesList = failedGuesses.join(', ');
               // playerData.push(playerData[username] = guessesList.length) 
                //checks if a player has played before
                if (playerData.hasOwnProperty(username)) {
                    const previousAttempts = playerData[username].attempts
                    if(failedGuesses.length < previousAttempts) {
                        alert(`Congrats ${username} You guessed the correct number in ${failedGuesses.length} guesses and beat your personal record of ${previousAttempts}`)
                    } else if(failedGuesses.length = previousAttempts){
                        alert(`Congrats ${username} You guessed the correct number in ${failedGuesses.length} guesses again!`)
                    } else {
                        alert(`Congrats ${username}! You guessed the correct number and beat your personal record!`);
                    }
                    // new user, no leaderboard info
                } else { 
                   // alert(`Congrats, ${username}! You guessed the correct number in ${failedGuesses.length}!`)
                    playerData[username] = {attempts: failedGuesses.length };
                }
                alert(`Congrats ${username}, You guessed the correct number in ${failedGuesses.length} guesses. Previous attempts: ${guessesList}.`)
                //ask user to play again after VICTORY
                const playAgain = confirm("Would you like to play again?") 
                if(playAgain) {
                    newGame()
                } else { 
                    let playAgain = false;
                    alert("Thank you for playing")
                    break;
                }
            } else if(userGuessNum > number) {
                failedGuesses.push(userGuessNum); 
                let tooHigh = confirm(`I am sorry, ${username}. You\'ve guessed too high. Care to guess again?`)
                if(tooHigh) {
                    game()
                } else {
                    alert("THE ONLY WINNING MOVE IS NOT TO PLAY.")
                }
            } else {
                failedGuesses.push(userGuessNum);
                let tooLow = confirm(`I am sorry, ${username}. You\'ve guessed too low. Care to guess again?`)
                if(tooLow) {
                    game()
                } else {
                    alert(`THE ONLY WINNING MOVE IS NOT TO PLAY.`)
                    break;
                }
            }
        } while (playAgain === true);
    }   
}

