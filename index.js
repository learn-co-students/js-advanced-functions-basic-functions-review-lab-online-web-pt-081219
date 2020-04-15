// Your code here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`;
};

function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(specialChar = '*', msg = "You are") {
    return function(adjective = "special") {
        return `${msg} ${specialChar}${adjective}${specialChar}!`
    }
}

let Calculator = {
    'add': function add(num1, num2){
        return num1 + num2
    },
    'subtract': function subtract(num1, num2){
        return num1 - num2
    },
    'multiply': function multiply(num1, num2){
        return num1 * num2
    },
    'divide': function divide(num1, num2){
        return num1 / num2
    }
}

function actionApplyer(startingInteger, functionArray){
    if (functionArray.length === 0) {
        return startingInteger
    } else {
        let a = functionArray[0](startingInteger)
        let b = functionArray[1](a)
        let c = functionArray[2](b)
        return c
    };

}