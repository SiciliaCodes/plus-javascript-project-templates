const add = (step) => {
    // We gave the number element an id of number so we can use that to get the element
let numberElement = document.getElementById("number");
    // We can use the innerText property to get the text inside the element  
let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
};

const subtract = (step) => {
    // We gave the number element an id of number so we can use that to get the element
let numberElement = document.getElementById("number");
    // We can use the innerText property to get the text inside the element  
let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;
};

const reset = () => {  // I've removed step parameter since we don't need it
    let numberElement = document.getElementById("number");
    numberElement.innerText = "0";  // Set the text to 0 but make sure its in "" because html only accepts string
};

function textfield() {

    document.getElementById("textfield").value = "";
}