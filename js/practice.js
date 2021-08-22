
//deposit withdraw and balanace
function getinputvalue(inputid) {
    const inputamount = document.getElementById(inputid);
    const entryamount = inputamount.value;
    inputamount.value = ' ';
    return entryamount;

}


document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositamount = getinputvalue('deposit-amount');

    const depositcurrent = document.getElementById('deposit-total');

    const previousdeposit = depositcurrent.innerText
    const updatedeposit = parseFloat(previousdeposit) + parseFloat(depositamount);
    depositcurrent.innerText = updatedeposit;


    //update balance
    const balancetotal = document.getElementById('balance-total');
    const previousbalance = balancetotal.innerText;
    const currentbalance = parseFloat(previousbalance) + parseFloat(depositamount);
    balancetotal.innerText = currentbalance;


})

//withdraw amount

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawAmmount = getinputvalue('withdraw-amount');

    const withdrwprevious = document.getElementById('withdraw-total');
    const withdrawprevioustext = withdrwprevious.innerText;
    const withdrwprevioustotal = parseFloat(withdrawprevioustext);


    const newwithdrawtotal = parseFloat(withdrawAmmount) + withdrwprevioustotal;
    withdrwprevious.innerText = newwithdrawtotal;
    //do withdraw minus from balance 
    const currentBlanace = document.getElementById('balance-total');
    const currentBalanacetext = currentBlanace.innerText;
    const currentBalanaceAmount = parseFloat(currentBalanacetext);

    const newcurrentbalance = currentBalanaceAmount - withdrawAmmount;
    currentBlanace.innerText = newcurrentbalance;

    //empty field



})