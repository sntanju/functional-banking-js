
// function doubleIt(num){
//     const result = num * 2;
//     return result;
// }
//     const first = doubleIt(5);
//     const second = doubleIt(7);

function getInputValue(){
    const depositInput = document.getElementById('deposit-input');

    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
     //clear input field
     depositInput.value = '';
    return depositAmount;

    
}







document.getElementById('deposit-button').addEventListener('click', function(){
    // const depositInput = document.getElementById('deposit-input');

    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue();

    //console.log(depositAmount);

    //get current deposit

    const depositTotal = document.getElementById('deposit-total');

    const depositTotalText = depositTotal.innerText;

    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText =previousDepositTotal + depositAmount;

    // update balance 

    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;

    //console.log(depositTotalText);


    //clear input field
    //depositInput.value = '';

})

//handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    //console.log(withdrawAmountText);

    //update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');

    const previouswithdrawTotalText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalText);

    withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;

    //update balance total after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previonusBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previonusBalanceTotal - withdrawAmount; 


    //clear withdraw input field
    withdrawInput.value = '';
})