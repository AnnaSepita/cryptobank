import { Component } from '@angular/core';
import {DeposittoComponent} from "../depositto/depositto";
import {Profile1Component} from "../profile1/profile1";
import {PaymentComponent} from "../payment/payment";
import {NavController} from "ionic-angular";
import {WithdrowtoComponent} from "../withdrowto/withdrowto";
import {JobListComponent} from "../../app/mainboard/job-list/job-list.component";
import {FriendComponent} from "../../app/mainboard/friend/friend.component";
import {InfoComponent} from "../../app/mainboard/info/info.component";
import {SendComponent} from "../send/send";
import {ProfileComponent} from "../../app/mainboard/profile/profile.component";
import {Payment2Component} from "../payment2/payment2";

/**
 * Generated class for the WithdrowconfirmationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'withdrowconfirmation',
  templateUrl: 'withdrowconfirmation.html'
})
export class WithdrowconfirmationComponent {

  text: string;
  public entity = {
    photo_path: '',
  };
  public defaultImg: string;
  public defaultImg1: string;
  public defaultImg2: string;
  public defaultImg3: string;
  public defaultImg4: string;
  constructor(private nav: NavController) {
    console.log('Hello WithdrowconfirmationComponent Component');
    this.text = 'Hello World';
    this.defaultImg = 'assets/icons/user.png';
    this.defaultImg1 = 'assets/icons/payment-method%20(1).png';
    this.defaultImg2 = 'assets/icons/payment-method(3).png';
    this.defaultImg3 = 'assets/icons/bitcoin-exchange-rate-symbol%20(2).png';
    this.defaultImg4 = 'assets/icons/left.png';
  }
  ionViewDidLoad(){
    this.entity.photo_path = localStorage.user_picture;
    // console.log(localStorage.user_picture, 'path', this.entity.photo_path);
  }
  back(){
    this.nav.setRoot(WithdrowtoComponent)
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
  showSearchBar1(){
    this.nav.setRoot(Profile1Component)
  }
  yes(){
    this.nav.setRoot(Payment2Component)
  }


}
