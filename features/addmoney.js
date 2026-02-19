// click the btn
const addMoneyBtn = document.getElementById("add-money-btn").addEventListener("click", function(){
    // get the agent number, add money amount and pin
    const agentNumber = document.getElementById("add-money-agent").value;
    const addMoneyAmount = getInputFieldValuebyId("add-money-amount")
    const pinNumber = getInputFieldValuebyId("add-money-pin")
    console.log(agentNumber, pinNumber, addMoneyAmount);

    // get the main balance 
    let mainBalance = getTextValueById("main-balance")
    console.log(mainBalance);

    //----- validation----------

    // empty or invalid input check
    if(isNaN(addMoneyAmount) || pinNumber <= 0 || isNaN(pinNumber)  || agentNumber === ""){
        alert("Please enter valid input values")
    }
    
    // credential check
    if(pinNumber !== 1234 || agentNumber !== "1234567890"){
        alert("wrong pin or agent number")
        return;
    }

    // balance check
    if(addMoneyAmount > mainBalance){
        alert("insufficient balance, try again")
    }

    // total balance
    const totalBalance = mainBalance - addMoneyAmount;
    // show the update balance in the UI
    document.getElementById("main-balance").innerText = totalBalance;

})