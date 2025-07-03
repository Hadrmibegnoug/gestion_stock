import { jwtDecode } from 'jwt-decode';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8098/auth';

  isAuthenticated: boolean = false;
  roles: any;
  username: any;
  accessToken!: any;

  constructor(private httpClient:HttpClient) { }

  public login(login: string, password: string) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    let params = new HttpParams().set('username', login).set('password', password);
    return this.httpClient.post(`${this.baseUrl}/login`, params, options);
  }

  loadProdile(data: any) {
    this.isAuthenticated = true;
    this.accessToken = data['access-token'];

    // Cast propre avec typage personnalisé
    interface CustomJwtPayload {
      sub: string;
      scope?: string;
      exp?: number;
      iat?: number;
    }

    let decodedJwt = jwtDecode<CustomJwtPayload>(this.accessToken);
    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scope?.split(' ') || [];
    console.log("Decoded JWT:", decodedJwt);
    console.log("Roles:", this.roles);
  }

}

