import { Component } from '@angular/core';
import {SettingsComponent} from "../settings/settings";
import {ResetpasswordComponent} from "../resetpassword/resetpassword";
import {NavController} from "ionic-angular";

/**
 * Generated class for the ForgotpassComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'forgotpass',
  templateUrl: 'forgotpass.html'
})
export class ForgotpassComponent {

  text: string;

  constructor(private nav:NavController) {
    console.log('Hello ForgotpassComponent Component');
    this.text = 'Hello World';
  }
  back(){
    this.nav.setRoot(SettingsComponent);
  }
  changepass(){
    this.nav.setRoot(ResetpasswordComponent);
  }

}
