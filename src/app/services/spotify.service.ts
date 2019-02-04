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
      'Authorization': 'Bearer BQB3A2AdFqh6d_AcMB-qofvk0boFZ-0svUvGPHyk_zVMMzef3fwzQGE1rjQGAKA0-InDkyR6EeiUX5sbc_Q'
    });

    return this._httpClient.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(map(response => response['albums'].items));
  }

  getArtists(termino: string) {
    return this.getQuery(`search/?q=${termino}&type=artist&limit=20`).pipe(map(response => response['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

}
