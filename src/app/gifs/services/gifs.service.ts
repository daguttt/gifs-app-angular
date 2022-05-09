import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _queryHistory: string[] = [];
  constructor(private http: HttpClient) {}
  get queryHistory() {
    return [...this._queryHistory];
  }
  addQueryToHistory(query: string = '') {
    query = query.toLowerCase();
    if (!this._queryHistory.includes(query)) {
      this._queryHistory.unshift(query);
      this._queryHistory = [...this._queryHistory].splice(0, 10);
      console.log(this._queryHistory);
    }
    this.searchGifs();
  }
  searchGifs() {
    this.http
      .get(
        'https://api.giphy.com/v1/gifs/search?api_key=2guOPBZNDawWyVnC1i62NHQ2zqRGO47R&q=dragon%20ball%20z&limit=10'
      )
      .subscribe((res: any) => console.log(res.data));
  }
}
