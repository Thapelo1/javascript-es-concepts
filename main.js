
 /* 
  -------------------------------------------
  Write Arrow Functions:
  -------------------------------------------
  */

// ES5
var magic1 = function() {
    return new Date();
  };


  // ES6
  const magic2 = () =>  {
    return new Date();
  };

/*
When there is no function body and only a return value, 
you can omit the keyword return as well as the brackets that 
surround the code using arrow function syntax. 
This simplifies smaller functions into single-line statements:
*/

  const magic3 = () =>  new Date();



  /* 
  -------------------------------------------
  Write Arrow Functions with Parameters:
  -------------------------------------------
  */


  // ES5
  var myConcat1 = function(arr1, arr2) {
    return arr1.concat(arr2);
  };

  // ES6
  const myConcat2 = (arr1, arr2) => arr1.concat(arr2);

    /* 
  ------------------------------------------------------------------------
  Write Arrow Functions with Default Parameters for Your Functions:
  ------------------------------------------------------------------------
  */

  const increment = (number, value = 1) => number + value;

  

