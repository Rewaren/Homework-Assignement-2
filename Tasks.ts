// Task 1: Calculate the area of a rectangle
let rectangleLength = 2;
let rectangleWidth = 5;
let area = rectangleLength * rectangleWidth;
console.log( "The area of rectangle is ", area);

// Task 2: Calculate Body Mass Index (BMI)
let height = 1.65;
let weight = 50;
let bmi = weight / (height * height)
console.log ("Bmi is ", bmi);

// Task 3: Convert temperature from Celsius to Fahrenheit
let celsius = 20;
let fahrenheit = (9/5) * celsius + 32;
console.log("C is equal to " + fahrenheit + "F");

// Task 4: Check age with boolean
let age = 25;
let isAdult = age >= 18;
console.log("Is adult: ", isAdult);

// Task 5: Combine two strings
let firstName = "Mari";
let lastName = "Mets";
let fullName = firstName + " " + lastName;
console.log("Full name is: " + fullName);

// Task 6: Check age with strict equality
let userAge = 15;
let requiredAge = 18;
let hasAccess = userAge === requiredAge;
console.log(hasAccess);

// Task 7: Check strict equality with different types
let userInput = '18';
let actualAge = 18;
let isEqualLoose = userInput == actualAge;
console.log(isEqualLoose);
let isEqualStrict = userInput === actualAge;
console.log(isEqualStrict);

// Task 8: Convert string to number
let stringNumber = "18";
let convertedStringNumber = Number(stringNumber);
console.log("String value is: ", stringNumber);
console.log("Converted from String to Number: " + convertedStringNumber);

//Task 9: Convert number to string
let insertedNumber = 25;
let convertedNumberString = Number(insertedNumber);
console.log("Initial inserted number: ", insertedNumber)
console.log("Converted Number: " + convertedNumberString);