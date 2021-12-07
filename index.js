// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
const genMD = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter the title of your repo.',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please enter the description of this application.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions.',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Enter usage instructions.',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Choose the license for this application',
            choices: ['MIT','Mozilla','Apache','GPLv2','None'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Please enter any contribution data. If not applicable, response with N/A.',
            name: 'contributors',
        },
        {
            type: 'input',
            message: 'Please enter testing details. If not applicable, respond with N/A.',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'For any potential questions, enter your email address.',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter your Github username.',
            name: 'github',
        },
    ])
    .then((response) =>
        fs.writeFile(`README2.md`,genMD(response), error => error ? console.log(error) : console.log('Your README has been created!'))
    );