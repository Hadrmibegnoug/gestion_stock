import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {
  private baseUrl = 'http://localhost:8098/api/categories';

  constructor(private httpClient:HttpClient) { }
  getCategories() {
    return this.httpClient.get<any[]>(this.baseUrl);
  }
  getCategorieById(id: number) {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`);
  }
  addCategorie(categorie: any) {
    return this.httpClient.post<any>(this.baseUrl, categorie);
  }
  updateCategorie(id: number, categorie: any) {
    return this.httpClient.put<any>(`${this.baseUrl}/${id}`, categorie);
  }
  deleteCategorie(id: number) {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`);
  }
}
