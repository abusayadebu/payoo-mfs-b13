// catch the cashOut section
const cashOutSection = document.getElementById("cash-out-section")
const addMoneySection = document.getElementById("add-money-section")

const cashOutMainBtn = document.getElementById("cashout-main-btn")
const addMoneyMainBtn = document.getElementById("addmoney-main-btn")
const logOutBtn = document.getElementById("log-out-btn")


// click and show cashout section
cashOutMainBtn.addEventListener("click", function(){
    addMoneyMainBtn.classList.remove("bg-blue-600")
    cashOutMainBtn.classList.add("bg-blue-600")
    addMoneySection.classList.add("hidden")
    cashOutSection.classList.remove("hidden")
})

// // click and show add money section
addMoneyMainBtn.addEventListener("click", function(){
    cashOutMainBtn.classList.remove("bg-blue-600")
    addMoneyMainBtn.classList.add("bg-blue-600")
    addMoneySection.classList.remove("hidden")
    cashOutSection.classList.add("hidden")
})


// click log out and send to the home page
logOutBtn.addEventListener("click", function(){
    window.location.href = '../index.html';
})