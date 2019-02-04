import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor(private _spotifyService: SpotifyService) { }

  buscar(termino: string) {
    this.loading = true;

    this._spotifyService.getArtists(termino).subscribe(response => {
      this.artists = response;
      this.loading = false;
    });
  }

}
