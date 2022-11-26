import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
const API_LINK = 'http://localhost:3000/api/Users/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  isLogged() {
    return !!localStorage.getItem('token');
  }
  login(credentials) {
    return this.http.post(API_LINK, credentials);
  }
  logout() {
    localStorage.removeItem('token');
  }
}