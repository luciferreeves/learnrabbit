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

  async presentAlertLogoutConfirm() {
    const alertLogout = await this.alertController.create({
      header: 'Confirm Logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alertLogout.present();
  }

  showHome() {
    $('#home-content').show();
    $('#course-content').hide();
    $('#profile-content').hide();
    $('#homeBtn').removeClass('no-active');
    $('#hBtn').removeClass('no-active');
    $('#courseBtn').addClass('no-active');
    $('#cBtn').addClass('no-active');
    $('#profileBtn').addClass('no-active');
    $('#pBtn').addClass('no-active');
  }

  showCourses() {
    $('#home-content').hide();
    $('#course-content').show();
    $('#profile-content').hide();
    $('#homeBtn').addClass('no-active');
    $('#hBtn').addClass('no-active');
    $('#courseBtn').removeClass('no-active');
    $('#cBtn').removeClass('no-active');
    $('#profileBtn').addClass('no-active');
    $('#pBtn').addClass('no-active');
  }

  showProfile() {
    $('#home-content').hide();
    $('#course-content').hide();
    $('#profile-content').show();
    $('#homeBtn').addClass('no-active');
    $('#hBtn').addClass('no-active');
    $('#courseBtn').addClass('no-active');
    $('#cBtn').addClass('no-active');
    $('#profileBtn').removeClass('no-active');
    $('#pBtn').removeClass('no-active');
  }

  Logout() {
    firebase.auth().signOut().then(() => {
      this.router.navigateByUrl('/login');
    }).catch((error) => {
      console.log(error.message);
    });
  }
}
