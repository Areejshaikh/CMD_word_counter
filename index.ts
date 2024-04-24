#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


const tittle =  "Wellcome to Word Counter Application";
console.log( chalk.red(tittle))

const heading = "WORD COUNTER";
console.log(chalk.whiteBright.red (heading) ) 





    const answer : {sentence:string} = await  inquirer.prompt ({
            name: "sentence",
            message :"Write your paragraph here:",
            type:"input"
        })
    
        const wordCount =answer.sentence.trim().split(" ");
        const characterCount = answer.sentence.replace(/\s/g, "").split("").filter(wordCount => wordCount.length);
        const numericCounter = answer.sentence.replace(/\D/g, "").length;
        const spaceCounuter = answer.sentence.split(" ").length -1 ;

        console.log(chalk.cyanBright (`Word Counter : ${wordCount.length}`));
        console.log(chalk.greenBright (`Character Counter : ${characterCount.length}`));
        console.log(chalk.redBright (`Numeric Counter ${numericCounter}`));
        console.log(chalk.blueBright (`Space Counuter ${spaceCounuter}`));


        
