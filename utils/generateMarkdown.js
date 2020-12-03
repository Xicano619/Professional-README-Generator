// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## ![badges](https://img.shields.io/badge/license-mit-green)
## Description 
${data.description}

## Table of Contents (Optional):
Add a table of contents if your README is very long that way the user finds what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${data.installation} 
What are your installations instructions? 

## Usage 
${data.installation} 
Using screenshots, show examples for use and lay out instructions.
To install necessary dependencies, run the following command:
npm i
## Credits
${data.credits}  
Collaborators (links):

Github profiles: ${data.github} 

LinkedIn: 

Email: ${data.email} 

## License
${data.license} 
Protect your intellectual property by letting other developers know what they CAN and CANNOT do with your project. 
Need help choosing a license, check out: [https://choosealicense.com/](https://choosealicense.com/)

---
## Tests 
Provide the test for your application and show examples on how to run them.
${data.tests}

`;
}

module.exports = generateMarkdown;
