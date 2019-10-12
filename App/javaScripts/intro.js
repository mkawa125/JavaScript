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


  /**
   * Loops: while and for
   * loop is way for repeating the same code multiple times
   * while loop, execute if the condition is true and repeats until it is false
   * do while used when ou want your code to execute atleast once
   *  
   */

   // while loop

  let i = 0;
  while (i < 3) { // shows 0, then 1, then 2
    alert( i );
    i++; // if this miss code will execute forever
  }

  // do while loop

  do {
    document.write(i);
    i++;
  } while (i < 3);

  /**
   * for loop
   * like while loop
   * use can skip parts but puting ;
   * you can break the loop at any time if (!value) break; // (*)
   * continue and exist, you can continue and exit if a condition meet
   * for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
        if (i % 2 == 0) continue;

        alert(i); // 1, then 3, 5, 7, 9
    }
   */
  for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
}



