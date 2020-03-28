// Your code here
function saturdayFun(string="roller-skate"){
    return `This Saturday, I want to ${string}!`
}

let mondayWork =  function(string = "go to the office") {
    return `This Monday, I will ${string}.`
}

let wrapAdjective = function(flair = "*"){
    return function(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }  
}

const Calculator = {
    add: function(a,b) {
        return a + b;
    }, 
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b; 
    }
}

let actionApplyer = function(startingInteger, array) {
    let start = startingInteger 

    for (let i = 0; i < array.length; i ++) {
        start = array[i](start)
    }
    return start
}