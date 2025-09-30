// Temperture Converter
function convertToFahrenheit(celsius: number): number{
    const result = (9/5) * celsius + 32;
    return result;
}

// Greeting Generator
function greetUser(firstName: string, lastName: string): string{
    const result = "Hi," + firstName + " " + lastName + "!";
    return result;
}

// Rectangle Area Calculator
function calculateArea(width: number, height: number){
    const result = width * height;
    return result;
}

// Simple Sum
function addNumbers(a: number, b: number): number{
    const result = a + b;
    return result;
}

//Function calls:
console.log(convertToFahrenheit(15));
console.log(greetUser("Anna", "Miller"))
console.log(calculateArea(4,5))
console.log(addNumbers(10,15));
