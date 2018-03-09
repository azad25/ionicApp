import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private _auth: AngularFireAuth,
              private _toast: ToastController) {
  }

  ionViewDidLoad() {
    this._auth.authState.subscribe(data => {
      if(data && data.email && data.uid){
        this._toast.create({
          message: `Welcome to Ionic App, ${data.email}`,
          duration: 3000
        }).present();
      }else{
        this._toast.create({
          message: `Could not find user!, ${data.email}`,
          duration: 3000
        }).present();
      }
    });
  }

}
