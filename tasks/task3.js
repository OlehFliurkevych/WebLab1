'use strict';

function factorial(x) {
    if (x == 0 || x == 1) {
        return 1;
    } else {
        return (x * factorial(x - 1));
    }
}

console.log("1! = " + factorial(1));
console.log("3! = " + factorial(3));
console.log("5! = " + factorial(5));
console.log("10! = " + factorial(10));
console.log("15! = " + factorial(15));




