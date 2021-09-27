import {Router} from 'express';
import { indexController } from '../controllers/indexController'

class IndexRouter {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/',indexController.index);
    }
}

const indexroutes = new IndexRouter();
export default indexroutes.router;