const fs = require('fs');
const path = require('path');

const root = path.resolve(`${__dirname}/../..`);
const commit = process.argv[2];
const directory = `${root}/dist/rest-editor`;
const packageJson = `${directory}/package.json`;
const packageJsonVal = JSON.parse(fs.readFileSync(packageJson).toString());
const version = `${packageJsonVal.version}-${commit}`;

packageJsonVal.version = version;
fs.writeFileSync(packageJson, JSON.stringify(packageJsonVal, undefined, 2));
