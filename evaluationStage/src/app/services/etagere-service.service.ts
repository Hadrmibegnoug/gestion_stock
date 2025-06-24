import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtagereServiceService {
  private baseUrl = 'http://localhost:8098/api/etageres';

  constructor(private httpClient:HttpClient) { }

  getEtageres() {
    return this.httpClient.get<any[]>(this.baseUrl);
  }
  getEtagereById(id: number) {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`);
  }
  addEtagere(etagere: any) {
    return this.httpClient.post<any>(this.baseUrl, etagere);
  }
  updateEtagere(id: number, etagere: any) {
    return this.httpClient.put<any>(`${this.baseUrl}/${id}`, etagere);
  }
  deleteEtagere(id: number) {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`);
  }
}
