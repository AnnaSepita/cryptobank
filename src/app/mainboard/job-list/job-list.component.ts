import {Component, OnInit} from "@angular/core";
import {JobService} from "../../shared/services/all-job.service";
import {MyJobService} from "../../shared/services/my-job.service";
import {AlertController, ModalController} from "ionic-angular";
import {ShareJobComponent} from "./share-job-modal/share-job.component";
import {NavController} from "ionic-angular";
import {ShowMoreComponent} from "../../../components/show-more/show-more";
import {Profile1Component} from "../../../components/profile1/profile1";
import {UserService} from "../../shared/services/user.service";
// import {FriendComponent} from "../friend/friend.component";
// import {ProfileComponent} from "../profile/profile.component";
// import {InfoComponent} from "../info/info.component";
// import {SendComponent} from "../../../components/send/send";
//  import { ViewChild } from '@angular/core';
//  import { Nav } from 'ionic-angular';
// import {SettingsComponent} from "../../../components/settings/settings";
// import {SupportComponent} from "../info/support/support.component";
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
 import {MainboardComponent} from "../mainboard.component";
import {FriendComponent} from "../friend/friend.component";
import {ProfileComponent} from "../profile/profile.component";
import {InfoComponent} from "../info/info.component";
import {SendComponent} from "../../../components/send/send";
export declare interface applyJob {
  job_id: any,
  user_id: any

}


export declare interface searchJob {
  search: any
}

export declare interface shareJob {
  job_id: Array<number>;
  recipient_id: Array<number>;
}

@Component({
  selector: 'page-job-list',
  templateUrl: './job-list.component.html',
})

export class JobListComponent implements OnInit {
  // @ViewChild(Nav) nav1: Nav;

  // rootPage: any = Profile1Component;

  pages: Array<{title: string, component: any}>;
  imageURI: any;
  imageURI2: any;
  imageURI3: any;
  imageURI4: any;
  jobsId: any;
  sendId: any;
  public category: string;
  public allJobsList: any;
  public myJobsList: any;
  public orderJobsList: any;
  public showSearchbar: boolean;
  myJobs: boolean = false;
  coin = [{
    name:'BITCOIN',
    balance:'200'
  }]
  balan:boolean;


  // tab1Root = JobListComponent;
  // tab2Root = FriendComponent;
  // tab3Root = ProfileComponent;
  // tab4Root = InfoComponent;
  // tab5Root = SendComponent;
  public apply: applyJob = {
    job_id: '',
    user_id: ''

  };
  public searchVal: searchJob = {
    search: ''
  };
  public share: shareJob = {
    job_id: [],
    recipient_id: []
  };
  public entity = {
    photo_path: '',
  };
  public defaultImg: string;
  public defaultImg1: string;
  public defaultImg2: string;
  public defaultImg3: string;
  public defaultImg4: string;
  public bitc = {
    access_token: '',
    user_id:'',
    address:'12345678656'
  }
  bitcoin;
  ripple;
  ent = {
    key : '12345'
  }
  constructor(private service: JobService,
              private myService: MyJobService,
              private alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public nav: NavController,
              public user: UserService
  ) {
    this.balan = false;
    this.ripple = false;
    // this.pages = [
    //   { title: 'Home', component: SettingsComponent },
    //   { title: 'List', component: SupportComponent }
    // ];
    this.defaultImg = 'assets/icons/user.png';
    this.category = 'all';
    this.showSearchbar = false;
    this.imageURI = 'assets/icon/calendar-check.svg';
    this.imageURI2= 'assets/icon/money-bill.svg';
    this.imageURI3= 'assets/icon/compass.svg';
    this.imageURI4= 'assets/icon/arrows.svg';
    this.defaultImg1 = 'assets/icons/payment-method%20(1).png';
    this.defaultImg2 = 'assets/icons/payment-method%20(2).png';
    this.defaultImg3 = 'assets/icons/bitcoin-exchange-rate-symbol%20(2).png';
    this.defaultImg4 = 'assets/icons/pl2.png';

  }

  ngOnInit() {
    this.entity.photo_path = localStorage.user_picture;
    this.bitc.user_id = localStorage.user_id;
   // this.getbictoin();
    this.ethereumbalance();
   // this.bitc.address = localStorage.user_address;
    console.log(localStorage.user_picture, 'path', this.entity.photo_path);
    // localStorage.tabs = true;
    // console.log(localStorage.tabs)
    // this.getAll();
    // this.getMyJobs();
  }

