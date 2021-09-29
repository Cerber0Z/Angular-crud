import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/Movies'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  API_URI = 'http://localhost:4000/appi';

  constructor(private http:HttpClient) { }

  getAllMovies(){
    return this.http.get(`${this.API_URI}/movie`);
  }

  getMovie(id: number){
    return this.http.get(`${this.API_URI}/movie/${id}`);
  }

  deleteMovie(id: number){
    return this.http.delete(`${this.API_URI}/movie/${id}`);
  }

  saveMovie(movie:Movie){
    return this.http.post(`${this.API_URI}/movie`,movie);
  }

  updateMovie(id: number, updateMovie: Movie){
    return this.http.put(`${this.API_URI}/movie/${id}`,updateMovie);
  }

}
