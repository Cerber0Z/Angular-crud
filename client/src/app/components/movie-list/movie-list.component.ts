import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/models/Movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any= [];

  title="";
  year="";
  time="";
  leg="";
  dataestreno="";
  country="";
  
  
  movie: any = {
    mov_id: 0,
    mov_title: '',
    mov_year: 0,
    mov_time: 0,
    mov_lang:'',
    mov_dt_rel:'',
    mov_rel_country: ''
};

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(){
    this.moviesService.getAllMovies().subscribe(
      res => {
        this.movies = res;
      },
      err => console.error(err)
    )
  }

  deleteMovies(id: number){
    this.moviesService.deleteMovie(id)
    .subscribe(
      res => {
        this.getMovies();
      },
      err => console.error(err)
    );
  }

  editMovie(id: number){
   if(id!){
     this.moviesService.getMovie(id)
      .subscribe(
        res => {
           console.log(res)
            this.movie = res;
        },
        err => console.error(err)
      )
   }
  }

  updateMovie(){
    
    console.log("este es el id: " + this.movie.mov_id)
    console.log("este es el titulo "+this.movie.mov_title)
    console.log("este es el año "+this.movie.mov_year)
    this.movie.mov_title = this.title
    this.movie.mov_year = this.year
    this.movie.mov_time = this.time
    this.movie.mov_lang = this.leg
    this.movie.mov_dt_rel = this.dataestreno
    this.movie.mov_rel_country = this.country

    this.moviesService.updateMovie(this.movie.mov_id, this.movie)
      .subscribe(
        res => {
          console.log(res)
          window.location.reload();
        },
        err => console.error(err)
      )
    
  }

}
