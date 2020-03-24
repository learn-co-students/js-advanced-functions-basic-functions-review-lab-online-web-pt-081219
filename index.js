// Your code here
const Calculator = {};
Calculator.add = function (a, b) { return a + b; },
Calculator.subtract = function (a, b) { return a - b };
Calculator.multiply = function(a, b) { return a * b };
Calculator.divide = function (a, b) { return a / b };

function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
};

mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
};

function wrapAdjective(initialize = '*', adjective) {
    if (initialize === '||') {
        return function result (adjective) {
            return `You are ||${adjective}||!`
        };
    } else {
        return function result (adjective) {
            return `You are ${initialize}${adjective}${initialize}!`
        };
    };
};

function actionApplyer(start, array) {
    let a = start
    for (let i = 0; i < array.length; i++ ) {
        a = array[i](a)
    };
    return a
};


