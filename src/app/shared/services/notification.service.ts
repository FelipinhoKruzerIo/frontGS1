import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  url: string;

  constructor(private httpService: HttpService) {
    this.url = `https://8vw4thiruk.execute-api.sa-east-1.amazonaws.com`;
  }

  async teste() {
    return this.httpService.get(`${this.url}/teste`);
  }

  async add(body: any) {
    return this.httpService.post(`${this.url}/notification`, body);
  }
}
