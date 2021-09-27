import {Router} from 'express';
import movieController from '../controllers/movieController'


class MovieRouter {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/',movieController.list);
        this.router.get('/:id',movieController.getOne);
        this.router.post('/',movieController.create);
        this.router.delete('/:id',movieController.delete);
        this.router.put('/:id',movieController.update);
    }
}

const movieroutes = new MovieRouter();
export default movieroutes.router;