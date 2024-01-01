function rolldice(){
    // generating numbers
    var userNumber = Math.floor(Math.random() * 6) + 1;
    var computerNumber = Math.floor(Math.random() * 6) + 1;
    // upgrade usernum
    var  userDicen = document.getElementById("userNmber");
    userDicen.textContent = userNumber;
    // upgrading compnum
    var computerDiceElement = document.getElementById("computerNumber");
    computerDiceElement.textContent = computerNumber;
    // comparasion operations
    var resultElement = document.getElementById("result");
    if (userNumber > computerNumber) {
        resultElement.textContent = "You win! 🎉";
    } 
    else if (userNumber < computerNumber) {
        resultElement.textContent = "Computer wins! 😢";
    } 
    else {
        resultElement.textContent = "It's a tie! 🤝";
    }
}
    



