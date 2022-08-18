
document.getElementById('with-button').addEventListener('click', function () {

    const newWithdrawAmountElement = document.getElementById('withdraw-field');

    const newWithdrawAmountString = newWithdrawAmountElement.value;

    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    newWithdrawAmountElement.value = '';


    const previousTotalWithdrawElement = document.getElementById('withdraw-balance');

    const previousTotalWithdrawString = previousTotalWithdrawElement.innerText;

    const previousWithdrawTotal = parseFloat(previousTotalWithdrawString);

    const currentTotalWithdraw = previousWithdrawTotal + newWithdrawAmount;

    previousTotalWithdrawElement.innerText = currentTotalWithdraw;

    // changing the balance amount

    const previousTotalBalanceElement = document.getElementById('total-balance');

    const previousTotalBalanceString = previousTotalBalanceElement.innerText;

    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    // Add newWithdrawAmount  of withdraw into previous balance

    const currentTotalBalance = previousTotalBalance - newWithdrawAmount;

    previousTotalBalanceElement.innerText = currentTotalBalance;





})