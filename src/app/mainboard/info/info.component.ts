import {Component, OnInit} from "@angular/core";
import {App, AlertController, NavController} from "ionic-angular";
import {SupportComponent} from "./support/support.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {LoginComponent} from "../../auth/login/login.component";
import {Profile1Component} from "../../../components/profile1/profile1";
import {TransfertoComponent} from "../../../components/transferto/transferto";
import {JobListComponent} from "../job-list/job-list.component";
import {ProfileComponent} from "../profile/profile.component";
import {SendComponent} from "../../../components/send/send";
import {FriendComponent} from "../friend/friend.component";

@Component({
  selector: 'page-info',
  templateUrl: './info.component.html',
})

export class InfoComponent implements OnInit {
    imageURI: any;
    imageURI2: any;
    imageURI3: any;
    imageURI4: any;
  public entity = {
    photo_path: '',
  };
  public defaultImg: string;
  public defaultImg1: string;
  public defaultImg2: string;
  public defaultImg3: string;

  constructor(
      public navCtrl: NavController,
              public alertCtrl: AlertController,
              public appCtrl: App) {
    this.defaultImg = 'assets/icons/user.png';
    this.defaultImg1 = 'assets/icons/payment-method%20(1).png';
    this.defaultImg2 = 'assets/icons/payment-method%20(2).png';
    this.defaultImg3 = 'assets/icons/bitcoin-exchange-rate-symbol%20(1).png';
      this.imageURI = 'assets/icon/star.png';
      this.imageURI2= 'assets/icon/call_man.png';
      this.imageURI3= 'assets/icon/info.png';
      this.imageURI4= 'assets/icon/exit.png';
  }

  ngOnInit() {
    this.entity.photo_path = localStorage.user_picture;
    console.log(localStorage.user_picture, 'path', this.entity.photo_path);
  }
  showSearchBar1(){
    this.navCtrl.setRoot(Profile1Component)
  }
  showMore(){
    this.navCtrl.setRoot(TransfertoComponent)
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
  toRate(){
    console.log("rate app");
  }

  toHelp() {
    this.navCtrl.push(SupportComponent);
  }

  toAbout() {
    this.navCtrl.push(AboutUsComponent);
  }

  logout() {
    let alert = this.alertCtrl.create({
      title: 'Підтвердіть дію',
      message: 'Ви дійсно бажаєте вийти з додатку?',
      buttons: [
        {
          text: 'Ні',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Так',
          handler: () => {
            delete localStorage.token;
            delete localStorage.user_id;
            this.appCtrl.getRootNavs()[0].setRoot(LoginComponent);
          }
        }
      ]
    });
    alert.present();
  }

}
