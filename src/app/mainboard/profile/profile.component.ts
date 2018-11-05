import {Component} from "@angular/core";
import {User} from "./user-info/user-info.component";
import {UserService} from "../../shared/services/user.service";
import {UserSkillsService} from "../../shared/services/user-skills.service";
import {Skill} from "./user-skills/skill.component";
import {AddwalletsComponent} from "../../../components/addwallets/addwallets";
import {NavController} from "ionic-angular";
import {Profile1Component} from "../../../components/profile1/profile1";
import {WithdrowtoComponent} from "../../../components/withdrowto/withdrowto";
import {JobListComponent} from "../job-list/job-list.component";
import {InfoComponent} from "../info/info.component";
import {SendComponent} from "../../../components/send/send";
import {FriendComponent} from "../friend/friend.component";

@Component({
    selector: 'page-profile',
    templateUrl: './profile.component.html',
})

export class ProfileComponent {
    public segment: string;
    public editMode: boolean;
    private user: User;
    private skills: Skill[];
  public entity = {
    photo_path: '',
  };
  public defaultImg: string;
  public defaultImg1: string;
  public defaultImg2: string;
  public defaultImg3: string;


  constructor(private userService: UserService,
                private userSkillService: UserSkillsService,
                private nav: NavController) {
        this.segment = 'info';
        this.editMode = true;
    this.defaultImg = 'assets/icons/user.png';
    this.defaultImg1 = 'assets/icons/payment-method%20(1).png';
    this.defaultImg2 = 'assets/icons/payment-method(3).png';
    this.defaultImg3 = 'assets/icons/bitcoin-exchange-rate-symbol%20(2).png';
    }
  ionViewDidLoad(){
    this.entity.photo_path = localStorage.user_picture;
    console.log(localStorage.user_picture, 'path', this.entity.photo_path);
  }
  showMore(){
    this.nav.setRoot(WithdrowtoComponent)
  }
  showSearchBar1(){
    this.nav.setRoot(Profile1Component)
  }
  showMore1(){
    this.nav.setRoot(AddwalletsComponent)
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
    checkUser(){
      this.userService.getUser().then(res => {
        if(!res.first_name){
          return false;
        }else if(res.first_name){
          return true;
        }
      })
    }

    public editEnable() {
        this.editMode = !this.editMode;
    }

    onUserChange(data: User) {
        this.user = data;
    }

    onSkillChange(data: Skill[]) {
        this.skills = data;
    }

    save() {
        if (this.segment === 'info') {
            this.userService.update(this.user)
                .subscribe(() => {
                        this.editEnable();
                    },
                    err => {
                        console.log(err);
                    })
        } else if (this.segment === 'skills') {
            this.userSkillService.update(this.skills)
                .subscribe(() => {

                        this.editEnable();
                    },
                    err => {
                        console.log(err);
                    })
        }

    }


}
