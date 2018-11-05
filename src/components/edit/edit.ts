import { Component, Input } from '@angular/core';
import {NavController} from "ionic-angular";
import {PersonalinfoComponent} from "../personalinfo/personalinfo";
import {UserService} from "../../app/shared/services/user.service";
//import {loginCredentials} from "../../app/auth/login/login.component";
import {ActionSheetController} from "ionic-angular";
import {DomSanitizer} from "@angular/platform-browser";
import {CameraService} from "../../app/shared/services/camera.service";
import {Personalinfo1Component} from "../personalinfo1/personalinfo1";

export declare interface editCredentials {
  name: string,
  surname: string,
  country: string,
  sity: string,
  photo_path: any,
   email: string,
   phone: string,
  date: string,
  verified: string
  // password: string,
  // access_token: string,
  // picture: string,
  // role: string
}
@Component({
  selector: 'edit',
  templateUrl: 'edit.html'
})
export class EditComponent {
  @Input() editMode: boolean;
  public isChanged: boolean;
  text: string;
  // public user1: editCredentials = {
  //   name: '',
  //   surname: '',
  //   country: '',
  //   city: ''
  // }
  public entity: editCredentials = {
    photo_path: '',
    name: '',
    surname:'',
    email:'',
    country:'',
    sity:'',
    phone:'',
    date:'',
    verified: 'true'
  };
  public userph = {
    file:''
  }
  public defaultImg: string;
  constructor(private nav:NavController,private cameraService: CameraService,  private actionSheetCtrl: ActionSheetController, private sanitizer: DomSanitizer, private user:UserService) {
    console.log('Hello EditComponent Component');
    this.text = 'Hello World';
    this.defaultImg = 'assets/icons/avat.png';
  }

  ionViewDidLoad(){
    this.info();
    this.entity.photo_path = localStorage.user_picture;
    this.entity.name = localStorage.user_name;
    this.entity.surname = localStorage.user_surname;
    this.entity.email = localStorage.user_email;
    this.entity.country = localStorage.user_country;
    this.entity.sity = localStorage.user_city;
    this.entity.phone = localStorage.user_phone;
    this.entity.date = localStorage.user_birth;
    this.entity.verified = localStorage.user_verified;

  }
  info(){
    this.user.personInfo().subscribe(
      success => {
        console.log(success);
        localStorage.user_id = success['id'];
        console.log(localStorage.user_id);
        localStorage.user_email = success['email'];
        localStorage.user_name = success['name'];
        localStorage.user_picture = success['picture'];
        localStorage.user_surname = success['surname'];
        localStorage.user_country = success['country'];
        localStorage.user_city = success['city'];
        localStorage.user_birth = success['birth'];
         localStorage.user_verified = success['verified'];
        console.log(localStorage.user_email);
        console.log(localStorage.user_name);
        console.log(localStorage.user_picture);
        // localStorage.user_id = success['id'];
        // console.log(localStorage.user_id);
        // localStorage.user_email = success['email'];
        // localStorage.user_name = success['name'];
        // localStorage.user_picture = success['picture'];
        // console.log(localStorage.user_email);
        // console.log(localStorage.user_name);
        // console.log(localStorage.user_picture);
      }
      ,
      error => {
        console.log(error)
      });

  }
  back(){
    this.nav.setRoot(Personalinfo1Component)
  }
  showSearchBar1() {
    localStorage.user_picture = this.entity.photo_path;
    localStorage.user_name = this.entity.name;
    localStorage.user_surname =this.entity.surname;
    localStorage.user_email =this.entity.email;
    localStorage.user_country =this.entity.country;
    localStorage.user_city =this.entity.sity;
    localStorage.user_phone =this.entity.phone;
    localStorage.user_birth =this.entity.date;
     localStorage.user_verified= this.entity.verified;
    this.entity.photo_path = this.userph.file;
    // this.nav.setRoot(PersonalinfoComponent);
    console.log(this.entity)
    this.user.update(this.entity).subscribe(success => {
        console.log(success)
        this.nav.setRoot(Personalinfo1Component)
      },
      error => {
        console.log(error)
      });
    this.user.updatepicture(this.userph).subscribe(success => {
        console.log(success)
        //this.nav.setRoot(Personalinfo1Component)
      },
      error => {
        console.log(error)
      });
  }


    openPhotoActions() {

      let actionSheet = this.actionSheetCtrl.create({
        title: 'Choose',
        buttons: [
          {
            text: 'Camera',
            handler: () => {
              this.photoAddControl(1);
            }
          }, {
            text: 'Gallery',
            handler: () => {
              this.photoAddControl(2);
            }
          }, {
            text: 'Delete',
            handler: () => {
              this.user.deletepicture().subscribe(success =>{
                console.log(success)
              },
                err =>{
                console.log(err)
                });
            }
          }, {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    }

    photoAddControl(sourceType: number) {


      this.cameraService.getMedia(sourceType).then(res => {
       // if (typeof res !== 'undefined') {
          // this.entity.photo_path = this.sanitizer.bypassSecurityTrustResourceUrl(res);
          this.entity.photo_path = this.sanitizer.bypassSecurityTrustResourceUrl(res);
          this.entity.photo_path = res;
        this.userph.file = this.entity.photo_path;
          console.log(this.userph.file);
          console.log(this.entity.photo_path);
          console.log(res)
          this.isChanged = true;
          this.user.updatepicture(this.userph).subscribe(
            success =>{
              console.log(success)
            },
            err =>{
              console.log(err)
            }
          )
       // }
      })
    }


}
