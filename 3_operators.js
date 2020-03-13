/* Operators 
  Operators are used for assigning and comparing values, performing mathematical or logical operations to variables, etc.
  There are 5 operators that are mostly used in real life situations, and this are : 
  > Arithmetic Operators (+, -, *, /, %, ++, --)
  > Comparison Operators (<, >, <=, >=, !=, ==, ===)
  > Assignment Operators (=, +=, -=, *=, /=, %=)
  > Logical Operators (&&, ||, !)
  > String Operators (+, +=)
  > Ternary Operator ( ? :)
*/


// ============
// ============ 


/* 
  Arithmetic Operators  (+, -, *, /, %, ++, --)
  An arithmetic operator is used for mathematical operations such as add, subtract, etc where in you can manipulate numerical values
  Types of arithmetic operators
  
  + (For adding values)
  - (For subtracting values)
  * (For multiplying values)
  / (For dividing values)
  % (For returning decimals after dividing values)
  -- (Subtracting 1 from value)
  ++ (Adding 1 from value)

  For ex: 

*/

let sum = 5 + 2;
let diff = 5 - 2;
let product = 5 * 2;
let quotient = 5 / 2;
let remainder = 5 % 2;

// console.log(sum, diff, product, quotient, remainder);

sum++; // Adding 1 to the sum (7) = 8
diff--; //Subtracting 1 to the diff (3) = 2
// console.log(sum, diff);


// ============
// ============ 

/* 

  Comparison Operators (<, >, <=, >=, !=, ==, ===)
  A comparison operators compares values and returns either true and false depending on the result
  Types of arithmetic operators

  <   (If the left value is less than the right value)
  >   (If the left value is greater than the right value)
  <=  (If the left value is less than or equal than the right value)
  >=  (If the left value is greater or equal than the right value)
  !=  (If the left value is not equal to the right value)
  ==  (If the left value is equal to the right value in terms of value)
  === (If the left value is equal to the right value in terms of value and data type)

  For ex:

*/

/* 
console.log(5 > 2);     //Five is greater than 2; will return true
console.log(5 >= 5);    //Five is greater than or equal to 5; will return true
console.log(5 == '5');  //Five is equal to the string "5" in terms of value; will return true
console.log(5 === '5'); //Five is equal to the string "5" in terms of value but is NOT equal in terms of aata type; will return false 
*/


// ============
// ============ 

/* 
  Assignment Operators  (=, +=, -=, *=, /=, %=)
  An assignment operator assigns a value in a variable, and can also perform shorthand arithmetic operators (shorter way for adding, subtracting, etc values)
  Types of assignment operator

  =  (For assigning values)
  += (For adding then assigning values)
  -= (For subtracting then assigning values)
  *= (For multiplying then assigning values)
  /= (For dividing then assigning values)
  %= (For returning decimals after dividing values then assigning values)

  For ex : 

*/

/*  
 let sumShorthand = 1;
 let productShorthand = 3;
 
 sumShorthand += 2;     // Equal to sumShorthand = sumShorthand + 2; will return 3
 productShorthand *= 3;  // Equal to productShorthand = productShorthand * 3; will return 9

console.log(sumShorthand, productShorthand); 

*/


// ============
// ============ 

/* 
  Logical Operators (&&, ||, !)
  A logical operator decides between boolean statements and will return if the statement is either true or false
  Types of logial operators

  && (AND - If the statement already has a FALSE statement, result will be FALSE)
  || (OR - If the statement already has a TRUE statement, result will be TRUE)
  !  (NOT - Reverses the statement; true will be false, false will be true )
  
  For ex:

*/

// let y = 10;
// let x = 9;
/* 
          // FALSE AND TRUE  = FALSE
console.log(y > 10 && y > 9); 

          // TRUE AND TRUE  = TRUE 
console.log(y == 10 && y > 9);  

          // FALSE OR TRUE  = TRUE
console.log(y > 10 || y > 9);  

          // FALSE OR TRUE  = TRUE (wil be reversed to FALSE since it has ! operator)
          
console.log(! (y > 10 || y > 9) );

*/  


// ============
// ============ 

/* 

  String Operators (+, +=)
  A string operator adds or concatenates STRING values together

  For ex; 

  

*/

/* 

let message = "Hello " + "world!"; // Strings "Hello " and "World!" will be combined
console.log(message);

message += " I am ready"; // String " I am ready" will be combined to "Hello world! "
console.log(message); 

*/

/* 

  Ternary Operator ( ? : )
  A ternary operator is a shortened version of "if else" (to be discussed later)
  An if else condition is a block of statement that will be executed once the condition is met in the statement 
  For ex:

*/

/* 
let price = 900;

price >= 1000 ? console.log("The price is " + price + " which is greater than or equal to 1000.") : console.log("The price is " + price + " which is less than 1000.");  
// It will display the second console.log because the price (900) is less than 1000
//"The price is " + price + " which is less than 1000."

*/