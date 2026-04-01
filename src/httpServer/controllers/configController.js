const {
  uploadConfig,
  downloadConfig,
} = require('../../services/s3Service');

const createConfig = async (req, res) => {
  const {
    body: {
      a, b, c, d,
    },
  } = req;
  await uploadConfig({
    a, b, c, d,
  });
  res.status(201).send();
};
const getConfig = async (req, res) => {
  const config = await downloadConfig();
  res.json(config);
};

module.exports = {
  createConfig,
  getConfig,
};
