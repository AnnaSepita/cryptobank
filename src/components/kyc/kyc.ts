import { Component } from '@angular/core';
import {ActionSheetController, NavController} from "ionic-angular";
import {ShowMoreComponent} from "../show-more/show-more";
import {UserService} from "../../app/shared/services/user.service";
import {CameraService} from "../../app/shared/services/camera.service";
import {DomSanitizer} from "@angular/platform-browser";

export declare interface photo {
  files : any
  //   {
  //   photo1:any,
  //   photo2:any
  // }
}
@Component({
  selector: 'kyc',
  templateUrl: 'kyc.html'
})
export class KycComponent {
  public entity = {
    name:'',
    surname:'',
    country:'',
    sity:'',
    // gorod:'',
    address:'',
    date:'',
    verified:'true'
  };
  public user1 : photo = {
    files : ''
    //   {
    //   photo1:'',
    //   photo2:''
    // }
  };
  text: string;

  constructor(public nav:NavController,private cameraService: CameraService,  private actionSheetCtrl: ActionSheetController, private sanitizer: DomSanitizer, public user: UserService) {
    console.log('Hello KycComponent Component');
    this.text = 'Hello World';
  }
  ionViewDidLoad(){
    this.info();
  }
  info(){
    this.user.personInfo().subscribe(
      success =>{
        console.log(success)
    },
      err =>{
        console.log(err)
      }
    )
  }


  back(){
    this.nav.setRoot(ShowMoreComponent)
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
        },  {
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
      this.user1.files = this.sanitizer.bypassSecurityTrustResourceUrl(res);
      this.user1.files = res;
     // this.isChanged = true;
     //  this.user.updatepicture(this.user1.files.photo1).subscribe(
     //    success =>{
     //      console.log(success)
     //    },
     //    err =>{
     //      console.log(err)
     //    }
     //  )
      // }
    })
  }




  openPhotoActions2() {

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this.photoAddControl2(1);
          }
        }, {
          text: 'Gallery',
          handler: () => {
            this.photoAddControl2(2);
          }
        },  {
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

  photoAddControl2(sourceType: number) {
    this.cameraService.getMedia(sourceType).then(res => {
      // if (typeof res !== 'undefined') {
      // this.entity.photo_path = this.sanitizer.bypassSecurityTrustResourceUrl(res);
      this.user1.files = this.sanitizer.bypassSecurityTrustResourceUrl(res);
      this.user1.files = res;
     // this.isChanged = true;
     //  this.user.updatepicture(this.entity.photo_path).subscribe(
     //    success =>{
     //      console.log(success)
     //    },
     //    err =>{
     //      console.log(err)
     //    }
     //  )
      // }
    })
  }

  showSearchBar(){
    this.user.update(this.entity).subscribe(success =>{
        console.log(success)

        localStorage.user_verified = 'true';
        this.nav.setRoot(ShowMoreComponent);

      },
      err =>{
        console.log(err)
      })
    this.user.varefic(this.user1).subscribe(success =>{
      console.log(success)
    }, err => {console.log(err)})
    this.user.userdoc(this.user1).subscribe(success =>{
      console.log(success)
    }, err => {console.log(err)})
    // this.user.varefications(this.entity).subscribe(success =>{
    //     localStorage.user_verified = 'true';
    //     this.nav.setRoot(ShowMoreComponent);
    //     console.log(success)
    //   },
    //   err =>{
    //     console.log(err)
    //   })
  }

}
