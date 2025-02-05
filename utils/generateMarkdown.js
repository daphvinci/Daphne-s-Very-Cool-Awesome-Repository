// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
  return "";
}

  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let path = ""; 
    if (license === "MIT") {
      path = './utils/mit.md';
    }
    if (license === "GNU") {
      path = './utils/gnu.md';
    }
    if (license === "Apache") {
      path = '.utils/apache.md'
    }
    const text = fs.readFileSync(path, 'utf-8');
    return text;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge (data.license);
  const licenseText = renderLicenseSection(data.license);
  fs.writeFileSync("LICENSE", licenseText);


  return `# ${data.title}


`;
}

export default generateMarkdown;
