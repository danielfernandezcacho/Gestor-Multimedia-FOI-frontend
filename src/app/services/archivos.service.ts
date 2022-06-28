import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {
  apiUrl: string = 'https://gestor-multimedia-api.herokuapp.com/archivo/';
  apiUrlSubir: string = 'https://gestor-multimedia-api.herokuapp.com/archivo/subir';
  //apiUrlIDXCategoria: string = 'https://gestor-multimedia-api.herokuapp.com/archivo/categoria/';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // Show lists of item
  list(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(catchError(this.handleError));
  }

  // listarXID(id: any): Observable<any>{
  //   return this.httpClient.get(`{this.apiUrlIDXCategoria}/${id}`).pipe(catchError(this.handleError));
  // }

  create(data: any): Observable<any> {
    return this.httpClient
      .post(this.apiUrlSubir, data)
      .pipe(catchError(this.handleError));
  }

  // Delete
  delete(id: any): Observable<any> {
    return this.httpClient
      .delete(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

}
