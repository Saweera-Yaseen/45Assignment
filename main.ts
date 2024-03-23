// Question#18 Seeing the World: Think of at least five places in the world you’d like to visit.

//Store the locations in a array. Make sure the array is not in alphabetical order.

let countriesToVisit: string [] = ["Turkey", "China", "USA", "Saudi Arabia"];
console.log("Orignal Order", countriesToVisit);

// Print your array in alphabetical order without modifying the actual list.

console.log("Alphabetical Order", [...countriesToVisit].sort());

//Show that your array is still in its original order by printing it.

console.log("Still in OrignalOrder:", countriesToVisit);

//Print your array in reverse alphabetical order without changing the order of the original list.

console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that your array is still in its original order by printing it again.

console.log("Still in Orignal Order:", countriesToVisit);

//Reverse the order of your list. Print the array to show that its order has changed.

console.log("Orignal Array Reversed:", countriesToVisit.reverse());

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("Back to Orignal Order :", countriesToVisit.reverse());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("Sorted in Alphabetical Order:", countriesToVisit.sort);

