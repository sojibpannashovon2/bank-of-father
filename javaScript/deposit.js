
// Step :-1 Add event lisener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {

    // step -2 get the deposit amount from deposit input field

    const depositField = document.getElementById('deposit-field');

    const newDepositAmountString = depositField.value;

    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';
    // console.log(depositValue);

    // set the total deposit from deposit text

    const previousDepositTotalElement = document.getElementById('total-deposit');

    const previousTotalDepositString = previousDepositTotalElement.innerText;

    const previousTotalDeposit = parseFloat(previousTotalDepositString);

    // Add input and deposit amount

    const currentDepositTotal = previousTotalDeposit + newDepositAmount;


    previousDepositTotalElement.innerText = currentDepositTotal;

    // changing the balance amount

    const previousTotalBalanceElement = document.getElementById('total-balance');

    const previousTotalBalanceString = previousTotalBalanceElement.innerText;

    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    // Add newDepositAmount  of deposit into previous balance

    const currentTotalBalance = previousTotalBalance + newDepositAmount;

    previousTotalBalanceElement.innerText = currentTotalBalance;

})