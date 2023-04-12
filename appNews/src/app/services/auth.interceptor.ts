import { LoginService } from 'src/app/services/login.service';
import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private LoginService: LoginService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ) : Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.LoginService.getToken();
    if (token != null) {
      authReq = authReq.clone({
        setHeaders: {Authorization: `Bearer ${token}`},
      })
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];
