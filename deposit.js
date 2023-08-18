document.getElementById('btn-Deposit').addEventListener('click',function(){
    const btnDeposit = document.getElementById('input-filed');
    const newInputFiledString = btnDeposit.value;
    const newInputFiled = parseFloat(newInputFiledString);
    
    const depositTotal = document.getElementById('total-Deposit');
    const previousDepositValueString = depositTotal.innerText;
    const previousDepositValue = parseFloat(previousDepositValueString);
    depositTotal.innerText = newInputFiled;


    const totalAmount = previousDepositValue+newInputFiled;
    depositTotal.innerText = totalAmount;


    const balanceTotalTaka = document.getElementById('blance-dollar');
    const PreviousBalanceTakaString = balanceTotalTaka.innerText;
    const previousTotalTaka =parseFloat(PreviousBalanceTakaString);


    const presentBalance = previousTotalTaka + newInputFiled;
    balanceTotalTaka.innerText = presentBalance;


    btnDeposit.value ='';
})