//Question # 27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// Define variable
let alienclor = "green";

//If the alien is green, print a message that the player earned 5 points.

if (alienclor === "green"){
    console.log("you shot down green alien you have earned 5 points.");
}

//If the alien is yellow, print a message that the player earned 10 points.

else if(alienclor === "yellow"){
    console.log("you shot down yellow alien you have earned 10 points");
}

//If the alien is red, print a message that the player earned 15 points.

else if (alienclor === "red"){
    console.log("you shot down you have 15 points")
}

//Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alienclor2 = "yellow";

if (alienclor2 === "green"){
    console.log("you shot down green alien you have earned 5 points");
}
else if (alienclor2 === "yellow"){
    console.log("you shot down yellow alien you have earned 10 points");
}
else if(alienclor2 === "red"){
    console.log("you shot down red alien you have earned 15 points");
}

