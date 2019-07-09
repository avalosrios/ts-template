import request from 'supertest';
import app from '../../../src/app';
describe('v1', () => {
    it('works', () => {
        return request(app).get('/v1')
            .expect(200)
            .then( (res: any) => {
                expect(res.body.message).toBe('V1 Works!');
            });
    });
});
