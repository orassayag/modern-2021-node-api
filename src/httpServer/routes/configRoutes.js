const { createConfig, getConfig } = require('../controllers/configController');
const configSchema = require('../middleware/configSchema');

module.exports = async (app) => {
  app.get('/api/config/', getConfig);
  app.post('/veryhiddenapi/config/', configSchema, createConfig);
};
