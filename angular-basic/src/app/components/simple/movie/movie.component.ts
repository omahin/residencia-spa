import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/model/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor() { }

  @Input()
  movieData!: MovieModel

  ngOnInit(): void {
  }

}
