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
      'Authorization': 'Bearer BQA6Fddavs3RH9NNdmD7yliRU7o4SdJB8eVKKGM-fGd2_vkHWHoX6pD0nmuxUs9--wK5rSO_hMzT5H1gcnA'
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

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=UY`).pipe(map(response => response['tracks']));
  }
}
