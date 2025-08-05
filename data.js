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