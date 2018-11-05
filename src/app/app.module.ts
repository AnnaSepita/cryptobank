//ionic-angular module
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {IonicStorageModule} from "@ionic/storage";
//import {RequestService} from "./shared/services/request.service";
import {PaymentComponent} from "../components/payment/payment";
import {MainboardModule} from "./mainboard/mainboard.module";
import {AuthModule} from "./auth/auth.module"
import {DepositconfirmationComponent} from "../components/depositconfirmation/depositconfirmation";
//ionic-cordova-native
import {SplashScreen} from '@ionic-native/splash-screen';
import {ScreenOrientation} from "@ionic-native/screen-orientation";
import {StatusBar} from '@ionic-native/status-bar';
import {Network} from "@ionic-native/network";
import {DeposittoComponent} from "../components/depositto/depositto";
//components
import {MyApp} from './app.component';
import {SliderComponent} from "./slider/slider.component";
import {KycComponent} from "../components/kyc/kyc";
//services
import {AuthService} from "./shared/services/auth.service";
import {RequestService} from "./shared/services/request.service";
import {UserService} from "./shared/services/user.service";
import {ConnectionService} from "./shared/services/connection.service";
import {AuthenticationInterceptor} from "./shared/interceptors/authentication.interceptor";
import {EntityService} from "./shared/base/entity.service";
import {SendComponent} from "../components/send/send";
import {ShowMoreComponent} from "../components/show-more/show-more";
import {Profile1Component} from "../components/profile1/profile1";
import {AddwalletsComponent} from "../components/addwallets/addwallets";
import {WithdrowtoComponent} from "../components/withdrowto/withdrowto";
import {WithdrowconfirmationComponent} from "../components/withdrowconfirmation/withdrowconfirmation";
import {Payment2Component} from "../components/payment2/payment2";
import {SuccessComponent} from "../components/success/success";
import {TransfertoComponent} from "../components/transferto/transferto";
import {ExchangecomfirmationComponent} from "../components/exchangecomfirmation/exchangecomfirmation";
import {Payment3Component} from "../components/payment3/payment3";
import {SenttoComponent} from "../components/sentto/sentto";
import {SentcomfirmationComponent} from "../components/sentcomfirmation/sentcomfirmation";
import {Payment4Component} from "../components/payment4/payment4";
import {Success2Component} from "../components/success2/success2";
import {ForgotpasswordComponent} from "../components/forgotpassword/forgotpassword";
import {SmsComponent} from "../components/sms/sms";
import {ResetpasswordComponent} from "../components/resetpassword/resetpassword";
import {SettingsComponent} from "../components/settings/settings";
import {LanguageComponent} from "../components/language/language";
import {NotificationComponent} from "../components/notification/notification";
import {PersonalinfoComponent} from "../components/personalinfo/personalinfo";
import {ForgotpassComponent} from "../components/forgotpass/forgotpass";
import {EditComponent} from "../components/edit/edit";
import {Personalinfo1Component} from "../components/personalinfo1/personalinfo1";
import {WalletComponent} from "../components/wallet/wallet";

//import 'url-search-params-polyfill';
@NgModule({
  declarations: [
    MyApp,
    SliderComponent,
    SendComponent,
    ShowMoreComponent,
    Profile1Component,
    KycComponent,
    DeposittoComponent,
    DepositconfirmationComponent,
    PaymentComponent,
    AddwalletsComponent,
    WithdrowtoComponent,
    WithdrowconfirmationComponent,
    Payment2Component,
    SuccessComponent,
    TransfertoComponent,
    ExchangecomfirmationComponent,
    Payment3Component,
    SenttoComponent,
    SentcomfirmationComponent,
    Payment4Component,
    Success2Component,
    ForgotpasswordComponent,
    SmsComponent,
    ResetpasswordComponent,
    SettingsComponent,
    LanguageComponent,
    NotificationComponent,
    PersonalinfoComponent,
    ForgotpassComponent,
    EditComponent,
    Personalinfo1Component,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    MainboardModule,
    LoadingBarHttpClientModule,
    AuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SliderComponent,
    SendComponent,
    ShowMoreComponent,
    Profile1Component,
    KycComponent,
    DeposittoComponent,
    DepositconfirmationComponent,
    PaymentComponent,
    AddwalletsComponent,
    WithdrowtoComponent,
    WithdrowconfirmationComponent,
    Payment2Component,
    SuccessComponent,
    TransfertoComponent,
    ExchangecomfirmationComponent,
    Payment3Component,
    SenttoComponent,
    SentcomfirmationComponent,
    Payment4Component,
    Success2Component,
    ForgotpasswordComponent,
    SmsComponent,
    ResetpasswordComponent,
    SettingsComponent,
    LanguageComponent,
    NotificationComponent,
    PersonalinfoComponent,
    ForgotpassComponent,
    EditComponent,
    Personalinfo1Component,
    WalletComponent
  ],
  providers: [
    StatusBar,
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    RequestService,
    EntityService,
    UserService,
    ConnectionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    }
  ]
})
export class AppModule {
}
