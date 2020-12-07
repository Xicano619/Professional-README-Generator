// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## ![badges](https://img.shields.io/badge/license-${data.license}-green)

## Description 
${data.description}
---

## Table of Contents (Optional):
Add a table of contents if your README is very long that way the user finds what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
---

## Installation
 What are your installations instructions? 
 ${data.installation}
---

## Usage 
Using screenshots, show examples for use and lay out instructions.
---

## Credits
Collaborators (links): ${data.credits} 

Github profiles: 

LinkedIn: 

Email: 
----

## License
${data.license} 
Protect your intellectual property by letting other developers know what they CAN and CANNOT do with your project. 
Need help choosing a license, check out: [https://choosealicense.com/](https://choosealicense.com/)
---

## Tests 
Provide the test for your application and show examples on how to run them.
${data.tests}
---

## Questions 

Contact Information: 

Email: ${data.email} 

Github username: ${data.github}

`;
}

module.exports = generateMarkdown;
