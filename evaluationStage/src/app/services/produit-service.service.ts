import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  private baseUrl = 'http://localhost:8098/api/produits';
  constructor( private httpClient:HttpClient) { }
  getProduits() {
    return this.httpClient.get<any[]>(this.baseUrl);
  }
  getProduitById(id: number) {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`);
  }
  addProduit(produit: any) {
    return this.httpClient.post<any>(this.baseUrl, produit);
  }
  updateProduit(id: number, produit: any) {
    return this.httpClient.put<any>(`${this.baseUrl}/${id}`, produit);
  }
  deleteProduit(id: number) {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`);
  }
}
