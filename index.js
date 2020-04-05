function saturdayFun(activity = "roller-skate") {
  let results = `This Saturday, I want to ${activity}!`
  return results
}

function mondayWork(activity = "go to the office") {
  let results = `This Monday, I will ${activity}.`
  return results
}

function wrapAdjective(style = "*") {
  return (adjective = "special") => {
    return `You are ${style}${adjective}${style}!`
  }
}

const Calculator = {
  add: (a,b) => {
    return a + b
  },
  
  subtract: (a,b) => {
    return a - b
  },
  
  multiply: (a,b) => {
    return a * b
  },
  
  divide: (a,b) => {
    return a / b
  }
}



function actionApplyer(startInt, arrayofFunctions) {
  let a = startInt
  for (let i = 0; i < arrayofFunctions.length; i++) {
    a = arrayofFunctions[i](a)
  }
  return a
}