  // openPage(page) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.nav1.setRoot(page.component);
  // }
  getbictoin(){
    this.user.retrievebitcoin().subscribe(success => {
      console.log(success)
    },
      err =>{
      console.log(err)
      })
  }
  apply1(){

      console.log('(((');
      this.user.ethereum(this.ent).subscribe(success =>{
          console.log(success);
          this.nav.setRoot(FriendComponent);
        },
        err =>{
          console.log(err)
        })



  }
  ethereumbalance(){
    this.user.ethereumbalance().subscribe( success => {
        console.log(success)
      },
      err =>{
        console.log(err)
      })
  }
  wallet(){
    this.nav.setRoot(JobListComponent)
  }
  createBitcoin(){
    this.balan = true;
    //this.coin.push();
    // this.user.createBitcoin(this.bitc).subscribe(success =>{
    //   console.log(success);
    //   this.bitcoin = success
    // },
    //   err =>{
    //   console.log(err)
    //   })
  }
  ripple1(){
    this.ripple = true;
  }

  doRefresh(refresher) {
    console.log('Begin async operation');
    this.user.getethereumaddresses(localStorage.user_id).subscribe(success=>{
        console.log(success)
      },
      err =>{
        console.log(err)
      })
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
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
  showMore() {
    this.nav.setRoot(ShowMoreComponent);
  }

  showSearchBar1() {
    this.nav.setRoot(Profile1Component);
    // localStorage.tabs = false;
    // console.log(localStorage.tabs)
  }


  getAll() {
    // this.service.get()
    //   .subscribe(success => {
    //     if (success) {
    //       this.allJobsList = success;
    //     }
    //   });
    // this.service.order()
    //   .subscribe(success => {
    //     if (success) {
    //       this.orderJobsList = success;
    //     }
    //   })
  }

  getMyJobs() {
    this.myService.get()
      .subscribe(success => {
        if (success) {
          this.myJobsList = success;
        }
      })
  }

  setMyJob() {
    this.myJobs = true;
    this.showSearchbar = false;
  }

  setAllJob() {
    this.myJobs = false;
  }

  showSearchBar() {
    this.showSearchbar = !this.showSearchbar;
    if (!this.showSearchbar && this.searchVal.search) {
      this.getAll()
    }
    this.searchVal.search = '';
  }

  /**
   * Emit data to @JobListComponent
   */
  onSearchChange(data: any) {
    this.searchVal.search = data.target.value;
    this.myService.search(this.searchVal)
      .subscribe(success => {
          this.allJobsList = success
        },
        err => {
          this.getAll();
          this.searchVal.search = '';
        }
      )
  }

  moreInfo(jobsId, sendId) {
    this.jobsId = jobsId;
    this.sendId = sendId;
  }

  deleteMyJobs(id) {
    let alert = this.alertCtrl.create({
      title: 'Підтвердіть дію',
      message: 'Ви дійсно бажаєте видалити заявку?',
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
            this.myService.remove(id)
              .subscribe(() => {
                this.getMyJobs();
                this.getAll();
              })
          }
        }
      ]
    });
    alert.present();
  }

  declineOrder(id) {
    let alert = this.alertCtrl.create({
      title: 'Підтвердіть дію',
      message: 'Ви дійсно бажаєте відхилити запропоновану пропозицію?',
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
            this.service.remove(id)
              .subscribe(() => {
                this.getAll();
              })
          }
        }
      ]
    });
    alert.present();
  }

  applyJob(id) {
    this.apply.job_id = id + '';
    this.apply.user_id = +localStorage.user_id;
    let alert = this.alertCtrl.create({
      title: 'Підтвердіть дію',
      message: 'Ви дійсно бажаєте подати заявку на данну пропозицію?',
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
            this.service.apply(this.apply)
              .subscribe(() => {
                this.getAll();
                this.getMyJobs();
              })
          }
        }
      ]
    });
    alert.present();
  }

  applyOrder(job_id, order_id){
    this.apply.job_id = job_id + '';
    this.apply.user_id = +localStorage.user_id;
    let alert = this.alertCtrl.create({
      title: 'Підтвердіть дію',
      message: 'Ви дійсно бажаєте подати заявку на данну пропозицію?',
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
            this.service.apply(this.apply)
              .subscribe(() => {
                this.getMyJobs();

              });
            this.service.applyOrder(order_id)
              .subscribe(() => {
                this.getAll();
                console.log("udalil")
              })
          }
        }
      ]
    });
    alert.present();
  }

  shareJob(id) {
    this.share.job_id.push(id);
    let recipientModal = this.modalCtrl.create(ShareJobComponent);
    recipientModal.onDidDismiss(data => {
      if(data){
        this.share.recipient_id = data;
        this.sendOrderJob();
      }
    });
    recipientModal.present();
  }

  sendOrderJob(){
    let alert = this.alertCtrl.create({
      title: 'Підтвердіть дію',
      message: 'Ви бажаєте відправити цим контактам заявку на данну пропозицію?',
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
            this.service.share(this.share)
              .subscribe(() => {
                this.share.job_id = [];
              });
          }
        }
      ]
    });
    alert.present();
  }

}
