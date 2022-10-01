// TODO: Include packages needed for this application DONE
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input DONE
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Project description:"
    },
    {
        type: "input",
        name: "installation",
        message: "Installation instructions:"
    },
    {
        type: "input",
        name: "usageInformation",
        message: "Usage information:"
    },
    {
        type: "input",
        name: "contribution",
        message: "Contributibution guidelines:"
    },
    {
        type: "input",
        name: "testInstructions",
        message: "Test instructions:"
    },
    {
        type: "list",
        name: "license",
        message: "License type:",
        choices: ["MIT License", "Apache 2.0 License", "Boost Software License 1.0", "No License"]
    },
    {
        type: "input",
        name: "githubName",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    }
];

// TODO: Create a function to write README file DONT DO THIS??
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app DONE??
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        //console.log(data.description) <-- this works
        const userInput = generateMarkdown(data);
        fs.writeFile("readme.md", userInput, (err) => {err ? console.log(err) : console.log("success")})
    })
}

// Function call to initialize app
init();
