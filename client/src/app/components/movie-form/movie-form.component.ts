import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movies';
import { MoviesService } from '../../services/movies.service'

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  movie: Movie = {
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
  }

  saveNewMovie(){
    delete this.movie.mov_id;
    this.moviesService.saveMovie(this.movie)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      );
  }

}
