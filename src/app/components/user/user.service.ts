import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://127.0.0.1:3333';
  private userAuth : boolean = false;
  constructor(private http : HttpClient) { }

  login(email : string , pass : string) : Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/usuarios/login` , {senhaUsuario : pass , emailUsuario : email});
  }

  getUsers() : Observable<any> {
    return this.http.get(`${this.baseUrl}/usuarios`);
  }

  setUserAuth(value: boolean) {
    this.userAuth = value;
  }

  userIsAuth() {
    return this.userAuth;
  }
  
}
