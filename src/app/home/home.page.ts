import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AlertController } from '@ionic/angular';
import 'firebase/auth';
import * as $ from 'jquery';
import '../firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController, private router: Router) { }

  async presenLogoutOptions() {
    const logoutOptions = await this.alertController.create({
      header: 'Learnrabbit v0.0.1',
      message: '© 2019, Learnrabbit Education. <br> <small>An app by Kumar Priyansh.</small>',
      buttons: [
        {
          text: 'Logout',
          handler: () => {
            this.Logout();
          }
        }, {
          text: 'Dismiss',
          role: 'cancel'
        }
      ]
    });

    await logoutOptions.present();
  }

  Logout() {
    firebase.auth().signOut().then(() => {
      this.router.navigateByUrl('/login');
    }).catch((error) => {
      console.log(error.message);
    });
  }
}
