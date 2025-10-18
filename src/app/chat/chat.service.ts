import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Message } from './chat.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // private envConfigService = inject(EnvironmentConfigurationService);
  private http = inject(HttpClient);
  // private readonly BASE_URL = this.envConfigService.getBaseUrl();
  private BASE_URL = 'http://localhost:3000'; 
  constructor() { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.BASE_URL}/messages`);
  }

  sendMessage(data: Message): Observable<Message> {
    return this.http.post<Message>(`${this.BASE_URL}/messages`, data);
  }
}
