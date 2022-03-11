import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Response } from 'src/app/models/response.module';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private conn:string;

  constructor(private _htpp:HttpClient) {
    this.conn = environment.url;
  }
  
  getUsers(){
    const route = this.conn + 'users';
    return this._htpp.get<Response>(route);
  }
}
