const fs = require('fs');
const {terminal} = require('terminal-kit');

const versioningTypes = ['Major', 'Minor', 'Patch'];
const packageJsonPath = './package.json';
const constantLibPath = './libs/shared/data/constants/src/index.ts';

function handleError(err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
}

function getCurrentVersion() {
  const response = fs.readFileSync(packageJsonPath, 'utf8');
  return JSON.parse(response).version;
}

function getNewVersion(currentVersion, type) {
  const versionParts = currentVersion.split('.');

  for (let i = 0; i < versionParts.length; i++) {
    if (i === +type) versionParts[i] = +versionParts[i] + 1 + '';
    if (i > +type) versionParts[i] = '0';
  }

  return versionParts.join('.');
}

function updatePackageJSON(version) {
  console.log('Updating package.json.');
  const response = fs.readFileSync(packageJsonPath, 'utf8');
  const data = JSON.parse(response);
  data.version = version;
  const updatedPackageJson = JSON.stringify(data, null, 2);
  fs.writeFileSync(packageJsonPath, updatedPackageJson);
}

function updateConstantsLib(version) {
  console.log('Updating constants lib.');
  const response = fs.readFileSync(constantLibPath, 'utf8');
  const regex = /appVersion: '\d*.\d*.\d*'/;
  const updatedConstantObject = response.replace(
    regex,
    `appVersion: '${version}'`,
  );
  fs.writeFileSync(constantLibPath, updatedConstantObject);
}

(function main() {
  const currentVersion = getCurrentVersion();
  terminal.cyan(
    `Select the type of new version! (current version: ${currentVersion})`,
  );
  terminal.singleColumnMenu(versioningTypes, (err, response) => {
    handleError(err);
    const version = getNewVersion(currentVersion, response.selectedIndex);
    terminal.green(`\nUpdating versions to -> ${version}\n`);
    updatePackageJSON(version);
    updateConstantsLib(version);
    process.exit();
  });
})();
