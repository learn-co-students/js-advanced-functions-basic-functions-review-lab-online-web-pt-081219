function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(decor="*") {
    return function (adjective="special") {
        return `You are ${decor}${adjective}${decor}!`
    }
}

let Calculator = {
    add: (a,b) => {return a + b},
    subtract: (a,b) => {return a - b},
    multiply: (a,b) => {return a * b},
    divide: (a,b) => {return a / b}
}

function actionApplyer(startingInt, arrayOfFunctions){
    let num = startingInt
    for (let i = 0; i < arrayOfFunctions.length; i++){
        num = arrayOfFunctions[i](num)
    };
    return num
}