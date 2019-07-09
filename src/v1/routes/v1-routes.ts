import { Request, Response, Router } from 'express';
class V1Routes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    private config(): void {
        this.router.get('/', (req: Request, res: Response ) => {
            res.status(200).send({ message: 'V1 Works!'});
        });
        // Add children nested routes using
        // this.router.use();
    }
}

export const v1Routes = new V1Routes().router;
