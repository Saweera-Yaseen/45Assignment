//Question#12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var fvrtfrnd = ["Faiza, Rafia, Hina"];
for (var _i = 0, fvrtfrnd_1 = fvrtfrnd; _i < fvrtfrnd_1.length; _i++) {
    var frnds = fvrtfrnd_1[_i];
    console.log("Dear", frnds, "Thank you for joining us today");
}
;
//Question#13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ["Tesla Model S", "Honda CBR1000RR"];
for (var _a = 0, transportation_1 = transportation; _a < transportation_1.length; _a++) {
    var message = transportation_1[_a];
    console.log("vehicle", message, "I would like to own a Honda motorcycle.");
}
;
//Question#14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests = ["Ashfaq, Erum,Faiza"];
for (var _b = 0, guests_1 = guests; _b < guests_1.length; _b++) {
    var guest = guests_1[_b];
    ;
}
{
    console.log("Dear", guests, "I would like to invite you at dinner");
}
//Question#16 Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
var unavailableguest = "Ashfaq";
var msgF = "Unfortunatily {Ashfaq}!, can't makr it!";
console.log(msgF, (unavailableguest = unavailableguest));
