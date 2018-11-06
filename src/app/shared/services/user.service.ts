import {Injectable} from "@angular/core";
import {RequestService} from "./request.service";
import {ToastController} from "ionic-angular";
import {Storage} from "@ionic/storage";
import {EntityService} from "../base/entity.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()

export class UserService extends EntityService {

  id: string;
    private user: any;
    public myUser = new BehaviorSubject(this.user);
    public myUser$ = this.myUser.asObservable();

  constructor(public request: RequestService,
              public toast: ToastController,
              private storage: Storage) {
    super(request, toast);
    this.service_name = 'user';
    this.id = localStorage.user_id;
  }

  setUser(data) {
    this.storage.set('user', data);
    this.myUser.next(data)
  }

  getUser() {
    return this.storage.get('user');
  }

  firstEnter() {
    return {
      setTrue: () => {
        this.storage.set('firstEnter', 'Unfinished');
      },
      setFalse: () => {
        this.storage.set('firstEnter', 'Finished');
      },
      get: () => {
        return this.storage.get('firstEnter').then((data) => {
          return data;
        });
      },
    }
  }

  info(){
    const url = this.url('create');
    return this.request.get(url)
      .do(() => {
          // const msg = this.msg('create');
          // this.notification('success', msg);
        },
        err => {
          // const msg = this.msg('err');
          // this.notification('error', msg)
        });
  }

  personInfo(){
    const url = this.url('index');
    return this.request.get(url)
      .do(() => {
          // const msg = this.msg('create');
          // this.notification('success', msg);
        },
        err => {
          // const msg = this.msg('err');
          // this.notification('error', msg)
        });
  }

  validateEmail(email) {
    let validator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validator.test(email);
  }

  validateField(field) {
    let validator =  /^[a-zA-Zа-яА-Я]+$/;
    return validator.test(field);
  }

  keypost(data: any){
    const url = this.url('key');
    return this.request.post(url+'?access_token=' + localStorage.token, data)
      .do(() => {
          // const msg = this.msg('pictupd');
          // this.notification('success', msg);
        },
        err => {
          // const msg = this.msg('pictnot');
          // this.notification('error', msg)
        });
  }

  create(data: any) {
    const url = this.url('create');
    return this.request.post(url, data)
      .do(() => {
          const msg = this.msg('create');
          this.notification('success', msg);
        },
        err => {
          const msg = this.msg('err');
          this.notification('error', msg)
        });
  }

  update(data: any) {
    const url = this.url('update');
    return this.request.put(url+localStorage.user_id , data)
      .do(() => {
          const msg = this.msg('info');
          this.notification('success', msg);
        },
        err => {
          const msg = this.msg('erro');
          this.notification('error', msg)
        });
  }

  credentialsCheck(data: any) {
    if (!data.email || !data.password || !data.name) {
      const msg = this.msg('empty');
      this.notification('error', msg);
      return false;
    }
    // if (data.phone.length != 9) {
    //   const msg = this.msg('number');
    //   this.notification('error', msg);
    //   return false;
    // }
    if (!this.validateEmail(data.email)) {
      const msg = this.msg('emailerr');
      this.notification('error', msg);
      return false;
    }
    if (data.password.length < 6 ) {
      const msg = this.msg('password');
      this.notification('error', msg);
      return false;
    }
    return true;
  }

  credentialsCheck1(data: any) {
    if (!data.email) {
      const msg = this.msg('er');
      this.notification('error', msg);
      return false;
    }
    if (!data.phone) {
      const msg = this.msg('er');
      this.notification('error', msg);
      return false;
    }
  }

  password(data: any){
    const url = this.url('password');
    return this.request.put(url, data)
      .do(() => {
          // const msg = this.msg('create');
          // this.notification('success', msg);
        },
        err => {
          const msg = this.msg('er');
          this.notification('error', msg)
        });
  }

  credentialsCheck2(data: any) {
    console.log(data.email);
    console.log(data);
    if (!data.email || !data.password ) {
      const msg = this.msg('empty');
      this.notification('error', msg);
      return false;
    }
    if (!data.email ) {
      const msg = this.msg('em');
      this.notification('error', msg);
      return false;
    }
    if ( !data.password ) {
      const msg = this.msg('pass');
      this.notification('error', msg);
      return false;
    }
    // if (data.phone.length != 9) {
    //   const msg = this.msg('number');
    //   this.notification('error', msg);
    //   return false;
    // }
    if (!this.validateEmail(data.email)) {
      const msg = this.msg('emailerr');
      this.notification('error', msg);
      return false;
    }
    if (data.password.length < 6 ) {
      const msg = this.msg('password');
      this.notification('error', msg);
      return false;
    }
    return true;
  }


