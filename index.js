const decreaseButton = document.getElementById("btn3");
const resetButton = document.getElementById("btn");
const increaseButton = document.getElementById("btn2");
const counterDisplay = document.getElementById("label");
let coun=0;
decreaseButton.onclick = function(){
    coun--;
    counterDisplay.textContent = coun;
}

resetButton.onclick = function() {
    coun = 0;
    counterDisplay.textContent = coun;
}

increaseButton.onclick = function() {
    coun++;
    counterDisplay.textContent = coun;
}