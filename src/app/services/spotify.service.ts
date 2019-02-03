import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _httpClient: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD9uEzuR_gweMcc-G2zlZTCKYBnmEomqwCNeijzTShsEwMFGlVUOIeAEWb8rjRXbo-gw23y3n0m_-nVL8s'
    });

    return this._httpClient.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }

  getArtist(termino: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD9uEzuR_gweMcc-G2zlZTCKYBnmEomqwCNeijzTShsEwMFGlVUOIeAEWb8rjRXbo-gw23y3n0m_-nVL8s'
    });

    return this._httpClient.get(`https://api.spotify.com/v1/search/?q=${termino}&type=artist`, {headers});
  }
}
