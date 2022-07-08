/*
const s = [5, 7, 2];

function editInPlace() {

    // s = [2, 5, 7]; This won't work

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  return s;

}
console.log(editInPlace());

*/


function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
  
    Object.freeze(MATH_CONSTANTS)
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  console.log(PI)