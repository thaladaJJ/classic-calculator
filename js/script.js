const display = document.getElementById("display")
const errorMessage = "Error!"

const initialCharLimit = 12;
const maxFontSize = 3.5;
const minFontSize = 2;

let charLimit = initialCharLimit;

function setFontSize (fontSize) {
    if (fontSize <= maxFontSize && fontSize >= minFontSize)
        display.style.fontSize = `${fontSize}rem`;
}

function adjustFontSize () {
    const fontSizeDecrement = 0.5;

    const currentLength = display.innerText.length;
    
    let currentFontSize = parseFloat (getComputedStyle (display).fontSize) / 16;

    if (currentLength > charLimit && currentFontSize > minFontSize) {
        currentFontSize -= fontSizeDecrement;
        setFontSize (currentFontSize);
        
        charLimit += charLimit / 4;
    } 
    
    else if (currentLength < initialCharLimit && currentFontSize < maxFontSize) {
        currentFontSize = maxFontSize;
        setFontSize (currentFontSize);

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
    setFontSize (maxFontSize);
}