import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _queryHistory: string[] = [];
  private apiKey: string = '2guOPBZNDawWyVnC1i62NHQ2zqRGO47R';

  public results: any[] = [];

  constructor(private http: HttpClient) {}

  get queryHistory() {
    return [...this._queryHistory];
  }

  addQueryToHistory(query: string = '') {
    query = query.trim().toLowerCase();
    if (!this._queryHistory.includes(query)) {
      this._queryHistory.unshift(query);
      this._queryHistory = [...this._queryHistory].splice(0, 10);
      console.log(this._queryHistory);
    }
    this.searchGifs(query);
  }
  searchGifs(query: string) {
    this.http
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`
      )
      .subscribe((res: any) => (this.results = res.data));
  }
}
