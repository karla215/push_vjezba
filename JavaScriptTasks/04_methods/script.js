//forEach method
const users = [
    { ime: "Davor", prezime: "Horvat", godine: 30 },
    { ime: "Maja", prezime: "Majić", godine: 25 },
    { ime: "Stjepan", prezime: "Stjepić", godine: 25 },
  ]; 
users.forEach(function(user,index) {
    console.log(user.ime,index);
})
//forEach method + arrow function
users.forEach((user) => console.log(user.ime) );

//FILTER method
//unlike forEach method, Filter returns element of the list if condition is met
const filteredList = users.filter((longName) => longName.ime.length > 4);
console.log(filteredList);//filtered users Davor and Stjepan

//
const brojevi = [1,2,3,4,5,6,7,8];
const parnaLista = [];
brojevi.forEach((broj) => {
    if(broj % 2 === 0)
    parnaLista.push(broj);
});
console.log(parnaLista);//even numbers 2,4,6,8


//second example
const auti = [
    { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2015 },
    { ime: "Audi", kategorija: "limuzina", godinaProizvodnje: 2017 },
    { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2016 },
    { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2021 },
    { ime: "BMW", kategorija: "cabriolet", godinaProizvodnje: 2019 },
  ]; 
  const listaLimuzina = auti.filter((auto) => auto.kategorija === "limuzina");
  console.log(listaLimuzina);//returns objects of Mercedes and Audi

//MAP method
//extract elements of the list and make new list

const listOfItemsWithPrice = [
    { item: "Bicikl", price: 1500 },
    { item: "Frižider", price: 2500 },
    { item: "Perilica", price: 2000 },
    { item: "Romobil", price: 800 },
    { item: "Automobil", price: 60000 },
    { item: "Tipkovnica", price: 80 },
  ]; 

  const listOfItems = listOfItemsWithPrice.map((oneItem) => oneItem.item);
  console.log(listOfItems);

  //FIND method
  //similar to filter method but returns first element that meets the condition
  const listaLimuzina2 = auti.find((auto2) => auto2.kategorija === "limuzina");

  console.log(listaLimuzina2);//returns only object of Mercedes, although Audi is also limuzina

  //SOME method
  //returns true or false for the condition
  const listaLimuzina3 = auti.some((auto3) => auto3.kategorija === "bla");

  console.log(listaLimuzina3);//false because bla doesn't exist

  //EVERY method
  //if every member of the list meets the condition
  const listaLimuzina4 = auti.every((auto4) => auto4.kategorija === "limuzina");

  console.log(listaLimuzina4);//returns false because not all members are limuzina

  const brojeviPutaDva = brojevi.map((double) => double*2);
  console.log(brojeviPutaDva);

  brojevi.forEach((double) => console.log("Broj " + double*2) );

//example: extract 2 members of object in list
  const marka = auti.map((auto) => {
    return {ime: auto.ime, kategorija: auto.kategorija}});
  console.log(marka);//list auti but without godinaProizvodnje

//example: combine methods
const filterEvenNumAndDoubleThem = brojevi.filter((broj) => broj%2===0).map((broj) => broj*2);
console.log(filterEvenNumAndDoubleThem);
//filter method is done first and makes even number list, and then map method doubles those even numbers

//REDUCE method
//return one value
const beginerPrice = 0;
const sumOfPrice = listOfItemsWithPrice.reduce(function(lastPrice, currentPrice) {
    return lastPrice + currentPrice.price;
}, beginerPrice);
console.log("Sum of prices is " + sumOfPrice);





