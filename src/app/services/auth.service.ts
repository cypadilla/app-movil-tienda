import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginResponse } from '../models/login-response';
import { userResponse } from '../models/user-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }


  createUser(user){
    return this.http.post<userResponse>(`http://localhost:3000/api/usuarios`,user);
  }

  login(userData){
    return this.http.post<loginResponse>(`http://localhost:3000/api/auth`,userData);
  }

}