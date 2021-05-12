import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ApisService extends ApiService {
  constructor(http: HttpClient, @Inject('baseUrl') private baseUrl: string) {
    super(http);
    this.server = `${baseUrl}`;


  }
}
