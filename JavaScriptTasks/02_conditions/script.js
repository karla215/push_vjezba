const day = prompt("What day is it?");
console.log(day);

let count = 3;
while (count <= 21) {
    if(count % 9) {
        console.log(count);
    }
    count ++;
}

const newArray = [1,2,33];
console.log(newArray[newArray.length-1]);
newArray[2] = 34;
console.log(newArray[newArray.length-1]);
newArray.unshift(0);
console.log(newArray[0]);
newArray.push(44);
console.log(newArray[4]);
let x = newArray.indexOf(44);
console.log(x);

console.log(newArray);
x = newArray.slice(3);
console.log(x);
console.log(newArray);