  credentialsCheckField(data: any) {
    if (!data.email || !data.first_name || !data.last_name || !data.city) {
      const msg = this.msg('empty');
      console.log(data.email);
      console.log(data);
      this.notification('error', msg);
      return false;
    }
    if (!this.validateEmail(data.email)) {
      const msg = this.msg('emailerr');
      this.notification('error', msg);
      return false;
    }
    if (!this.validateField(data.first_name) || !this.validateField(data.last_name)) {
      const msg = this.msg('field');
      this.notification('error', msg);
      return false;
    }if (!this.validateField(data.city)) {
      const msg = this.msg('city');
      this.notification('error', msg);
      return false;
    }
    return true;
  }

  varefications(data:any){
    const url = this.url('varefications');
    return this.request.post(url, data)
      .do(() => {
          const msg = this.msg('info');
          this.notification('success', msg);
        },
        err => {
          // const msg = this.msg('err');
          // this.notification('error', msg)
        });
  }

  ethereum(data:any){
    const url = this.url('ethereum');
    return this.request.post(url, data)
      .do(() => {
          // const msg = this.msg('walletadd');
          // this.notification('success', msg);
        },
        err => {
          // const msg = this.msg('walletaddnot');
          // this.notification('error', msg)
        });
  }

  transaction(data:any){
    const url = this.url('transaction');
    return this.request.post(url, data)
      .do(() => {
          // const msg = this.msg('walletadd');
          // this.notification('success', msg);
        },
        err => {
          // const msg = this.msg('walletaddnot');
          // this.notification('error', msg)
        });
  }

  userdoc(data:any){
    const url = this.url('userdoc');
    return this.request.post(url + '?access_token=' + localStorage.token, data)
      .do(() => {
          // const msg = this.msg('info');
          // this.notification('success', msg);
        },
        err => {
          // const msg = this.msg('err');
          // this.notification('error', msg)
        });
  }

  passw(data:any){
    const url = this.url('password');
    return this.request.post(url+localStorage.user_id+'/password', data)
      .do(() => {
          const msg = this.msg('passwupd');
          this.notification('success', msg);
        },
        err => {
          const msg = this.msg('passwnot');
          this.notification('error', msg)
        });
  }

  getethereumaddresses(data: any){
    const url = this.url('getethereumaddresses');
    return this.request.get(url+localStorage.user_id)
      .do(() => {
          // const msg = this.msg('create');
          // this.notification('success', msg);
        },
        err => {
          // const msg = this.msg('err');
          // this.notification('error', msg)
        });

  }

  retrievebitcoin(){
    const url = this.url('retrievebitcoin');
    return this.request.get(url)
      .do(() => {
          // const msg = this.msg('create');
          // this.notification('success', msg);
        },
        err => {
          // const msg = this.msg('err');
          // this.notification('error', msg)
        });
  }

  ethereumbalance(){
    const url = this.url('ethereumbalance');
    return this.request.get(url+'?access_token='+localStorage.token)
      .do(() => {
          // const msg = this.msg('create');
          // this.notification('success', msg);
        },
        err => {
          // const msg = this.msg('err');
          // this.notification('error', msg)
        });
  }

  picture(){
    const url = this.url('picture');
    return this.request.get(url+ '?access_token=' + localStorage.token)
      .do(() => {
          // const msg = this.msg('create');
          // this.notification('success', msg);
        },
        err => {
          // const msg = this.msg('err');
          // this.notification('error', msg)
        });
  }

  users(){
    const url = this.url('users');
    return this.request.get(url)
      .do(() => {
          // const msg = this.msg('create');
          // this.notification('success', msg);
        },
        err => {
          // const msg = this.msg('err');
          // this.notification('error', msg)
        });
  }

  createBitcoin(data: any){
    const url = this.url('createbitcoin');
    return this.request.post(url, data)
      .do(() => {
          const msg = this.msg('bitc');
          this.notification('success', msg);
        },
        err => {
          // const msg = this.msg('err');
          // this.notification('error', msg)
        });
  }

  varefic(data: any){
    const url = this.url('varefic');
    return this.request.put(url+'?access_token='+localStorage.token, data)
      .do(() => {
          // const msg = this.msg('bitc');
          // this.notification('success', msg);
        },
        err => {
          // const msg = this.msg('err');
          // this.notification('error', msg)
        });
  }

  updatepicture(data: any){
    const url = this.url('picture');
    return this.request.put(url+'/'+localStorage.user_id+'?access_token='+localStorage.token, data)
      .do(() => {
          const msg = this.msg('pictupd');
          this.notification('success', msg);
        },
        err => {
          const msg = this.msg('pictnot');
          this.notification('error', msg)
        });
  }

  deletepicture(){
    const url = this.url('picture');
    return this.request.remove(url+'/'+localStorage.user_id+'?access_token='+localStorage.token)
      .do(() => {
          const msg = this.msg('deletepict');
          this.notification('success', msg);
        },
        err => {
          const msg = this.msg('deletepictnot');
          this.notification('error', msg)
        });
  }

}
