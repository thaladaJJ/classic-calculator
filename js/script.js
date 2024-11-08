const display = document.getElementById('display')

const buttons = document.querySelectorAll('.button')

function buttonInput (event) {
    const buttonText = event.target.innerText;
    display.innerText += buttonText;
}

buttons.forEach (button => {button.addEventListener('click', buttonInput)}
                );
