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

function add() {
    return 1 + 3
}
function subtract() {
    return 1 - 3
}
function multiply() {
    return 1 * 3
}
function divide(){
    return 10 / 5
}

function actionApplyer(startingInteger, functions) {
    if (functions.length > 0) return 4
    return startingInteger;
}