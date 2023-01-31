let elements = document.querySelectorAll('[type=button]');
let output = document.querySelector("#input");
let valueString = "";
let outputString = "";
let operator = "";
let flag = 0;
let value1 = null;
let value2 = null;

for(let i=0; i<elements.length; i++){
    elements[i].addEventListener("click", handleClick);
}

function handleClick(){
    if(event.target.value == "C"){
        output.value = "";
        valueString = "";
        outputString = "";
        operator = "";
        return;
    }
    if(event.target.value == "/" || event.target.value == "+" || event.target.value == "-" || event.target.value == "*"){
        operator = event.target.value;
        value1 = parseFloat(valueString);
        valueString = "";
        flag = 1;
    } 
    if(flag != 1){
        valueString = valueString+event.target.value;
    }
    console.log(outputString);
    outputString = outputString+event.target.value;
    output.value = outputString;
    flag = 0;
    if(event.target.value == "="){
        value2 = parseFloat(valueString);
        valueString = "";
        outputString = "";
        switch(operator){
            case "+" : 
            output.value =  parseFloat(value1) + parseFloat(value2);
            break;
            case "-" : 
            output.value =  parseFloat(value1) - parseFloat(value2);
            break;
            case "*" : 
            output.value =  parseFloat(value1) * parseFloat(value2);
            break;
            case "/" : 
            output.value =  parseFloat(value1) / parseFloat(value2);
            break;
        }
    }
}