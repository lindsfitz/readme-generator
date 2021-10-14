// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === 'Mozilla') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  } else if (license === 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else if (license === 'GPLv2') {
    return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  } else {return}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`
  } else if (license === 'Mozilla') {
    return `(https://opensource.org/licenses/MPL-2.0)`
  } else if (license === 'Apache') {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'GPLv2') {
    return `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } else {return}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This repository has the ` + (license) + ` license. 
    For additional information, please view the [license description]` + renderLicenseLink(license)
  } else {
    return `This repository does not have a license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ${renderLicenseBadge(response.license)}

  ## Description
 ${response.description}


  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation

  *Follow these steps to properly install this application:*

  ${response.install}

  ## Usage

  **How to use this application:**

  ${response.usage}

  ## License

  ${renderLicenseSection(response.license)}
      

  ## Contributors

  ${response.contributors}

  ## Questions
  
  *For any additional questions or feedback about this application:*

  Feel free to reach out via email or contact me on Github:

  Email:
  [${response.email}](mailto:${response.email})

  Github:
  [${response.github}](https://github.com/${response.github})`;
}

module.exports = generateMarkdown;


// MOZILLA [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// MIT  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// Apache  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// GPLv2  [![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)