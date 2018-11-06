import {Component} from "@angular/core";
import {LoginComponent, loginCredentials} from "../login/login.component";
import {NavController} from "ionic-angular";
import {UserService} from "../../shared/services/user.service";
import {MainboardComponent} from "../../mainboard/mainboard.component";

@Component({
  selector: 'page-registration',
  templateUrl: './registration.component.html'
})

export class RegistrationComponent {
  public isActive: boolean;

  public user: loginCredentials = {
    name: '',
    email: '',
    password: '',
    access_token: 'tgzNkRaYptaE84b0XJJLUtimVjwcjpeu',
    role: ''
  };

  public defaultImg: string;
  public defaultImg1: string;
  public defaultImg2: string;
  public defaultImg3: string;
  constructor(private navCtrl: NavController,
              private service: UserService) {
    this.isActive = true;
    this.defaultImg = 'assets/logos/logo.png';
    this.defaultImg1 = 'assets/icons/ml.png';
    this.defaultImg2 = 'assets/icons/e.png';
    this.defaultImg3 = 'assets/icons/usr.png';

  }
  ionViewDidLoad(){
    // document.getElementById('imp1').oninput = function() {
    //   document.getElementById('div3').innerHTML.replace(/[a-z]/g, function(a) {
    //     return a.toUpperCase();
    //   });
    // };

  }

  goToLogin() {
    this.navCtrl.push(LoginComponent);
  }


  registration() {
    if(this.service.credentialsCheck(this.user)){
      console.log(this.user)
    this.service.create(this.user)
      .subscribe(data => {
          this.navCtrl.push(MainboardComponent);
          localStorage.token = data['token'];
          localStorage.user_id = data['user']['id'];
          localStorage.user_email = data['user']['email'];
          localStorage.user_verified = data['user']['verified'];
          localStorage.user_docs = data['user']['docs'];
        },
        error => {
          console.log(error)
        }
      )
    }
  }
  create(){
    this.navCtrl.push(LoginComponent);
  }

  showPass() {
    this.isActive = !this.isActive;
  }

}
