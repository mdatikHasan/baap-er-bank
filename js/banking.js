document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    const deposite = document.getElementById('deposite');
    const balance = document.getElementById('balance');
    

    const depositeInnerText = deposite.innerText;
    const depositeInputValue = depositeInput.value;
    const balanceInnerText = balance.innerText;
    
    const depositeValueNumber = parseInt(depositeInputValue);
    const depositeInnerNumber = parseInt(depositeInnerText);
    const balanceInnerNumber = parseInt(balanceInnerText)

    // for deposite 
    const depositeTotal = depositeValueNumber + depositeInnerNumber;

    //for balance
    const balanceTotal = balanceInnerNumber + depositeValueNumber;
    
    balance.innerText = balanceTotal;
    deposite.innerText = depositeTotal;

    console.log(balanceInnerNumber);
    depositeInput.value = ' '

});

document.getElementById('withdraw-button').addEventListener('click', function(){
    const depositeInput = document.getElementById('deposite-input');
    const withdrawAmmount = document.getElementById('withdraw');
    const balance = document.getElementById('balance');


    const depositeInputValue = depositeInput.value;
    const withdrawAmmountInnerText = withdrawAmmount.innerText
    const balanceInnerText = balance.innerText;

    const depositeValueNumber = parseInt(depositeInputValue);
    const withdrawAmmountInnerTextNumber = parseInt(withdrawAmmountInnerText);
    const balanceInnerNumber = parseInt(balanceInnerText)

    const withdrawTotal = depositeValueNumber + withdrawAmmountInnerTextNumber;
    const restBalance = balanceInnerNumber - depositeValueNumber;

    withdrawAmmount.innerText = withdrawTotal;
    balance.innerText = restBalance;

    depositeInput.value = ' '
    console.log(balanceInnerNumber);
})