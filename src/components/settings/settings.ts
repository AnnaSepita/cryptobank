import { Component } from '@angular/core';
import {LanguageComponent} from "../language/language";
import {NavController} from "ionic-angular";
import {NotificationComponent} from "../notification/notification";
//import {ForgotpassComponent} from "../forgotpass/forgotpass";
//import {PersonalinfoComponent} from "../personalinfo/personalinfo";
import {Profile1Component} from "../profile1/profile1";
import {Personalinfo1Component} from "../personalinfo1/personalinfo1";
import {ResetpasswordComponent} from "../resetpassword/resetpassword";

/**
 * Generated class for the SettingsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsComponent {

  text: string;
  public defaultImg1: string;
  public defaultImg2: string;
  public defaultImg3: string;
  public defaultImg4: string;
  public defaultImg5: string;
  public defaultImg6: string;
  constructor(private nav:NavController) {
    console.log('Hello SettingsComponent Component');
    this.text = 'Hello World';
    this.defaultImg1 = 'assets/icons/user3.png';
    this.defaultImg2 = 'assets/icons/keyb.png';
    this.defaultImg3 = 'assets/icons/mail.png';
    this.defaultImg4 = 'assets/icons/notif.png';
    this.defaultImg5 = 'assets/icons/fing.png';
    this.defaultImg6 = 'assets/icons/lang.png';
  }
  language(){
    this.nav.setRoot(LanguageComponent);
  }
  notification(){
    this.nav.setRoot(NotificationComponent);
  }
  pass(){
    this.nav.setRoot(ResetpasswordComponent)
  }
  info(){
    this.nav.setRoot(Personalinfo1Component)
  }
  back(){
    this.nav.setRoot(Profile1Component);
  }

}
