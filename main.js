/* 
   ES6 makes destructuring arrays as easy as destructuring objects.
*/

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(`The value of a: ${a} and the value of b: ${b}` )

/* 
   Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
*/

const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {
  const [a, b, ...arr] = list;
  return arr;
}

const arr = removeFirstTwo(source);


/* 
   Use Destructuring Assignment to Pass an Object as a Function's Parameters
*/

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  

  const half = ({max, min}) => (max + min) / 2.0; 

  console.log(half);



