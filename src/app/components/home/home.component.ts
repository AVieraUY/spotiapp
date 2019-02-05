import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { loadInternal } from '@angular/core/src/render3/util';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor(private _spotifyService: SpotifyService) {

    this.loading = true;
    this.error = false;

    this._spotifyService.getNewReleases().subscribe(response => {
      this.newReleases = response;
    }, (errorService => {
      this.error = true;
      this.errorMessage = errorService.error.error.message;
    }));

    this.loading = false;
   }
}
