import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Profile1Component} from "../../../../components/profile1/profile1";

@Component({
  selector: 'page-support',
  templateUrl: './support.component.html',
})

export class SupportComponent {
  message: string = '';

  constructor(public navCtrl: NavController) {

  }

  sendMessage() {
    console.log("send");
  }

  disableSendButton() {
    if (!this.message && !this.message.length && this.message.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  back(){
    this.navCtrl.setRoot(Profile1Component);
  }
  showSearchBar1(){
    this.navCtrl.setRoot(Profile1Component);
  }
  goBack() {
    this.navCtrl.pop();
  }

}
