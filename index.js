// #1 
function saturdayFun(act = "roller-skate") {
  return `This Saturday, I want to ${act}!`
}

// #2
let mondayWork = function(act = "go to the office") {
  return `This Monday, I will ${act}.`
}

// #3
function wrapAdjective(flair = "*") {
  return function(str = "special") {
    return `You are ${flair}${str}${flair}!`
  }
}

// #4 
// let Calculator = {}
// Calculator.add = function() {return 1 + 3}
// Calculator.subtract = function() {return 1 - 3}
// Calculator.multiply = function() { return 1 * 3}
// Calculator.divide = function() {return 10/5 }

//or 

const Calculator = {
  add: function(x,y) {return x + y},
  subtract: function(x,y) {return x - y},
  multiply: function(x,y) {return x * y}, 
  divide: function(x,y) {return x/y}
}

// #5 
function actionApplyer(integer, array) {
  let int = integer
  for (let el in array) {
    int = array[el](int)
  }
  return int
}

// using .map()

// function actionApplyer(integer, array) {
//   if (array) {
//     let int = integer
//     array.map(el => {
//       int = (el)(int)
//     })
//     return int
//   }
//   else {
//     return integer
//   }
// }