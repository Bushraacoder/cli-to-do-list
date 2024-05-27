#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = []; // Initialize the todolist as an array of strings
let conditions = true;
console.log(chalk.magenta.bold("\n \t welcome to codewithalish to-do-list\n"));
while (conditions) {
    let addtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.blue("Enter your new task:")
        }
    ]);
    todolist.push(addtask.task);
    console.log(chalk.yellow.italic(`${addtask.task} task added to the To-do list successfully!`));
    let addmoretask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.blue("Do you want to add more tasks?"),
            default: false
        }
    ]);
    conditions = addmoretask.addmore;
}
console.log(chalk.yellow.italic("Your updated to-do list: "), todolist);
