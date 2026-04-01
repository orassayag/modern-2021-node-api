const httpConfig = require('config').get('http');

const app = require('../../src/httpServer')();

let server;

exports.mochaHooks = {
  async beforeAll() {
    server = app.listen(httpConfig.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Express App Listening on Port ${httpConfig.port}`);
    });
  },

  async afterAll() {
    await server.close();
  },

  async beforeEach() {
    Promise.resolve();
  },

  async afterEach() {
    Promise.resolve();
  },
};
