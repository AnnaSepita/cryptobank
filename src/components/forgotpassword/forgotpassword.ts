import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {LoginComponent} from "../../app/auth/login/login.component";
import {SmsComponent} from "../sms/sms";
import {UserService} from "../../app/shared/services/user.service";

/**
 * Generated class for the ForgotpasswordComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'forgotpassword',
  templateUrl: 'forgotpassword.html'
})
export class ForgotpasswordComponent {
  public user = {
    email: '',
     phone: '',
    // password: '',
    // access_token: 'tgzNkRaYptaE84b0XJJLUtimVjwcjpeu',
    // picture: '',
    // role: ''
  };
  text: string;
  defaultImg1;
  defaultImg2;
  constructor(private nav:NavController, private userServ: UserService) {
    console.log('Hello ForgotpasswordComponent Component');
    this.text = 'Hello World';
    this.defaultImg1 = 'assets/icons/mail.png';
    this.defaultImg2 = 'assets/icons/phone.png';
  }
  back(){
    this.nav.setRoot(LoginComponent)
  }

  login(){
    // if(this.userServ.credentialsCheck1(this.user)) {
      this.nav.setRoot(SmsComponent)
    // }
  }

}
