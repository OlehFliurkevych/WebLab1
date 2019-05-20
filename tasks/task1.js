'use strict';

var text = "Node.js is a very powerful JavaScript-based platform built on Google Chrome's JavaScript V8 Engine.";

var array = text.split(' ');

for (var i = 0; i < array.length; i++) {
    console.log((i + 1) + " word of text : " + array[i]);
}

