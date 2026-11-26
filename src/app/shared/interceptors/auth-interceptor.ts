import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const apiKey = 'ae888c96-50e6-427e-b45c-274bca57bb36';

  if (!req.url.startsWith('https://bookingapi.stepacademy.ge/api/')) {
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: {
      'X-STEP-KEY': apiKey
    }
  });

  return next(authReq);
};