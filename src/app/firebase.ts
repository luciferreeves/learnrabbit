import * as firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: 'MYAPIKEY',
    authDomain: 'AUTHDOMAIN.firebaseapp.com',
    databaseURL: 'https://DATABASEURL.firebaseio.com',
    projectId: 'PROJECTID',
    storageBucket: 'STORGAE BUCKET',
    messagingSenderId: 'MESSAGING SENDER ID'
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
