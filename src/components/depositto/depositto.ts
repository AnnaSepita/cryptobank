import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {FriendComponent} from "../../app/mainboard/friend/friend.component";
import {Profile1Component} from "../profile1/profile1";
import {DepositconfirmationComponent} from "../depositconfirmation/depositconfirmation";
import {AddwalletsComponent} from "../addwallets/addwallets";
import {ProfileComponent} from "../../app/mainboard/profile/profile.component";
import {InfoComponent} from "../../app/mainboard/info/info.component";
import {SendComponent} from "../send/send";
import {JobListComponent} from "../../app/mainboard/job-list/job-list.component";

/**
 * Generated class for the DeposittoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'depositto',
  templateUrl: 'depositto.html'
})
export class DeposittoComponent {

  text: string;
  public entity = {
    photo_path: '',
  };
  public defaultImg: string;
  public defaultImg1: string;
  public defaultImg2: string;
  public defaultImg3: string;
  constructor( public nav:NavController) {
    console.log('Hello DeposittoComponent Component');
    this.text = 'Hello World';
    this.defaultImg = 'assets/icons/user.png';
    this.defaultImg1 = 'assets/icons/payment-method.png';
    this.defaultImg2 = 'assets/icons/payment-method%20(2).png';
    this.defaultImg3 = 'assets/icons/bitcoin-exchange-rate-symbol%20(2).png';
  }
  ionViewDidLoad(){
    this.entity.photo_path = localStorage.user_picture;
    console.log(localStorage.user_picture, 'path', this.entity.photo_path);
  }
  back(){
    this.nav.setRoot(FriendComponent)
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
  showMore(){
    this.nav.setRoot(DepositconfirmationComponent)
  }
  showMore1(){
    this.nav.setRoot(AddwalletsComponent)
  }

}
