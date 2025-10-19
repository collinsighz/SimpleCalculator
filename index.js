const display = document.getElementById("display");
function appendToDisplay(input) {
    display.value += input;

}
function calculate(input) {
    display.value = eval(display.value);
}
function clearDisplay(input) {
    try {
    display.value = "";
    
}
catch(error){
    display.value - "Error";

}
}