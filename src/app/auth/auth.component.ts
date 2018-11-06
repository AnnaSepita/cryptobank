import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";

@Component({
    selector: 'page-auth',
    templateUrl: './auth.component.html',
})

export class AuthComponent {
  defaultImg;
  defaultImg1;
    constructor(private navCtrl: NavController) {
      this.defaultImg = 'assets/logos/logo.png';
      this.defaultImg1 = 'assets/bg/start_page.png';
    }
  login(){
    this.navCtrl.push(LoginComponent);
  }
  register(){
    this.navCtrl.push(RegistrationComponent);
  }

}
