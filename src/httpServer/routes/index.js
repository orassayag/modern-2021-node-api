const configRoutes = require('./configRoutes');

module.exports = (app) => {
  configRoutes(app).then();
};
