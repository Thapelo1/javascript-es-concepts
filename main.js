/* 
  Create a JavaScript Promise
*/

const makeServerRequest = new Promise( (resolve, reject) => {

} );


/* 
  Complete a Promise with resolve and reject
*/

const makeServerRequesta = new Promise( (resolve, reject) => {
    let responseFromServer = false;

    if(responseFromServer){
        resolve('We got the data');
    } else {
        reject('Data not received')
    }
} );


/* 
  Handle a Fulfilled Promise/Error with then
*/

makeServerRequesta.then( (result) => {
  console.log(result)
})
.catch( (err) => {
  console.log(err)
})