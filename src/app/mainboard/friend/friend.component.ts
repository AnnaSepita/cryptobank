import {Component, OnInit} from "@angular/core";
import {FriendService} from "../../shared/services/friend.service";
import {CountService} from "../../shared/services/count.service";
import {AlertController, NavController} from "ionic-angular";
import {PhoneContactsComponent} from "./phone-contacts.component/phone-contacts.component";
//import {ShowMoreComponent} from "../../../components/show-more/show-more";
import {Profile1Component} from "../../../components/profile1/profile1";
import {DeposittoComponent} from "../../../components/depositto/depositto";
import {AddwalletsComponent} from "../../../components/addwallets/addwallets";
import {ProfileComponent} from "../profile/profile.component";
import {InfoComponent} from "../info/info.component";
import {SendComponent} from "../../../components/send/send";
import {JobListComponent} from "../job-list/job-list.component";
import {UserService} from "../../shared/services/user.service";
import {WalletComponent} from "../../../components/wallet/wallet";

export declare interface RemoveId {
  user_id: Array<string>;
}

@Component({
  selector: 'page-friend',
  templateUrl: './friend.component.html',
})

export class FriendComponent implements OnInit {
  friendsRequestsArr: any;
  friendsArr: any;
  public elementArr: RemoveId = {
    user_id: []
  };
  public entity = {
    photo_path: '',
  };
  public defaultImg: string;
  public defaultImg1: string;
  public defaultImg2: string;
  public defaultImg3: string;
  card;

  constructor(public service: FriendService,
              public count: CountService,
              public alertCtrl: AlertController,
              public user: UserService,
              public navCtrl: NavController) {
    this.defaultImg = 'assets/icons/user.png';
    this.defaultImg1 = 'assets/icons/payment-method.png';
    this.defaultImg2 = 'assets/icons/payment-method%20(2).png';
    this.defaultImg3 = 'assets/icons/bitcoin-exchange-rate-symbol%20(2).png';
    this.card = false;
  }

  ngOnInit() {
    this.entity.photo_path = localStorage.user_picture;
    console.log(localStorage.user_picture, 'path', this.entity.photo_path);
    this.getethereumaddresse();
    this.card = localStorage.card;
    // this.getFriends();
    // this.getRequests();
  }
  doRefresh3(refresher) {
    console.log('Begin async operation');
    this.card = localStorage.card;
    console.log(this.card)
    // this.user.getethereumaddresses(localStorage.user_id).subscribe(success=>{
    //     console.log(success)
    //   },
    //   err =>{
    //     console.log(err)
    //   })
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  getethereumaddresse(){
    this.user.getethereumaddresses(localStorage.user_id).subscribe(success=>{
        console.log(success)
      },
      err =>{
        console.log(err)
      })
  }
  showMore() {
    this.navCtrl.setRoot(DeposittoComponent);
  }
  showMore1() {
    this.navCtrl.setRoot(WalletComponent);
  }
  wallet(){
    this.navCtrl.setRoot(JobListComponent)
  }
  depositpage(){
    this.navCtrl.setRoot(FriendComponent)
  }
  withdraw(){
    this.navCtrl.setRoot(ProfileComponent)
  }
  exchange(){
    this.navCtrl.setRoot(InfoComponent)
  }
  sendp(){
    this.navCtrl.setRoot(SendComponent)
  }
  showSearchBar1() {
    this.navCtrl.setRoot(Profile1Component);
  }




  getFriends() {
    this.friendsArr = this.count.friendsArr;
  }

  getRequests() {
    this.friendsRequestsArr = this.count.friendsRequestsArr;
  }


  toContacts() {
    this.navCtrl.push(PhoneContactsComponent)
  }

  declineFriend(user) {
    this.service.decline(user.id)
      .subscribe(() => {
        this.friendsRequestsArr.splice(this.friendsRequestsArr.indexOf(user), 1)
      })
  }

  acceptFriend(user) {
    this.service.accept(user.id)
      .subscribe(() => {
        this.friendsRequestsArr.splice(this.friendsRequestsArr.indexOf(user), 1);
        this.friendsArr.push(user);
      })
  }

  deleteFriend(user) {
    let alert = this.alertCtrl.create({
      title: 'Підтвердіть дію',
      message: 'Ви дійсно бажаєте видалити контакт?',
      buttons: [
        {
          text: 'Ні',
          role: 'cancel',
          handler: () => {
            this.elementArr.user_id = []
          }
        },
        {
          text: 'Так',
          handler: () => {
            this.elementArr.user_id.push(user.id);
            this.service.remove(this.elementArr)
              .subscribe(() => {
                this.friendsArr.splice(this.friendsArr.indexOf(user), 1)
              });
          }
        }
      ]
    });
    alert.present();
  }

}
