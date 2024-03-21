//Question#15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//Question 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite them on dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//Initial guest list
var guest_list = ["Sufyan"];
// Function to print invitation messages
var guests = ["Sufyan"];
for (var guest in guests) {
    console.log("Dear {guest},\nYou are cordially invited to dinner at my place on Saturday night. Please RSVP.");
}
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
var dontCome = guests[0];
console.log(dontCome, "can not make it");
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guest_list.splice(0, 1, "Sufyan Yaseen");
// Print a second set of invitation messages, one for each person who is still in your list.
var gusts = ["Esha, Ayesha,Fatima"];
for (var _i = 0, gusts_1 = gusts; _i < gusts_1.length; _i++) {
    var guests_1 = gusts_1[_i];
    console.log("Dear", guests_1, "You are invited to dinner");
}
console.log("Dear", guests, "I have found a bigger dinner table");
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
