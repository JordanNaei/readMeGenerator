const fs = require("fs");
const util = require("util");
const bs = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

const questions =
  [
    {
      type: "input",
      message: "Provide the project title?",
      name: "title"
    },
    {
      type: "input",
      message: "Provide a brief discreption of the project?",
      name: "descripe"
    },

    {
      type: "input",
      message: "Provide instalation instructions for there is any? Please provide 'noInstructions' if no instructions is needed",
      name: "install"
    },
    {
      type: "input",
      message: "Provide a meaningful information descriping how this application is used?",
      name: "use"
    },
    {
      type: "input",
      message: "Provide contributors to the project, if any?",
      name: "contribute"
    },
    {
      type: "input",
      message: "Provide testing information for this project, if any?",
      name: "test"
    },
    {
      type: "checkbox",
      message: "Select your project License from the options below?",
      choices: [
        "Apache",
        "MIT",
        "ISC",
        "GNU GPLv3",
        "GNU AGPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "The Unlicense"
      ],
      name: "license"
    },
    {
      type: "input",
      message: "Provide the GitHub Username for this project?",
      name: "username"
    },
    {
      type: "input",
      message: "Provide the main email address to contact for more iformation about the project?",
      name: "email"
    }
  ];

function getUserInput() {
  return inquirer.prompt(questions);
}

async function init() {
  try {
    const userResponse = await getUserInput();
    const generatedReadMe = bs.generateMarkdown(userResponse);
    await writeFileAsync("ReadMe.md", generatedReadMe);
    console.log("success");
  } catch (err) {
    console.log(err);
  }
}

init();

// inquirer
//   .prompt(questions).then(function (resp) {
//     console.log(resp);
//     return resp;
//   }).then(function (resp) {
//     var getIt = bs.generateMarkdown(resp);
//     console.log(getIt);
//     return getIt;
//   }).then(function (getIt) {

//     fs.writeFile("log.md", getIt, function (err) {
//       if (err) {
//         return console.log(err);
//       }
//       console.log("Success!");
//     });
//   })




