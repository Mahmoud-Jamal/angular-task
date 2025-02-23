import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('https://api.restful-api.dev/objects');
  }
  removeItem(id: string): Observable<any> {
    return this.http.delete(`https://api.restful-api.dev/objects/${id}`);
  }
  addItem(obj: object): Observable<any> {
    return this.http.post('https://api.restful-api.dev/objects', obj);
  }
}
