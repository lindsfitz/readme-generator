const fs = require('fs');
const fsPromises = require('fs').promises;
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter your name.',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Where are you located?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Enter a bio.',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'Please enter your Linkedin URL.',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'Please enter your Github URL.',
            name: 'github',
        },
    ])
    .then((response) =>
        fsPromises.writeFile(`${response.username}.html`,
        `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Portfolio</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
            <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        </head>
        
        <body>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4" id='username'>${response.username}</h1>
                    <p class="lead" id='bio'>${response.bio}</p>
                    <hr class="my-4">
                    <p id='location'>${response.location}</p>
                </div>
        
                <ul class="list-group">
                    <a href="${response.linkedin}" class="list-group-item list-group-item-action">LinkedIn</a>
                    <a href="${response.github}" class="list-group-item list-group-item-action">Github</a>
                  </ul>
            </div>
        
        </body>
        
        </html>`, error => error ? console.log(error) : console.log('Your portfolio has been created!'))
    );