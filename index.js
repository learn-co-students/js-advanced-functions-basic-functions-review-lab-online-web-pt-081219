// Your code here

razzle() 

function razzle() {
    console.log("You've been razzled!")
}

function razzle(lawyer="Billy", target="'em") {
    console.log(`${lawyer} razzle-dazzles ${target}!`);
}
razzle()
razzle("Methuselah", "T'challah") 

function saturdayFun(target="roller-skate") {
    return `This Saturday, I want to ${target}!`
}; 

let mondayWork = function(target ="go to the office") {
    return `This Monday, I will ${target}.`
}; 

function wrapAdjective(symbol="*") {
    return function(param="special") {
        return `You are ${symbol}${param}${symbol}!`
    }
}; 

let Calculator= {
    add: function(a, b) {
        return a + b
    }, 
    subtract: function(a, b) {
        return a - b
    }, 
    multiply: function(a, b) {
        return a * b 
    }, 
    divide: function (a, b) {
        return a/b 
    }
}; 

function actionApplyer(startingNumber, array) {
    for(const el of array) {
        startingNumber = el(startingNumber)
    }
    return startingNumber
}