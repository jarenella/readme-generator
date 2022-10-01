// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let licenseLink = "";
function renderLicenseLink(license) {
  if (license == "MIT License") {
    licenseLink = "[MIT] https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT"
  }
  else if (license == "Apache 2.0 License") {
    licenseLink = "[Apache 2.0] https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0"
  }
  else if (license == "Boost Software License 1.0") {
    licenseLink = "[Boost Software 1.0] https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt"
  }
  else if (license == "No License") {
    licenseLink = "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function that generates markdown for README vvv
function generateMarkdown(data) {
  renderLicenseLink(data.license);

  return `# ${data.title}

${data.description}

# Table of Contents

- [Installation](#Installation)

- [Usage Information](#Usage-Information)

- [Contribution guidelines](#Contribution-guidelines)

- [Test instructions](#Test-instructions)

- [License](#License)

# Installation

${data.installation}

# Usage Information

${data.usageInformation}

# Contribution guidelines

${data.contribution}

# Test instructions

${data.testInstructions}

# License

${licenseLink}

# Questions?

- GitHub: ${data.githubName}

- Email: ${data.email}


`;
}
//function that generates markdown for README ^^^

module.exports = generateMarkdown;
