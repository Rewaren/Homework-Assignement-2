# Homework-Assignement-2

Objective: The goal of these tasks is to practice working with variables, types, and strings. These exercises will help you improve your TypeScript skills and prepare you for more complex tasks. 
Create a new empty project in IDE and initialize it with the command: npm init -y 
Then in your project, create a TypeScript file where you will implement the solutions for Tasks 1–9. Separate each task with a comment like this: // Task 1 
Recommendations: 
Run your code from IDE to make sure it works correctly. 
This will help you: 
- see the output in the console; 
- catch any errors early; 
- understand how variables, operators, and data types behave in practice. 
Task 1: Calculate the area of a rectangle 
You need to print the area of a rectangle to the console. 
Steps: 
● Declare two variables: length and width. 
● Initialize them with integer values from 2 to 5. 
● Declare a third variable to store the area. 
● Initialize the area as (length * width). 
● Print the area to the console. 
�� Remember: variable names should be clear and meaningful so that your code is easy to read for both yourself and others. 
Example code:

�� Note: example shown (with names like rectanLength, width, and area) is for demonstration only and not perfect. You should write your own code and use better variable names. 
Task 2 
Implement the calculation of the Body Mass Index (BMI) using the formula: BMI = weight / (height * height) 
Where: 
● Weight — weight in kilograms. 
● Height — height in meters. 
Use the number type in this task. Print the result to the console.
Example code: 

Task 3 Temperature Converter 
Implement a "Temperature Converter". Create a variable to store the temperature in degrees Celsius and assign it any value. Calculate the temperature in degrees Fahrenheit using the formula: 
F = (9/5) * C + 32 
where C is the temperature in degrees Celsius. 
Example code: 

Task 4 Age Check with Boolean 
Create a variable for age. Check if the age is greater than or equal to 18, and assign the result to a boolean variable. 
Example code:

Task 5: String Concatenation 
Create two variables of type string. Use concatenation to combine these strings and display the result on the screen. 

Task 6: Age Check with Strict Equality 
The === operator is called strict equality. It checks both the value and the type. 
● Declare a variable userAge and assign it any integer from 10 to 20. ● Declare a variable requiredAge and assign it the value 18. 
● Declare a variable hasAccess and assign it the result of userAge === requiredAge. 
● Print hasAccess to the console. 
● Try different values for userAge so that in one case the result is true and in another — false. 
Task 7: Strict Equality with Different Types 
● Declare a variable userInput and assign it the string '18'. 
● Declare a variable actualAge and assign it the number 18. 
● Create two variables: 
isEqualLoose = userInput == actualAge 
isEqualStrict = userInput === actualAge 
● Print both variables. 
�� Why are the results different?
● == is a loose comparison. It tries to convert types before comparing. '18' == 18 becomes 18 == 18 → true 
● === is a strict comparison. It compares both value and type, without conversion. '18' (string) and 18 (number) are not the same type → false 
Task 8: Type Conversion from String to Number 
Create a variable of type string that contains a numerical value. Convert this string to a number and display the result. Also, show the original string. 

Task 9: Type Conversion from Number to String 
Create a variable of type number and convert it to a string. Display both the original number and the converted string on the screen. 
�� Submitting the result 
Copy your entire TypeScript code into https://gist.github.com/ 
Share the link in the “homework-progress-file” in google drive against your name 
Task 10 (Advanced): String Cleanup & Character Access 
Goal: Practice trimming extra spaces and reading specific characters from a string without changing the original meaning. 
What you’ll practice 
● Removing extra spaces with trim(). 
● Getting characters by position with charAt().
Quick reference 
trim() 
● What it does: Removes whitespace only at the start and end of a string. ● Whitespace it removes: spaces, tabs \t, newlines \n, carriage returns \r, etc. ● What it does not do: It does not remove spaces inside the string. 
charAt(index) 
● What it does: Returns the single-character string at the given 0-based index. ● Out of range: Returns "" (empty string) if index is negative or ≥ length. ● Common pattern: last character is at str.charAt(str.length - 1). 
Task 
- Create a string with extra spaces and clean it up with trim(). 
- Display the first and last characters of the trimmed string using charAt(). - Show the string in both lowercase and uppercase. 
This is a self-assessment task — it does not need to be submitted.
