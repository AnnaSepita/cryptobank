import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {SettingsComponent} from "../settings/settings";

/**
 * Generated class for the LanguageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'language',
  templateUrl: 'language.html'
})
export class LanguageComponent {

  text: string;
  defaultImg1;
  defaultImg2;
  defaultImg3;
  defaultImg4;
  check:boolean;
  constructor(private nav:NavController) {
    console.log('Hello LanguageComponent Component');
    this.text = 'Hello World';
    this.defaultImg1 = 'assets/icons/engl.png';
    this.defaultImg2 = 'assets/icons/russ.png';
    this.defaultImg3 = 'assets/icons/check.png';
    this.defaultImg4 = 'assets/icons/null.png';
    this.check = true;
  }
  back(){
    this.nav.setRoot(SettingsComponent);
  }
  lang(){
    this.check = false;
  }
  lang1(){
    this.check = true;
  }
}
