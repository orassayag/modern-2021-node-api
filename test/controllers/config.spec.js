const chai = require('chai');

const { expect } = chai;

const chaiHttp = require('chai-http');

const app = require('../../src/httpServer')();

chai.use(chaiHttp);
chai.should();

let config;

describe('get config', () => {
  it('get config, success', async () => {
    const res = await chai.request(app)
      .get('/api/config/')
      .set('content-type', 'application/json');
    res.should.have.status(200);
    const { body } = res;
    // Todo compare with JSON Schema
  });
});

describe('post config', () => {
  it('success', async () => {
    const reqBody = {
      a: 'a',
      b: 'B',
    };
    const res = await chai.request(app)
      .post('/veryhiddenapi/config/')
      .set('content-type', 'application/json')
      .send(reqBody);
    res.should.have.status(201);
    const { body } = res;
    body.should.be.an('object');
  });
});
