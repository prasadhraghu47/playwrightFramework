const { Script } = require("vm");

module.exports = {
  default: {
    require: ['features/step-definitions/**/*.ts', 'world/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress'],
    paths: ['features/**/*.feature']
  }
};