import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _queryHistory: string[] = [];
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
  }
}
