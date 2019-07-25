import { Request, Response, Router } from 'express';
import { basicAuth } from '../middleware/auth';
import { v1Routes } from '../v1/routes/v1-routes';

class AppRoutes {
    public router: Router = Router();

    constructor() {
       this.config();
    }

    private config(): void {
        // NOTE: This route should point to a controller
        this.router.get('/', (req: Request, res: Response ) => {
            res.status(200).send({ message: 'It Works! '});
        });
        this.router.use('/v1', basicAuth, v1Routes);
    }

}

export const appRoutes = new AppRoutes().router;
