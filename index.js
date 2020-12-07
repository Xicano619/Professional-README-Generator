const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your projects name?',
        name: 'title'

    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description'

    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        choices:  ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: 'licence'

    },
    {
        type: 'input',
        message: 'What are your installations instructions?',
        name: 'installation'

    },
    {
        type: 'input',
        message: 'What is your application used for?',
        name: 'usage'

    },
    {
        type: 'input',
        message: 'Do you have external contributing developers? If so, please input their information.',
        name: 'credits'

    },
    {
        type: 'input',
        message: 'Do you have testing commands/instructions?',
        name: 'tests'

    },
    {
        type: 'input',
        message: 'Whats your email address?',
        name: 'email'

    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github'

    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err): console.log('Success!');
    })
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
    writeToFile('ReadME.md', generateMarkdown(data))
    })
}

// function call to initialize program
init();