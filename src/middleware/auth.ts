import { NextFunction, Request, Response } from 'express';
import { passportConfig } from '../config/passport';

export const basicAuth = (req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  passportConfig.authenticate(
    'basic',
    { session: false },
    (err: Error, user: any, info: any) => {
      if (err || !user) {
        return res.status(401).send({
          error: err?.message ?? 'Unauthorized',
          message: 'Unauthorized',
        });
      }
      next();
    }
  )(req, res, next);
};
