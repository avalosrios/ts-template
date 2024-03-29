import request, { Response } from 'supertest';
import application from '../../../src/app';

describe('v1', () => {
  describe('when not authenticated', () => {
    it('returns 401', () => {
      return request(application.app).get('/v1').expect(401);
    });
  });

  describe('when authenticated', () => {
    it('works', (done) => {
      request(application.app)
        .get('/v1')
        .auth(process.env.API_KEY ?? '', process.env.API_SECRET ?? '')
        .expect(200)
        .then((res: Response) => {
          const { message } = res.body as { message: string };
          expect(message).toBe('V1 Works!');
        })
        .then(() => {
          done();
        })
        .catch((error) => {
          expect(error).toBeFalsy();
        });
    });
  });
});
