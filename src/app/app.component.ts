import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Spring boot with Angular Json Web Tokens';

  constructor(
    private router:Router,
    private userservice: UserService,
    private cdRef: ChangeDetectorRef
  ){}

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }

  logout(){
    this.userservice.logout();
    this.router.navigate(['/login']);
  }

  get isAdminUser(){
    return this.userservice.isAdminUser();
  }

  get isUser(){
    return this.userservice.isUser();
  }

}
