document.write('<br>--------question 1...Write a program that takes a positive integer from user -------<br>')

document.write("<br>")
// Prompt the user to enter a positive integer
let num = prompt("Enter a positive integer:");

// Convert the input to a number
num = Number(num);

// Compute the rounded value, floor value, and ceiling value of the number
let roundedNum = Math.round(num);
let floorNum = Math.floor(num);
let ceilNum = Math.ceil(num);

// Display the original number, rounded value, floor value, and ceiling value in the browser
document.write("<h3>Number: " + num + "</h3>");
document.write("<h3>Rounded off value: " + roundedNum + "</h3>");
document.write("<h3>Floor value: " + floorNum + "</h3>");
document.write("<h3>Ceiling value: " + ceilNum + "</h3>");


document.write("<br>")

document.write('<br>--------question 2...2. Write a program that takes a negative floating pointnumber from user -------<br>')

document.write("<br>")
// Prompt the user to enter a negative floating-point number
let num1 = prompt("Enter a negative floating-point number:");

// Convert the input to a number
num1 = Number(num1);

// Compute the rounded value, floor value, and ceiling value of the number
let roundedNum1 = Math.round(num1);
let floorNum1 = Math.floor(num1);
let ceilNum1 = Math.ceil(num1);

// Display the original number, rounded value, floor value, and ceiling value in the browser
document.write("<h3>Number: " + num1 + "</h3>");
document.write("<h3>Rounded off value: " + roundedNum1 + "</h3>");
document.write("<h3>Floor value: " + floorNum1 + "</h3>");
document.write("<h3>Ceiling value: " + ceilNum1 + "</h3>");


document.write("<br>")

document.write('<br>--------question 3 ..Write a program that displays the absolute value of a number .E.g. absolute value of -4 is 4 & absolute value of 5 is 5  -------<br>')

document.write("<br>")

// Prompt the user to enter a number
let num2 = prompt("Enter a number for absolute value:");

// Convert the input to a number
num2 = Number(num2);

// Compute the absolute value of the number using the Math.abs() function
let absNum = Math.abs(num2);

// Display the absolute value of the number in the browser
document.write("<h3>Absolute value of " + num2 + " is " + absNum + "</h3>");

document.write("<br>")

document.write('<br>--------question 4 Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:  -------<br>')

document.write("<br>")
// Generate a random number between 1 and 6 to simulate a dice roll
let diceValue = Math.floor(Math.random() * 6) + 1;

// Display the value of the dice in the browser
document.write("<h3>The dice rolled a " + diceValue + "</h3>");


document.write("<br>")

document.write('<br>--------question 5 .. Write a program that simulates a coin toss using random()-------<br>')

document.write("<br>")
// Generate a random number between 0 and 1 to simulate a coin toss
let coinValue = Math.floor(Math.random() * 2);

// If the coin value is 0, it's heads. Otherwise, it's tails.
let coinResult = coinValue === 0 ? "heads" : "tails";

// Display the value of the coin in the browser
document.write("<h3>The coin landed on " + coinResult + "!</h3>");


document.write("<br>")

document.write('<br>--------question 6 Write a program that shows a random number between 1 and 100 in your browser. -------<br>')

document.write("<br>")

// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Display the random number in the browser
document.write("<h3>The random number is " + randomNumber + ".</h3>");

document.write("<br>")

document.write('<br>--------question 7 Write a program that asks the user about his weight.-------<br>')

document.write("<br>")
// Prompt the user to enter their weight
let weight = prompt("What is your weight?");

// Remove any non-numeric characters from the input
weight = weight.replace(/[^\d.-]/g, "");

// Convert the weight to a number and round it to one decimal place
weight = Number(weight);
weight = weight.toFixed(1);

// Check if the input had "kg" or "kilogram" in it and convert to kg if needed
if (weight.endsWith("kg") || weight.endsWith("kilograms")) {
  weight = weight.slice(0, -2);
}
if (weight.endsWith("kilogram")) {
  weight = weight.slice(0, -7);
}
weight = Number(weight);

// Display the weight in the browser
document.write("<h3>Your weight is " + weight + " kilograms.</h3>");


document.write("<br>")

document.write('<br>--------question 8 Write a program that stores a random secret number from 1 to 10 . -------<br>')

document.write("<br>")
// Generate a random secret number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to input a number between 1 and 10
let userInput = prompt("Guess the secret number between 1 and 10!");

// Convert the user input to a number
userInput = Number(userInput);

// Check if the user input equals the secret number
if (userInput === secretNumber) {
  document.write("<h3>Congratulations! You guessed the secret number " + secretNumber + "!</h3>");
} else {
  document.write("<h3>Sorry, the secret number was " + secretNumber + ". Please try again!</h3>");
}


document.write("<br>")

