module.exports = {
  sss: {
    url: process.env.AWS_URL || 'https://s3.amazon.com',
  },
  http: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 4001,
  },
  // secrets: {
  //   role1: process.env.PASS_ROLE1 || 'trololo',
  // },
};
