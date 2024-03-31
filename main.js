// Question# 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Define variable
//let apple = "Apple";
//let uppercaseApple = "APPLE";
// Tests for equality and inequality with strings.
//console.log("Is apple is equal to apple?");
//console.log(apple == "apple");
//console.log("\Is apple is not equal to apple?");
//console.log(apple != "apple");
//Define variable
var karachi = "karachi";
var uppercaseKarachi = "KARACHI";
var Colours = ["RED", "Blue", "Green"];
// Tests using the lower case function
console.log("is KARACHI is equal to karachi after converting to lowercase? ");
console.log(uppercaseKarachi.toLocaleLowerCase() == "karachi");
console.log("\n Is KARACHI is not equal to karachi after converting to lowercase?");
console.log(uppercaseKarachi.toLocaleLowerCase() != "karachi");
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//define variabl
var twenty = 20;
var ten = 10;
var zero = 0;
//Equal to
console.log("\Is ten is equal twenty?");
console.log(ten == twenty);
// Not Equal to
console.log("\nIs ten is not equal t twenty?");
console.log(ten != twenty);
// Greater than
console.log("\nIs ten is grater then zero?");
console.log(ten > zero);
// less than
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);
//Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
//Less than or Equal to
console.log("\nTwenty is less than or equalto 10");
console.log(twenty <= 10);
// Tests using "and" & 0
//using && (and)
console.log("\n Twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
//using []  (OR)
console.log("\n 20 is greater than 50 or 20 is equal t 20?");
console.log(20 > 50, 20 == 20);
console.log("\n 20 is less than 50 or 20 is equal t 20?");
console.log(20 < 50, 20 != 20);
// Test weather an item is include in array 
console.log("\nIs Red include in my colours array?");
console.log(Colours.includes("RED"));
//Not Include
console.log("\nIs Red not include in my colours array?");
console.log(!Colours.includes("RED"));
