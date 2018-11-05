import { Component } from '@angular/core';
import {FriendComponent} from "../../app/mainboard/friend/friend.component";
import {Profile1Component} from "../profile1/profile1";
import {DepositconfirmationComponent} from "../depositconfirmation/depositconfirmation";
import {AddwalletsComponent} from "../addwallets/addwallets";
import {NavController} from "ionic-angular";
import {ProfileComponent} from "../../app/mainboard/profile/profile.component";
import {WithdrowconfirmationComponent} from "../withdrowconfirmation/withdrowconfirmation";
import {JobListComponent} from "../../app/mainboard/job-list/job-list.component";
import {InfoComponent} from "../../app/mainboard/info/info.component";
import {SendComponent} from "../send/send";
import {WalletComponent} from "../wallet/wallet";

/**
 * Generated class for the WithdrowtoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'withdrowto',
  templateUrl: 'withdrowto.html'
})
export class WithdrowtoComponent {

  text: string;
  public entity = {
    photo_path: '',
  };
  public defaultImg: string;
  public defaultImg1: string;
  public defaultImg2: string;
  public defaultImg3: string;
  card;
  constructor(public nav:NavController) {
    console.log('Hello WithdrowtoComponent Component');
    this.text = 'Hello World';
    this.defaultImg = 'assets/icons/user.png';
    this.defaultImg1 = 'assets/icons/payment-method%20(1).png';
    this.defaultImg2 = 'assets/icons/payment-method(3).png';
    this.defaultImg3 = 'assets/icons/bitcoin-exchange-rate-symbol%20(2).png';
    this.card = false;
  }
  ionViewDidLoad(){
    this.entity.photo_path = localStorage.user_picture;
    this.card = localStorage.card;
    // console.log(localStorage.user_picture, 'path', this.entity.photo_path);
  }
  back(){
    this.nav.setRoot(ProfileComponent)
  }
  showSearchBar1(){
    this.nav.setRoot(Profile1Component)
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
    this.nav.setRoot(WithdrowconfirmationComponent)
  }
  showMore1(){
    this.nav.setRoot(WalletComponent)
  }

}
