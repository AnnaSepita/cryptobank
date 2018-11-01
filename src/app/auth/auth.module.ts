//ionic-angular module
import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from "@angular/platform-browser";
import {IonicStorageModule} from "@ionic/storage";
//components
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
//services
import {AuthService} from "../shared/services/auth.service";
import {UserService} from "../shared/services/user.service";
import {AuthComponent} from "./auth.component";

@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        RegistrationComponent,
    ],
    imports: [
        IonicModule.forRoot(AuthModule),
        IonicStorageModule.forRoot(),
        BrowserModule,
    ],
    bootstrap: [
        IonicApp
    ],
    entryComponents: [
        AuthComponent,
        LoginComponent,
        RegistrationComponent,
    ],
    providers: [
        AuthService,
        UserService,
    ]
})
export class AuthModule {
}
