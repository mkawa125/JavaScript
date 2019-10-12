// Define Variable in modern way
let message = "Hello Mkawa";

// Define Variable in old way
var name = 'Papaa Mukulu';

// constant are variables that does not change 
const myBirthday = '18.04.1982';


// This cntains backticks for embeding script variables
let string = `${message}, ${name}`

// show variable content
alert(string);

/**
 * Logical operators
 * OR finds the first truth value and operates from left to right
 * AND (&&) Represented by 2 ampersands, returns true if both operands are true and false otherwise
 * AND always finds the first false
 * ! NOT operand, this always returns the inverse value
 * !! used to convert value to boleen type
 */
let hour = 8;
let minute = 30;
if (hour < 10 || hour > 19) {
    alert('office closed please come tumor')
}
if (hour == 8 && minute == 30) {
    alert( 'The time is 12:30' );
  }