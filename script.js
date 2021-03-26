
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
  console.log('Esercizio 1');
  let arrNumbers = [4, 8, 15, 27, 5, 19];

  let [sum, medium] = info(arrNumbers);

  console.log(arrNumbers);
  console.log(`La somma dei numeri: ${sum}
La media dei numeri: ${medium}`);


}

function es2() {

  console.log();
  console.log('Esercizio 2');

  const arrbici = [
    {
      'nome': 'Greys',
      'peso': 8
    },
    {
      'nome': 'Dragon',
      'peso': 13
    },
    {
      'nome': 'Tor',
      'peso': 5
    },
    {
      'nome': 'Monster',
      'peso': 25
    },
    {
      'nome': 'Gein',
      'peso': 11
    }
  ]

  // Mio metodo

  // let min;
  // let number = [];
  //
  // for (var key in arrbici) {
  //   key = arrbici[key]
  //   number.push(key.peso);
  // }
  //
  // min = Math.min(...number);
  // console.log(`Valore minimo tra ${number} = ${min}`);

  //Metodo di Giovanni

  let minBici = {
    'nome': '',
    'peso': Number.MAX_SAFE_INTEGER
  };

  for (var i = 0; i < arrbici.length; i++) {

    const bici = arrbici[i];
    let { peso } = bici;

    if (peso < minBici.peso) {

      minBici = bici

    }
  }

  console.log(minBici);

}



function init() {
  es1();
  es2();
  // es3();

}

$(document).ready(init);
