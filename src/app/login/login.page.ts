import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import * as $ from 'jquery';
import '../firebase';

// firebase.auth().signOut();

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public alertController: AlertController,
    public loadingController: LoadingController, private router: Router) { }

    ionViewWillEnter() {
      this.loginCheck();
    }

  ngOnInit() {
    // this.loginCheck();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Checking Information',
      duration: 800
    });
    return await loading.present();
  }

  async emptyAlert() {
    const empty = await this.alertController.create({
      // header: 'Error!',
      message: 'All fields are required. Please fill the details and try again',
      buttons: ['OK']
    });

    await empty.present();
  }

  async errorAlert(message) {
    const errorAl = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });
    await errorAl.present();
  }

  loginCheck() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.presentLoading();
      } else {
        this.presentLoading();
        // console.log(user);
        this.router.navigateByUrl('/home');
      }
  });
}

  doLogin() {
    const email = $('#loginEmail').val();
    const password = $('#loginPassword').val();
    if (email === '' || password === '') {
      this.emptyAlert();
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
        const errorMessage = error.message;
        this.errorAlert(errorMessage);
      });
      this.loginCheck();
    }
  }

}
