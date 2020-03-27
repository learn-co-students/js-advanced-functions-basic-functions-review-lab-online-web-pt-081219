// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = (activity = 'go to the office') => {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(flair = '*') {
    return function(innerValue = 'special') {
        return `You are ${flair}${innerValue}${flair}!`
    }
}


// CALCULATOR
const Calculator = {
    add: calcOperators()[0],
    subtract: calcOperators()[1],
    multiply: calcOperators()[2],
    divide: calcOperators()[3]
}

function calcOperators(){
    return [
        function(num1, num2){ return num1 + num2 },
        function(num1, num2){ return num1 - num2 },
        function(num1, num2){ return num1 * num2 },
        function(num1, num2){ return num1 / num2 }
    ]
}

// ActionApplyer
function actionApplyer(starting, fnArray){
    if (fnArray.length === 0) {
        return starting;
    } else {
        let newValue = starting;

        for (const fn in fnArray) {
            newValue = fnArray[fn](newValue)
        }

        return newValue
    }
}