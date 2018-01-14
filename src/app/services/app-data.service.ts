import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AppDataServices{

  constructor(
    private http:AuthHttp
  ){}

  //get hotel list
  getHotels(){
      return this.http.get('/springjwt/hotels')
      .map(res => res.json());
  }

  //get users list
  getUsers(){
      return this.http.get('/springjwt/users')
      .map(res => res.json());
  }

}
