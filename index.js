// Your code here
function saturdayFun ( activity="roller-skate" ) {
    return (`This Saturday, I want to ${activity}!`)
}

function mondayWork ( activity="go to the office" ) {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective ( style="*") {
    return function (adj = "special") {
        return (`You are ${style}${adj}${style}!`)
    }
}
// defines wrapAdjective function according to the specification
//  when initialized with '*' creates a function that, when 
//  called, wraps an adjective in a highlight

const Calculator = {
    add :function (a, b) {
        return a + b;
    },
    subtract :function (a, b) {
        return a - b; 
    },
    multiply :function (a,b) {
        return a * b;
    },
    divide :function (a,b) {
        return a / b;
    }
}
// ✓ has a JavaScript Object called Calculator as a local variable
// with functions inside of it

function actionApplyer( start, array){
    for (let i = 0; i < array.length; i++) {
        start = array[i](start);
      }
      return start;
    }

    // let actionApplyer = function(start, ray) {
    //     let a = start
      
    //     for (let i = 0; i < ray.length; i++ ){
    //       a = ray[i](a)
    //     }
      
    //     return a
    //   }