/* 
Function
Functions are sets of procedures or statements that accomplishes certain tasks that are defined by the user
You can also pass in values to the function for tasks like computing data, string concatenation, etc
Function may or may not return a value
After defining your function, you must "call" your function by invoking its function name with a pair of parentheses "()"

*/

// ============
// ************
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
// ************
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
// ************
// ============ 

//Function Usage

/* 
Using function is a very important concept not just in Javascript, but programming in general.
Using a function allows you to "code only once"; meaning you won't repeat writing your code
You won't need to repeat your code if the logic of the code that you want exists already
For ex

//Code for adding two numbers w/o function;

let a = 1;
let b = 2;
let sum;

sum = a + b;
console.log("The sum is ", sum);

//== 

let c = 2; 
let d = 2;

sum_1 = c + d;
console.log("The sum is ", sum_1);

//
//Code for adding two numbers by using a function;
//

function computeNumber(num1, num2){
  return num1 + num2;
}

let firstSum = computeNumber(1,3);
let secondSum = computeNumber(2,2);

console.log("The first sum is ", firstSum);
console.log("The second sum is ", secondSum);

*/


// ============
// ************
// ============ 

/* 
Parameters vs Arguments
The difference between parameter and argument is :
Parameters are the values DEFINED inside the parentheses when you are declaring a function

For ex
//num1 and num2 are called parameters

let addNumbers = function(num1, num2){
  return num1 + num2;
}

The argument is the values passed when you call a function
For ex

//1 and 2 are called arguments
addNumbers(1,2);


Furthermore, explanation of this function is as follows

When we defined the function "addNumbers", we placed 2 parameters (num1 and num2) inside the function
These parameters will "HOLD" the value of the argument that we passed on the function whenever we call the function
When we called the "addNumbers" function, we passed 1 and 2 as the arguments.
The arguments that we passed on the function will be stored on the parameters that we declared earlier, that acts as variables.

let addNumbers = function(num1, num2){
  return num1 + num2;
}

addNumbers(1, 2);

**What happens**

let addNumbers = function(1, 2){
  return 1 + 2;
}

*/

// ============
// ************
// ============ 


/* 
RECURSIVE FUNCTION/RECURSION
A recursive function is a function that calls itself, usually with a condition that terminates/stops the function from calling itself infinitely (if the condition is met)
For ex
*/

/* 

let recursionFunc = function(n) {
  if(n >= 0){
    console.log(n);
    recursionFunc(n-1);
  }
};

recursionFunc(5);

What happens with this recursion?
The function "recursionFunc" has 1 parameter. There is a conditions inside the function.
The condition is the "terminating condition", meaning this condition will stop further execution of the recursion
The condition states that if the "n", which is the value passed on the function, is GREATER THAN OR EQUAL TO ZERO, the function will call itself 
Lets examine further

let recursionFunc = function(5) {
  if(5 >= 0){ //TRUE
    console.log(5);
    recursionFunc(5-1); //4
  }
};

  as follows

   if(4 >= 0){ // TRUE
    console.log(4); 
    recursionFunc(4-1); //3
  }
  ... until 0

  if(0 >= 0){ // TRUE
    console.log(0); 
    recursionFunc(0-1); //-1
  }

  if(-1 >= 0){ // FALSE; Recursion will stop execution
    
  }

  
// ============
// ************
// ============ 



*/