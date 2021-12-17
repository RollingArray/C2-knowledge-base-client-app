import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
	// Interceptor constructor
	constructor(
		
	) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	  ): Observable<HttpEvent<any>> {
		const ct = req.detectContentTypeHeader();
		return ct != null && ct.startsWith('text/plain')
			? next.handle(req.clone({
					setHeaders: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(req.body)
				}))
			: next.handle(req);
	  }
}
