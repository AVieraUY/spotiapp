import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent {

  @Input() items: any[];

  constructor(private _router: Router) { }

  viewArtist(item: any) {

    let idArtist;

    if (item.type === 'artist') {
      idArtist = item.id;
    } else {
      idArtist = item.artists[0].id;
    }

    this._router.navigate(['/artist', idArtist]);
  }

}
