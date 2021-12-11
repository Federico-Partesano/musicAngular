import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITunesResponse } from 'src/module/iTunes';

const { iTunesEndpoint } = environment;

@Injectable({
  providedIn: 'root',
})
export class ItunesService {
  currentSong: undefined | string = 'router funziona!!';
  searchBar: string = '';
  constructor(private httpClient: HttpClient) {}

  search(term: string) {
    return this.httpClient
      .get(`${iTunesEndpoint}/search?term=${term}`)
      .toPromise() as Promise<ITunesResponse>;
  }
  setCurrentSong = (song: string) => {
    this.currentSong = song;
  };

  getCurrentSong = () => this.currentSong;
}
