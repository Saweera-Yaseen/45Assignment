//Queston#17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

let gusts=["Esha", "Ayesha" , "Fatima"]

//Print a message to each of the two people still on your list, letting them know they’re still invited.

console.log("Dear",gusts, "I have found a bigger dinner table")

//Adding new value at beginning
gusts.unshift("Shahnawaz")
console.log(gusts)

//Get a middle index 
let middleIndex:number=Math.floor(gusts.length / 2)
console.log(gusts)

//Adding value at ending
gusts.push("Zain")
console.log(gusts)

//Adding a new guest to middle index array
gusts.splice(middleIndex, 0, "Aqsa")

//Print message to updated list
console.log("Updated list of our Gusts");

//seeking invitation one by one
gusts.forEach(oneguest => console.log(`Hello ${oneguest}, would you like to come dinner with me`));

//Inform that only 2 guests is invited
console.log("Unfortunatily, the new dinner table wont arrive on time, so I can only inviteteo guests dinner with me");

//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while(gusts.length > 2){
    let removegusts=gusts.pop()
console.log(`Sorry, ${removegusts} I can not invite you at dinner`);
}
// Printing invitations to last two gustes
console.log("Invitaton to the the last teo gusts");
gusts.forEach(lasttwo => console.log(`Luckely ${lasttwo}, you are invited to dinner`));

//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

gusts.pop();
gusts.pop();

console.log("Empty list", gusts);
