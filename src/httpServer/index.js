const express = require('express');
const bodyParser = require('body-parser');
const initializeRoutes = require('./routes');

let expressApp;

const init = () => {
  if (expressApp) {
    return expressApp;
  }
  expressApp = express();
  expressApp.use(bodyParser.json());
  initializeRoutes(expressApp);
  return expressApp;
};

module.exports = init;
