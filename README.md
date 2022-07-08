# javascript-es-concepts
ES6, released in 2015, added many powerful new features to the language. In this repo, I cover these new features, including arrow functions, destructuring, classes, promises, and modules.


# Mutations
The const declaration has many use cases in modern JavaScript.

Some developers prefer to use const by default when assigning variables, unless they know they will need to reassign the value. They only use let in that case.

It is important to note, however, that objects (including arrays and functions) assigned to variables with const are still mutable. The const declaration only prevents the variable identifier from being reassigned.


As demonstrated in the first block of code, a const declaration alone will not protect your data from mutation. JavaScript provides the function Object.freeze to prevent data mutation, which ensures that your data does not change.

If the script is in strict mode, any attempt to change the object will be rejected, with an error thrown.

