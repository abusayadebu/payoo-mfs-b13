// click the btn
const cashOutBtn = document.getElementById("cashout-btn").addEventListener("click", function(){
    console.log("cashout btn clciked");

    // get the Agent number
    const agentNumber = document.getElementById("agent-number").value;
    const cashOutAmount = getInputFieldValuebyId("cash-out-amount")
    const pinNumber = getInputFieldValuebyId("cashout-pin")
    console.log(agentNumber, cashOutAmount, pinNumber);

    // get the main balance
    let mainBalance = getTextValueById("main-balance")
    console.log(mainBalance);


    // ----------validation------------

        // empty or invalid input check
        if (
        isNaN(cashOutAmount) ||
        cashOutAmount <= 0 ||
        isNaN(pinNumber) ||
        agentNumber === ""
        ){
        alert("Please enter valid input values");
        return;
        }

    // credential check
    if (pinNumber !== 1234 || agentNumber !== "1234567890") {
    alert("Wrong PIN or Agent Number");
    return;
    }

    // balance check
    if (cashOutAmount > mainBalance) {
    alert("Insufficient balance");
    return;
    }
    
        // make total balance 
    const remainingBalance = mainBalance - cashOutAmount;
    console.log(remainingBalance);
    document.getElementById("main-balance").innerText = remainingBalance; 
    
})