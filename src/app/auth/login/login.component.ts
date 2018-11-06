import {Component} from '@angular/core';
// import {AuthService} from "../../shared/services/auth.service";
import {NavController} from 'ionic-angular';
import {RegistrationComponent} from "../registration/registration.component";
import {UserService} from "../../shared/services/user.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import {Headers,  RequestOptions } from '@angular/http';

import {MainboardComponent} from "../../mainboard/mainboard.component";
// import {ProfileComponent} from "../../mainboard/profile/profile.component";
//import {RegistrationComponent} from "../registration/registration.component";
import {ForgotpasswordComponent} from "../../../components/forgotpassword/forgotpassword";
// import {JobListComponent} from "../../mainboard/job-list/job-list.component";
//import {RequestOptions} from "@angular/http";

export declare interface loginCredentials {
    name: string,
    email: string,
    password: string,
    access_token: string,
    role: string
}

@Component({
    selector: 'page-login',
    templateUrl: './login.component.html',
})

export class LoginComponent {
    public isShowPass: boolean = true;
    public user: loginCredentials = {
        name: '',
        email: '',
        password: '',
        access_token: 'tgzNkRaYptaE84b0XJJLUtimVjwcjpeu',
        role: ''
    };
    headers;
    //tgzNkRaYptaE84b0XJJLUtimVjwcjpeu
    public defaultImg: string;
    public defaultImg1: string;
    public defaultImg2: string;

    constructor(private navCtrl: NavController,
                private userService: UserService,
                private http: HttpClient) {
        this.defaultImg = 'assets/logos/logo.png';
        this.defaultImg1 = 'assets/icons/ml.png';
        this.defaultImg2 = 'assets/icons/e.png';
    }

    create() {
        this.navCtrl.setRoot(RegistrationComponent);
    }

    forgot() {
        this.navCtrl.setRoot(ForgotpasswordComponent);
    }

    login() {
        // if (localStorage.token != null || localStorage.token != undefined){
        //   this.user.access_token = localStorage.token;
        // }
        // const myHeaders = new HttpHeaders().set("Authorization", "Basic " + btoa(this.user.email + ":" + this.user.password));
        // const data = { "access_token": this.user.access_token };
        //
        // this.http.post('http://167.99.208.229:9000/auth', data, { headers: myHeaders }).subscribe(success => {
        //     //console.log(myHeaders)
        //     console.log(success);
        //     this.navCtrl.setRoot(MainboardComponent);
        //   },
        //   err => {
        //     console.log(err);
        //   });
        // this.navCtrl.setRoot(MainboardComponent);
        const myHeaders = new HttpHeaders().set("Authorization", "Basic " + btoa(this.user.email + ":" + this.user.password));
        const data = {"access_token": this.user.access_token};
        console.log(btoa(this.user.email));
        console.log(btoa(this.user.email + ":" + this.user.password));
        this.http.post('http://167.99.208.229:9000/auth', data, {headers: myHeaders}).subscribe(success => {
                this.navCtrl.setRoot(MainboardComponent);
                localStorage.token = success['token'];
                localStorage.user_id = success['user']['id'];
                localStorage.user_email = success['user']['email'];
                localStorage.user_verified = success['user']['verified'];
                localStorage.user_docs = success['user']['docs'];
                this.userService.setUser(success['user']);
                this.userService.firstEnter().get().then(res => {
                    if (res === 'Unfinished') {
                        this.userService.firstEnter().setFalse();
                        this.userService.getUser().then(res => {
                            //       if(!res.last_name){
                            //         this.navCtrl.setRoot(ProfileComponent);
                            //       }else{
                            this.navCtrl.setRoot(MainboardComponent);

                            // }
                        });
                    } else if (res === 'Finished') {
                        this.userService.getUser().then(res => {
                            //     if(!res.last_name){
                            //       //       this.navCtrl.setRoot(ProfileComponent);
                            //       //     }else{
                            this.navCtrl.setRoot(MainboardComponent);
                            // }
                        });
                    }
                });
            },
            err => {
                console.log(err);
            });

        // if(this.userService.credentialsCheck2(this.user)) {
        console.log(this.user);
        // const myHeaders = new HttpHeaders().set("Authorization", "Basic " + btoa(this.user.email + ":" + this.user.password));
        // const data = { "access_token": this.user.access_token };
        // this.http.post('http://167.99.208.229:9000/auth', data, {headers: myHeaders}).subscribe(success => {
        //     //console.log(myHeaders)
        //     console.log(success);
        //     localStorage.token = success['token'];
        //     console.log(localStorage.token);
        //     // localStorage.token = success['user']['token'];
        //     localStorage.user_id = success['user']['id'];
        //     console.log(localStorage.user_id);
        //     localStorage.user_email = success['user']['email'];
        //     localStorage.user_name = success['user']['name'];
        //     localStorage.user_picture = success['user']['picture'];
        //     console.log(localStorage.user_email);
        //     console.log(localStorage.user_name);
        //     console.log(localStorage.user_picture);
        //     // this.userService.setUser(success['user']);
        //     // this.userService.firstEnter().get().then(res => {
        //       // if(res === 'Unfinished'){
        //       //   this.userService.firstEnter().setFalse();
        //       //   this.userService.getUser().then(res => {
        //           //       if(!res.last_name){
        //           //         this.navCtrl.setRoot(ProfileComponent);
        //           //       }else{
        //           this.navCtrl.setRoot(MainboardComponent);
        //
        //           // }
        //       //   });
        //       // }else if(res === 'Finished') {
        //       //   this.userService.getUser().then(res => {
        //       //     if(!res.last_name){
        //       //       //       this.navCtrl.setRoot(ProfileComponent);
        //       //       //     }else{
        //       //       this.navCtrl.setRoot(MainboardComponent);
        //       //     }
        //        // });
        //      // }
        //     // });
        //    // this.navCtrl.setRoot(MainboardComponent);
        //   },
        //   err => {
        //     console.log(err);
        //   });
        //  }

        // if(this.userService.credentialsCheck2(this.user)){
        //   this.auth.login(this.user)
        //     .subscribe(success => {
        //         console.log(success);
        //         localStorage.token = success['token'];
        //         // localStorage.token = success['user']['token'];
        //         localStorage.user_id = success['user']['id'];
        //         this.userService.setUser(success['user']);
        //         this.userService.firstEnter().get().then(res => {
        //           if(res === 'Unfinished'){
        //             this.userService.firstEnter().setFalse();
        //             this.userService.getUser().then(res => {
        //               //       if(!res.last_name){
        //               //         this.navCtrl.setRoot(ProfileComponent);
        //               //       }else{
        //              this.navCtrl.setRoot(MainboardComponent);
        //
        //               // }
        //             });
        //           }else if(res === 'Finished') {
        //             this.userService.getUser().then(res => {
        //               if(!res.last_name){
        //                 //       this.navCtrl.setRoot(ProfileComponent);
        //                 //     }else{
        //                 this.navCtrl.setRoot(MainboardComponent);
        //               }
        //             });
        //           }
        //         });
        //       },
        //       error => {
        //         console.log(error);
        //         // console.log(this.user)
        //       });
        // }
    }

    goToRegistration() {
        this.navCtrl.push(RegistrationComponent);
    }

    showPass() {
        this.isShowPass = !this.isShowPass;
    }

}
