// Your code here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(str='*'){
    return function(param="special"){
        return `You are ${str}${param}${str}!`
    }
}

let Calculator = {}

Calculator.add = function (a, b){ return a + b };
Calculator.subtract = function (a, b){ return a - b };
Calculator.divide = function (a, b){ return a / b };
Calculator.multiply = function (a, b){ return a * b };

function actionApplyer(startingInt, arrayOfFunctions){
    let a = startingInt
    for (let i = 0; i < arrayOfFunctions.length; i++){
        a = arrayOfFunctions[i](a)
    };
    return a
}