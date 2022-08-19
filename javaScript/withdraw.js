
document.getElementById('with-button').addEventListener('click', function () {

    const newWithdrawAmountElement = document.getElementById('withdraw-field');

    const newWithdrawAmountString = newWithdrawAmountElement.value;

    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    newWithdrawAmountElement.value = '';

    //Validation Cheak

    if (isNaN(newWithdrawAmount)) {
        alert("Please give an Valid Number!!!");
        return;
    }


    const previousTotalWithdrawElement = document.getElementById('withdraw-balance');

    const previousTotalWithdrawString = previousTotalWithdrawElement.innerText;

    const previousWithdrawTotal = parseFloat(previousTotalWithdrawString);





    // step:-5 get the balance amount

    const previousTotalBalanceElement = document.getElementById('total-balance');

    const previousTotalBalanceString = previousTotalBalanceElement.innerText;

    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    //Validation Cheak
    if (newWithdrawAmount > previousTotalBalance) {
        alert("There is not enough amount to withdraw");
        return;

    }

    //step-4

    const currentTotalWithdraw = previousWithdrawTotal + newWithdrawAmount;

    previousTotalWithdrawElement.innerText = currentTotalWithdraw;

    // Add newWithdrawAmount  of withdraw into previous balance

    const currentTotalBalance = previousTotalBalance - newWithdrawAmount;

    previousTotalBalanceElement.innerText = currentTotalBalance;





})