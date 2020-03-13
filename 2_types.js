  /* 
  Data Types
  Data Types from the name itself, is the type of the data assigned in a variable
  There are 5 commonly used data types  which are : string, number, boolean, array, object
  For ex; 1 is a number, "Hello" is a string, and so forth

  */
  let num = 1;                                // Data Type is a number 
  let phrase1 = "Hello";                      // Data Type is a string
  let phrase2 = 'World';                      // Data Type is also a string
  let isActive = false;                       // Data Type is boolean
  let scores = [100, 90, 39];                 // Data Type is an Array
  let person = { name : "John", age : 12};    // Data Type is an Object

 /*  console.log(num, isActive, phrase1, phrase2);
 console.log(scores);
 console.log(person); */

 /* 
  NUMBER
  If the type of the data to be assigned is either an integer or a float, its data type will be a number
  For ex: 
 */

 /*   

  let num_1 = 12;
  let num_2 = 155.0;
  console.log(typeof(num_1));
  console.log(typeof(num_2)); 
  console.log(num1, num2); 

 */

// ============
// ============

 /* 
  STRING
  If the type of the data to be assigned is a string or text, its data type will be a string
  For ex: 
 */

 /*   

  let word = "Hello";
  let word_1 = 'World';
  console.log(typeof(word));
  console.log(typeof(word_1)); 
  console.log(word, word_1); 


 */

// ============
// ============

 /* 
  BOOLEAN
  If the type of the data to be assigned is either true or false, its data type will be a boolean
  For ex: 
 */

   
/* 
  let isActivated = true;
  let isInactive = false;
  console.log(typeof(isActivated));
  console.log(typeof(isInactive)); 
  console.log(isActivated, isInactive); 
 */

// ============
// ============ 

/* 
  ARRAY
  Array is a special type of data type where in you can store multiple values inside a "list", or in this case, an array
  Values assigned in an array are called elements. They can have multiple types of data type, ranging from number, string, boolean, object (to be discussed), or another array
  For ex:

*/
/* 
 let arrayOfThings = [10, false, "yehey"];
 console.log(arrayOfThings);
 console.table(arrayOfThings);

 */
/*  
  How to specify what element to use in array
  Starting from 0, count the position of the element to be used. The number will be its index 
  Index is the identifier of that element in the array
  For ex :

*/ 

//                    index
//  Array Name        0         1         2
// let arrayOfColor = ["red", "green", "blue"];
// console.log(arrayOfColor[0]);
// console.log(arrayOfColor[1]);
// console.log(arrayOfColor[2]);

// ============
// ============

/* 
  OBJECT
  Object is a special type of data, just like an array, that can contain multiple values and data types. 
  Defining an object is achieved by declaring "key:value" pairs. Key being the identifier of the object (much like an index in an array), and its value.
  For ex:

*/

/* let personObject = {
//key  : value  
  name : "Laurenze",
  age : 23,
  isMale : true,
  printName : function(){
    return "My name is " + this.name;
  }
};
 */
/* 
  How to use an object
  Use the key associated with the value in the object that you want to use
  For ex:

*/

/* 
console.log(personObject.age); // If you want to use the key "age" in the object "personObject"
console.log(personObject.printName()); // If you want to use the key "printName" in the object "personObject"
 */

// ============
// ============

