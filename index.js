var readlineSync = require('readline-sync');

var username=readlineSync.question("What is Your name?");
console.log("Hi",+ username +"!");
