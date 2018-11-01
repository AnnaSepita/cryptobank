import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";

@Component({
    selector: 'page-auth',
    templateUrl: './auth.component.html',
})

export class AuthComponent {


    constructor(private navCtrl: NavController) {

    }

    GoToPage(page: string) {
        switch (page) {
            case 'signIn':
                this.navCtrl.push(LoginComponent);
                break;
            case 'signUp':
                this.navCtrl.push(RegistrationComponent);
                break;
            default:
                break;
        }
    }
}