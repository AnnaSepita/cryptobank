import {Component, OnInit} from '@angular/core';
// import {JobListComponent} from "./job-list/job-list.component";
// import {FriendComponent} from "./friend/friend.component";
// import {ProfileComponent} from "./profile/profile.component";
// import {InfoComponent} from "./info/info.component";
// import {FriendService} from "../shared/services/friend.service";
// import {CountService} from "../shared/services/count.service";
// import {SendComponent} from "../../components/send/send";
// import {NavController} from "ionic-angular";
// import {UserService} from "../shared/services/user.service";

@Component({
  selector: 'page-mainboard',
  templateUrl: 'mainboard.component.html'
})
export class MainboardComponent implements OnInit{
  // friendsArr: any;
  // friendsRequestsArr: any;
  // show;
  // bitcoin;
  // tab1Root = JobListComponent;
  // tab2Root = FriendComponent;
  // tab3Root = ProfileComponent;
  // tab4Root = InfoComponent;
  // tab5Root = SendComponent;

  // constructor(public service: FriendService,
  //             public count: CountService,
  //             public user: UserService,
  //             private nav: NavController) {
    // this.show = localStorage.tabs;
  // }
  // onPageWillEnter() {
  //   document.getElementById("tabs").style.display = "none";
  // }
  ngOnInit(){
    // this.getFriendsRequests();
    // this.getFriends();
    // this.pict();
    // this.getethereumaddresse();
   // this.users();
  //  this.retrievebitcoin();
  //   console.log(localStorage.user_picture)
    // document.getElementById("tabs").style.display = "none";
  }

  // pict(){
  //   this.user.picture().subscribe(success =>{
  //     console.log(success)
  //   },
  //     err =>{
  //     console.log(err)
  //     })
  // }
  // users(){
  //   this.user.users().subscribe(success =>{
  //       console.log(success)
  //     },
  //     err =>{
  //       console.log(err)
  //     })
  // }
  // ethereumbalance(){
  //   this.user.ethereumbalance().subscribe(success=>{
  //       console.log('ethereumbalance',success)
  //     },
  //     err =>{
  //       console.log(err)
  //     })
  // }
  // getethereumaddresse(){
  //   this.user.getethereumaddresses(localStorage.user_id).subscribe(success=>{
  //     console.log('getethereumaddresses',success)
  //   },
  //     err =>{
  //     console.log(err)
  //     })
  // }
  // retrievebitcoin(){
  //   this.user.retrievebitcoin().subscribe(success=>{
  //       console.log(success)
  //     },
  //     err =>{
  //       console.log(err)
  //     })
  // }
  // getFriends(){
  //   this.service.get()
  //     .subscribe(success => {
  //       this.friendsArr = success;
  //       this.count.getFriends(success)
  //     })
  // }
  // getFriendsRequests () {
  //   this.service.incoming()
  //     .subscribe(success => {
  //       this.friendsRequestsArr = success;
  //       this.count.getRequests(success)
  //     })
  // }


}
