let currendDisplay = '';
const display = document.getElementById("display");


function appendValue(value) {
    currendDisplay += value;
    display.value = currendDisplay;
}


function clearDisplay() {
    currendDisplay = '';
    display.value = currendDisplay;
}

function calculateResult() {
    currendDisplay = eval(currendDisplay);
    display.value = currendDisplay;
}