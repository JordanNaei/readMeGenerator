// function to generate markdown for README
function generateMarkdown(data) {
var readMeCompleteBody =`  
# ${data.title}

# Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description:
![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")

    ${data.descripe}
## Installation:
    ${data.install}
## Usage:
    ${data.use}
## Contributing:
    ${data.contribute}
## Tests:
    ${data.test}
## License:
    Please visit us at the following for more information with regrads the license.

-[License](https://opensource.org/licenses/${data.license})

## Questions:
    For more information about this project, please visit the correponding GitHub repository
    at the following link:

- [GitHub Profile](https://github.com/${data.username})

For additional information and questions, please do not hesitate to reach me via email at:
    ${data.email}.
`
return readMeCompleteBody;
}

module.exports = {generateMarkdown};
