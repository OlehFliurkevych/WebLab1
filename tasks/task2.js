'use strict';

function doesHaveSubline(str, str1) {
    console.log("Line : " + str);
    console.log("Entered substrate : " + str1);
    console.log();
    if (str.indexOf(str1) == -1) {
        console.log("This line doesn't contains entered substrate");
    } else {
        console.log("This line contains entered substrate");
    }
}

var text1 = "Node.js";
var substrate1 = 'w';

var text2 = "Node.js is a very powerful JavaScript-based platform.";
var substrate2 = "is";

console.log("~~~~~~~~~~~~~~~~~~~~Example 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
doesHaveSubline(text1, substrate1);
console.log("~~~~~~~~~~~~~~~~~~~~Example 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
doesHaveSubline(text2, substrate2);





