"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(string){
//     if (string==='red')
//         return 'red is the color of fruit punch';
//   else if (string==='orange')
//         return 'orange is also a fruit';
//     else if (string==='yellow')
//         return 'yellow is the color of lemons';
//     else if (string==='green')
//         return 'green is the color of limes';
//     else if (string==='blue')
//         return 'blue is the color of water';
//     else
//         return 'I don\' know anything about ' + string
// }
// console.log(analyzeColor('red'));
// console.log(analyzeColor('blue'));
// console.log(analyzeColor('purple'));
// console.log(analyzeColor('green'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


function analyzeColor(str) {
    switch (str.toLowerCase()) {
        case 'red':
            return 'red is the color of fruit punch';

        case 'orange':
            return 'orange is also a fruit';

        case 'yellow':
            return 'yellow is the color of lemons';

        case 'green':
            return 'green is the color of limes';

        case 'blue':
            return 'blue is the color of water'

        default:
            return ('I don\'t know anything about ' + str)

    }
}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let color = prompt('Quick tell me a color and I\'ll tell you what I know about it!');

alert(analyzeColor(color));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
let calculateTotal = function(luck,price) {
    switch(luck) {
        case (1):
            return (price - (price * .10));
        case (2):
            return (price - (price * .25));
        case (3):
            return(price - (price * .35));
        case (4):
            return(price - (price * .50));
        case (5):
            return(0);
        default:
            return(price);
    }
}


calculateTotal(1, 100);
calculateTotal(2,100);
calculateTotal(3,100);
calculateTotal(4,100);
calculateTotal(5,100);
calculateTotal(0,100);
calculateTotal('asdf',50);
calculateTotal(8,100);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);

let totalBill=Number(prompt('What was your bill total?'));

alert ('Your lucky number is '+luckyNumber);
alert ('Your Total was $'+totalBill);
alert('your new total is $'+ calculateTotal(luckyNumber,totalBill));




/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
    function isEvenOrOdd(num) {
        if (isNaN(num)) {
            return ('your input is not the correct data type to determine Even or Odd');
        }else if (num % 2 !== 0) {
            return (num + ' is an odd number.');
        }else if (num % 2 ===0) {
            return (num + ' is an even Number');
        }
    }
    function plus100(num){
        if (isNaN(num)) {
            return ('your input is not the correct data type to add 100');
        }else {
            return ('your number plus 100 is ' + (num + 100));
        }
    }
    function isNegativeOrPositive(num) {
        if (num > 0) {
            return (num + ' is a positive number!');
        } else if (num < 0) {
            return (num + ' is a negative number');
        } else if (num === 0) {
        return ('Your number is 0');
    } else if (isNaN(num)) {
        return ('your input is not the correct data type to determine Negative or Positive');
    }
}

    function getNumber() {
    if (confirm('would you like to enter a Number?') === false) {
        return alert('That\'s too bad.');
    } else{
        let userInput = Number(prompt('Enter the Number here.'));
        alert(isEvenOrOdd(userInput));
       alert(plus100(userInput));
        alert(isNegativeOrPositive(userInput));
    }
}



getNumber();

