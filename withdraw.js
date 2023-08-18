document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawBalance = document.getElementById('withdraw.filed');
    const typeValue = withdrawBalance.value;
    const typeString = parseFloat(typeValue);
    

    const totalDolar = document.getElementById('withdraw-balance');
    const StringType = totalDolar.innerText;
    const previousTotalDolar = parseFloat(StringType);
    

    const totalWithdrawAmount = previousTotalDolar + typeString;
    totalDolar.innerText = totalWithdrawAmount;

    const blanceTotalElement = document.getElementById('withdraw-balance');
    const previousTotalValueString = blanceTotalElement.innerText;
    const PreviousTotalElement = parseFloat(previousTotalValueString);

   const newBlanceTotal = PreviousTotalElement-typeString;
   totalWithdrawAmount.innerText=newBlanceTotal;






    withdrawBalance.value ='';
})