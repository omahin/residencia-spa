import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { RemoteMovie, RemoteSerie } from 'src/app/model/streaming.model';
import { StreamingService } from 'src/app/services/streaming.service';

@Component({
  selector: 'app-remote-movie',
  templateUrl: './remote-movie.component.html',
  styleUrls: ['./remote-movie.component.scss']
})
export class RemoteMovieComponent implements OnInit {

  movies: RemoteMovie[] = []
  series: RemoteSerie[] = []
  constructor(private readonly streamingService: StreamingService) { }

  ngOnInit(): void {
    this.streamingService.getStreamingList().pipe(take(1)).subscribe(results => {
      this.movies = results.movies;
      this.series = results.series;
    })
  }

}
