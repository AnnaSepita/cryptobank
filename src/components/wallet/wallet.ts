import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {UserService} from "../../app/shared/services/user.service";
import {FriendComponent} from "../../app/mainboard/friend/friend.component";
import {JobListComponent} from "../../app/mainboard/job-list/job-list.component";
import {ProfileComponent} from "../../app/mainboard/profile/profile.component";
import {InfoComponent} from "../../app/mainboard/info/info.component";
import {SendComponent} from "../send/send";
import {RequestService} from "../../app/shared/services/request.service";

/**
 * Generated class for the WalletComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'wallet',
  templateUrl: 'wallet.html'
})
export class WalletComponent {

  text: string;
  public entity = {
    cardnomer:'',
    mounth:'',
    year:'',
    key:'',
    name:'',
    //access_token:'',
    surname:''
  };
  public entity1 = {
    // cardnomer:'',
    // mounth:'',
    // year:'',
    key:'12345678',
    // name:'',
    // access_token:'',
    // surname:''
  };

  public defaultImg: string;
  public defaultImg1: string;
  public defaultImg2: string;
  public defaultImg3: string;
  public defaultImg4: string;
  check:boolean;
  constructor(public nav:NavController,public request: RequestService, public user:UserService) {
    console.log('Hello AddwalletsComponent Component');
    this.text = 'Hello World';
    this.defaultImg = 'assets/icons/master.png';
    this.defaultImg1 = 'assets/icons/payment-method (1).png';
    this.defaultImg2 = 'assets/icons/payment-method%20(2).png';
    this.defaultImg3 = 'assets/icons/bitcoin-exchange-rate-symbol%20(2).png';
    this.defaultImg4 = 'assets/icons/chk.png';
    this.check = false;
    //this.entity1.access_token = localStorage.token;
  }
  // keypost(data: any){
  //   const url = 'http://167.99.208.229:9000/users/key';
  //   return this.request.post(url+'?access_token=' + localStorage.token, data)
  //     .do(() => {
  //         // const msg = this.msg('pictupd');
  //         // this.notification('success', msg);
  //       },
  //       err => {
  //         // const msg = this.msg('pictnot');
  //         // this.notification('error', msg)
  //       });
  // }
  apply(){
    //  if (this.entity.key.length !== 0 ){
    console.log('(((');
    localStorage.card = true;
    // this.user.keypost(this.entity1).subscribe(success =>{
    //     console.log(success);
    //
    this.nav.setRoot(FriendComponent);
    //   },
    //   err =>{
    //     console.log(err)
    //   })
    this.user.ethereum(this.entity1).subscribe(success =>{
        console.log(success);

        this.nav.setRoot(FriendComponent);
      },
      err =>{
        console.log(err)
      })



  }
  check1(){
    this.check = true;
  }
  check2(){
    this.check = false;
  }
  back(){
    console.log('(((');
    // this.keypost(this.entity).subscribe(success =>{
    //     console.log(success);
    //
    //     this.nav.setRoot(FriendComponent);
    //   },
    //   err =>{
    //     console.log(err)
    //   })
    // this.user.ethereum(this.entity1).subscribe(success =>{
    //     console.log(success);
    //     this.nav.setRoot(FriendComponent);
    //   },
    //   err =>{
    //     console.log(err)
    //   })
    this.nav.setRoot(FriendComponent);
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
}
