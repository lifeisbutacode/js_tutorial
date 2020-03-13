
/* Variables
Variables are something that holds a value. Its value can and or can't be changed, depending on how you declare variable
To declare a variable, type var, let , or const and then the variable name
For ex :  */

var name = "Tom"; 
let age = 16; 
const address = "PH"; 

/* To get/or read the value of a variable, just use the variable name
For ex: */

console.log(name);   //Will print Tom
console.log(age);    //Will print 16
console.log(address);//Will print PH

/* To change the value of the variable, redeclare the value of the variable by using the name and then the value to be assigned
For ex: */
name = "Alan";
age = 22;


console.log(name);   //Will print Tom
console.log(age);    //Will print 16

// ============
// ============

/*  Difference of let, var and Const */

// let and var
function varVsLet() {

  //Block scope (code is inside of curly braces)
  {
    let color = "red";
    var shade = "darker";
    console.log(color, shade);
  }
  console.log(shade);
  console.log(color);
  
  /* variable "shade" will be printed
  variable "color" will return a reference error

  variables declared by var will be available all throughout the function 
  variables declared by let will be available through the block scope only where the variable is declared */
}
varVsLet();


//let and const
function letVsConst(){
  let num = 1;
  const digit = 10;

  // console.log(num, digit); //will print 1 10

  num = 2;

  console.log(num); //will produce an error
  console.log(digit); //will produce an error

 /*  variables declared by let can have its value changed
  Variables declared with a const can't have its value changed */

}

letVsConst();

// ============
// ============


/* 
  Variable Naming Rules
*/

// Variable names must start with a letter, underscore (_), or a dollar sign ($)
// For ex:

let $name = "Laurenze";
let animal = "Cat";
let _bagColor = "black";

// console.log($name, animal, _bag$Color);

// Variable names must NOT contain special characters (^, @, #, etc) and spaces except for dollar sign or underscore 
// For ex:
// let ^angle~ = "90"; 
// let abc 123 = "123";

// Variable names are case sensitive
// for ex :

let device = "mouse";
let Device = "keyboard";
let DeViCe = "speaker";

console.log(device, DeViCe, Device); 
// The variable device is different from Device and DeViCe (see the how the variables are typed)

// Some variable names are reserved by Javascript, you can't use them for your variable declaration
// For ex:
// let finally = true;
// let else = "something";
// let switch = true;

// finally, else, switch, and other RESERVED WORDS are defined and used by Javascript already, and can't be used for your own variable declaration 

// ============