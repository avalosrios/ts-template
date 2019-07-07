import logger from '@zenrez/logger';
import { NextFunction, Request, Response } from 'express';
export const enforceHttps = (options?: any): (req: Request, res: Response, next: NextFunction) => void => {
    return (req: Request, res: Response, next: NextFunction) => {
        let isHttps = req.secure;

        if (!isHttps && options.trustProtoHeader) {
            isHttps = req.headers['x-forwarded-proto'] &&
                req.headers['x-forwarded-proto'].toString().substring(0, 5) === 'https';
        }

        if (isHttps) {
            next();
        } else {
            // Only redirect GET methods
            if (req.method === 'GET' || req.method === 'HEAD') {
                const host = options.trustXForwardedHostHeader ?
                    (req.headers['x-forwarded-host'] || req.headers.host) : req.headers.host;
                res.redirect(301, 'https://' + host + req.originalUrl);
            } else {
                logger.warn('Not secure HTTPS request', { req });
                res.status(403).send('Please use HTTPS when submitting data to this server.');
            }
        }
    };
};
