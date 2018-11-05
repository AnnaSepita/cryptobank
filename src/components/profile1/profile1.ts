import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {MainboardComponent} from "../../app/mainboard/mainboard.component";
import {LoginComponent} from "../../app/auth/login/login.component";
import {SupportComponent} from "../../app/mainboard/info/support/support.component";
import {SettingsComponent} from "../settings/settings";
import {UserService} from "../../app/shared/services/user.service";
import { Storage } from '@ionic/storage';
export declare interface tab {
  show: any

}
@Component({
  selector: 'profile1',
  templateUrl: 'profile1.html'
})
export class Profile1Component {

  text: string;
  public entity = {
    photo_path: '',
    name:'',
    surname:'',
    email:'',
    country:'',
    city:'',
    phone:'',
    birth:'',
    verified:''
  };
  public defaultImg: string;
  // show;
  constructor(public navCtrl: NavController, public user:UserService, private storage: Storage) {
    console.log('Hello Profile1Component Component');
    this.text = 'Hello World';
    this.defaultImg = 'assets/icons/user2.png';
  }

  ionViewDidLoad(){
    // this.show = false;
    this.entity.photo_path = localStorage.user_picture;
    this.entity.name = localStorage.user_name;
    this.entity.surname = localStorage.user_surname
    console.log(localStorage.tabs);
    console.log(this.getdata());
    this.getdata();
  }
  getdata(){
    this.user.personInfo().subscribe(success =>{
      console.log(success);
      localStorage.user_id = success['id'];
      console.log(localStorage.user_id);
      localStorage.user_email = success['email'];
      localStorage.user_name = success['name'];
      localStorage.user_picture = success['picture'];
      localStorage.user_surname = success['surname'];
      localStorage.user_country = success['country'];
      localStorage.user_city = success['city'];
      localStorage.user_birth = success['birth'];
      localStorage.user_verified = success['verified']
      console.log(localStorage.user_email);
      console.log(localStorage.user_name);
      console.log(localStorage.user_picture);
      this.entity.photo_path = localStorage.user_picture;
      this.entity.name = localStorage.user_name;
      this.entity.surname = localStorage.user_surname;
      this.entity.email = localStorage.user_email;
      this.entity.country = localStorage.user_country;
      this.entity.city = localStorage.user_city;
      this.entity.phone = localStorage.user_phone;
      this.entity.birth = localStorage.user_birth;
      this.entity.verified = localStorage.user_verified;
    })
  }

  back(){
    this.navCtrl.setRoot(MainboardComponent);
  }
  exit(){
    this.storage.clear();
   // location.reload();
    localStorage.clear();
    this.navCtrl.setRoot(LoginComponent);
  }
  support(){
    this.navCtrl.setRoot(SupportComponent);
  }
  setting(){
    this.navCtrl.setRoot(SettingsComponent)
  }
}
