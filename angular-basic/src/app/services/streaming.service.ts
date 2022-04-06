import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StreamingList } from '../model/streaming.model';

@Injectable({
  providedIn: 'root'
})
export class StreamingService {

  constructor(private http: HttpClient) { }

  getStreamingList(): Observable<StreamingList> {
    return this.http.get<StreamingList>('https://run.mocky.io/v3/e07d34a3-899a-402b-b083-102c49c60075');
  }
}
