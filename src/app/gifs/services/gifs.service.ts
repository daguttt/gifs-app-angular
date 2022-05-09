import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _queryHistory: string[] = [];
  get queryHistory() {
    return [...this._queryHistory];
  }
  addQueryToHistory(query: string) {
    if (this._queryHistory.includes(query)) return;
    this._queryHistory.unshift(query);
    console.log(this._queryHistory);
  }
}
