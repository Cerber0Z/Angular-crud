import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-editar-movie',
  templateUrl: './editar-movie.component.html',
  styleUrls: ['./editar-movie.component.css']
})
export class EditarMovieComponent implements OnInit {

  @Input() id: number | undefined;

  

  constructor() { }

  ngOnInit(): void {
   
  }

 
}
