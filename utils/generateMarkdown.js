// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let licenseLink = "";
function renderLicenseLink(license) {
  if (license == "MIT License") {
    licenseLink = "[MIT] https://choosealicense.com/licenses/mit/"
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


`;
}
//function that generates markdown for README ^^^

module.exports = generateMarkdown;
