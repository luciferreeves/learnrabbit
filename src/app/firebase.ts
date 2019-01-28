import * as firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyCDpK94n-sjvv6SFibzdqiLX-ku2MdBGjE',
    authDomain: 'learnrabbit-99f01.firebaseapp.com',
    databaseURL: 'https://learnrabbit-99f01.firebaseio.com',
    projectId: 'learnrabbit-99f01',
    storageBucket: 'learnrabbit-99f01.appspot.com',
    messagingSenderId: '771305273989'
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
