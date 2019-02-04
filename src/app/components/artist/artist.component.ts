import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent {

  artist: any = {};
  loading: boolean;

  constructor(private _activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService) {

    this.loading = true;

    this._activatedRoute.params.subscribe(params => {
     this.getArtist(params['id']);
    });
   }

   getArtist(id: string) {
     this.loading = true;
     this._spotifyService.getArtist(id).subscribe(response => {
       this.artist = response;
       this.loading = false;
      });
   }

}
