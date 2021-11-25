import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private _http: HttpClient) { }

  sendMail(body) {
   return this._http.post('http://localhost:3000/registro', body);
   }
}
