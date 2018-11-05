import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {SmsComponent} from "../sms/sms";
import {LoginComponent} from "../../app/auth/login/login.component";
import {UserService} from "../../app/shared/services/user.service";
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the ResetpasswordComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'resetpassword',
  templateUrl: 'resetpassword.html'
})
export class ResetpasswordComponent {

  text: string;
  public entity ={
    password:''
  }
  pass;
  passw;
  defaultImg1;
  defaultImg2;
  constructor(private nav:NavController, public user:UserService, public toastCtrl: ToastController) {
    console.log('Hello ResetpasswordComponent Component');
    this.text = 'Hello World';
    this.defaultImg1 = 'assets/icons/lock.png';
    this.defaultImg2 = 'assets/icons/eye2.png';
  }
  login(){
    if (this.pass == this.passw){
      this.entity.password = this.passw;
      this.user.passw(this.entity).subscribe(success=>{
          console.log(success) ;
          this.nav.setRoot(LoginComponent)

        },
        err =>{
          console.log(err)
        })
    }
    else{
      const toast = this.toastCtrl.create({
        message: 'Passwords are not the same',
        duration: 3000
      });
      toast.present();
    }

  }
  back(){
    this.nav.setRoot(SmsComponent)
  }

}
