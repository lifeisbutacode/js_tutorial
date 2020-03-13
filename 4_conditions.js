/* 
CONDITIONAL STATEMENT
A conditional statement is a very important concept in programming where in there are statements to be evaluated
And if a statement is true, the following code inside the code block will be executed

There are two conditional statements, namely : if else and switch statement

*/

// ============
// ============ 

/* 
  If Else Statement

  An if else statement is a conditional statement where in a condition will be evaluated, and if that condition turns out to be true, the following code inside its block will be executed
  For ex : 

*/

/*

let number = 99;

if(number >= 100){
  console.log("The number is greater than or equal to 100");
}else {
  console.log("The number is less than 100");
} 

*/

/* 
Ternary Operator (condition ? condition is met : condition is false )

A ternary operator (which I've discussed earlier) is the shortest way to implement an if else statement
Re-writing the previous if else statement earlier
*/

/* 
let number = 99;
number >= 100 ? console.log("The number is greater than or equal to 100") : console.log("The number is less than 100");
 */

/* 
You can chain multiple if else statements by adding an "else if" to your existing if else statement 
For ex:
*/ 


/* 
let number_1 = 101;

if(number_1 > 100){
  console.log("The number is greater than 100");
} else if(number_1 == 100){
  console.log("The number is 100");
} else {
  console.log("The number is less than 100");
}
 */


// ============
// ============ 

/* 

 Switch Case Statement
 Much like an if else statement, a switch statement evaluates an expression and it executes the matching case label of the switch statement
 If there is no matching case for the expression, the "default" case will be executed.
 For ex:

*/

/* 
let food = "burger";
let food_1 = "chicken";

switch(food_1) {
  case "fries":
    console.log("My food is fries");
    break;
  case "pizza":
    console.log("My food is pizza");
    break;
  case "burger":
    console.log("My food is burger");
    break;
  default:
    console.log("I don't like any food");
}

WHEN TO USE IF ELSE AND SWITCH (TIP)
If the statement that you want to evaluate is a SIMPLE statement, use a SWITCH statement

For ex: 
let name = "John"

switch(name){
  case "John":
    ...
  case "Joe":
    ...
}

For statements that have multiple conditions to consider, you can use an IF ELSE STATEMENT

For ex:

let sum_of_numbers = 20;

if(sum_of_number >= 100 && sum_of_number != 3) {
  ...
}

It actually depends on how you use this two statements, and it's completely up to you on what to use. :)

*/


