import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private baseUrl = environment.apiUrl +'/api/messages';

  constructor(private http: HttpClient) {}

  getMessages(orderId: string) {
    return this.http.get<any[]>(`${this.baseUrl}/${orderId}`);
  }

  sendMessage(orderId: string, text: string) {
    return this.http.post<any>(this.baseUrl, { orderId, text });
  }
}
