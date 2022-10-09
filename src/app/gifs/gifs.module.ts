import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { ShowGifsComponent } from './components/show-gifs/show-gifs.component';
import { GifsPageComponent } from './pages/gifs-page/gifs-page.component';

@NgModule({
  declarations: [SearchComponent, ShowGifsComponent, GifsPageComponent],
  imports: [CommonModule],
  exports: [GifsPageComponent],
})
export class GifsModule {}
