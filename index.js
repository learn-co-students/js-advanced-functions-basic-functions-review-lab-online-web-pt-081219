// Your code here
function saturdayFun(activity = "roller-skate") {
    return "This Saturday, I want to " + activity + "!";
}

function mondayWork(activity = "go to the office") {
    return "This Monday, I will " + activity + ".";
}

function wrapAdjective(warapString = "*") {
    return function(innerString = "special") {
        return `You are ${warapString}${innerString}${warapString}!`;
    }
}

let Calculator = {
    add,
    subtract,
    multiply,
    divide
}

function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b){
    return a / b
}

function actionApplyer(startingInteger, functions) {
    let start = startingInteger;
    for (const fun of functions) {
        start = fun(start);
    }
    return start;
}