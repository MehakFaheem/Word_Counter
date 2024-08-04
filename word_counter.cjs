"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import the inquirer module, which is a command line interface for node js
var inquirer_1 = require("inquirer");
//declare a constant "answers" and assign it to the realut of inquirer.prompt function
var answers = await inquirer_1.default.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter you sentece to count the words. "
    }
]);
var words = answers.Sentence.trim().split("");
//print the array of words to the console
console.log(words);
//print the words count of the sentence to the console
console.log("Your sentence word count is ".concat(words.length));
