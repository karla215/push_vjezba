const number = prompt("What is your favourite number?");

console.log(number, typeof(number));

if (number == 1) {
    console.log("You answered correctly");
}
else {
    console.log("Wrong answer!");
}

//automatic conversion example
console.log("23" + "10" - 3);
console.log(23 + "10" + 3);
console.log(5+100+24+"12"+2+3+4);

//nullish coalescing operator
let nullish;
nullish = 10 ?? 20;
console.log(nullish);//10
nullish = 0 ?? 20;
console.log(nullish);//10
nullish = "" ?? 20;
console.log(nullish);//empty
nullish = null ?? 20;
console.log(nullish);//20