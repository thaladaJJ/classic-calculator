const display = document.getElementById("display")
const errorMessage = "Error!"

const initialCharLimit = 12;
const maxFontSize = 3.5;

let charLimit = initialCharLimit;

function adjustFontSize () {
    const minFontSize = 2;
    const fontSizeDecrement = 0.5;

    const currentLength = display.innerText.length;
    
    let currentFontSize = parseFloat (getComputedStyle (display).fontSize) / 16;

    if (currentLength > charLimit && currentFontSize > minFontSize) {
        currentFontSize -= fontSizeDecrement;
        display.style.fontSize = `${currentFontSize}rem`;
        
        charLimit += charLimit / 4;
    } 
    
    else if (currentLength < initialCharLimit && currentFontSize < maxFontSize) {
        currentFontSize = maxFontSize;
        display.style.fontSize = `${currentFontSize}rem`;
        charLimit = initialCharLimit;
    }
}

function appendToDisplay (input) {
    if (display.innerText === errorMessage)
        clearDisplay ();

    display.innerText += input;
    adjustFontSize();
}

function calculateInput () {
    try {
        display.innerText = eval (display.innerText);
        adjustFontSize();
    } catch (error) {
        display.innerText = errorMessage;
    }
}

function clearDisplay () {
    display.innerText = "";
    display.style.fontSize = `${maxFontSize}rem`;   
}