import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {ForgotpasswordComponent} from "../forgotpassword/forgotpassword";
import {ResetpasswordComponent} from "../resetpassword/resetpassword";
//import {editCredentials} from "../edit/edit";

/**
 * Generated class for the SmsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sms',
  templateUrl: 'sms.html'
})
export class SmsComponent {
  public user = {
    sms: ''
  }
  text: string;

  constructor(private nav: NavController) {
    console.log('Hello SmsComponent Component');
    this.text = 'Hello World';
  }
  back(){
    this.nav.setRoot(ForgotpasswordComponent);
  }
  login(){
    if (this.user.sms.length == 4){
      this.nav.setRoot(ResetpasswordComponent);
    }

  }
}
