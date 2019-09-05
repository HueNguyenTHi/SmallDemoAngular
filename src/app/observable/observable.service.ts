import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User.interface';


@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/user');
  }
  addUser(user: any): Observable<User>{
    return this.http.post<User>('http://localhost:3000/user', user);
  }

  deleteUser(userId: number): Observable<User>{
    // let userIdString = userId.toString();
    return this.http.delete<User>('http://localhost:3000/user/' + userId);
  }
}

