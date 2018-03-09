import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;

  constructor(
          private _auth: AngularFireAuth,
          public navCtrl: NavController, 
          public navParams: NavParams
        ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async registerUser(user: User){
    try{

      const result = await this._auth.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email,user.password);
      this.navCtrl.push(DashboardPage);

    }catch(e) {
      console.log(e);
      
    }
  }

}
