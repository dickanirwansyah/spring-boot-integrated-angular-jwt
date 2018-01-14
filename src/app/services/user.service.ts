import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { TOKEN_NAME } from '../services/auth.constant';

@Injectable()
export class UserService{

  jwthelper: JwtHelper = new JwtHelper();
  accessToken: string;
  isAdmin: boolean;

  constructor(){}

  //this is user ?
  isUser():boolean{
    return this.accessToken && !this.isAdmin;
  }

  //this is admin ?
  isAdminUser():boolean{
    return this.isAdmin;
  }

  //login
  login(accessToken: string){
    const decodedToken = this.jwthelper.decodeToken(accessToken);
    console.log(decodedToken);

    this.isAdmin = decodedToken.authorities.some(el => el === 'ADMIN_USER');
    this.accessToken = accessToken;

    localStorage.setItem(TOKEN_NAME, accessToken);
  }

  //logout
  logout(){
    this.accessToken = null;
    this.isAdmin = false;
    localStorage.removeItem(TOKEN_NAME);
  }

}
