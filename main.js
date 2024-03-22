//Queston#17 
var gusts = ["Esha, Ayesha,Fatima"];
console.log("Dear", gusts, "I have found a bigger dinner table");
//Adding new value at beginning
gusts.unshift("Shahnawaz");
console.log(gusts);
//Get a middle index 
var middleIndex = Math.floor(gusts.length / 2);
console.log(gusts);
//Adding value at ending
gusts.push("Zain");
console.log(gusts);
//Adding a new guest to middle index array
gusts.splice(middleIndex, 0, "Aqsa");
//Print message to updated list
console.log("Updated list of our Gusts");
//seeking invitation one by one
gusts.forEach(function (oneguest) { return console.log("Hello ".concat(oneguest, ", would you like to come dinner with me")); });
//Inform that only 2 guests is invited
console.log("Unfortunatily, the new dinner table wont arrive on time, so I can only inviteteo guests dinner with me");
//Using while_loop to remove guests from array
while (gusts.length > 2) {
    var removegusts = gusts.pop();
    console.log("Sorry, ".concat(removegusts, " I can not invite you at dinner"));
}
// Printing invitations to last two gustes
console.log("Invitaton to the the last teo gusts");
gusts.forEach(function (lasttwo) { return console.log("Luckely ".concat(lasttwo, ", you are invited to dinner")); });
gusts.pop();
gusts.pop();
console.log("Empty list", gusts);
