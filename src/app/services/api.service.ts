import {
    HttpClient,
    HttpParams,
    HttpRequest,
    HttpHeaders,
  } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';
  import { Injectable } from '@angular/core';
  
  @Injectable({
    providedIn: 'root',
  })
  export class ApiService {
    public server;
  
    constructor(public http: HttpClient) {}
  
    get<T>(
      path: string,
      params: HttpParams = new HttpParams(),
      contentType: string = null
    ): Observable<T> {
      return this.http
        .get<T>(`${this.server}${path}`, {
          headers: this.setHeaders(contentType),
          params,
        })
        .pipe(catchError(this.formatErrors));
    }
  
    post<T>(
      path: string,
      body: Object,
      params: HttpParams = new HttpParams(),
      contentType: string = null
    ): Observable<T> {
      return this.http
        .post<T>(`${this.server}${path}`, body, {
          headers: this.setHeaders(contentType),
          params,
        })
        .pipe(catchError(this.formatErrors));
    }
  
    put<T>(
      path: string,
      body: Object = {},
      params: HttpParams = new HttpParams(),
      contentType: string = null
    ): Observable<T> {
      return this.http
        .put<T>(`${this.server}${path}`, JSON.stringify(body), {
          headers: this.setHeaders(contentType),
          params,
        })
        .pipe(catchError(this.formatErrors));
    }
  
    patch<T>(
      path: string,
      body: Object = {},
      params: HttpParams = new HttpParams(),
      contentType: string = null
    ): Observable<T> {
      return this.http
        .patch<T>(`${this.server}${path}`, JSON.stringify(body), {
          headers: this.setHeaders(contentType),
          params,
        })
        .pipe(catchError(this.formatErrors));
    }
  
    delete<T>(
      path,
      contentType: string = null,
      params: HttpParams = new HttpParams()
    ): Observable<T> {
      return this.http
        .delete<T>(`${this.server}${path}`, {
          headers: this.setHeaders(contentType),
          params,
        })
        .pipe(catchError(this.formatErrors));
    }
  
    file<T>(
      path: string,
      formData: FormData,
      params: HttpParams = new HttpParams()
    ): Observable<any> {
      return this.http
        .post<T>(`${this.server}${path}`, formData, {
          /* headers: this.setHeaders('multipart-form-data'), */
          params,
        })
        .pipe(catchError(this.formatErrors));
    }
  
    getFile<T>(
      path: string,
      params: HttpParams = new HttpParams()
    ): Observable<any> {
      return this.http.get<T>(`${this.server}${path}`, {
        params,
        responseType: 'blob' as 'json',
      });
    }
  
    public upload<T>(path: string, file: File): Observable<any> {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      return this.http.request(
        new HttpRequest('POST', `${this.server}${path}`, formData, {
          reportProgress: false,
        })
      );
    }
  
    private setHeaders(contentType: string = null): HttpHeaders {
      const headersConfig = {
        Accept: 'application/json',
      };
  
      switch (contentType) {
        case 'file':
          break;
  
        case 'form-data':
          headersConfig['Content-Type'] = `application/x-www-form-urlencoded`;
          break;
  
        case 'multipart-form-data':
          headersConfig['Content-Type'] = `multipart/form-data`;
          break;
  
        default:
          headersConfig['Content-Type'] = `application/json`;
          break;
      }
  
      return new HttpHeaders(headersConfig);
    }
  
    private formatErrors(error: Error) {
      return throwError(error);
    }
  }
  