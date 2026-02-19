// common functions are here

// to get inputfield value by id
function getInputFieldValuebyId(id){
    const inputValue = document.getElementById(id).value;
    const makeNumber = parseInt(inputValue)
    return makeNumber;
}

// to get the text value by Id
function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseInt(textValue)
    return textValueNumber;
}
