/**
 * objects
 */

 //Syntax for initializing object
 let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

/**
 * Adding properties of an object
 * 
 */

let user = {     // an object
    name: "Dahabu",  // by key "name" store value "John"
    age: 24        // by key "age" store value 30
  };


  /**
  * To remove a property, we can use delete operator:
 */

delete user.age;

/**
 * The “for…in” loop
    To walk over all keys of an object, 
    there exists a special form of the loop: for..in. 
    This is a completely different thing from the for(;;) construct that we studied before.
 */
for (key in object) {
    // executes the body for each key among object properties
  }

  let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
  }
