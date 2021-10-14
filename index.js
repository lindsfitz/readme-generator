// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README

const fs = require('fs');
const fsPromises = require('fs').promises;
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
            choices: ['MIT'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Please enter any contribution data.',
            name: 'contributors',
        },
        {
            type: 'input',
            message: 'Tests?',
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
        fsPromises.writeFile(`README.md`,
        `# ${response.title}

        ## Description
            ${response.description}

        ![badge](${licenselink})

        ## Table of Contents 
            * [Installation](#installation)
            * [Usage](#usage)
            * [Questions](#questions)
            * [License](#license)
        
        ## Installation

            **Follow these steps to properly install this application:**

            ${response.install}

        ## Usage
            **How to use this application:**
            ${response.usage}

        ## License
            

        ## Contributors
            ${response.contributors}

        ## Questions
            **For any additional questions or feedback about this application**
            Feel free to reach out via email or contact me on Github:

            Email:
            [${response.email}](mailto:${response.email})

            Github:
            [${response.github}](https://github.com/${response.github})
        
        `, error => error ? console.log(error) : console.log('Your README has been created!'))
    );