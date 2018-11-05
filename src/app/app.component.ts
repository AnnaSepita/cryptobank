import {Component, OnInit, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {ScreenOrientation} from "@ionic-native/screen-orientation";
//import {ShowMoreComponent} from "../components/show-more/show-more";
//import {SliderComponent} from "./slider/slider.component";
import {App} from "ionic-angular/components/app/app";
import {MainboardComponent} from "./mainboard/mainboard.component";
import {ConnectionService} from "./shared/services/connection.service";
import {UserService} from "./shared/services/user.service";
//import {ProfileComponent} from "./mainboard/profile/profile.component";
import {SplashScreen} from "@ionic-native/splash-screen";
import {AuthComponent} from "./auth/auth.component";
import { Storage } from '@ionic/storage';
@Component({
    selector: 'root',
    templateUrl: 'app.html'
})
export class MyApp implements OnInit {
    @ViewChild(Nav) navCtrl: Nav;
    rootPage: any;

    constructor(public platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                private screenOrientation: ScreenOrientation,
                private storage: Storage,
                private connection: ConnectionService,
                private user: UserService,
                 app: App) {

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            if (platform.is('cordova')) {
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
            }
          this.platform.registerBackButtonAction(() => {
            app.navPop();
          });
            statusBar.styleDefault();
            this.user.firstEnter().get().then((res) => {
                if (!res) {
                   // this.navCtrl.setRoot(SliderComponent);
                  this.navCtrl.setRoot(AuthComponent);
                 // this.navCtrl.setRoot(MainboardComponent);
                 // this.navCtrl.setRoot(ShowMoreComponent);
                }
                if (res === 'Unfinished') {
                    this.navCtrl.setRoot(AuthComponent);
                 // this.navCtrl.setRoot(MainboardComponent);
                }
                if (res === 'Finished' && localStorage.token == null || localStorage.token == undefined) {
                    this.navCtrl.setRoot(AuthComponent)
                } else if (res === 'Finished' && localStorage.token != null || localStorage.token != undefined) {
                    this.user.getUser().then((res) => {
                      this.navCtrl.setRoot(MainboardComponent);
                        // if (!res.last_name) {
                        //
                        //   // this.navCtrl.setRoot(ProfileComponent)
                        // } else {
                        //    // this.navCtrl.setRoot(MainboardComponent);
                        // }
                    })
                }
            });
            splashScreen.hide();
        });

        // platform.ready().then(() => {
        //     this.push.hasPermission()
        //         .then((res: any) => {
        //             if (res.isEnabled) {
        //                 console.log('We have permission to send push notifications');
        //             } else {
        //                 console.log('We do not have permission to send push notifications');
        //             }
        //
        //         });
        //     this.push.createChannel({
        //         id: "testchannel1",
        //         description: "My first test channel",
        //         // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
        //         importance: 3
        //     }).then(() => console.log('Channel created'));
        //     const options: PushOptions = {
        //         android: {},
        //         ios: {
        //             alert: 'true',
        //             badge: true,
        //             sound: 'false'
        //         },
        //         windows: {},
        //         browser: {
        //             pushServiceURL: 'http://push.api.phonegap.com/v1/push'
        //         }
        //     };
        //     const pushObject: PushObject = this.push.init(options);
        //
        //     pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
        //
        //     pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
        //
        //     pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
        //
        //     statusBar.styleDefault();
        //     splashScreen.hide();
        //     //
        // });
        // platform.registerBackButtonAction(() => {
        //     console.log("backPressed 1");
        // }, 1);

    }

    ngOnInit() {
        this.connection.startMonitoringConnection();
    }

}
