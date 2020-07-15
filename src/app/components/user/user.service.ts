import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://127.0.0.1:3333';

  constructor(private http : HttpClient) { }

  login(email : string , pass : string) : Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/usuarios/login` , {senhaUsuario : pass , emailUsuario : email});
  }

  getUsers() : Observable<any> {
    return this.http.get(`${this.baseUrl}/usuarios`);
  }

  
}
