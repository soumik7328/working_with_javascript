/*Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
them values and log their values to the console before and after they are declared to demonstrate variable
hoisting.*/
{
console.log(i);//ReferenceError
console.log(num);//undefined
console.log(car);//ReferenceError


let i = "i make";
var num = "005";
const car = "number plate";

console.log(i);// "i make"
console.log(num);// "005"
console.log(car);// "number plate"

}