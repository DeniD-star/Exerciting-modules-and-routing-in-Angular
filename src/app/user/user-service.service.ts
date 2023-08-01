import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { } //i poneje 6te mi trqbva globalno go importvam v app.module, ne v user modula

  fetchUsers(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
