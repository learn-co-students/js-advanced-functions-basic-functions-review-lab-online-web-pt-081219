// Your code here
function saturdayFun(thing = "roller-skate"){
    return `This Saturday, I want to ${thing}!`;
}

function mondayWork(thing = "go to the office"){
    return `This Monday, I will ${thing}.`;
}

function wrapAdjective(wrap = "*"){
    return function(name = "special"){
        return `You are ${wrap}${name}${wrap}!`;
    }
}

let Calculator = {
    add: function(num1, num2){
        return num1 + num2;
    },
    subtract: function(num1, num2){
        return num1 - num2;
    },
    multiply: function(num1, num2){
        return num1 * num2;
    },
    divide: function(num1, num2){
        return num1 / num2;
    }
}

function actionApplyer(start, functions){
    if (functions.length === 0){
        return start;
    }else{
        let index = 0;
        for (index = 0; index < functions.length; index++) { 
            start = functions[index](start);
        } 
        return start;
    }
}