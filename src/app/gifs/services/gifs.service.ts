import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsSearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _queryHistory: string[] = [];
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = '2guOPBZNDawWyVnC1i62NHQ2zqRGO47R';

  public results: Gif[] = [];

  constructor(private http: HttpClient) {
    this._queryHistory =
      JSON.parse(localStorage.getItem('query_history')!) ?? [];
    this.results =
      JSON.parse(localStorage.getItem('last_searched_gifs')!) ?? [];
  }

  get queryHistory() {
    return [...this._queryHistory];
  }

  addQueryToHistory(query: string = '') {
    query = query.trim().toLowerCase();
    if (!this._queryHistory.includes(query)) {
      this._queryHistory.unshift(query);
      this._queryHistory = [...this._queryHistory].splice(0, 10);
      localStorage.setItem('query_history', JSON.stringify(this._queryHistory));
    }
    this.searchGifs(query);
  }
  searchGifs(query: string) {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', '10')
      .set('bundle', 'sticker_layering');
    this.http
      .get<GifsSearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((res) => {
        this.results = res.data;
        localStorage.setItem(
          'last_searched_gifs',
          JSON.stringify(this.results)
        );
      });
  }
}
