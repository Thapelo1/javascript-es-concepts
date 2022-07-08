
// ES5
var magic = function() {
    return new Date();
  };


  // ES6
  const magic = () =>  {
    return new Date();
  };

/*
When there is no function body and only a return value, you can omit the keyword return as well as the brackets that surround the code using arrow function syntax. This simplifies smaller functions into single-line statements:
*/

  const magic = () =>  new Date();