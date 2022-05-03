import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @ViewChild('currentSearch') currentSearch!: ElementRef<HTMLInputElement>;
  searchGifs() {
    console.log(this.currentSearch.nativeElement.value);
    this.currentSearch.nativeElement.value = '';
  }
}
