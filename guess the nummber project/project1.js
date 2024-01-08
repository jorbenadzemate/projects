let compnumber;
let usernumber = document.getElementById("numb");
let revealbtn = document.getElementById("reveal");
let cmp1number = document.getElementById("compnumber");
let text = document.getElementById("result");
let userpoint = document.getElementById("userpoint");
let comppoint = document.getElementById("comppoint");
let comp1point = 0;
let user1point = 0;
let reset = document.getElementById('reset');
let numreset = document.getElementById("numberreset");

revealbtn.addEventListener("click", function () {
    compnumber = Math.floor(Math.random() * 10) + 1;
    cmp1number.textContent = compnumber;

    if (parseInt(usernumber.value) === compnumber) {
        text.textContent = "You guessed the number 🎉";
        user1point++;
    } else if (usernumber.value === "") {
        text.textContent = "Enter a number first!";
    } else {
        text.textContent = "You didn't guess the number 😞";
        comp1point++;
    }

    userpoint.textContent = user1point;
    comppoint.textContent = comp1point;
});

numreset.addEventListener("click", function () {
    cmp1number.textContent = "Choose number between 1 and 10";
    usernumber.value ="";
});

reset.addEventListener("click", function () {
    comp1point = 0;
    user1point = 0;
    userpoint.textContent = 0;
    comppoint.textContent = 0;
    text.textContent = " ";
    cmp1number.textContent = "Choose number between 1 and 10";
    usernumber.value = "";
});