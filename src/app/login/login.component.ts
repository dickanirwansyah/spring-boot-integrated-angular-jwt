import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  error = '';
  redirectUrl: string;

  constructor(
      private router: Router,
      private activatedroute: ActivatedRoute,
      private authenticationService: AuthenticationService,
      private userservice: UserService
  ){
    this.redirectUrl = this.activatedroute.snapshot.queryParams['redirectTo'];
  }

  ngOnInit():void {

  }

  login(){
      this.loading =true;

      this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
          result => {
            this.loading = false;

            if(result){
              this.userservice.login(result);
              this.navigateAfterSuccess();
            }else{
              this.error = 'Username or password is incorrect !';
            }
          },
          error => {
            this.error = 'Username or password is incorrect !';
            this.loading = false;
          }
        );
  }

  private navigateAfterSuccess(){
    if(this.redirectUrl){
      this.router.navigateByUrl(this.redirectUrl);
    }else{
      this.router.navigate(['/']);
    }
  }
}
