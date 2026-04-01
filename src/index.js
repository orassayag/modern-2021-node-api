const httpConfig = require('config').get('http');
const server = require('./httpServer')();

try {
  server.listen(httpConfig.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Express App Listening on Port ${httpConfig.port}`);
  });
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(`An error occurred: ${JSON.stringify(error)}`);
  process.exit(1);
}
