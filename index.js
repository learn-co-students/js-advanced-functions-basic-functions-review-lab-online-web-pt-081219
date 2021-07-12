function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(punctuation = "*") {
  return function(adjective) {
    return `You are ${punctuation}${adjective}${punctuation}!`;
  };
}

let Calculator = {
  add(num1, num2) {
    return num1 + num2;
  },
  subtract(num1, num2) {
    return num1 - num2;
  },
  multiply(num1, num2) {
    return num1 * num2;
  },
  divide(num1, num2) {
    return num1 / num2;
  }
};

function actionApplyer(integer, arrayOfFunctions) {
  if (arrayOfFunctions.length === 0) {
    return integer;
  } else {
    let runningTally = 0;

    let [first, ...rest] = arrayOfFunctions;

    runningTally = first(integer);

    for (let singleFunction of rest) {
      runningTally = singleFunction(runningTally);
    }
    return runningTally;
  }
}
