import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import lusca from 'lusca';
import morgan from 'morgan';
import environment from './config/environment';
import { passportConfig } from './config/passport';
import { appRoutes } from './routes/app-routes';
import { isProdEnv } from './util';
import { enforceHttps } from './util/enforce-https';

class App {
    public app: express.Application;
    public environment: any;
    public DEFAULT_SERVER_PORT: number = 3000;

    constructor() {
        this.app = express();
        this.environment = environment.load();
        this.app.set('port', process.env.SERVER_PORT || this.DEFAULT_SERVER_PORT);
        this.config();
    }

    private config(): void {
        // Set the express config
        if (isProdEnv) {
            this.app.use(enforceHttps({ trustProtoHeader: true }));
        }
        this.app.use(morgan('tiny'));

        this.app.use(compression());

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

        this.app.use(passportConfig.initialize());
        /*
        If enabled, be sure to use session() before passport.session() to ensure that the login session is restored
        in the correct order.

        this.app.use(passportConfig.session());
         */

        this.app.use(lusca.xframe('SAMEORIGIN'));
        this.app.use(lusca.xssProtection(true));

        this.app.disable('x-powered-by');

        // routing
        this.app.use(appRoutes);
    }
}

export default new App().app;
