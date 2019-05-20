'use strict';

function recursiveFunction(arr, x, start, end) {

    if (start > end) return false;

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) return true;

    if (arr[mid] > x) {
        return recursiveFunction(arr, x, start, mid - 1);
    } else {
        return recursiveFunction(arr, x, mid + 1, end);
    }
}

function binarySearch(arr, x) {

    console.log("Array: [" + arr + "]");
    console.log("Number: " + x);

    if (recursiveFunction(arr, x, 0, arr.length - 1))
        console.log("Array contains this element");
    else console.log("Array doesn't contain this element");
    console.log();
}

var arr1 = [6, 7, 34, 78, 89];
var x1 = 9;

var arr2 = [5, 13, 34, 52, 65, 12, 208];
var x2 = 34;

binarySearch(arr1, x1);
binarySearch(arr2, x2);








