import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  async get(uri: string, options?: any): Promise<any> {
    return lastValueFrom(this.httpClient.get(uri, options)).catch((err) =>
      Promise.reject(err)
    );
  }

  async post(uri: string, body: any, options?: any): Promise<any> {
    return lastValueFrom(this.httpClient.post(uri, body, options)).catch(
      (err) => Promise.reject(err)
    );
  }

  async put(uri: string, body: any, options?: any) {
    return lastValueFrom(this.httpClient.put(uri, body, options)).catch((err) =>
      Promise.reject(err)
    );
  }

  async patch(uri: string, body: any, options?: any) {
    return lastValueFrom(this.httpClient.patch(uri, body, options)).catch(
      (err) => Promise.reject(err)
    );
  }

  async delete(uri: string, options?: any) {
    return lastValueFrom(this.httpClient.delete(uri, options)).catch((err) =>
      Promise.reject(err)
    );
  }
}
