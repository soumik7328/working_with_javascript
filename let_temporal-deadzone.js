/*Declare a variable using let inside a block scope and attempt to log its value to the console before it is
assigned a value to demonstrate the temporal dead zone.*/

{
    console.log(x); // ReferenceError

    let x = "PW";
    console.log(x); // "PW"
}