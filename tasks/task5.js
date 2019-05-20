'use strict';

var arr = [new Date("Jan 1, 2018 08:15:20"),
    new Date("Sep 3, 2019 10:15:10"),
    new Date("Oct 23, 2017 12:35:19"),
    new Date("Dec 31, 2017 18:14:10"),
    new Date("Oct 31, 2019 20:00:50")];


function getMaxDate(arr) {
    let maxDate = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxDate) {
            maxDate = arr[i];
        }
    }
    return maxDate;
}

console.log(getMaxDate(arr));
