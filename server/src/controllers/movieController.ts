import {Request, Response} from 'express'
import pool from '../database';

class MovieController {
   public async list (req:Request, res:Response) { 
        const movies = await pool.query('SELECT * FROM movie')  
        res.json(movies)
    }
    //Find one movie
    public async getOne (req:Request, res:Response):Promise<any>{
        const id = req.params.id;
        const movie = await pool.query('SELECT * FROM movie WHERE mov_id = ?', id)
        if(movie.length > 0){
            return res.json(movie[0]);
        }
        res.status(404).json({text: 'Movie not found'});
    }

    public async create (req:Request, res:Response):Promise<void> {
        console.log(req.body)
        await pool.query('INSERT INTO movie set ?', [req.body]);
        res.json({message: 'create movie succes'});
    }

    public async delete (req:Request, res:Response):Promise<void> {
         const id = req.params.id;
         await pool.query('DELETE FROM movie WHERE mov_id = ?', id);
         res.json({message: 'Movie deleted succes'});
    }

    public async update (req:Request, res:Response):Promise<void> {
        const id = req.params.id;
        await pool.query('UPDATE movie SET ? WHERE mov_id = ?', [req.body, id]);
        res.json({message: 'Movie updated succes'});
    }
}

const movie = new MovieController();
export default movie;