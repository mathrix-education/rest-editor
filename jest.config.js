/**
 * The ES Modules which need to be transpiled into CommonJS modules through babel-jest.
 * @link https://www.npmjs.com/package/@angular-builders/jest
 */
const esModules = [];

module.exports = {
  globals: {
    "ts-jest": {
      "allowSyntheticDefaultImports": true
    }
  },
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules.join('|')})`],
  "transform": {
    "^.+\\.js$": "babel-jest"
  }
};
