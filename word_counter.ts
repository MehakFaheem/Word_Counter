//import the inquirer module, which is a command line interface for node js
import inquirer from "inquirer";

//declare a constant "answers" and assign it to the realut of inquirer.prompt function
const answers: {
    Sentence : string;
    } = await inquirer.prompt([
        {
            name : "Sentence",
            type: "input",
            message: "Enter you sentece to count the words. "
        }
    ])
    const words = answers.Sentence.trim().split("")

    //print the array of words to the console
    console.log(words);
     
    //print the words count of the sentence to the console
    console.log(`Your sentence word count is ${words.length}`);
    
    
