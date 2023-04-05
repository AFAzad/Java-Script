/* Data types in Java script
1. Non primitive data types
*/
// 1 : Number
let number = 545;

// 2: String

let str = "Rosaline";

console.log(str);


// 3 : Undefined.

let a;

// 4. Boolean.
let bool = true;

// 5. Null

let b = null;

//6. BigInt 

var bignum = 123456789n;

console.log(typeof[bignum]);

// 7. Symbol

let  sym = "New logo";

console.log(sym);

// objects are key value pair

let cars = {
    car1 : "Lamboghini",
    car2 : "Tesla",
    car3 : "Audi",
    car4 : "Mercedes"
};

console.log(cars);

let a1 = 60;
let b1 = 70;

console.log("a1 + b1 = ", a1+b1);

let item1 = 50;
let item2 = 51;
console.log(item1==item2);
console.log(item1!=item2);
/* 
Condistional Expression 
if 
else if 
if else if statement
*/

alert("type your age");
let p = prompt("Your age");
if(p >= 17){
    alert("your are eligible");
}else{
    alert("you are under age");
}
document.write("Done")
