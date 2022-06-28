import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const LOGIN_URL = 'https://gestor-multimedia-api.herokuapp.com/login/';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  //post a localhost:8181/login para logearnos
  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(
      LOGIN_URL,
      {
        username,
        password,
      },
      httpOptions
    );
  }
}
