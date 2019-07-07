import { Request, Response, Router } from 'express';

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
    }

}

export const appRoutes = new AppRoutes().router;
