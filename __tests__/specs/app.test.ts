import request from 'supertest';
import application from '../../src/app';
describe('GET /random-url', () => {
  it('return 404', (done) => {
    request(application.app)
      .get('/random-url')
      .expect(404)
      .then(() => {
        done();
      })
      .catch((err) => {
        expect(err).toBeFalsy();
      });
  });
});
