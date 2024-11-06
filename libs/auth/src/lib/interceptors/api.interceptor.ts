import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthCommonService } from '../services';
import { LoginResult } from '../auth.model';

export const authApiInterceptor: HttpInterceptorFn = (req, next) => {
  const authCommonService = inject(AuthCommonService);
  const loginResult = authCommonService.getLoginResult() as LoginResult;
  const nonAuthUrls = ['register', 'login'];
  const urlPattern = new RegExp(`/${nonAuthUrls.join('|')}$`);

  if (!urlPattern.test(req.url)) {
    const reqWithToken = req.clone({
      setHeaders: {
        Authorization: `Bearer ${loginResult.token}`,
      },
    });
    return next(reqWithToken);
  }
  return next(req);
};
