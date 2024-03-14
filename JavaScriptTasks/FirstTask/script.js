/* null is not an object but output will show it is */
console.log(typeof null);

const x=10;
let y="Hello world";
const z=true;

console.log(x,y,z);

const ime = "Matko";
const zanimanje = "Ucitelj";
const godRodjenja=2004;
const trenutnaGod = 2024;

/* string literals */
const osoba = "Ja sam " + ime + ", " + zanimanje + ". " + "Imam " + (trenutnaGod-godRodjenja) + " godina";
console.log(osoba);
/* template literals - easier way to do this */
const osobaNovo = `Ja sam ${ime}, ${zanimanje}. Imam ${trenutnaGod-godRodjenja} godina.`;
console.log(osobaNovo);
console.log(`
Stringovi
sa
vise
linija`);

let matVar;
matVar = Math.ceil(5.1);
console.log(matVar);

let a = Math.trunc(Math.random()*100 + 1);
let b = Math.trunc(Math.random()*50 + 1);
console.log(a,b);
let varSum = a+b;
let varDif = a-b;
console.log(`Sum is ${varSum} and diff is ${varDif}`);
let showSum = `${a} + ${b} = ${varSum}`;
let showDiff = `${a} - ${b} = ${varDif}`;
console.log(showSum, showDiff);