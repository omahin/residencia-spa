import { Component } from '@angular/core';
import { MovieModel } from 'src/app/model/movie.model';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent {

  output = '';

  movieList = [
    new MovieModel("Rambo", "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/97/40/18/20527154.jpg"),
    new MovieModel("ET", "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/95/16/34/20384584.jpg"),
    new MovieModel("Back to the Future", "https://upload.wikimedia.org/wikipedia/pt/9/97/BackFuturePoster.jpg"),
  ]

  getResult(text: string) {
    this.output = text;
  }

}
