// FUNCTION #1

// Creating a function that adds two number together then multiplies their sum by 5, returning the calculated value to the caller
function calcNum(numOne, numTwo) {
    var resultNum = (numOne + numTwo) * 5;
    return resultNum;
}

// Creating 3 tests for function calcNum, calling the function calcNum to get the calculated value using the specified arguements and storing the returned value as an integer into a new variable, console logging the returned value to the console
var whatIsNum = calcNum(45, 100);
console.log(whatIsNum);

var numTest = calcNum(3, 17);
console.log(numTest);

var numMath = calcNum(26, 67);
console.log(numMath);

// FUNCTION #2

// Creating a function that checks whether a string is more than 10 characters long or is less or equal to 10 characters
function wordLength(word) {
    if (word.length > 10) {
        return true;
    } else if (word.length <= 10) {
        return false;
    } else {
        console.log("Input is invalid");
    }
}

// Creating 3 tests for the function wordLength, calling the function wordLength to check the character length of the specified arguement and storing the returned value as a boolean into a new variable, console logging the returned value to the console
var wordOne = wordLength("potato");
console.log(wordOne);

var wordTwo = wordLength("innotechCollege");
console.log(wordTwo);

var wordThree = wordLength("JavaScript");
console.log(wordThree);

// FUNCTION #3

// Creating a function that checks to see which element(s) in an array begins with "ph" and returns the element(s) that begins with "ph"
function stringArray(strings) {
    var checkString = strings.startsWith("ph");
    return checkString;
}

// Creating 3 tests for the function stringArray, setting up an array of strings, calling the function stringArray and only storing the first element in the array that begins with "ph" into a new variable, console logging the first element in the array that begins with "ph" to the console

// Test #1 - Creating an array of names as strings
var names = ["angelica", "rose", "daphne", "phebe", "phineas"];

var myName = names.find(stringArray);
console.log(myName);

// Test #2 - Creating an array of courses as strings
var courses = ["psychology", "philosophy", "physiotherapy", "publicRelations", "photography"];

var course = courses.find(stringArray);
console.log(course);

// Test #3 - Creating an array of acidicity levels as strings
var acidicity = ["ph0", "ph1", "ph2", "ph3", "ph4", "ph5", "ph6", "ph7"];

var acidic = acidicity.find(stringArray);
console.log(acidic);