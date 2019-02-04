import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artists: any[] = [];

  constructor(private _spotifyService: SpotifyService) { }

  buscar(termino: string) {
    this._spotifyService.getArtist(termino).subscribe(response => {
      this.artists = response;
    });
  }

}
