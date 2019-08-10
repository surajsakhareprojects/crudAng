import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private api: HttpClient) { }

  getAllUsers(){
    return this.api.get(environment.baseUrl + 'users');
  }

  getUser(userId: any){
    return this.api.get(environment.baseUrl + 'users/' + userId);
  }

  updateUser(userId: any, updateUser: any){
    return this.api.put(environment.baseUrl + 'users/' + userId, updateUser);
  }

  newUser(newUser: any){
    return this.api.post(environment.baseUrl + 'users/', newUser);
  }
  
  deleteUser(userId: any){
    return this.api.delete(environment.baseUrl + 'users/' + userId);
  }
}
