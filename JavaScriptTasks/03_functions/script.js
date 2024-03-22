let lopta2 = "football";

var sport = () => {
    var lopta = "basketball";
    console.log(lopta, lopta2, lopta3);
}
const lopta3 = "baseball";
sport();

// structuredClone example
const stariObjekt = {
    a: {b: 10},
    c: 2,

};

const noviObjekt  = structuredClone(stariObjekt);

stariObjekt.c = 5;
stariObjekt.a.b  = 5;
console.table(stariObjekt);
console.table(noviObjekt);

//function in object
const person = {
    name: "Darko",
    surname: "Horvat",
    birthYear: 1990,
    age: function (birthYear) {
        this.dob = 2024 - birthYear;
        return this.dob;
    },
    login () {
        console.log(this.name, "has logged");
    },
    logout () {
        console.log(this.name, "has logged out");
    },
    age2: function () {
        this.dob2 = 2024 - this.birthYear;
        return this.dob2;
    },
};
//dot notation
console.log(person.age(2000));
console.log(person.dob);
//bracket notation
console.log(person["age"](2000));

//this examples
person.login();
person.logout();
console.log(person.age2());
console.log(person.dob2);
