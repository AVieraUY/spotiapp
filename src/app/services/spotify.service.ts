import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _httpClient: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD4Kkx7j10v6Q_M0vbkyth5FEfRZWMGw1lUWho4P9B3kIa4aHPXjyBrhMktFPKl-MIaNCaH-6SYMQ6ntU0'
    });

    return this._httpClient.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }
}
