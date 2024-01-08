let namee = document.getElementById("name");
namee.textContent = prompt("What is your name");

let moneyAmount = document.getElementById('money');
let btn = document.getElementById("wirth");
let btn1 = document.getElementById("dep");

let amount = 0;

btn1.addEventListener("click", function () {
    let dep = prompt("How much money do you want to deposit");
    let amount1 = amount + Number(dep);

    let depo = confirm("Do you want to deposit?");
    if (depo === true) {
        amount = amount1;
        moneyAmount.textContent = amount1;
    } else {
        moneyAmount.textContent = amount;
    }
});

btn.addEventListener("click", function () {
    let wirth = prompt("How much money do you want to withdraw");
    let s = amount - Number(wirth);

    if (s >= 0) {
        alert("Withdrawal successful");
        amount = s;
        moneyAmount.textContent = amount;
    } else {
        alert("Insufficient funds");
        moneyAmount.textContent = amount;
    }
});