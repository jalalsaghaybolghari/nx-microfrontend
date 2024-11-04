import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthCommonService } from '../services';
import { LoginResult } from '../auth.model';

@Injectable({ providedIn: 'root' })
export class AuthApiInterceptor implements HttpInterceptor {
  constructor(private authCommonService: AuthCommonService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginResult = this.authCommonService.getLoginResult() as LoginResult;
    const nonAuthUrls = ['register', 'login'];
    const urlPattern = new RegExp(`/${nonAuthUrls.join('|')}$`);

    if (!urlPattern.test(request.url)) {
      const reqWithToken = request.clone({
        setHeaders: {
          Authorization: `Bearer ${loginResult.token}`
        }
      });
      return next.handle(reqWithToken);
    }

    return next.handle(request);
  }
}
