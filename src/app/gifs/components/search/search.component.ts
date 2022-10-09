import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @ViewChild('currentSearch') currentSearch!: ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService) {}
  searchGifs() {
    const value: string = this.currentSearch.nativeElement.value;
    this.gifsService.addQueryToHistory(value);
    this.currentSearch.nativeElement.value = '';
  }
}
