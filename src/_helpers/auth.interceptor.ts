import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/s-token-storage/token-storage.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

/**
 * @author Eloi Martorell Martín
 */

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const tokenStorage = window.sessionStorage.getItem("authtoken");
    if (tokenStorage != null) {
      request = request.clone({
        headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + tokenStorage),
      });
      console.log("Estas logeado.");
    }else{
      console.log("NO estás logeado.")
    }
    return next.handle(request);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
