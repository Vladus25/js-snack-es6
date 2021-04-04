
// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo
//in pagina tutte le icone disponibili come da layout.

// Milestone 2
// Coloriamo le icone per tipo

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

// Esercizio

function getIconsDb() {
  return [
    {
      name: "cat",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "crow",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dog",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dove",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dragon",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "horse",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "hippo",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "fish",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "carrot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "apple-alt",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "lemon",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "pepper-hot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "user-astronaut",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-graduate",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-ninja",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-secret",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
  ];
}

// Colori
function getColors() {
  return ["blue", "orange", "purple", "rose", "red"];
}

// Stampare nella pagina
function print(array) {
  const container = $(".icons");
  container.html('');
  array.forEach((item) => {

    const iconHtml = `
        <div>
            <i class="${item.family} ${item.prefix}${item.name}" style="color:${item.color}"></i>
            <div class="title">${item.name.toUpperCase()}</div>
        </div>
    `;
    container.append(iconHtml);
  });
}

// Raccogliere tutti tipi di icone nel arrey
function getTypes(array) {
  const types = [];
  array.forEach((item) => {
      if(!types.includes(item.type)) {
          types.push(item.type);
      }
  });
  return types;
}

// Associare ad tipo del icona un colore
function colorIcons(array, types, colors) {
  // Metodo di forEach

  array.forEach(item => {
      // 1. preleviamo tipologia di icona
      const iconType = item.type;
      // 2. preleviamo index di questa tipologia all'interno dell'array
      const indexType = types.indexOf(iconType);
      // 3. aggiungiamo color all'item in base all'indice di tipologia
      const color = colors[indexType];
      item.color = color;
  });

  return array;

  // Metodo di .map

 //  const newArray = array.map(item => {
 //  const itemClone = {...item};
 //  // 1. preleviamo tipologia di icona
 //  const iconType = itemClone.type;
 //  // 2. preleviamo index di questa tipologia all'interno dell'array
 //  const indexType = types.indexOf(iconType);
 //  // 3. aggiungiamo color all'itemClone in base all'indice di tipologia
 //  const color = colors[indexType];
 //  itemClone.color = color;
 //  return itemClone;
 // });
 //
 //  return newArray;

}

// Aggiungere opzioni di filtro degli icone
function addOptions(types) {
    const select = $('#type');
    types.forEach(item => {
        const optionHtml = `
            <option value="${item}">${item}</option>
        `;
        select.append(optionHtml);
    });
}

// Serve per far vedere icone che sono uguali alla tipologia scelta dal filtro
function filterArray(array, key) {
    const filteredArray = array.filter(item => {
        if(item.type == key) {
            return item;
        }
    });
    return filteredArray;
}

// Lancio di tutti funzioni
function init() {
  // 0. Preleviamo dati
  const icons = getIconsDb();
    // console.log(icons);
  const colors = getColors();
//   console.log(colors);
  const types = getTypes(icons);
//   console.log(types);
  // 1. Coloriamo le icone
  const coloredIcons = colorIcons(icons, types, colors);
  console.log(coloredIcons);
  // 2. Mostriamo gli elementi nella pagina
  print(coloredIcons);
  // 3. Aggiungiamo le opizioni al select
  addOptions(types);
  // 4. Mettiamo listener al select con la funzione per filtrare le icone
  const select = $('#type');
  select.change(function(event) {
    const currentType = $(this).val();
    if (types.includes(currentType)) {
        // filtriamo l'array in base al tipo
        const filteredIcons = filterArray(coloredIcons, currentType);
        console.log(filteredIcons);
        // mostrare i valori filtrati
        print(filteredIcons);
    } else {
        print(coloredIcons);
    }
  });
}

$(init);
