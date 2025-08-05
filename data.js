const utenti = [
  {
    id: 1,
    nome: "Marco",
    eta: 30,
    ordini: [
      { id: 101, prodotto: "Laptop", prezzo: 1200 },
      { id: 102, prodotto: "Mouse", prezzo: 25 }
    ]
  },
  {
    id: 2,
    nome: "Giulia",
    eta: 25,
    ordini: [
      { id: 103, prodotto: "Smartphone", prezzo: 800 },
      { id: 104, prodotto: "Cover", prezzo: 15 },
      { id: 105, prodotto: "Auricolari", prezzo: 60 }
    ]
  },
  {
    id: 3,
    nome: "Luca",
    eta: 40,
    ordini: []
  }

];

function stampanomi (array){
  for (i=0; i<array.length;i++){
    console.log(array[i].nome)
  }
}
stampanomi(utenti);

function etaMedia(array){
  
  let etaTot = 0
  let etamediaa = 0
  for (i=0; i<array.length;i++){
    etaTot = etaTot+array[i].eta
  }
etamediaa = etaTot/array.length
return Math.floor(etamediaa);
}
console.log(etaMedia(utenti))

function ordine (array){

  let newArr = []
  for (i=0; i<array.length;i++){
    if (array[i].ordini.length > 0){
      newArr.push(array[i].nome)
    }
  }
  return newArr;
}
console.log(ordine(utenti))

function contaOrdini(array){
  for (i=0; i<array.length;i++){
    if (array[i].ordini.length > 0){
      console.log(`L' utente ${array[i].nome} ha fatto ${array[i].ordini.length} ordini`)
    }
  }
}
contaOrdini(utenti);

function prodottiAcquistati(array){
  let newArr = []
  for (i=0; i<array.length;i++){
    for (j=0; j<array[i].ordini.length;j++){
      newArr.push(array[i].ordini[j].prodotto)
    }
  }
  return newArr;
}
console.log(prodottiAcquistati(utenti))

function spesaTotale(array){
  let sommaTot = 0
  for (i=0; i<array.length;i++){
    for (j=0; j<array[i].ordini.length;j++){
      sommaTot = sommaTot+array[i].ordini[j].prezzo
    }
    console.log(sommaTot)
  }
  
}
spesaTotale(utenti);

const ut = [
  { nome: "Marco",  },
  { nome: "Giulia",  },
  { nome: "Luca", }
]

const numeri = [1, 2, 3, 4, 5];
// Risultato atteso: [2, 4, 6, 8, 10]

let numeriperdue = numeri.map(gib => gib*2)
console.log(numeriperdue)

const numerii = [10, 20, 30];
// Risultato atteso: ["10", "20", "30"]
let numeriStringa = numerii.map(x => x.toString());
console.log(numerii)

const ops = [
  { nome: "Alice", eta: 25 },
  { nome: "Bob", eta: 30 },
  { nome: "Charlie", eta: 35 }
];
// Risultato atteso: ["Alice", "Bob", "Charlie"]

let nomi = ops.map(x => x.eta.toString())
console.log(nomi)

const prezzi = [10, 20, 30];
// Risultato atteso: ["€10", "€20", "€30"]
let newPrezzi = prezzi.map(x => `£${x}`)
console.log(newPrezzi)

const prodotti = [
  { nome: "Libro", prezzo: 20 },
  { nome: "Penna", prezzo: 5 }
];
// Risultato atteso:
// [
//   { nome: "Libro", prezzo: 18 },
//   { nome: "Penna", prezzo: 4.5 }
// ]

let sconto = prodotti.map(x=> [

  {nome: 'Libro', prezzo: x.prezzo-((x.prezzo/100)*10)},
  {nome: 'Penna', prezzo: x.prezzo-((x.prezzo/100)*10)}
]
)
console.log(sconto)

const voti = [12, 25, 18, 30];
// Risultato atteso: ["Bocciato", "Promosso", "Promosso", "Promosso"]

function esame (array){
  for (i=0; i<voti.length;i++){
    if (voti[i] >= 18){
      console.log('promosso')
    }else{
      console.log('bocciato')
    }
  }
}

esame(voti);

let okk = voti.map(x=> x>= 18 ? 'promosso' : 'bocciato')
console.log(okk)

const parole = ["cane", "elefante", "sole"];
// Output atteso: [4, 8, 4]
let lung = parole.map(x => x.length)
console.log(lung)

const nami = ["Marco", "Luca", "Giulia"];
// Output: ["M", "L", "G"]
let primo = nami.map(x=> x[0])
console.log(primo)

const parolee = ["ciao", "mondo", "javascript"];
// Output: ["Ciao", "Mondo", "Javascript"]
let maiusc = parolee.map(x=> x[0].toUpperCase())
console.log(maiusc)