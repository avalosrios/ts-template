import request from 'supertest';
import application from '../../../src/app';
describe('v1', () => {
    it('works', () => {
        return request(application.app).get('/v1')
            .expect(200)
            .then( (res: any) => {
                expect(res.body.message).toBe('V1 Works!');
            });
    });
});
