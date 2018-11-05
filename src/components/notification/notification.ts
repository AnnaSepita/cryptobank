import { Component } from '@angular/core';
import {SettingsComponent} from "../settings/settings";
import {NavController} from "ionic-angular";

/**
 * Generated class for the NotificationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notification',
  templateUrl: 'notification.html'
})
export class NotificationComponent {

  text: string;
  defaultImg1;
  check;
  check12;
  check13;
  check14;
  check15;
  check16;
  check17;
  constructor(private nav:NavController) {
    console.log('Hello NotificationComponent Component');
    this.text = 'Hello World';
    this.defaultImg1 = 'assets/icons/check2.png';
    this.check = true;
    this.check12 = true;
    this.check13 = true;
    this.check14 = true;
    this.check15 = true;
    this.check16  = true;
    this.check17 = true;
  }
  back(){
    this.nav.setRoot(SettingsComponent)
  }
  check1(){
    this.check = true;
  }
  check2(){
    this.check = false;
  }
  check3(){
    this.check12 = true;
  }
  check4(){
    this.check12 = false;
  }
  check5(){
    this.check13 = true;
  }
  check6(){
    this.check13 = false;
  }
  check7(){
    this.check14 = true;
  }
  check8(){
    this.check14 = false;
  }
  check9(){
    this.check15 = true;
  }
  check10(){
    this.check15 = false;
  }
  check11(){
    this.check16 = true;
  }
  check20(){
    this.check16 = false;
  }
  check21(){
    this.check17 = true;
  }
  check22(){
    this.check17 = false;
  }

}
