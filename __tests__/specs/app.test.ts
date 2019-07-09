import request from 'supertest';
import app from '../../src/app';
describe( 'GET /random-url', () => {
    it('return 404', () => {
        request(app).get('/random-url')
            .expect(404);
    });
});
