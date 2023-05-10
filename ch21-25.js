// CHAP 21-25
// Q 1
var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");
var fullName = firstName + " " + lastName
alert("Hello " + fullName + "!");
 
// Q 2
var mblModel = prompt("Enter you favourite mobile phone model: ")
document.write("My favourite phone is: " + mblModel)
document.write("<br>")
document.write("Length of string: " + mblModel.length)

// Q 3
var cntryName = "Pakistani"
document.write("String: " + cntryName + "<br>")
document.write("Index of letter 'n':" + cntryName.indexOf('n'))

// Q 4
var indexNum = "Hello World"
document.write("String: " + indexNum + "<br>")
document.write("Last index of 'l': " + indexNum.lastIndexOf("l"))

// Q 5
var indexNum = "Pakistani"
document.write("String: " + indexNum + "<br>")
document.write("Character at index 3: " + indexNum.charAt(3))

// Q 6
var firstName1 = prompt("Enter your first name: ");
var lastName1 = prompt("Enter your last name: ");
alert("Hello " + firstName1.concat(" "+lastName1) + "!");

// Q 7
var cityName = "Hyderabad"
document.write("City: " + cityName +"<br>")
document.write("After replacement: " + cityName.replace("Hyder","Islam"))

// Q 8
var message = "Ali and Sami are best friends. They play cricket and football together."
document.write(message.replace(/and/g,"&"))

// Q9
var numValue1 = "472"
var numValue2 = 427
document.write("Value: " + numValue1 + "<br>")
document.write("Type: " + typeof(numValue1)+ "<br>")
document.write("Value: " + numValue2 + "<br>")
document.write("type: " + typeof(numValue2) + "<br>")

// Q 10
var userInput3 = prompt("Enter anything :)")
document.write("User input: " + userInput3 + "<br>")
document.write("Upper case: " + userInput3.toUpperCase())

// Q 11
var userInput = prompt("Type all in lower case")
document.write("User input: " + userInput + "<br>")
document.write("Title case: " + userInput.charAt(0).toUpperCase() + userInput.slice(1))

// Q 12
var numValue1 = 35.36
document.write("Number: " + numValue1 + "<br>" + "Result: ")
document.write(numValue1.toString().slice(0,2) + numValue1.toString().slice(3,5))

// Q 13
var username = prompt("Enter your username:");
var specialSymbols = /[@,.!]/;
if (specialSymbols.test(username)) {
alert("Please enter a valid username without any special symbols!");
} else {
alert("Your username is: " + username);
}

// Q 14
let myArray = ["cake","apple pie","cookie","chips","patties"];
let userInput2 = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
let userInput1 = userInput2.toLowerCase()
let iString = false;
for(let i=0;i<myArray.length;i++){
    if(myArray[i] === userInput1){
    iString = true;
    break;
    }
}
if(iString){
    alert(userInput1 + " is available in our bakery.")
} else{
    alert("We are sorry. " + userInput1 + " is not available in our bakery.")
}

// Q 15
function containsOnlyAlphabetsAndNumbers(str) {
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        if (!(charCode >= 48 && charCode <= 57) && !(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) { 
            return false;
        }
    }
    return true;
}

function startsWithAlphabet(str) {
    var charCode = str.charCodeAt(0);
    return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);  
}

function isValidPassword(password) {
    return (containsOnlyAlphabetsAndNumbers(password) && startsWithAlphabet(password) && password.length >= 6);
}

var password = prompt("Enter a valid password (must contain alphabets and numbers, not start with a number, and be at least 6 characters long):");
while (!isValidPassword(password)) {
    password = prompt("Invalid password. Please enter a valid password (must contain alphabets and numbers, not start with a number, and be at least 6 characters long):");
} 

document.write("Valid password entered: " + password);

// Q 16
var university = "University of Karachi";
university = university.split("")
for(var i=0;i<university.length;i++){
    university[i] = university[i] + "<br/>";
}
document.write(university.join(""))

// Q 17
var userInput4 = prompt("Enter anything :)")
var userInput12 = userInput4.charAt(userInput4.length-1)
document.write("User input: " + userInput + "<br>")
document.write("Last character of input: " + userInput12)
document.write('this is a demo page i want to write about the disaster og my life happening today')

// Q 18
var str = "The quick brown fox jumps over the lazy dog"
var word = "the"
let count = 0
let newStr = str.toLowerCase()
var gap = newStr.split(" ")
for(var i=0;i<gap.length;i++){
    if(gap[i] === word){
        count++;
    }
}
document.write("Text: " + str + "<br>")
document.write("There are " + count + " occurrence(s) of the word 'the' ")