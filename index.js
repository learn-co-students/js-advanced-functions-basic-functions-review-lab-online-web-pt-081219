// Your code here
function saturdayFun(action='roller-skate'){
    return `This Saturday, I want to ${action}!`
}

function mondayWork(string='go to the office'){
    return `This Monday, I will ${string}.`
}
function wrapAdjective(description='*'){
    return function newFunc(string='special'){
        return `You are ${description}${string}${description}!`
    }
}
let Calculator = {}
    Calculator.add = function(a, b){
        return a + b;
    }
    Calculator.subtract = function(a, b){
        return a - b;
    }
    Calculator.multiply = function(a, b){
        return a * b;
    }
    Calculator.divide = function(a, b){
        return a / b;
    }
function actionApplyer(start, array){
    let number = start
    for (let i = 0; i < array.length; i++){
         number= array[i](number)
    };
    return number
}
