// Your code here
// Implement a function called saturdayFun. It should return a String like "This Saturday, I want to ....!" Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "roller-skate". Use the learn program to verify you've gotten a working implementation. Come back here once you've gotten just this set of tests passing.
function saturdayFun(str = "roller-skate") {
    return "This Saturday, I want to " + str + "!"
}

// Implement a function called mondayWork. It should return a String like "This Monday, I will ... ." Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "go to the office". Use the learn program to verify you've gotten a working implementation. Come back here once you've gotten just this set of tests passing.
function mondayWork(str = 'go to the office') { 
    return "This Monday, I will " + str + ".";
}

// Implement a function called wrapAdjective.
// take a single parameter that should default to "special". Name it however you wish.
function wrapAdjective(flair = "*") {
    // It should return a function
    // This "inner" function should take as parameter a String that will be used to create visual flair
    return function(str = "special") {
        // It should return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
        return "You are " + flair + str + flair + "!"
    }
}

let Calculator = {
    add: function add(num1, num2) {
        return num1 + num2;
    }, 
    subtract: function subtract(num1, num2) {
        return num1 - num2;
    },
    multiply: function multiply(num1, num2) {
        return num1 * num2;
    }, 
    divide: function divide(num1, num2) {
        return num1 / num2; 
    }
}

function actionApplyer(n, arr) {
    if (arr.length == 0) {
        return n;
    }
    else {
        let answer = n;
        arr.forEach(element => {
            answer = element(answer);
        });
        return answer;
    }
}