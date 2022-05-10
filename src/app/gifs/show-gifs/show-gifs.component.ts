import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-show-gifs',
  templateUrl: './show-gifs.component.html',
})
export class ShowGifsComponent {
  constructor(private gifsService: GifsService) {}
  get gifs() {
    return this.gifsService.results;
  }
}
