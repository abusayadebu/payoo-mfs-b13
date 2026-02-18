// click the button
const loginBtn = document.getElementById("login-btn").addEventListener("click", function(){
    // catch the number filed value
    let givenNumber = document.getElementById("number-input").value;
    
    let givenPin = document.getElementById("pin-input").value;
    console.log(givenNumber, givenPin);

    if(givenNumber === "1234567890" && givenPin == "1234"){
        alert("welcome you are logged in")
        window.location.assign("./home.html")
        }
        else{
            alert("sorry, wrong credentials")
            return;
        }
    
})