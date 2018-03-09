import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { DashboardPage } from '../dashboard/dashboard';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
    @ViewChild(NavController) public navCtrl: NavController,
    public navParams: NavParams,
    private _auth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(user: User){
        this._auth.auth.signInWithEmailAndPassword(user.email,user.password).then((result) => {
          this.navCtrl.push(DashboardPage);
        }).catch(function(error) {
          this.navCtrl.push(LoginPage);
        });
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

}
