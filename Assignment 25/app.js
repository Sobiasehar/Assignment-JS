function butt(a){
    var input = document.getElementById('input-work');
    input.value += a;
}

function clearInput(){
    var input = document.getElementById('input-work');
    input.value = ' ';
}

function oneClear(){
    var input = document.getElementById('input-work');
    input.value = input.value.slice(0,-1)
}

function buttt(b){
    // var input = document.getElementById('input-work');
    alert("hi")
}

function calculate() {
    var result = 0;
    if (prevOperation === "+") {
        result = parseFloat(prevValue) + parseFloat(currentValue);
    } else if (prevOperation === "-") {
        result = parseFloat(prevValue) - parseFloat(currentValue);
    } else if (prevOperation === "*") {
        result = parseFloat(prevValue) * parseFloat(currentValue);
    } else if (prevOperation === "/") {
        if (parseFloat(currentValue) === 0) {
            alert("Cannot divide by zero");
            return;
        }
        result = parseFloat(prevValue) / parseFloat(currentValue);
    }
    prevValue = result;
    currentValue = "";
    prevOperation = null;
    updateDisplay();
}

function updateDisplay() {
    var input = document.getElementById("input-work");
    input.value = currentValue;
}

document.getElementById("button-1").addEventListener("click", function() { appendNumber("1"); });
document.getElementById("button-2").addEventListener("click", function() { appendNumber("2"); });
document.getElementById("button-3").addEventListener("click", function() { appendNumber("3"); });
document.getElementById("button-4").addEventListener("click", function() { appendNumber("4"); });
document.getElementById("button-5").addEventListener("click", function() { appendNumber("5"); });
document.getElementById("button-6").addEventListener("click", function() { appendNumber("6"); });
document.getElementById("button-7").addEventListener("click", function() { appendNumber("7"); });
document.getElementById("button-8").addEventListener("click", function() { appendNumber("8"); });
document.getElementById("button-9").addEventListener("click", function() { appendNumber("9"); });
document.getElementById("button-0").addEventListener("click", function() { appendNumber("0"); });
document.getElementById("button-plus").addEventListener("click", function() { setOperation("+"); });
document.getElementById("button-minus").addEventListener("click", function() { setOperation("-"); });
document.getElementById("button-multiply").addEventListener("click", function() { setOperation("*"); });
document.getElementById("button-divide").addEventListener("click", function() { setOperation("/"); });
document.getElementById("button-equal").addEventListener("click", calculate);