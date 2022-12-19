// Write a JavaScript function to print (console.log()) the “Hello World” message

const helloWorldPrinting = () => {
console.log("Hello World");
}

// Write a function that returns the square of a number

function squareOfNum (a) {
console.log (Math.pow(a,2));
return Math.pow(a,2);
}

// Write a function to convert Celsius to Fahrenheit and return the conversion

const cToF = (c) => {
return (c*1.8 + 32);
}

// Write a function to print a random number. Check out Math.random()

function randomNum () {
    console.log(Math.random());
}

// Write a function named tellFortune that:

const tellFortune = (num_of_children, partner_name, geo_loacation, job_title) => {
alert(`You will be a ${job_title} in ${geo_loacation}, and married to ${partner_name} with ${num_of_children} kids.`);
}

// tellFortune(3,"Gab","Binyamina","Tech industry")
// tellFortune(8,"Yuval","TLV","musician")
// tellFortune(1,"Sharon","Eilat","real estate")

// Write a function that takes in a 7 digits number and returns the number as a string with commas as thousand separators. For example, the number 1234567 should be returned as "1,234,567"

function addCommaToSevenDigitNum (a) {
let last_3_digits = a % 1000;
let mid_3_digits = Math.floor((a / 1000) % 1000);
let first_digit = Math.floor(a / 1000000)
console.log(`${first_digit},${mid_3_digits},${last_3_digits}`)    
}

//Write a function that takes in a string and returns the string with all vowels removed. For example, the string "Hello, World!" should be returned as "Hll, Wrd!".

const noVowels = (a) => {
console.log(a.replace(/[aeiou]/gi, ''));  
}

// Write a function that takes in a number and returns the number rounded to the nearest integer. For example, the number 4.6 should be returned as 5, and the number 4.4 should be returned as 4. (check out Math methods and properties)

function roundToClosestNum (a){
console.log(Math.round(a));
}

//Write a function that takes in a string and returns a new string with the first letter of each word capitalized. For example, the string "hello, world!" should be returned as "Hello, World!".

const capitalizedFirstLetterOfEachWord = (a) => {
    var splitStr = a.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    } 
    
    console.log(splitStr.join(' '))
}

// Save the hostname of the current URL as a variable (check location.hostname)  ||  Alert the sentence: “Hello, your hostname is _(your variable)_ . Welcome!”

function hostnamePrint () {
let hostname = location.hostname;  
console.log(`Hello, your hosname is _${hostname}_. Welcome!`) 
}

