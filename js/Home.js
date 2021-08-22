//input fumction
function getInput(InputID) {
    const InputValue = document.getElementById(InputID);

    const InputFieldtext = InputValue.value;
    const Input = parseFloat(InputFieldtext);
    InputValue.value = '';
    return Input;

}

//Show function in display
function ShowAmount(TotalAmount, amount) {
    const totalamount = document.getElementById(TotalAmount);
    const PreviousTotaltext = totalamount.innerText;
    const PreviousTotal = parseFloat(PreviousTotaltext);
    const Totaltaka = PreviousTotal + amount;
    totalamount.innerText = Totaltaka;

}

//updatebalance function
function UpdateBalance(amount, isAdd) {
    const balance = document.getElementById('balance-total');
    const PreviousBalancetext = balance.innerText;
    const PreviousBalance = parseFloat(PreviousBalancetext);
    if (isAdd == true) {
        const Updatebalance = PreviousBalance - amount
        balance.innerText = Updatebalance;
    }
    else {
        const Updatebalance = PreviousBalance + amount
        balance.innerText = Updatebalance;
    }

}





//deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    const amount = getInput('deposit-amount');
    if (amount > 0) {
        ShowAmount('deposit-total', amount);
        UpdateBalance(amount);
    }

})
//withdraw

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const amount = getInput('withdraw-amount');
    if (amount > 0) {
        ShowAmount('withdraw-total', amount);
        UpdateBalance(amount, true);
    }
})