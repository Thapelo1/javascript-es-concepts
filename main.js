/* 
   Create Strings using Template Literals:

   The template literal is a new feature of ES6. This is a special type of string that makes it easier to create complex strings.

  Template literals enable you to create multi-line strings and use string interpolation features.

*/

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };

  function makeList(arr) {
    const failureItems = [];
    arr.map((item) => {
        failureItems.push(`<li class="text-warning">${item}</li>`)
    })
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);


 /* 
   Write Concise Object Literal Declarations Using Object Property Shorthand
*/

const createPerson = (name, age, gender) => {
    return { name, age, gender };
  };


/* 
    Write Concise Declarative Functions with ES6
*/


const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };


  bicycle.setGear(7);
  console.log(bicycle.gear);

  /* 
    Use class Syntax to Define a Constructor Function:
    It should be noted that the class keyword declares a new function, to which a constructor is added. 
    This constructor is invoked when new is called to create a new object.
*/


class Vegetable {
    constructor(name){
      this.name = name
    }
  }

  
  const carrot = new Vegetable('carrot');

    /* 

    Use getters and setters to Control Access to an Object:
    You can obtain values from an object and set the value of a property within an object.

    These are classically called getters and setters.

    Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user 
    directly accessing the private variable.

*/

class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);
  novel.writer = 'newAuthor';
  console.log(novel.writer);

  class Thermostat {
    constructor(Fahrenheit) {
        this._Fahrenheit = Fahrenheit
    }

    get temperature() {
        return 5 / 9 * (this._Fahrenheit - 32)
    }

    set temperature(celcius) {
        this._Fahrenheit = celcius * 9.0 / 5 + 32
    }
  }

const thermos = new Thermostat(76);
let temp = thermos.temperature; 
console.log(temp);
thermos.temperature = 26;
console.log(temp);
temp = thermos.temperature; 


