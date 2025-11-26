/*
 Assignment Operator
 =
 1. assign a variable a new value
 2. Declarea and assing a variable to vale
*/
let myage = 20; //Assignment myage=20
console.log(`My age ${myage} typeof myAge ${typeof myage}`);
myage = "None of your business";
console.log(`My age ${myage} typeof myAge ${typeof myage}`);

/*
+
Used to add number
Used to concatinate strings(adding)
*/
let firstNum = 344;
let secondNumb = 234;
let sumResult = firstNum + secondNumb;
console.log(`Sum is ${sumResult}`);
//Conactiname string
let str1 = "This is 1";
let str2 = "This is 2";
console.log(`${str1 + str2}`);

/*
Multiplication operator used to multuply number
*/
let multiResult = firstNum * secondNumb;
console.log(`Multi result ${multiResult}`);
let stringMult = str1 * str2;
console.log(`String Multi ${stringMult}`);

let divResult = firstNum / secondNumb;
console.log(`Division result ${divResult}`);
console.log(`Two string ${str1 / str2}`);

/*
Mudulus operator return
the remainder of diving two number
 %
*/

let mudularRes = firstNum % secondNumb;
console.log(`Modulus is ${mudularRes}`);
