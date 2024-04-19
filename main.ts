// Question 37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// Making a function

function make_shirt (size: string = "Large", printMessage: string = "I Love Typescript"){
    
    console.log(`Creationg ${size} shirt with the ${printMessage} prints on shirt.`)

}

// Calling a function by defult
make_shirt();

// Calling a function now with Medium size defult message
make_shirt("Medium")

// Calling a function now with small size and also different print message
make_shirt("Small", "I Love JavaScript")