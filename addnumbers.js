/*Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call
the function before it is declared to demonstrate hoisting.*/

console.log(addNumbers(42,7));//49

function addNumbers(a,b){
    return a + b;
}