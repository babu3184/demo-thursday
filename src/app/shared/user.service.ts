import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';


const headerOption = {
  headers: new HttpHeaders({'Content-type': 'application/json '})
};

@Injectable()
export class UserService {

url = 'http://localhost:3000/User';
counter:number;
constructor(private http: HttpClient) { 
  this.counter=0;
}

currentUser: User = {
    id: null,
    fname: '',
    lname: '',
    email: '',
    number: null,
    age: null,
    country: '',
    states: '',
    address: '',
    haddress1: '',
    haddress2: '',
    caddress1: '',
    caddress2: '',
    subscribe: '',
  };
 
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url,headerOption);
  }

  deleteUser(id:number): Observable<User> {
    return this.http.delete<User>(this.url+ '/' + id, headerOption);
  }

  createUser(user: User):Observable<User[]>{
    return this.http.post<User[]>(this.url,user,headerOption);
  }

  UpdateUser(user: User):Observable<User[]>{
    return this.http.put<User[]>(this.url+ '/' +user.id,user,headerOption);
  }
  public getJSON(): Observable<any> {
    this.counter=this.counter+1;
     return this.http.get(this.url+this.counter);
 }

}
