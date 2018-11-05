import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {UserService} from "../../app/shared/services/user.service";
import {SettingsComponent} from "../settings/settings";
import {EditComponent} from "../edit/edit";

/**
 * Generated class for the Personalinfo1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'personalinfo1',
  templateUrl: 'personalinfo1.html'
})
export class Personalinfo1Component {

  text: string;
  public entity = {
    photo_path: '',
    name: '',
    surname:'',
    email:'',
    country:'',
    sity:'',
    phone:'',
    date:'',
    verified:'true',
  };
  public defaultImg: string;
  public defaultImg4: string;
  check;
  check11;
  constructor(private nav:NavController, private usr:UserService) {
    console.log('Hello Personalinfo1Component Component');
    this.text = 'Hello World';
    this.defaultImg = 'assets/icons/avat.png';
    this.defaultImg4 = 'assets/icons/chk.png';
    this.check = false;
    this.check11 = false;
  }
  ionViewDidLoad(){
    this.info1();
    this.entity.photo_path = localStorage.user_picture;
    this.entity.name = localStorage.user_name;
    this.entity.surname = localStorage.user_surname;
    this.entity.email = localStorage.user_email;
    this.entity.country = localStorage.user_country;
    this.entity.sity = localStorage.user_city;
    this.entity.phone = localStorage.user_phone;
    this.entity.date = localStorage.user_birth;
    this.entity.verified = localStorage.user_verified;
    // console.log(localStorage.user_picture, 'path', this.entity.photo_path);
  }
  check1(){
    this.check = true;
  }
  check2(){
    this.check = false;
  }
  check3(){
    this.check11 = true;
  }
  check4(){
    this.check11 = false;
  }
  doRefresh(refresher) {
    console.log('Begin async operation');
    this.usr.personInfo().subscribe(success=> {
      console.log(success);
      localStorage.user_id = success['id'];
      console.log(localStorage.user_id);
      localStorage.user_email = success['email'];
      localStorage.user_name = success['name'];
      localStorage.user_surname = success['surname'];
      localStorage.user_picture = success['picture'];
      localStorage.user_surname = success['surname'];
      localStorage.user_country = success['country'];
      localStorage.user_city = success['sity'];
      localStorage.user_birth = success['date'];
      localStorage.user_verified = success['verified']
      console.log(localStorage.user_email);
      console.log(localStorage.user_name);
      console.log(localStorage.user_picture);
      this.entity.photo_path = localStorage.user_picture;
      this.entity.name = localStorage.user_name;
      this.entity.surname = localStorage.user_surname;
      this.entity.email = localStorage.user_email;
      this.entity.country = localStorage.user_country;
      this.entity.sity = localStorage.user_city;
      this.entity.phone = localStorage.user_phone;
      this.entity.date = localStorage.user_birth;
      this.entity.verified = localStorage.user_verified;
    })
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  info1(){
    this.usr.personInfo().subscribe(success=>{
        console.log(success);
        localStorage.user_id = success['id'];
        console.log(localStorage.user_id);
        localStorage.user_email = success['email'];
        localStorage.user_name = success['name'];
        localStorage.user_picture = success['picture'];
         localStorage.user_surname = success['surname'];
         localStorage.user_country = success['country'];
        localStorage.user_city = success['sity'];
        localStorage.user_birth = success['date'];
        localStorage.user_verified = success['verified']
        console.log(localStorage.user_email);
        console.log(localStorage.user_name);
        console.log(localStorage.user_picture);
      },
      err =>{
        console.log(err)
      })
  }
  back(){
    this.nav.setRoot(SettingsComponent);
  }
  edit(){
    this.nav.setRoot(EditComponent);
  }
}
