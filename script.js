
function getRandom(min, max) {
  var localMin = min;
  var localMax = max - min + 1;
  return Math.floor(Math.random() * localMax) + localMin;
}

function info(arrNumbers) {
  let sum = 0;

  for (let i = 0; i < arrNumbers.length; i++) {
    const number = arrNumbers[i];
    sum += number;

  }

  let medium = sum / arrNumbers.length;

  return [sum, medium];
}

function es1() {
  let arrNumbers = [4, 8, 15, 27, 5, 19];

  let [sum, medium] = info(arrNumbers);

  console.log(arrNumbers);
  console.log(`La somma dei numeri: ${sum}
La media dei numeri: ${medium}`);

}

function init() {
  es1();
  // es2();
  // es3();

}

$(document).ready(init);
