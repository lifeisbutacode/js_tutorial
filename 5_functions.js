/* 
Function
Functions are sets of procedures or statements that accomplishes certain tasks that are defined by the user
You can also pass in values to the function for tasks like computing data, string concatenation, etc
Function may or may not return a value
After defining your function, you must "call" your function by invoking its name with a pair of parentheses "()"

*/

// ============
// ============ 

/* 

Two ways of defining a function (Function Declaration, Function Expression)

Function Declaration
A function declaration is defined by using the "function" word, the name of the function to be used and then the set of parentheses and curly braces
For ex:

*/
/* 

function displayText(){
  console.log("HELLO WORLD");
}

displayText(); 

*/

/* 


// ============
// ============ 

Function Expression
Another way of defining a function is by using a function expression. Start by declaring a variable, followed by the "function" word and then the set of parentheses and curly braces

For ex

*/
/* 

let displayMessage = function(){
  console.log("Hello again!");
}

displayMessage();

*/

// ============
// ============ 




/* 
let recursionFunc = (n) => {
  console.log(n);
  n != 0 ? recursionFunc(n-1) : console.log('n is 0');
};

recursionFunc(5); 
*/