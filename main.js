
const s = [5, 7, 2];

function editInPlace() {

    // s = [2, 5, 7]; This won't work

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  return s;

}
console.log(editInPlace());
