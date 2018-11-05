import { Component } from '@angular/core';
import {Profile1Component} from "../profile1/profile1";
//import {WithdrowconfirmationComponent} from "../withdrowconfirmation/withdrowconfirmation";
import {NavController} from "ionic-angular";
import {Payment2Component} from "../payment2/payment2";
import {ProfileComponent} from "../../app/mainboard/profile/profile.component";
import {JobListComponent} from "../../app/mainboard/job-list/job-list.component";
import {InfoComponent} from "../../app/mainboard/info/info.component";
import {SendComponent} from "../send/send";
import {FriendComponent} from "../../app/mainboard/friend/friend.component";

/**
 * Generated class for the SuccessComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'success',
  templateUrl: 'success.html'
})
export class SuccessComponent {

  text: string;
  public entity = {
    photo_path: '',
  };
  public defaultImg: string;
  public defaultImg1: string;
  public defaultImg2: string;
  public defaultImg3: string;
  constructor(public nav: NavController) {
    console.log('Hello SuccessComponent Component');
    this.text = 'Hello World';
    this.defaultImg = 'assets/icons/user.png';
    this.defaultImg1 = 'assets/icons/payment-method%20(1).png';
    this.defaultImg2 = 'assets/icons/payment-method(3).png';
    this.defaultImg3 = 'assets/icons/bitcoin-exchange-rate-symbol%20(2).png';
  }
  ionViewDidLoad(){
    this.entity.photo_path = localStorage.user_picture;
    // console.log(localStorage.user_picture, 'path', this.entity.photo_path);
  }

  showSearchBar1(){
    this.nav.setRoot(Profile1Component)
  }
  back(){
    this.nav.setRoot(Payment2Component)
  }
  wallet(){
    this.nav.setRoot(JobListComponent)
  }
  depositpage(){
    this.nav.setRoot(FriendComponent)
  }
  withdraw(){
    this.nav.setRoot(ProfileComponent)
  }
  exchange(){
    this.nav.setRoot(InfoComponent)
  }
  sendp(){
    this.nav.setRoot(SendComponent)
  }
  showMore(){
    this.nav.setRoot(ProfileComponent)
  }

}
