import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../models/service.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ServiceService {
  private apiUrl = environment.apiUrl +'/api/services';

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.apiUrl);
  }
  createService(formData: FormData) {
    return this.http.post(`${environment.apiUrl}/api/services`, formData);
  }  
}
