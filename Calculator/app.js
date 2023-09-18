function addToDisplay(value){
    var display = document.getElementById("display");
    var str = display.value;
    var newInput = value;
    var lastNum = str[str.length -1];
    var arr = ["+", "-", "*", "/"];

    if (arr.indexOf(lastNum) !== -1 && arr.indexOf(newInput) !== -1){
        str = str.slice(0,-1) + newInput;
    }
    else {
        str += newInput;
    }

    display.value = str;
}

function clearDisplay(){
    var display = document.getElementById("display");
    display.value = "";
}


function calculate(){
    var display = document.getElementById("display");
    var result = eval(display.value);
    
    display.value = result;
}