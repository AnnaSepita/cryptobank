import { Component } from '@angular/core';
import {SettingsComponent} from "../settings/settings";
import {NavController} from "ionic-angular";
//import {ResetpasswordComponent} from "../resetpassword/resetpassword";
import {EditComponent} from "../edit/edit";
import {UserService} from "../../app/shared/services/user.service";

/**
 * Generated class for the PersonalinfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'personalinfo',
  templateUrl: 'personalinfo.html'
})
export class PersonalinfoComponent {

  text: string;
  public entity = {
    photo_path: '',
    name: '',
    surname:'',
    email:'',
    country:'',
    city:'',
    phone:'',
    birth:''
  };
  public defaultImg: string;
  constructor(private nav:NavController, private usr:UserService) {
    console.log('Hello PersonalinfoComponent Component');
    this.text = 'Hello World';
    this.defaultImg = 'assets/icons/avat.png';
  }
  ionViewDidLoad(){
    this.info1();
    this.entity.photo_path = localStorage.user_picture;
    this.entity.name = localStorage.user_name;
    this.entity.surname = localStorage.user_surname;
    this.entity.email = localStorage.user_email;
    this.entity.country = localStorage.user_country;
    this.entity.city = localStorage.user_city;
    this.entity.phone = localStorage.user_phone;
    this.entity.birth = localStorage.user_birth;
    // console.log(localStorage.user_picture, 'path', this.entity.photo_path);
  }
  doRefresh(refresher) {
    console.log('Begin async operation');
    this.usr.personInfo().subscribe(success=> {
      console.log(success);
      localStorage.user_id = success['id'];
      console.log(localStorage.user_id);
      localStorage.user_email = success['email'];
      localStorage.user_name = success['name'];
      localStorage.user_picture = success['picture'];
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
