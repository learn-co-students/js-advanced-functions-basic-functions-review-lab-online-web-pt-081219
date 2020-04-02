// Your code here
function wrapAdjective(flair="*") {
  return function(adjective="special") {
    return `You are ${flair}${adjective}${flair}!`
  };
};

function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
};

const Calculator = {
  add: (a,b) => {return a + b},
  subtract: (a,b) => {return a - b},
  multiply: (a,b) => {return a * b},
  divide: (a,b) => {return a / b}
}

function actionApplyer(int, funcs) {
  let a = int
  for(let i=0; i < funcs.length; i++) {
    a = funcs[i](a)
  }
  return a
};
