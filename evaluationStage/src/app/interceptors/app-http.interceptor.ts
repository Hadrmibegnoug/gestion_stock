import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  if (!req.url.includes("/auth/login")) {
        let clonedRequest = req.clone({
          headers: req.headers.set('Authorization', 'Bearer '+auth.accessToken)
        });

    return next(clonedRequest);
  }
  return next(req);
};


// import { AuthService } from './../services/auth.service';
// import { HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';


// @Injectable()
// export class AppHttpInterceptor implements HttpInterceptor {

//   constructor(private authService:AuthService){}

//   intercept(req: HttpRequest<unknown>, next: HttpHandler) {
//     // Clone the request to add the new header.
//     if (!req.url.includes("/auth/login")) {
//        let clonedRequest = req.clone({
//           headers: req.headers.set('Authorization', 'Bearer '+this.authService.accessToken)
//         });
//         // Pass the cloned request instead of the original request to the next handle.
//         return next.handle(clonedRequest);
//     } else {
//       return next.handle(req);
//     }
//   }
// }
