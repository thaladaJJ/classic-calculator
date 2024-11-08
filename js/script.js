const display = document.getElementById("display")
const errorMessage = "Error!"

function appendToDisplay (input) {
    if (display.innerText === errorMessage)
        clearDisplay ();

    display.innerText += input;
}

function calculateInput () {
    try {
        display.innerText = eval (display.innerText);
    } catch (error) {
        display.innerText = errorMessage;
    }
}

function clearDisplay () {
    display.innerText = "";
}