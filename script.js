
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

function es3() {

  console.log();
  console.log('Esercizio 3');

  let teams = [
    {
      'name': 'Napoli',
      'score': 0,
      'penality': 0
    },
    {
      'name': 'Roma',
      'score': 0,
      'penality': 0
    },
    {
      'name': 'Torino',
      'score': 0,
      'penality': 0
    },
    {
      'name': 'Juventus',
      'score': 0,
      'penality': 0
    }
  ]

  const newteams = [];

  for (let i = 0; i < teams.length; i++) {

    const team = teams[i];
    team.score = getRandom(0, 50);
    team.penality = getRandom(0, 15);

    let { name, penality } = team;
    let newObj = {name, penality };
    newteams.push(newObj);
  }

  console.log(teams);
  console.log(newteams);
}


function es4() {

  console.log();
  console.log('Esercizio 4: numeri compresi tra un minimo e un massimo');

  function startFun() {
    console.log(splitter(5, 50, [2, 4, 5, 7, 45, 23, 78, 13, 34]));
  }

  function splitter(min, max, arr) {

    console.log('Arr normale: ' + arr);
    var arrNumber = arr;
    var localMin = min;
    console.log(`Valore minimo = ${min}`);

    var localMax = max;
    console.log(`Valore massimo = ${max}`);


    var newArr = []
    for (var i = 0; i < arrNumber.length; i++) {

      var number = arrNumber[i]

      if (number >= localMin && number <= localMax) {
        newArr.push(number)
      }

    }

    return newArr;
  }

  startFun();

}

function init() {
  es1();
  es2();
  es3();
  es4();
}

$(document).ready(init);
