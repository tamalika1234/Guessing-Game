   function calculateScore(level, attemptsLeft) {
      let multiplier = 1;
      if (level === "medium") multiplier = 2;
      if (level === "hard") multiplier = 3;
      return multiplier * attemptsLeft * 10;
    }

    function startGame(){
    const max = prompt("enter the max number ");
    if (!max || isNaN(max)) {
        alert("Invalid input!! Please enter a number");
        return;
    }


    const random = Math.floor(Math.random()* max) + 1;
    let guess = prompt("guess the number ");

    while(true){
        if(guess === "quit"){
            document.getElementById("log").textContent = "User quit the game!!";
            break;
        }
        let score=0;
        if(Number(guess)=== random){
            score++;
            document.getElementById("score").textContent = score;
            document.getElementById("log").textContent = `Congrats! you are right ! The number was ${random}`;
            confetti();
            break;
        } else if (Number(guess)<random) {
            guess = prompt("Hint: Your Number is too small!!.");
        } else {
            guess = prompt("Hint: Your Number is too large!!.");
        }
    }
}

    function resetGame() {
        location.reload();
    }