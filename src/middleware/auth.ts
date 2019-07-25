import { NextFunction, Request, Response } from 'express';
import { passportConfig } from '../config/passport';

export const basicAuth = (req: Request, res: Response, next: NextFunction ) => {
    passportConfig.authenticate(
        'basic',
        { session: false },
        ( err: any, user: any, info: any ) => {
            if (err || !user) {
                return res.status(401).send({
                    error: err ? err.message : 'Unauthorized',
                    message: 'Unauthorized',
                });
            }
            next();
        },
    )(req, res, next);
};
