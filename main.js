#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let correct = 0;
let incorrect = 0;
const quiz = await inquirer.prompt([
    {
        name: "q1", type: "list", message: chalk.rgb(242, 108, 5)("Q.1> Identify The tsconfig Command"),
        choices: ["npm init", "tsc --init", "tsc", "tsc init"]
    },
    {
        name: "q2", type: "list", message: chalk.hex('#a0fa05')("Q.2> How many kinds of Variable are there?"),
        choices: ["2", "3", "4", "5"]
    },
    {
        name: "q3", type: "list", message: chalk.rgb(242, 108, 5)("Q.3> which is not a deta type?"),
        choices: ["number", "if", "boolean", "string"]
    },
    {
        name: "q4", type: "list", message: chalk.hex('#a0fa05')("Q.4> In typeScript in which variable we can't change the value ?"),
        choices: ["let", "var", "cosnt", "all"]
    },
    {
        name: "q5", type: "list", message: chalk.rgb(242, 108, 5)("Q.5> What is extension for TypeScript ?"),
        choices: ["main.js", "main.ts", "main.tsc", "main.cmd"]
    },
    {
        name: "q6", type: "list", message: chalk.hex('#a0fa05')("Q.6> TypeScript compile down to"),
        choices: ["C++", "Java", "HTML", "JavaScript"]
    },
    {
        name: "q7", type: "list", message: chalk.rgb(242, 108, 5)("Q.7> Which of the following is valid command to compile TypeScript file ?"),
        choices: ["tsc main.ts", "tsc main.js", "tsc main.tsc", "ts main.ts"]
    },
    {
        name: "q8", type: "list", message: chalk.hex('#a0fa05')("Q.8> Which of the following is not true about TypeScript?"),
        choices: ["It Support Inheritance", "It Support Abstracr Class", "It Support Interfaces", "None of Above"]
    },
    {
        name: "q9", type: "list", message: chalk.rgb(242, 108, 5)("Q.9> TypeScript is __________ of JavaScript"),
        choices: ["Sub Set", "Super Set", "a and b both", "Union Set"]
    },
    {
        name: "q10", type: "list", message: chalk.hex('#a0fa05')("Q.10> Which method is used to add items in the end of an Array ?"),
        choices: [".pop()", ".push()", ".shift()", ".unshift()"]
    },
    {
        name: "q11", type: "list", message: chalk.rgb(242, 108, 5)("Q.11> Which method is used to add items in the begining of an Array ?"),
        choices: [".slice()", ".pop()", ".shift()", ".unshift()"]
    },
    {
        name: "q12", type: "list", message: chalk.hex('#a0fa05')("Q.12> Which method is used to Delete items in the end of an Array ?"),
        choices: [".pop()", ".splice()", ".push()", ".shift()"]
    },
    {
        name: "q13", type: "list", message: chalk.rgb(242, 108, 5)(`Q.13>

        let a = 5;
        Find the output below statement

        a = (a++ + ++a + 7 + --a + a++ + a);
        console.log(a)\n\n`),
        choices: ["37", "38", "39", "40"]
    },
    {
        name: "q14", type: "list", message: chalk.hex('#a0fa05')(`Q.14>
        
        let a:any = 25;
        let b:any = a;
        a = false
                                                                        
        if (a !== false && b == true){
            console.log("true condition");
        }
        else{
            console.log("false condition");
        }\n\n`),
        choices: ["true condition", "false condition", "Undefined", "Error"]
    },
]);
if (quiz.q1 == "tsc --init") {
    correct++;
}
else {
    incorrect++;
}
if (quiz.q2 == "3") {
    correct++;
}
else {
    incorrect++;
}
if (quiz.q3 == "if") {
    correct++;
}
else {
    incorrect++;
}
if (quiz.q4 == "cosnt") {
    correct++;
}
else {
    incorrect++;
}
if (quiz.q5 == "main.ts") {
    correct++;
}
else {
    incorrect++;
}
if (quiz.q6 == "JavaScript") {
    correct++;
}
else {
    incorrect++;
}
if (quiz.q7 == "tsc main.ts") {
    correct++;
}
else {
    incorrect++;
}
if (quiz.q8 == "None of Above") {
    correct++;
}
else {
    incorrect++;
}
if (quiz.q9 == "Super Set") {
    correct++;
}
else {
    incorrect++;
}
if (quiz.q10 == ".push()") {
    correct++;
}
else {
    incorrect++;
}
if (quiz.q11 == ".unshift()") {
    correct++;
}
else {
    incorrect++;
}
if (quiz.q12 == ".pop()") {
    correct++;
}
else {
    incorrect++;
}
if (quiz.q13 == "38") {
    correct++;
}
else {
    incorrect++;
}
if (quiz.q14 == "false condition") {
    correct++;
}
else {
    incorrect++;
}
if (correct === 14) {
    console.log(chalk.yellow("\tExcelent Work"));
    console.log(chalk.yellow("\tYou got (14/14)"));
    console.log(chalk.green(`\n\tYour Correct Answers are ${correct}`));
}
else if (correct >= 7 && correct <= 13) {
    console.log(chalk.magenta("\tGood! but keep practice you can do better then the result"));
    console.log(chalk.blueBright(`\n\tYour Correct Answers are ${correct}`));
    console.log(chalk.redBright(`\tYour Incorrect Answers are ${incorrect}`));
}
else {
    console.log(chalk.cyan(`\tNeed Improve!
        Fcuse on Your Studies work Hard 
        You can do better than your result`));
    console.log(chalk.red(`\n\tYour Correct Answers are ${correct}`));
    console.log(chalk.red(`\tYour Incorrect Answers are ${incorrect}`));
}
