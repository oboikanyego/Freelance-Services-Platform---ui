import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { Loading } from '../services/loading';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loadingService: Loading) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.setLoading(true);
    return next.handle(req).pipe(
      finalize(() => this.loadingService.setLoading(false))
    );
  }
}
