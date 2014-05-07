// I paired [by myself] on this challenge.




// Pseudocode
// 
//Define variable secretNumber
//Define variable password
//Define variable allowedIn a boolean
//Define variables members as a new arr


// __________________________________________
// Write your code below.


var secretNumber = 7; 
var password = "just open the door"; 
var allowedIn = false; 
var members = ["John", "Steve", "Alan", "Mary"] 





// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

I defined each variable simply using one line of code. If there is a way of making the code more simplified or DRYer I have
not learned enough about javascript to do it.





// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
 This challnge was tough for me as javascript is totally new. I struggled at first to understand what the program was 
 trying to accomplish because I had not read enough about variables, methods, and functions.  I had to stare at the code
 for awhile before I realized that the error message the code was throwing was becasue of undefined variables, therefore 
  I needed to go in and define those variables with the correct information to get the function to evalutate to true. 
Going through and naming the variables was very helpful to understand how the varibales and funtions interact.  It felt 
great to struggle with this at first and finally have the aha moment and see how simple the solution was.  Once I knew
what I had to change it made me see the benefits of test driven development and going through the code piece
by piece to see where it fails.  It definately shows me that I will need to put it a good chunk of time to learning javascript 
as it does not seem to come to me nearly asnaturally as HTML and CSS.  My learning competency for this challenge is not 
quite where it should be so I will go through the JS Intro a few more times to try and get a stronger foundation.



// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

