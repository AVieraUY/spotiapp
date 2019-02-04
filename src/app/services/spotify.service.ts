import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _httpClient: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAwmU8MAmPfNPSO6u6xEjMNw15ImiprRUvMb_AM4HQx2GECZxIMwOQeRmv9QQYyUEJMoxrKVaH2J4mmmfA'
    });

    return this._httpClient.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(map(response => response['albums'].items));
  }

  getArtist(termino: string) {
    return this.getQuery(`search/?q=${termino}&type=artist&limit=20`).pipe(map(response => response['artists'].items));
  }
}
