import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {JobListComponent} from "../../app/mainboard/job-list/job-list.component";
import {Profile1Component} from "../profile1/profile1";
import {KycComponent} from "../kyc/kyc";
import {FriendComponent} from "../../app/mainboard/friend/friend.component";
import {ProfileComponent} from "../../app/mainboard/profile/profile.component";
import {InfoComponent} from "../../app/mainboard/info/info.component";
import {SendComponent} from "../send/send";
import {UserService} from "../../app/shared/services/user.service";

/**
 * Generated class for the ShowMoreComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'show-more',
  templateUrl: 'show-more.html'
})
export class ShowMoreComponent {

  text: string;
  public entity = {
    photo_path: '',
    verified:'',
    id:''
  };
  public defaultImg: string;
  public defaultImg1: string;
  public defaultImg2: string;
  public defaultImg3: string;
  public defaultImg4: string;
  public defaultImg5: string;
  public defaultImg6: string;
  constructor(public nav:NavController, public user: UserService) {
    console.log('Hello ShowMoreComponent Component');
    this.text = 'Hello World';
    this.defaultImg = 'assets/icons/user.png';
    this.defaultImg1 = 'assets/icons/payment-method%20(1).png';
    this.defaultImg2 = 'assets/icons/payment-method%20(2).png';
    this.defaultImg3 = 'assets/icons/bitcoin-exchange-rate-symbol%20(2).png';
    this.defaultImg4 = 'assets/icons/coffee.png';
    this.defaultImg5 = 'assets/icons/pers.png';
    this.defaultImg6 = 'assets/icons/bag.png';
  }
  ionViewDidLoad(){
    this.entity.photo_path = localStorage.user_picture;
    this.entity.verified = localStorage.user_verified;
    this.entity.id = localStorage.user_id;
    console.log(this.entity.verified)
   // console.log(localStorage.user_picture, 'path', this.entity.photo_path);
  }

  back(){
    this.nav.setRoot(JobListComponent)
  }
  showSearchBar(){
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
  verified(){
    this.nav.setRoot(KycComponent)
  }

}
